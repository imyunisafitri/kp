"use client";
import { useState } from "react";
import axios from "axios";

export default function CommentForm({ blogId }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          blogId,
          comment,
        }),
      });

      if (response.ok) {
        // Clear the form fields
        console.log(response.data);
        setComment("");

        alert("Comment submitted successfully");
      } else {
        throw new Error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Comment Error", error);
      alert("Failed to submit comment");
    }
  };
  return (
    <>
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-600">Tambahkan Komentar</h2>
        </div>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-green-200">
            <textarea
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="px-0 w-full text-sm  border-0 focus:ring-0 focus:outline-none "
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-400 rounded-lg "
          >
            Send Komentar
          </button>
        </form>
      </div>
    </>
  );
}
