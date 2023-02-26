"use client";

import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <form action="" className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
          name="title"
          value={title}
          placeholder={"What's in your mind?"}
        ></textarea>
      </div>

      <div className="flex items-center justify-between">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          }`}
        >
          {`${title.length} / 300`}
        </p>
        <button
          className="text-sm bg-teal-500 text-white py-2 px-6 rounded-xl disabled:opacity-25"
          disabled={isDisabled}
          type="submit"
        >
          Create Post
        </button>
      </div>
    </form>
  );
}
