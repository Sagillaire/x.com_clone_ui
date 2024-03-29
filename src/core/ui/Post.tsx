import { FC } from 'react';
import Image from 'next/image';
import { EnumVerify } from '../utils';
import { IPosts } from '../interfaces';
import { BsThreeDots } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PostActions, PostMediaComponent, Text, Title } from '.';

export const Post: FC<{ post: IPosts }> = ({ post }) => {
  return (
    <article className='flex w-full max-h-full p-4 pb-2 border-b-[1px] border-[#343434]'>
      <div className='min-w-10 h-full mr-3'>
        <Image
          width={40}
          height={40}
          alt='user-image'
          src={`${post?.profile_img}`}
          className='rounded-full cursor-pointer'
        />
      </div>
      <div className='w-full flex flex-col gap-1'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center gap-1 lg:gap-2 flex-col md:flex-row'>
            <div className='w-full flex items-center justify-start gap-1'>
              <Title title={`${post.display_name}`} />
              {post?.verify && (
                <RiVerifiedBadgeFill className={`${EnumVerify[post.verify]}`} />
              )}
            </div>
            <div className='whitespace-nowrap'>
              <Text type='caption' text={`@${post.user} · ${post.createdAt}.`} />
            </div>
          </div>
          <BsThreeDots className='hover:text-blue-500 cursor-pointer' />
        </div>

        {post?.tweet?.text && (
          <div className='pb-1'>
            <Text text={`${post.tweet.text}`} />
          </div>
        )}

        {post?.tweet?.media && (
          <div className='max-w-full max-h-full rounded-md border-[1px] border-[#343434]'>
            <PostMediaComponent url={post.tweet.media} />
          </div>
        )}

        <PostActions post={post} />

      </div>
    </article>
  )
}
