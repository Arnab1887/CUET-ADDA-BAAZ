import Comment from "../comment/Comment";
export default function Comments({ comments }) {
  return (
    <div >
      {comments.map((p) => (
        <Comment comment={p} />
      ))}
    </div>
  );
}