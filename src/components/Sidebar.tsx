import type React from "react";
import { useAppContext } from "../context/AppContext";

const Sidebar: React.FC = () => {
  const { selectedBlock, updateSelectedBlock } = useAppContext();
  console.log(selectedBlock);

  const hasText =
    selectedBlock?.type === "heading" ||
    selectedBlock?.type === "paragraph" ||
    selectedBlock?.type === "button";

  return (
    <div className="py-3">
      <h2 className="font-semibold text-xl px-4">Editor</h2>
      <div className="h-0.5 w-full bg-[#222] my-3"></div>
      {!selectedBlock ? (
        <div className="font-semibold text-[#666] flex items-center justify-center text-center h-100">
          Click on an element/block to select it.
        </div>
      ) : (
        <section className="px-4">
          <div className="my-5 space-y-5">
            {/* ==================================
                Text
                ================================== */}
            {hasText && (
              <div className="space-y-1">
                <p className="font-semibold">Text</p>
                <textarea
                  value={selectedBlock.content.text}
                  onChange={(e) =>
                    updateSelectedBlock({
                      content: {
                        text: e.target.value,
                      },
                    })
                  }
                  className="w-full h-40 border-2 border-[#333] rounded-sm py-1 px-2 outline-none resize-none"
                />
              </div>
            )}
            {/* ==================================
                Font Color
                ================================== */}
            {hasText && (
              <div className="space-y-1">
                <p className="font-semibold">Font Color</p>
                <input
                  value={selectedBlock.styles.color ?? ""}
                  onChange={(e) =>
                    updateSelectedBlock({ styles: { color: e.target.value } })
                  }
                  type="color"
                />
              </div>
            )}
            {/* ==================================
                Background Color
                ================================== */}
            <div className="space-y-1">
              <p className="font-semibold">Background Color</p>
              <input
                value={selectedBlock.styles.backgroundColor ?? ""}
                onChange={(e) =>
                  updateSelectedBlock({
                    styles: { backgroundColor: e.target.value },
                  })
                }
                type="color"
              />
            </div>
            {/* ==================================
                Font Size
                ================================== */}
            {hasText && (
              <div className="space-y-1">
                <p className="font-semibold">Font Size</p>
                <input
                  value={selectedBlock.styles.fontSize ?? ""}
                  placeholder="e.g. 24px"
                  onChange={(e) =>
                    updateSelectedBlock({
                      styles: {
                        fontSize: e.target.value,
                      },
                    })
                  }
                  className="w-full border-2 border-[#333] rounded-sm py-1 px-2 outline-none"
                  type="text"
                />
              </div>
            )}
            {/* ==================================
                Text Align
                ================================== */}
            {hasText && (
              <div className="space-y-1">
                <p className="font-semibold">Text Align</p>
                <div className="bg-black flex rounded-md py-1 px-1">
                  <button
                    onClick={() =>
                      updateSelectedBlock({ styles: { textAlign: "left" } })
                    }
                    className={`grow py-1 text-sm rounded-md ${selectedBlock.styles.textAlign === "left" && "bg-[#222]"}`}>
                    Left
                  </button>
                  <button
                    onClick={() =>
                      updateSelectedBlock({ styles: { textAlign: "center" } })
                    }
                    className={`grow py-1 text-sm rounded-md ${selectedBlock.styles.textAlign === "center" && "bg-[#222]"}`}>
                    Center
                  </button>
                  <button
                    onClick={() =>
                      updateSelectedBlock({ styles: { textAlign: "right" } })
                    }
                    className={`grow py-1 text-sm rounded-md ${selectedBlock.styles.textAlign === "right" && "bg-[#222]"}`}>
                    Right
                  </button>
                </div>
              </div>
            )}
            {/* ==================================
                Padding
                ================================== */}
            <div className="space-y-1">
              <p className="font-semibold">Padding</p>
              <input
                value={selectedBlock.styles.padding ?? ""}
                placeholder="e.g. 4px"
                onChange={(e) =>
                  updateSelectedBlock({
                    styles: {
                      padding: e.target.value,
                    },
                  })
                }
                className="w-full border-2 border-[#333] rounded-sm py-1 px-2 outline-none"
                type="text"
              />
            </div>
            {/* ==================================
                Margin
                ================================== */}
            <div className="space-y-1">
              <p className="font-semibold">Margin</p>
              <input
                value={selectedBlock.styles.margin ?? ""}
                placeholder="e.g. 4px"
                onChange={(e) =>
                  updateSelectedBlock({
                    styles: {
                      margin: e.target.value,
                    },
                  })
                }
                className="w-full border-2 border-[#333] rounded-sm py-1 px-2 outline-none"
                type="text"
              />
            </div>
            {/* ==================================
                Width
                ================================== */}
              <div className="space-y-1">
                <p className="font-semibold">Width</p>
                <input
                  value={selectedBlock.styles.width ?? ""}
                  placeholder="e.g. 24px"
                  onChange={(e) =>
                    updateSelectedBlock({
                      styles: {
                        width: e.target.value,
                      },
                    })
                  }
                  className="w-full border-2 border-[#333] rounded-sm py-1 px-2 outline-none"
                  type="text"
                />
              </div>
            {/* ==================================
                Border Radius
                ================================== */}
              <div className="space-y-1">
                <p className="font-semibold">Border Radius</p>
                <input
                  value={selectedBlock.styles.borderRadius ?? ""}
                  placeholder="e.g. 6px"
                  onChange={(e) =>
                    updateSelectedBlock({
                      styles: {
                        borderRadius: e.target.value,
                      },
                    })
                  }
                  className="w-full border-2 border-[#333] rounded-sm py-1 px-2 outline-none"
                  type="text"
                />
              </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Sidebar;
