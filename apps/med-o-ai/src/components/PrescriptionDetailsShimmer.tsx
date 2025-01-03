import React from "react";

const PrescriptionDetailsShimmer = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-6 w-full">
      <div className="w-full max-w-[400px]">
        <div className="animate-pulse bg-gray-500 rounded-md w-full h-[400px]"></div>
      </div>
      <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20">
        <div className="relative z-50">
          <div className="p-4">
            <div className="w-full space-y-4">
              <div className="animate-pulse h-4 bg-gray-500 rounded-md w-full"></div>
              <div className="animate-pulse h-3 bg-gray-500 rounded-md w-3/4"></div>
              <div className="animate-pulse h-3 bg-gray-500 rounded-md w-2/4"></div>
              <div className="animate-pulse h-3 bg-gray-500 rounded-md w-full md:w-2/4"></div>
              <div className="animate-pulse h-3 bg-gray-500 rounded-md w-full md:w-2/4"></div>
              <div className="animate-pulse h-3 bg-gray-500 rounded-md w-full md:w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionDetailsShimmer;
