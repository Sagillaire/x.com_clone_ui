import { FC } from "react"
import { IPosts } from "../interfaces"
import { actions, formatNumberStats, shareActions } from "../utils"

export const PostActions: FC<{ post: IPosts }> = ({ post }) => {
  return (
    <div className='flex justify-between pt-2 items-center'>
      {actions.map((action) => (
        <div className='flex items-center' key={action.id}>
          <div key={action.id} className={`${action.hover} p-2 rounded-full cursor-pointer text-[#343434]`}>
            <action.icon />
          </div>
          <span className='text-xs'>{formatNumberStats(post.tweet?.[action.id as never])}</span>
        </div>
      ))}
      <div className='flex'>
        {shareActions.map((action) => (
          <div key={action.id} className={`${action.hover} p-2 rounded-full cursor-pointer`}>
            <action.icon />
          </div>
        ))}
      </div>
    </div>
  )
}
