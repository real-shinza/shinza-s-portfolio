import { ProfileDocument } from '../common/type';

export const profile: ProfileDocument = {
  id: 'profile',
  title: {
    'ja': 'プロフィール',
    'en': 'Profile',
    'zh-CN': '个人简介',
    'zh-TW': '個人簡介',
    'ko': '프로필',
  },
  description: {
    'ja': '2000年(平成12年)生まれ。石川県野々市市出身。\n現在はエンジニアをしながら通信制大学に通っています。',
    'en': 'Born in 2000. From Nonoichi, Ishikawa, Japan.\nI\'m currently working as an engineer while attending a distance learning university.',
    'zh-CN': '2000年出生。来自日本石川县野野市市。\n现在我一边当工程师，一边就读于远程教育大学。',
    'zh-TW': '2000年(民國89年)出生。來自日本石川縣野野市市。\n現在我一邊當工程師，一邊就讀於遠程教育大學。',
    'ko': '2000년생. 일본 이시카와현 노노이치시 출신.\n현재 엔지니어로 일하면서 통신제 대학에 다니고 있습니다.',
  },
  social_medias: [
    {
      name: 'x',
      href: 'https://twitter.com/real_kainari',
      src: '/social-medias/x.svg',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/real_kainari',
      src: '/social-medias/instagram.svg',
    },
    {
      name: 'facebook',
      href: 'https://www.facebook.com/100011508277452',
      src: '/social-medias/facebook.svg',
    },
    {
      name: 'discord',
      href: 'https://discord.com/users/671696583481360385',
      src: '/social-medias/discord.svg',
    },
    {
      name: 'github',
      href: 'https://github.com/real-shinza',
      src: '/social-medias/github.svg',
    },
    {
      name: 'zenn',
      href: 'https://zenn.dev/kainari',
      src: '/social-medias/zenn.svg',
    },
  ],
};
