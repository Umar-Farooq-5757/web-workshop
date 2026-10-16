export interface BaseStyles {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  textAlign?: "left" | "center" | "right";
  padding?: string;
  margin?: string;
  width?: string;
  borderRadius?: string;
}

export interface HeadingBlock {
  id: string;
  type: "heading";
  content: {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };
  styles: BaseStyles;
}

export interface ParagraphBlock {
  id: string;
  type: "paragraph";
  content: {
    text: string;
  };
  styles: BaseStyles;
}

export interface ImageBlock {
  id: string;
  type: "image";
  content: {
    src: string;
    alt: string;
  };
  styles: BaseStyles;
}

export interface ButtonBlock {
  id: string;
  type: "button";
  content: {
    text: string;
    url: string;
  };
  styles: BaseStyles;
}

export type BaseBlock =
  | HeadingBlock
  | ParagraphBlock
  | ImageBlock
  | ButtonBlock;

export interface Page {
  id: string;
  title: string;
  blocks: BaseBlock[];
}