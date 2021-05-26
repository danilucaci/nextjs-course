import { useRouter } from "next/router";

function BlogPaths() {
  const { query } = useRouter();

  return <main>{JSON.stringify(query, null, 2)}</main>;
}

export default BlogPaths;
