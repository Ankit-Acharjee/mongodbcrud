// "use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { base_url } from "@/utils/baseurl";
// import { useEffect } from "react";

const getTopics = async () => {
  try {
    const response = await fetch(`${base_url}/api/topics`, {
      cache: "no-store", // Disable cache
    });
    
    if (!response.ok) throw new Error("Error fetching topics");

    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};

// getTopics()
//   .then((topics) => console.log(topics))
//   .catch((error) => error);

const TopicsList = async () => {
  const { topics } = await getTopics();
  // console.log(topics);
  return (
    <>
      {topics && topics?.map((t) => {
        return (
          <div
            key={t._id}
            className="p-4 shadow-lg rounded-md border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-xl">{t?.title}</h2>
              {/* {
                console.log(t?.title)
              } */}
              <div>{t?.description}</div>
            </div>

            <div className="icon flex gap-2 justify-center items-center">
              <RemoveBtn id={t._id} className="flex justify-center" />
              <Link href={`/editTopic/${t?._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopicsList;
