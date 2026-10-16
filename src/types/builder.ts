export interface BaseBlock {
  id: string;
  type: "heading" | "paragraph" | "image" | "button" | "container";
  styles: {
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    textAlign?: "left" | "center" | "right";
    padding?: string;
    margin?: string;
    width?: string;
    borderRadius?: string;
  };
}

export interface Page {
  id: string;
  title: string;
  blocks: BaseBlock[];
}
