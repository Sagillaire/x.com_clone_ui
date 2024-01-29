import { Post } from "@/core/ui/Post";
import { Posts } from "@/core/utils";

export default function HomePage() {
  return (
    <>
      {Posts.map((post, key) => (
        <Post post={post} key={key} />
      ))}
    </>
  )
}