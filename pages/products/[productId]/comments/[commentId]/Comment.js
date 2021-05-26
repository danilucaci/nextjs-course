import { useRouter } from "next/router";

function Comment() {
  const {
    query: { commentId },
  } = useRouter();

  return (
    <div>
      <h1>{commentId}</h1>
    </div>
  );
}

export default Comment;
