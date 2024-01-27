import "./comment.css";
import { Link } from "react-router-dom";
export default function Comment({ comment }) {
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
          </span>
        </div>
        <p className="singlePostDesc">{comment.desc}</p>
      </div>
    </div>
  );
}