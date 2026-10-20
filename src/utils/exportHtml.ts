import type { BaseBlock, BaseStyles, Page } from "../types/builder";

export const escapeHtml = (value: string): string => {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
};

export const escapeAttribute = (value: string): string => escapeHtml(value);

export const stylesToString = (styles: BaseStyles): string => {
  return Object.entries(styles)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([property, value]) => {
      const cssProperty = property.replace(
        /[A-Z]/g,
        (letter) => `-${letter.toLowerCase()}`,
      );
      const cssValue =
        property === "borderRadius" && typeof value === "number"
          ? `${value}px`
          : value;

      return `${cssProperty}:${cssValue}`;
    })
    .join(";");
};

// console.log(stylesToString({'backgroundColor':'#333','color':'red'}))

const renderBlock = (block: BaseBlock): string => {
  const style = stylesToString(block.styles);

  switch (block.type) {
    case "heading": {
      const level = block.content.level;
      const text = escapeHtml(block.content.text);

      return `<h${level} style="${escapeAttribute(style)}">${text}</h${level}>`;
    }

    case "paragraph": {
      const text = escapeHtml(block.content.text);

      return `<p style="${escapeAttribute(style)}">${text}</p>`;
    }

    case "image": {
      const src = escapeAttribute(block.content.src);
      const alt = escapeAttribute(block.content.alt ?? "");

      return `<img src="${src}" alt="${alt}" style="${escapeAttribute(
        `${style};display:block;max-width:100%;height:auto;`,
      )}" />`;
    }

    case "button": {
      const text = escapeHtml(block.content.text);
      const url = block.content.url?.trim() || "#";
      const safeUrl = /^https?:\/\//i.test(url) ? escapeAttribute(url) : "#";

      return `<a href="${safeUrl}" style="${escapeAttribute(
        `${style};display:inline-block;padding:10px 20px;background-color:#4f46e5;color:#ffffff;border-radius:8px;text-decoration:none;`,
      )}">${text}</a>`;
    }

    default:
      return "";
  }
};

export const generatePageHtml = (page: Page): string => {
  const title = escapeHtml(page.title);
  const body = page.blocks.map(renderBlock).join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <style>
      body {
        margin: 0;
        padding: 32px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
          sans-serif;
        color: #111;
        background-color: #ffffff;
      }
    </style>
  </head>
  <body>
${body}
  </body>
</html>`;
};

export const downloadPageHtml = (page: Page) => {
  const html = generatePageHtml(page);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${page.title || "website"}.html`;
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
};
