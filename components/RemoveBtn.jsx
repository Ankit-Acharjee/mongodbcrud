"use client";
import { base_url } from "@/utils/baseurl";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
import { toast } from "sonner";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`${base_url}/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
    toast.success("Topic removed successfully");
  };

  return (
    <>
      <button onClick={removeTopic} className="text-red-400">
        <HiOutlineTrash size={24} />
      </button>
    </>
  );
};

export default RemoveBtn;
