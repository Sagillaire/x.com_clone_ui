import { IPosts } from "../interfaces";

export enum EnumVerify {
  premium = 'text-blue-500',
  premium_plus = 'text-yellow-500',
};

export const Posts: IPosts[] = [
  {
    verify: 'premium_plus',
    profile_img: '/profile/lol_profile.jpg',
    user: 'LeagueOfLegends',
    createdAt: '21 Jan',
    display_name: 'League Of Legends',
    tweet: {
      likes: 81636,
      reposts: 9722,
      views: 4287583,
      comments: 67834,
      text: `How will you fight for tomorrow? 
      See the full version of “Still Here” for Season 2024: https://riot.com/48MzEZ3`,
      media: '/media/X2Twitter.com_GDcRhVlakAAYk_y(720p).mp4'
    }
  },
  {
    verify: 'premium',
    profile_img: '/profile/profile-photo.jpg',
    user: 'TheSagilar',
    createdAt: '15 Jan',
    display_name: 'Sagillaire',
    tweet: {
      likes: 99,
      reposts: 25,
      views: 1265,
      comments: 17,
      text: `Today I want to share with you my new achievement. I've created my portfolio, I'm happy! https://sagillaire-portfolio.vercel.app/`,
      media: '/media/jsportfolio.png'
    }
  },
  {
    verify: 'premium_plus',
    profile_img: '/profile/valorant_profile.png',
    user: 'VALORANT',
    createdAt: '12 Jan',
    display_name: 'VALORANT',
    tweet: {
      likes: 725,
      reposts: 1836,
      views: 434061,
      comments: 411,
      text: 'Take your first shots in style with the Outlaw Throwback Pack, featuring familiar skins updated exclusively for the new Outlaw rifle. In your shop now.',
      media: '/media/GDfkMIgXEAExS8h.jpg'
    }
  },
  {
    verify: 'premium_plus',
    profile_img: '/profile/valorant_profile.png',
    user: 'VALORANT',
    createdAt: '03 Jan',
    display_name: 'VALORANT',
    tweet: {
      likes: 4660,
      reposts: 189,
      views: 790005,
      comments: 275,
      text: '“I’m getting online if you wanted to pla-”',
      media: '/media/X2Twitter.com_GDh0g3Na0AABlDb(gif).mp4'
    }
  },
];
