import { SkillDocument } from '../common/type';

export const skills: SkillDocument = {
  id : 'skill',
  title: {
    ja: 'スキル',
    en: 'Skill',
    cn: '技能',
    tw: '技能',
    ko: '스킬',
  },
  sections: [
    {
      subtitle: {
        ja: 'プログラミング言語',
        en: 'Programming language',
        cn: '编程语言',
        tw: '程式語言',
        ko: '프로그래밍 언어',
      },
      entries: [
        {
          name: 'C',
          exp: 5,
        },
        {
          name: 'C++',
          exp: 4,
        },
        {
          name: 'C#',
          exp: 4,
        },
        {
          name: 'Java',
          exp: 2,
        },
        {
          name: 'Python3',
          exp: 2,
        },
        {
          name: 'JavaScript',
          exp: 3,
        },
        {
          name: 'TypeScript',
          exp: 2,
        },
        {
          name: 'HTML5',
          exp: 2,
        },
        {
          name: 'CSS3',
          exp: 2,
        },
        {
          name: 'SQL',
          exp: 2,
        },
      ],
    },
    {
      subtitle: {
        ja: 'フレームワーク',
        en: 'Framework',
        cn: '框架',
        tw: '框架',
        ko: '프레임워크',
      },
      entries: [
        {
          name: 'DirectX9',
          exp: 2,
        },
        {
          name: 'Unity',
          exp: 4,
        },
        {
          name: 'jQuery',
          exp: 2,
        },
        {
          name: 'Node.js',
          exp: 3,
        },
        {
          name: 'React',
          exp: 2,
        },
        {
          name: 'Next.js',
          exp: 2,
        },
      ],
    },
    {
      subtitle: {
        ja: '開発支援ツール',
        en: 'Development support tools',
        cn: '开发支持工具',
        tw: '開發支援工具',
        ko: '개발 지원 도구',
      },
      entries: [
        {
          name: 'Git',
          exp: 3,
        },
        {
          name: 'GitHub',
          exp: 3,
        },
        {
          name: 'Docker',
          exp: 1,
        },
      ],
    },
    {
      subtitle: {
        ja: 'クラウドプラットフォーム',
        en: 'Cloud platform',
        cn: '云平台',
        tw: '雲端平台',
        ko: '클라우드 플랫폼',
      },
      entries: [
        {
          name: 'Google Apps Script',
          exp: 3,
        },
        {
          name: 'Firebase Hosting',
          exp: 1,
        },
        {
          name: 'Cloud Firestore',
          exp: 1,
        },
        {
          name: 'Cloud Functions',
          exp: 1,
        },
        {
          name: 'Cloud Storage',
          exp: 1,
        },
        {
          name: 'BigQuery',
          exp: 2,
        },
        {
          name: 'Google Analytics',
          exp: 1,
        },
        {
          name: 'Vercel',
          exp: 1,
        },
        {
          name: 'Amazon EC2',
          exp: 1,
        },
      ],
    },
  ],
};
