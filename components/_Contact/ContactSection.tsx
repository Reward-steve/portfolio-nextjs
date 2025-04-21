"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  SectionName,
  contact_form,
  how_to_reach_me,
} from "../../app/api/data/data";

import { FaWhatsapp } from "react-icons/fa";

// import whatsapp;
import { InputField } from "../input";

const POST_URL = "/api/sendEmail";

export interface FormData {
  Name: string;
  Email: string;
  Message: string;
}

export default function ContactSection() {
  const [sendMsg, setSendMsg] = useState<FormData>({
    Name: "",
    Email: "",
    Message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleOnChangeEvent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSendMsg((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!sendMsg.Name || !sendMsg.Email || !sendMsg.Message) {
      setErrorMessage("All fields are required.");
      setSuccessMessage(null);
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch(POST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendMsg),
      });

      if (!response.ok) throw new Error("Something went wrong.");

      setSuccessMessage("Message sent successfully!");
      setErrorMessage(null);
      setSendMsg({ Name: "", Email: "", Message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      setErrorMessage("There was an error sending your message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="w-full flex flex-col items-center gap-8 py-12">
      <SectionName title="Get In Touch" />

      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* Contact Form */}
        <aside className="md:w-1/2 p-6 shadow-lg rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">📫 Send a Message</h3>
          <form onSubmit={handleSendMail} className="space-y-4">
            {contact_form.map(({ form_name, place_holder }, id) => (
              <InputField
                key={id}
                label={form_name}
                name={form_name}
                value={sendMsg[form_name as keyof FormData] || ""}
                placeholder={place_holder}
                onChange={handleOnChangeEvent}
              />
            ))}

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-cyan-700 cursor-pointer text-white py-2 rounded-lg hover:bg-cyan-600 transition disabled:opacity-50 "
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )}
          </form>
        </aside>

        {/* Contact Info */}
        <aside className="md:w-1/2 p-6 shadow-lg rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">📫 How to Reach Me</h3>
          <ul className="space-y-5">
            {how_to_reach_me.map(({ Icon, href, link_name }, id) => (
              <li
                key={id}
                className="flex items-center gap-5 text-cyan-600 hover:text-cyan-900 dark:hover:text-cyan-400 transition w-full"
              >
                <Icon className="text-xl" />
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {link_name}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-5 text-cyan-600 hover:text-cyan-900 dark:hover:text-cyan-400 transition w-full cursor-pointer">
              <FaWhatsapp className="text-xl" />

              <a
                href={"https://wa.link/ty8rwm"}
                target="_blank"
                rel="noopener noreferrer"
              >
                +234 80 980 69 257
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
