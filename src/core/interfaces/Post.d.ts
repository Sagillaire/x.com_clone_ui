export interface IPosts {
  user: string;
  tweet: ITweet;
  createdAt: string;
  profile_img: string;
  display_name: string;
  verify?: TProfileVerification;
}

export interface ITweet {
  text: string;
  views: number;
  likes: number;
  media?: string;
  reposts: number;
  comments: number;
}

export type TProfileVerification = 'premium' | 'premium_plus' | null