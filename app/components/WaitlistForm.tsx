import React, { FormEvent, useState } from "react";
import supabase from "@/app/lib/supabase";
import { isValidEmail, isValidName } from "../utils/validation";

const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("developer");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setName(name.trim());
    setEmail(email.trim());

    if (!name || !email) {
      setMessage("Fill your name and your email address");
      setMessageType("error");
      return;
    }

    if (!isValidName(name)) {
      setMessage("Please enter a valid name");
      setMessageType("error");
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email");
      setMessageType("error");
      return;
    }

    try {
      const { error } = await supabase
        .from("ravolo_waitlist")
        .insert([{ email, name, role }]);

      if (error) throw error;
      setMessage("Thanks for joining our waitlist!");
      setMessageType("success");
      setEmail("");
      setName("");
      setRole("");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes(`Key (email)=(${email}) already exists.`)) {
          setMessage("This email address already exists in the waitlist");
        } else {
          setMessage("Error joining waitlist: " + error.message);
        }
        setMessageType("error");
      } else {
        setMessage("An unexpected error occurred");
        setMessageType("error");
      }
    }
  };

  return (
    <div
      className="border-y border-dark-green py-10 flex flex-col items-center justify-center mt-5 gap-5"
      id="join-waitlist"
    >
      <h1 className="text-3xl md:text-6xl text-center font-extrabold">
        Join the Future of Gaming
      </h1>

      <form
        className="w-full md:max-w-[500px] flex flex-col gap-y-3"
        onSubmit={handleSubmit}
      >
        <div
          className={`${
            messageType == "error"
              ? "bg-red-500 border-red-500 text-red-500"
              : "bg-green-500 border-green-500 text-green-500"
          }
          ${!message ? "hidden" : "block"}
          bg-opacity-20 border rounded p-3`}
        >
          {message}
        </div>
        <div className="w-full bg-dark-green py-3 px-4 rounded focus-within:border-2 border-main-green duration-200">
          <input
            type="text"
            className="w-full bg-transparent placeholder:text-neutral-400 text-neutral-400 outline-none rounded"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="w-full bg-dark-green py-3 px-4 rounded focus-within:border-2 border-main-green duration-200">
          <input
            type="text"
            className="w-full bg-transparent placeholder:text-neutral-400 text-neutral-400 outline-none rounded"
            placeholder="Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-3">
          <span
            className={`w-full text-neutral-400 ${
              role === "developer"
                ? "bg-main-green bg-opacity-20 border border-main-green"
                : "bg-dark-green "
            }  py-3 text-center px-4 rounded duration-200`}
            onClick={() => {
              setRole("developer");
            }}
          >
            I&apos;m a developer
          </span>
          <span
            className={`w-full text-neutral-400 ${
              role === "gamer"
                ? "bg-main-green bg-opacity-20 border border-main-green"
                : "bg-dark-green "
            }  py-3 text-center px-4 rounded duration-200`}
            onClick={() => {
              setRole("gamer");
            }}
          >
            I&apos;m a gamer
          </span>
        </div>
        <button className="bg-main-green text-dark-green font-bold py-3 px-6 rounded-lg hover:bg-opacity-60 transition duration-300 active:scale-75">
          Join the Waitlist
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
