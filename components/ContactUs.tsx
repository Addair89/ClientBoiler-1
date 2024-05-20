"use client";

import React, { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="mb-20 sm:mb-28 w-[70vw] md:-w-[70vw] m-auto text-center relative">
      <div className="bg-[#0001f942] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[20rem] rounded-full blur-[10rem] sm:w-[20.75rem] "></div>
      <h3 className="text-[62px] text-gray-700">Contact Us</h3>
      <p className="text-gray-700 dark:text-white/80">
        Please contact us directly at 555-555-5555 or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black bg-gray-400/50 p-8 rounded-lg items-center"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          setEmail("");
          setMessage("");
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 w-full rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 w-full rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
          Submit{" "}
        </button>
      </form>
    </section>
  );
}
