import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text, type) => {
  if (type === "warning") {
    toast.warning(text);
  } else if (type === "success") {
    toast.success(text);
  } else {
    toast.error(text);
  }
};

export default notify;
