import Image from "next/image"
import { Text, Title } from ".";
import { CgPoll } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import { TbCalendarTime } from "react-icons/tb";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { CiImageOn, CiLocationOn } from "react-icons/ci";

const actionPostBar = [CiImageOn, MdOutlineGifBox, CgPoll, BsEmojiHeartEyes, TbCalendarTime, CiLocationOn]

export const PostBarComponent = () => {
  return (
    <div className="hidden sm:flex w-full max-h-full p-4 border-b-[1px] border-[#343434]">
      <div className='w-10 h-full mr-3'>
        <Image
          width={40}
          height={40}
          alt='user-image'
          src={`/profile/profile-photo.jpg`}
          className='rounded-full cursor-pointer'
        />
      </div>
      <div className="w-full px-2">
        <input className="bg-transparent px-3 border-none outline-none" placeholder="¿Whats happening?!" />
        <div className="border-b-[1px] border-[#343434]">
          <div className="flex gap-1 mt-3 mb-4 text-[#1D9BF0] px-3">
            <GiWorld />
            <Text type="mark" text="Anyone can answer" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-3 pt-4">
          <div className="flex gap-4">
            {actionPostBar.map((Action, key) => (
              <Action key={key} className="text-lg text-[#1D9BF0]" />
            ))}
          </div>
          <button className="bg-[#1D9BF0] w-auto px-5 py-1 rounded-3xl font-bold hover:bg-[#1A8CD8] transition-all">
            <Title size="base" title="Post" />
          </button>
        </div>
      </div>
    </div>
  )
}
