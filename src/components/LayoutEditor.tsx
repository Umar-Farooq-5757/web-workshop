import type React from "react";
import { BsTextParagraph } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { FaHeading } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";

const LayoutEditor: React.FC = () => {
  return (
    <div className="py-5 px-2">
      <section className="space-y-2">
        <div className="flex items-center justify-start gap-4 bg-[#222] px-4 py-1.5 rounded-r-md border-l-3 border-[#111] hover:border-white cursor-pointer hover:bg-[#333]">
          <FaHeading />
          <p className="opacity-70">Add Heading</p>
        </div>
        <div className="flex items-center justify-start gap-4 bg-[#222] px-4 py-1.5 rounded-r-md border-l-3 border-[#111] hover:border-white cursor-pointer hover:bg-[#333]">
          <BsTextParagraph />
          <p className="opacity-70">Add Paragraph</p>
        </div>
        <div className="flex items-center justify-start gap-4 bg-[#222] px-4 py-1.5 rounded-r-md border-l-3 border-[#111] hover:border-white cursor-pointer hover:bg-[#333]">
          <CiImageOn />
          <p className="opacity-70">Add Image</p>
        </div>
        <div className="flex items-center justify-start gap-4 bg-[#222] px-4 py-1.5 rounded-r-md border-l-3 border-[#111] hover:border-white cursor-pointer hover:bg-[#333]">
          <RiRadioButtonLine />
          <p className="opacity-70">Add Button</p>
        </div>
      </section>
      <div className="h-0.5 w-full bg-[#222] my-5"></div>
    </div>
  );
};

export default LayoutEditor;
