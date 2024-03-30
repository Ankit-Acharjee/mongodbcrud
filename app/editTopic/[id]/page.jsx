import EditTopicForm from "@/components/EditTopicForm";
import { base_url } from "@/jsurl/baseurl";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`${base_url}/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching topics");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
const EditTopic = async ({ params }) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
