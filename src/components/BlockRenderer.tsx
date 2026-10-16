import type React from "react";
import type { BaseBlock } from "../types/builder";

interface BlockRendererProps {
  block: BaseBlock;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  const { styles } = block;

  switch (block.type) {
    case "heading": {
      return (
        <h1
          style={{
            color: styles.color,
            backgroundColor: styles.backgroundColor,
            fontSize: styles.fontSize,
            textAlign: styles.textAlign,
            padding: styles.padding,
            margin: styles.margin,
            width: styles.margin,
            borderRadius: styles.borderRadius,
          }}>
          {block.content}
        </h1>
      );
    }
    case "paragraph": {
      return (
        <p
          style={{
            color: styles.color,
            backgroundColor: styles.backgroundColor,
            fontSize: styles.fontSize,
            textAlign: styles.textAlign,
            padding: styles.padding,
            margin: styles.margin,
            width: styles.margin,
            borderRadius: styles.borderRadius,
          }}>
          {block.content}
        </p>
      );
    }
  }

  return (
    <div>
      block will be rendered here
      <p>{block.content}</p>
    </div>
  );
};

export default BlockRenderer;
