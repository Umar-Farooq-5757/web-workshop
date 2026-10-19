import type React from "react";
import { useState } from "react";
import { BsTextParagraph } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { FaHeading } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiRadioButtonLine } from "react-icons/ri";

const LayoutEditor: React.FC = () => {
  const [selected, setSelected] = useState("heading");
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
                <textarea className="w-full h-40 border-2 border-[#333] bg-[#222] rounded-sm py-1 px-2 outline-none resize-none" />
              </div>
              <div className="space-y-1">
                <p className="font-semibold">Heading Level</p>
                <select className="w-full border-2 bg-[#222] border-[#333] rounded-sm py-1 px-2 outline-none">
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
                <textarea className="w-full h-40 border-2 border-[#333] bg-[#222] rounded-sm py-1 px-2 outline-none resize-none" />
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
                <textarea className="w-full h-40 border-2 border-[#333] bg-[#222] rounded-sm py-1 px-2 outline-none resize-none" />
              </div>
            </div>
            <div>
              <div className="space-y-1">
                <p className="font-semibold">Image Alt text</p>
                <input
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
                <textarea className="w-full h-40 border-2 border-[#333] bg-[#222] rounded-sm py-1 px-2 outline-none resize-none" />
              </div>
            </div>
            <div>
              <div className="space-y-1">
                <p className="font-semibold">Button URL (onClick)</p>
                <input
                  type="text"
                  className="w-full bg-[#222] border-2 border-[#333] rounded-sm py-1 px-2 outline-none resize-none"
                />
              </div>
            </div>
          </>
        )}
        <button className="bg-yellow-400 text-black flex items-center justify-center gap-2 my-5 py-1 cursor-pointer hover:opacity-70 w-full text-lg rounded-md">
          <IoMdAddCircleOutline />
          <span>Add</span>
        </button>
      </section>
    </div>
  );
};

export default LayoutEditor;
