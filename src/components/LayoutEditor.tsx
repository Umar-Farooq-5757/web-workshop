import type React from "react";
import { useState } from "react";
import { BsTextParagraph } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { FaHeading } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiRadioButtonLine } from "react-icons/ri";
import { useAppContext } from "../context/AppContext";
import type { BaseBlock } from "../types/builder";

const LayoutEditor: React.FC = () => {
  const { setPage } = useAppContext();
  const [selected, setSelected] = useState("heading");
  // Heading Inputs
  const [headingText, setHeadingText] = useState("");
  const [headingLevel, setHeadingLevel] = useState(2);
  // Paragraph Inputs
  const [paragraphText, setParagraphText] = useState("");
  // Image inputs
  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  // Button Inputs
  const [buttonText, setButtonText] = useState("");
  const [buttonUrl, setButtonUrl] = useState("");

  const createBlock = (): BaseBlock | null => {
    if (selected === "heading") {
      if (!headingText.trim()) return null;
      return {
        id: crypto.randomUUID(),
        type: "heading",
        content: {
          text: headingText,
          level: headingLevel as 1 | 2 | 3 | 4 | 5 | 6,
        },
        styles: {},
      };
    }

    if (selected === "paragraph") {
      if (!paragraphText.trim()) return null;
      return {
        id: crypto.randomUUID(),
        type: "paragraph",
        content: { text: paragraphText },
        styles: {},
      };
    }

    if (selected === "image") {
      if (!imageSrc.trim()) return null;
      return {
        id: crypto.randomUUID(),
        type: "image",
        content: { src: imageSrc, alt: imageAlt },
        styles: {},
      };
    }

    if (selected === "button") {
      if (!buttonText.trim()) return null;
      return {
        id: crypto.randomUUID(),
        type: "button",
        content: { text: buttonText, url: buttonUrl },
        styles: {},
      };
    }
    return null;
  };

  const addElement = () => {
    const newBlock = createBlock();

    if (!newBlock) return;

    setPage((currentPage) => ({
      ...currentPage,
      blocks: [...currentPage.blocks, newBlock],
    }));

    if (selected === "heading") setHeadingText("");
    if (selected === "paragraph") setParagraphText("");
    if (selected === "image") {
      setImageSrc("");
      setImageAlt("");
    }
    if (selected === "button") {
      setButtonText("");
      setButtonUrl("");
    }
  };

  return (
    <div className="py-5 px-2">
      <section className="space-y-2">
        <div
          onClick={() => setSelected("heading")}
          className="flex items-center justify-start gap-4 bg-[#222] px-4 py-1.5 rounded-r-md border-l-3 border-[#111] hover:border-white cursor-pointer hover:bg-[#333]">
          <FaHeading />
          <p className="opacity-70">Add Heading</p>
        </div>
        <div
          onClick={() => setSelected("paragraph")}
          className="flex items-center justify-start gap-4 bg-[#222] px-4 py-1.5 rounded-r-md border-l-3 border-[#111] hover:border-white cursor-pointer hover:bg-[#333]">
          <BsTextParagraph />
          <p className="opacity-70">Add Paragraph</p>
        </div>
        <div
          onClick={() => setSelected("image")}
          className="flex items-center justify-start gap-4 bg-[#222] px-4 py-1.5 rounded-r-md border-l-3 border-[#111] hover:border-white cursor-pointer hover:bg-[#333]">
          <CiImageOn />
          <p className="opacity-70">Add Image</p>
        </div>
        <div
          onClick={() => setSelected("button")}
          className="flex items-center justify-start gap-4 bg-[#222] px-4 py-1.5 rounded-r-md border-l-3 border-[#111] hover:border-white cursor-pointer hover:bg-[#333]">
          <RiRadioButtonLine />
          <p className="opacity-70">Add Button</p>
        </div>
      </section>
      <div className="h-0.5 w-full bg-[#222] my-5"></div>
      <section>
        {/* =============================================
            Heading Inputs
            ============================================= */}
        {selected === "heading" && (
          <>
            <p className="opacity-70 my-2 text-sm font-semibold">
              Enter Heading details
            </p>
            <div>
              <div className="space-y-1">
                <p className="font-semibold">Text</p>
                <textarea
                  value={headingText}
                  onChange={(e) => setHeadingText(e.target.value)}
                  className="w-full h-40 border-2 border-[#333] bg-[#222] rounded-sm py-1 px-2 outline-none resize-none"
                />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Heading Level</p>
                <select
                  value={headingLevel}
                  onChange={(e) => setHeadingLevel(Number(e.target.value))}
                  className="w-full border-2 bg-[#222] border-[#333] rounded-sm py-1 px-2 outline-none">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
            </div>
          </>
        )}
        {/* =============================================
            Paragraph Inputs
            ============================================= */}
        {selected === "paragraph" && (
          <>
            <p className="opacity-70 my-2 text-sm font-semibold">
              Enter Paragraph details
            </p>
            <div>
              <div className="space-y-1">
                <p className="font-semibold">Text</p>
                <textarea
                  value={paragraphText}
                  onChange={(e) => setParagraphText(e.target.value)}
                  className="w-full h-40 border-2 border-[#333] bg-[#222] rounded-sm py-1 px-2 outline-none resize-none"
                />
              </div>
            </div>
          </>
        )}
        {/* =============================================
            Image Inputs
            ============================================= */}
        {selected === "image" && (
          <>
            <p className="opacity-70 my-2 text-sm font-semibold">
              Enter Image details
            </p>
            <div>
              <div className="space-y-1">
                <p className="font-semibold">Image URL/src</p>
                <textarea
                  value={imageSrc}
                  onChange={(e) => setImageSrc(e.target.value)}
                  className="w-full h-40 border-2 border-[#333] bg-[#222] rounded-sm py-1 px-2 outline-none resize-none"
                />
              </div>
            </div>
            <div>
              <div className="space-y-1">
                <p className="font-semibold">Image Alt text</p>
                <input
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  type="text"
                  className="w-full bg-[#222] border-2 border-[#333] rounded-sm py-1 px-2 outline-none resize-none"
                />
              </div>
            </div>
          </>
        )}
        {/* =============================================
            Button Inputs
            ============================================= */}
        {selected === "button" && (
          <>
            <p className="opacity-70 my-2 text-sm font-semibold">
              Enter Button details
            </p>
            <div>
              <div className="space-y-1">
                <p className="font-semibold">Button Text</p>
                <textarea
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  className="w-full h-40 border-2 border-[#333] bg-[#222] rounded-sm py-1 px-2 outline-none resize-none"
                />
              </div>
            </div>
            <div>
              <div className="space-y-1">
                <p className="font-semibold">Button URL (onClick)</p>
                <input
                  value={buttonUrl}
                  onChange={(e) => setButtonUrl(e.target.value)}
                  type="text"
                  className="w-full bg-[#222] border-2 border-[#333] rounded-sm py-1 px-2 outline-none resize-none"
                />
              </div>
            </div>
          </>
        )}
        <button
          onClick={addElement}
          className="bg-yellow-400 text-black flex items-center justify-center gap-2 my-5 py-1 cursor-pointer hover:opacity-70 w-full text-lg rounded-md">
          <IoMdAddCircleOutline />
          <span>Add</span>
        </button>
      </section>
    </div>
  );
};

export default LayoutEditor;
