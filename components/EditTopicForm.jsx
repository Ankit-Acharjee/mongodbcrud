"use client";

import { base_url } from "@/utils/baseurl";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [originalTitle] = useState(title);
  const [originalDescription] = useState(description);
  // const [isUpdated, setIsUpdated] = useState(false);
  const router = useRouter();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // setPrevTitle(newTitle);
    // setPrevDescription(newDescription);
    try {
      const res = await fetch(`${base_url}/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Error in updating topic");
      }

      // setIsUpdated(true);
      // toast.success("Topic updated successfully");
      toast.success("Topic has been updated");
      
        router.push("/");
        router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
      {/* {isUpdated && (
        <div>
          <p>Topic updated successfully!</p>
          <button onClick={() => router.push("/")}>Go to homepage</button>
        </div>
      )} */}
    </>
  );
};

export default EditTopicForm;
