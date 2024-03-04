"use client";

import { base_url } from "@/jsurl/baseurl";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${base_url}/api/topics/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Error in updating topic");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }   
  };
  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-3" action="">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription} 
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="border w-fit p-3 font-bold text-white bg-red-500 "
        >
          Update Topic
        </button>
      </div>
    </form>
  );
};

export default EditTopicForm;
