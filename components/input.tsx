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
  <>
    <label className="block text-sm font-medium text-gray-700 ">{label}</label>
    {name === "Message" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder="Your message here..."
        className="w-full mt-1 px-2 h-[52px] border rounded-xl focus:ring-cyan-400 border-gray-700 bg-transparent"
      ></textarea>
    ) : (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full mt-1 px-2 h-[52px] border rounded-xl focus:ring-cyan-400 border-gray-700 bg-transparent"
      />
    )}
  </>
);

 