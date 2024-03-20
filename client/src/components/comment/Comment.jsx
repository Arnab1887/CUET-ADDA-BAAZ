import "./comment.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Comment({ comment }) {

  const handleDelete = async () => {
    let postadd = comment.postID;
    try {
      await axios.delete(`/comments/${comment._id}`, {
      });
      window.location.replace("/post/"+ postadd);
    } catch (err) {}
  };
  return (
    // <div className="post">
    //   <div className="postInfo">
    //     <Link to={`/post/${post._id}`} className="link">
    //       <span className="postTitle">{post.title}</span>
    //     </Link>
    //     <hr />
    //     <span className="postDate">
    //       {new Date(post.createdAt).toDateString()}
    //     </span>
    //   </div>
    //   <p className="postDesc">{post.desc}</p>
    // </div>
    <div>
      <div className="singlePostWrapper">
      <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${comment.username}`} className="link">
              <b> {comment.username}</b>
            </Link>
            <i
              className="singlePostIcon far fa-trash-alt"
              onClick={handleDelete}
            ></i>
          </span>
        </div>
        <p className="singlePostDesc">{comment.desc}</p>
      </div>
    </div>
  );
}