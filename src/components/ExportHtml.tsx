import type React from "react";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";
import { generatePageHtml } from "../utils/exportHtml";
import { FiCopy } from "react-icons/fi";

const ExportHtml: React.FC = () => {
  const { setIsExportHtmlOpen, page } = useAppContext();
  const htmlContent = generatePageHtml(page);

  return (
    <div
      onClick={() => setIsExportHtmlOpen(false)}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#111] w-4/5 h-4/5 px-6 py-4 border border-[#333] rounded-2xl flex flex-col">
        <div className="flex items-center justify-between pb-3">
          <h2 className="font-semibold opacity-70 text-lg">Export HTML</h2>
          <button
            onClick={() => setIsExportHtmlOpen(false)}
            className="bg-[#222] p-1.5 rounded-md cursor-pointer text-white">
            <IoClose className="hover:rotate-90 transition-all" />
          </button>
        </div>
        <button className="flex items-center gap-2 bg-[#222] w-fit border border-[#333] py-1 px-3 cursor-pointer hover:bg-white hover:text-black"><FiCopy/><span>Copy</span></button>
        <div className="flex-1 bg-[#222] my-3 overflow-auto p-4 border border-[#333]">
          <pre className="font-mono whitespace-pre-wrap wrap-break-words">
            <code>{htmlContent}</code>
          </pre>
        </div>

      </div>
    </div>
  );
};

export default ExportHtml;