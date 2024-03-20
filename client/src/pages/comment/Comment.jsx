import { useEffect, useState } from "react";
import Comments from "../../components/comments/Comments";
import axios from "axios";
import { useLocation } from "react-router";

export default function Comment() {
  const [comments, setComments] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get("/comments/" + path); //+ path;
      setComments(res.data);
    };
    fetchComments();
  }, [path]);
  return (
    <>
      <div>
        <Comments comments={comments} />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}
