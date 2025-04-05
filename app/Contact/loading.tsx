export default function Loading() {
  return (
    <div className="w-full flex flex-col gap-10 p-10 max-[375]:p-5 text-white rounded-xl shadow-lg">
      <div className="w-full h-6 bg-[#515151] animate-pulse rounded-md"></div>
      <div className="w-full h-6 bg-[#515151] animate-pulse rounded-md"></div>
      <div className="w-full h-6 bg-[#515151] animate-pulse rounded-md"></div>
      <div className="w-full h-6 bg-[#515151] animate-pulse rounded-md"></div>
    </div>
  );
}
