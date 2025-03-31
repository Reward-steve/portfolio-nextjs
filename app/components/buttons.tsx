export default function Button({ text }: { text: string }) {
  return (
    <>
      <button 
      
      className="rounded-lg border border-cyan-400 p-2 text-cyan-400 shadow-lg hover:shadow-cyan-600/50 cursor-pointer transition duration-200 ease-in-out">
        {text}
      </button>
    </>
  );
}
 