"use client";

import type React from "react";

import { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success
      setMessage({
        type: "success",
        text: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    } catch {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
      <p className="text-gray-600 mb-6">
        Stay updated with the latest news, emergency responses, and ways to
        help.
      </p>

      {message && (
        <div
          className={`${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          } px-4 py-3 rounded mb-4`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors disabled:opacity-50"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSubscription;
