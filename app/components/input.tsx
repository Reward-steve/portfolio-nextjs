import { ChangeEvent } from "react";
// Reusable Input Component
interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const InputField = ({
  label,
  name,
  value,
  placeholder,
  onChange,
}: InputFieldProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {name === "Message" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Your message here..."
        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-cyan-400 border-gray-700"
      ></textarea>
    ) : (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-cyan-400 border-gray-700"
      />
    )}
  </div>
);

/*  

1️⃣ Tailwind's Default Breakpoints
Tailwind provides default breakpoints for different screen sizes:

Prefix	       Min Width	         Devices
sm:	640px	   Small devices        (phones)
md:	768px	   Medium devices       (tablets)
lg:	1024px	   Large devices        (laptops)
xl:	1280px	   Extra large screens  (desktops)
2xl:1536px	   Very large screens

*/
