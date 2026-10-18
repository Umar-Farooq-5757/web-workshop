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
    <div className="py-3 px-4">
      <h2 className="font-semibold text-xl">Editor</h2>
      <div className="h-0.5 w-full bg-[#ddd] my-3"></div>
      {!selectedBlock ? (
        <div className="font-semibold text-[#aaa] flex items-center justify-center text-center h-100">
          Click on an element/block to select it.
        </div>
      ) : (
        <>
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
                  className="w-full h-40 border-2 border-[#ddd] rounded-sm py-1 px-2 outline-none resize-none"
                />
              </div>
            )}
            {/* ==================================
                Font Color
                ================================== */}
            <div className="space-y-1">
              <p className="font-semibold">Font Color</p>
              <input
                value={selectedBlock.styles.color}
                onChange={(e) =>
                  updateSelectedBlock({ styles: { color: e.target.value } })
                }
                type="color"
              />
            </div>
            {/* ==================================
                Background Color
                ================================== */}
            <div className="space-y-1">
              <p className="font-semibold">Background Color</p>
              <input
                value={selectedBlock.styles.backgroundColor}
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
              className="w-full border-2 border-[#ddd] rounded-sm py-1 px-2 outline-none"
              type="text"
            />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
