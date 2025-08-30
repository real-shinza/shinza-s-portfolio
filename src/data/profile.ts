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
        'Xīnzuǒ	Jiāyě',
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
    'ja': '2000年(平成12年)生まれ。石川県野々市市出身。\n技術的向上を目的に様々な学習をしています。\n趣味でゲームを作っています。',
    'en': 'Born in 2000. From Nonoichi, Ishikawa, Japan.\nI\'m studying various things with the aim of improving my technical skills.\nI make games as a hobby.',
    'zh-CN': '2000年出生。来自日本石川县野野市市。\n为了提升技术，我在进行各种学习。\n我在做游戏当作兴趣。',
    'zh-TW': '2000年(民國89年)出生。來自日本石川縣野野市市。\n為了提升技術，我在進行各種學習。\n我在做遊戲當作興趣。',
    'ko': '2000년생. 일본 이시카와현 노노이치시 출신.\n기술적 향상을 목표로 다양한 학습을 하고 있습니다.\n취미로 게임을 만들고 있습니다.',
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
  ],
};
