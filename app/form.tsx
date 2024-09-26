import React, { useState } from "react";
import { Developer } from "./interfaces/types";

const DevForm = () => {
  const [username, setUsername] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState<{ status: string; message: string }>({ status: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse({ status: "", message: "" });

    const developer: Developer = {
      username,
      public_key: publicKey,
      email
    };

    try {
      const response = await fetch('/api/developer/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(developer),
      });

      const result = await response.json();

      if (response.ok) {
        setResponse({ status: "success", message: "Developer created successfully" });
        console.log("Created developer:", result.data);
      } else {
        setResponse({ status: "error", message: result.error || "Failed to create developer" });
        console.error("Error details:", result.details);
      }
    } catch (error) {
      setResponse({ status: "error", message: "An unexpected error occurred" });
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-20 flex flex-col gap-y-3">
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-black"
          required
        />
      </div>
      <div>
        <label htmlFor="publicKey">Public Key:</label>
        <input
          type="text"
          id="publicKey"
          value={publicKey}
          onChange={(e) => setPublicKey(e.target.value)}
          className="bg-black"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black"
        />
      </div>
      <button type="submit" className="bg-purple-600 active:scale-95 max-w-40 duration-200 px-5 py-2 mt-4">
        Submit
      </button>
      {response.status && (
        <div className={`mt-4 ${response.status === "success" ? "text-green-500" : "text-red-500"}`}>
          {response.message}
        </div>
      )}
    </form>
  );
};

export default DevForm;