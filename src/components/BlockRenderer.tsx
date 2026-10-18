import type React from "react";
import type { BaseBlock } from "../types/builder";
import { useAppContext } from "../context/AppContext";

interface BlockRendererProps {
  block: BaseBlock;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  const { styles } = block;
  const { activateBlock } = useAppContext();

  const commonStyles: React.CSSProperties = {
    color: styles.color,
    backgroundColor: styles.backgroundColor,
    fontSize: styles.fontSize,
    textAlign: styles.textAlign,
    padding: styles.padding,
    margin: styles.margin,
    width: styles.width,
    borderRadius: styles.borderRadius,
  };

  switch (block.type) {
    /**
     * HEADING
     */
    case "heading": {
      const level = block.content.level || 1;
      const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      const headingDefaults: Record<
        1 | 2 | 3 | 4 | 5 | 6,
        React.CSSProperties
      > = {
        1: { fontSize: "2.25rem", fontWeight: 700 },
        2: { fontSize: "1.875rem", fontWeight: 700 },
        3: { fontSize: "1.5rem", fontWeight: 600 },
        4: { fontSize: "1.25rem", fontWeight: 600 },
        5: { fontSize: "1.125rem", fontWeight: 600 },
        6: { fontSize: "1rem", fontWeight: 600 },
      };

      return (
        <Tag
          onClick={() => activateBlock(block.id)}
          className="element-block"
          style={{
            ...commonStyles,
            ...headingDefaults[level],
            ...(styles.fontSize ? { fontSize: styles.fontSize } : {}),
          }}>
          {block.content.text}
        </Tag>
      );
    }
    /**
     * PARAGRAPH
     */
    case "paragraph": {
      return (
        <p
          onClick={() => activateBlock(block.id)}
          className="element-block"
          style={{
            fontSize: "1rem",
            lineHeight: 1.6,
            ...commonStyles,
          }}>
          {block.content.text}
        </p>
      );
    }
    /**
     * IMAGE
     */
    case "image": {
      return (
        <img
          onClick={() => activateBlock(block.id)}
          className="element-block"
          src={block.content.src}
          alt={block.content.alt}
          style={{
            display: "block",
            maxWidth: "100%",
            height: "auto",
            ...commonStyles,
          }}
        />
      );
    }
    /**
     * BUTTON
     */
    case "button": {
      return (
        <a
          onClick={() => activateBlock(block.id)}
          className="element-block"
          href={block.content.url}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            borderRadius: "8px",
            textDecoration: "none",
            cursor: "pointer",
            ...commonStyles,
          }}>
          {block.content.text}
        </a>
      );
    }
    default: {
      return null;
    }
  }
};

export default BlockRenderer;
