import { Title } from "@/core/ui";
import { Posts } from "@/core/utils";
import { Post } from "@/core/ui/Post";
import { FaArrowLeft } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      {/* Top Bar */}
      <div className="flex w-full h-14 px-4 sticky top-0 bg-opacity-20 backdrop-blur-md z-50 border-b-[1px] border-[#343434] ">
        <div className="flex items-center h-full min-w-14">
          <FaArrowLeft className="text-base"/>
        </div>
        <div className="w-full h-full flex items-center">
          <Title title="Post" size="lg" />
        </div>
        <div className="w-14 h-full"></div>
      </div>

      <div className=""></div>
      {Posts.map((post, key) => (
        <Post post={post} key={key} />
      ))}
    </>
  )
}