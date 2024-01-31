import Link from "next/link"
import Image from "next/image";
import { Text, Title } from "@/core/ui";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFeather, BsThreeDots } from "react-icons/bs";

const routes = [
  { name: 'Home', route: '/home', icon: GoHome },
  { name: 'Profile', route: '', icon: FaRegUser },
]

export const AsideNav = () => {
  return (
    <nav className="hidden sm:w-16 max-h-screen flex-col justify-between py-3 lg:w-64 sm:flex px-[6px] lg:px-2 sticky top-0 bottom-0">
      <div>
        <div className="pb-2">
          <Link href="/home">
            <div className="p-3">
              <FaXTwitter className="text-3xl" />
            </div>
          </Link>
        </div>

        <div className="flex flex-col sm:items-center lg:items-start lg:pr-8">
          {routes.map((route) => (
            <Link href={route.route} key={route.name}>
              <div className="flex py-2 sm:px-0 lg:px-3 gap-4 items-center">
                {<route.icon className="text-2xl lg:ml-1" />}
                <span className="hidden text-xl lg:block">
                  {route.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="p-2 lg:pr-8">
          <button className="bg-[#1D9BF0] w-full h-12 rounded-3xl font-bold hover:bg-[#1A8CD8] transition-all hidden lg:block">
            <Title title="Post" />
          </button>
          <div className="bg-[#1D9BF0] w-9 h-9 rounded-full p-2 flex items-center justify-center lg:hidden">
            <BsFeather className="text-xl"/>
          </div>
        </div>
      </div>

      <div className="flex sm:justify-center lg:justify-start gap-3 w-full h-14 rounded-full lg:px-3 py-2 lg:pl-[7px] hover:bg-gray-900 cursor-pointer select-none transition-all">
        <Image src="/profile/profile-photo.jpg" alt="profile-photo" width={40} height={40} className="rounded-full" />
        <div className="hidden lg:flex w-full items-center justify-between">
          <div>
            <Title title="Sagillaire" />
            <Text type="caption" text="@TheSagillaire" />
          </div>
          <BsThreeDots />
        </div>
      </div>
    </nav>
  )
}
