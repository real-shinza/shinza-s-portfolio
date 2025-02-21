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
  name: {
    'ja': {
      main: '新佐 佳也',
      sub: [
        'しんざ よしや',
        'Shinza Yoshiya',
      ],
    },
    'en': {
      main: 'Yoshiya Shinza',
      sub: [],
    },
    'zh-CN': {
      main: '新佐 佳也',
      sub: [
        'Xīnzuǒ	Jiāyě',
        'Shinza Yoshiya',
      ],
    },
    'zh-TW': {
      main: '新佐 佳也',
      sub: [
        'Hsinzuǒ Chiayeh',
        'Shinza Yoshiya',
      ],
    },
    'ko': {
      main: '신자 요시야',
      sub: [
        'Shinza Yoshiya',
        '新佐 佳也',
      ],
    },
  },
  description: {
    'ja': '2000年(平成12年)生まれ。石川県野々市市出身。\n現在は台湾でワーキングホリデーをしながら日本の通信制大学に通っています。',
    'en': 'Born in 2000. From Nonoichi, Ishikawa, Japan.\nI\'m currently in Taiwan on a working holiday while attending a Japanese online university.',
    'zh-CN': '2000年出生。来自日本石川县野野市市。\n现在我一边在台湾打工度假，一边就读于日本的远程教育大学。',
    'zh-TW': '2000年(民國89年)出生。來自日本石川縣野野市市。\n現在我一邊在台灣打工度假，一邊就讀於日本的遠程教育大學。',
    'ko': '2000년생. 일본 이시카와현 노노이치시 출신.\n현재 대만에서 워킹홀리데이를 하면서 일본의 통신제 대학을 다니고 있습니다.',
  },
  social_medias: [
    {
      name: 'x',
      href: 'https://x.com/real_kainari',
      src: '/social-medias/x.svg',
    },
    {
      name: 'facebook',
      href: 'https://www.facebook.com/100011508277452',
      src: '/social-medias/facebook.svg',
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
    {
      name: 'wantedly',
      href: 'https://www.wantedly.com/id/real_shinza',
      src: '/social-medias/wantedly.svg',
    },
    {
      name: 'upwork',
      href: 'https://www.upwork.com/freelancers/~01181747d915301af8',
      src: '/social-medias/upwork.svg',
    },
  ],
};
