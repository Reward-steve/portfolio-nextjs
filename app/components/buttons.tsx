interface textType {
  text: string;
}

export default function Button({ text }: textType) {
  return (
    <>
      <button className="rounded-lg border border-cyan-400 p-2.5 text-cyan-400 shadow-custom-glow cursor-pointer hover:shadow-inner hover:shadow-lg cursor-pointer transition duration-200 ease-in-out hover:shadow-cyan-600/50">
        {text}
      </button>
    </>
  );
}
