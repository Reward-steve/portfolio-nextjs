import Image from "next/image";
import picture from "../image/programmer.png";

export default function Card() {
  return (
    <>
      <div className="flex flex-col justify-space-between items-center w-100 h-90 relative border-1 rounded-lg hover:blur-sm cursor-pointer">
        <Image
          src={picture}
          alt="picture"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg -z-10 "
        />
        <p className="">My Country App</p>
      </div>
    </>
  );
}
