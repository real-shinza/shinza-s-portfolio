import { ProfileDocument } from '../common/type';

export const profile: ProfileDocument = {
  id: 'profile',
  title: {
    ja: 'プロフィール',
    en: 'Profile',
    cn: '个人简介',
    tw: '個人簡介',
    ko: '프로필',
  },
  description: {
    ja: '2000年(平成12年)生まれ。石川県野々市市出身。\n現在はエンジニアをしながら通信制大学に通っています。',
    en: 'Born in 2000. From Nonoichi, Ishikawa, Japan.\nI\'m currently working as an engineer while attending a distance learning university.',
    cn: '2000年出生。来自日本石川县野野市市。\n现在我一边当工程师，一边就读于远程教育大学。',
    tw: '2000年(民國89年)出生。來自日本石川縣野野市市。\n現在我一邊當工程師，一邊就讀於遠程教育大學。',
    ko: '2000년생. 일본 이시카와현 노노이치시 출신.\n현재 엔지니어로 일하면서 통신제 대학에 다니고 있습니다.',
  },
};
