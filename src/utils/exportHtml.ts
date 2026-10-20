import type { BaseBlock, BaseStyles } from "../types/builder";

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

      return `${cssProperty}:${value}`;
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
