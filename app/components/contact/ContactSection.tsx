"use client";
import { ChangeEvent, useState } from "react";
import { SectionName } from "../reusable";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

const POST_URL = "api/sendEmail";

interface FormData {
  email: string;
  username: string;
  message: string;
}

export default function ContactSection() {
  const [sendMsg, setSendMsg] = useState<FormData>({
    email: "",
    username: "",
    message: "",
  });
  const [isSending, setIsSending] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleOnChangeEvent = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSendMsg((user) => ({ ...user, [name]: value }));
  };

  const handleSendMail = async (formData: FormData): Promise<void> => {
    if (!formData.username || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      setSuccessMessage("");
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch(POST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      await response.json();

      setSuccessMessage("Message sent successfully!");
      setErrorMessage("");
      setSendMsg({ email: "", username: "", message: "" });
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
        <aside className="md:w-1/2 p-6 shadow-lg rounded-xl border border-gray-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMail(sendMsg);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="username"
                value={sendMsg.username}
                onChange={handleOnChangeEvent}
                placeholder="John Doe"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-cyan-400 border-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={sendMsg.email}
                onChange={handleOnChangeEvent}
                placeholder="example@mail.com"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-cyan-400 border-gray-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={sendMsg.message}
                onChange={handleOnChangeEvent}
                placeholder="Your message here..."
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-cyan-400 border-gray-800"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-cyan-700 cursor-pointer text-white py-2 rounded-lg hover:bg-cyan-600 transition disabled:opacity-50"
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
        <aside className="md:w-1/2 p-6 shadow-lg rounded-xl border border-gray-800">
          <h3 className="text-lg font-semibold mb-4">📫 How to Reach Me</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700 hover:text-cyan-500 transition">
              <FaLinkedin className="text-blue-600" />
              <a
                href="https://www.linkedin.com/in/reward-stephen-166021310/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-cyan-500 transition">
              <FaTwitter className="text-blue-400" />
              <a
                href="https://x.com/RewardStephen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-cyan-500 transition">
              <FaFacebook className="text-blue-600" />
              <a
                href="https://facebook.com/rewardstephen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-cyan-500 transition">
              <FaEnvelope className="text-red-500" />
              <a href="mailto:rewardstephen30@gmail.com">
                rewardstephen30@gmail.com
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
