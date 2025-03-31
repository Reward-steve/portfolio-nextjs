import Image from "next/image";
import picture from "../image/programmer.png";

export default function Card({
  cardInfo,
  num,
}: {
  cardInfo: string;
  num: number | string;
}) {
  return (
    <>
      <div className="flex justify-space-between items-center w-full h-90 relative border-1 text-cyan-500 rounded-lg cursor-pointer">
        <div className="w-1/2 h-full flex justify-center items-center">
          <Image
            src={picture}
            alt="picture"
            quality={100}
            className="rounded-lg w-1/2 h-full"
          />
        </div>
        <div className="flex gap-9 w-1/2 justify-center h-full items-start flex-col">
          <h1 className="text-5xl font-bold">{num}</h1>
          <p className="">{cardInfo}</p>
        </div>
      </div>
    </>
  );
}
