import { BsChat } from "react-icons/bs";
import { GoShare } from "react-icons/go";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";

export const shareActions = [
  {
    id: 'bookmark',
    icon: CiBookmark,
    hover: 'transition-all hover:bg-blue-800 hover:text-blue-500',
  },
  {
    id: 'share',
    icon: GoShare,
    hover: 'transition-all hover:bg-blue-800 hover:text-blue-500',
  },
];

export const actions = [
  {
    icon: BsChat,
    id: 'comments',
    hover: 'transition-all hover:bg-blue-800 hover:text-blue-500',
  },
  {
    icon: BiRepost,
    id: 'reposts',
    hover: 'transition-all hover:bg-green-800 hover:text-green-500',
  },
  {
    id: 'likes',
    icon: FaRegHeart,
    hover: 'transition-all hover:bg-red-800 hover:text-red-500',
  },
  {
    id: 'views',
    icon: IoIosStats,
    hover: 'transition-all hover:bg-blue-800 hover:text-blue-500',
  },
];