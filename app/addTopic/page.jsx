"use client";

import { base_url } from "@/utils/baseurl";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      // alert("Title and description are required");
      toast.error('Title and description are required')
      return;
    }

    try {
      const res = await fetch(`${base_url}/api/topics`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
        toast.success("Topic added successfully");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log("Error occured: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="border w-fit p-3 font-bold text-white bg-red-500 "
        >
          Add Topic
        </button>
      </div>
    </form>
    
  );
};

export default AddTopic;
