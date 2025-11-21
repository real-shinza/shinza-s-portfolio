import { SkillDocument } from '../common/type';

export const skill: SkillDocument = {
  id : 'skill',
  title: {
    'ja': 'スキル',
    'en': 'Skill',
    'zh-CN': '技能',
    'zh-TW': '技能',
    'ko': '스킬',
  },
  sections: [
    {
      subtitle: {
        'ja': 'プログラミング言語',
        'en': 'Programming language',
        'zh-CN': '编程语言',
        'zh-TW': '程式語言',
        'ko': '프로그래밍 언어',
      },
      entries: [
        {
          name: 'C',
          level: 4,
        },
        {
          name: 'C++',
          level: 4,
        },
        {
          name: 'C#',
          level: 5,
        },
        {
          name: 'JavaScript',
          level: 5,
        },
        {
          name: 'TypeScript',
          level: 5,
        },
        {
          name: 'Java',
          level: 3,
        },
        {
          name: 'Python3',
          level: 3,
        },
        {
          name: 'Dart',
          level: 1,
        },
        {
          name: 'HTML5',
          level: 4,
        },
        {
          name: 'CSS3',
          level: 4,
        },
        {
          name: 'PHP',
          level: 1,
        },
        {
          name: 'SQL',
          level: 3,
        },
      ],
    },
    {
      subtitle: {
        'ja': 'フレームワーク',
        'en': 'Framework',
        'zh-CN': '框架',
        'zh-TW': '框架',
        'ko': '프레임워크',
      },
      entries: [
        {
          name: 'DirectX9',
          level: 2,
        },
        {
          name: 'DirectX11',
          level: 2,
        },
        {
          name: 'Unity',
          level: 4,
        },
        {
          name: 'jQuery',
          level: 2,
        },
        {
          name: 'Node.js',
          level: 4,
        },
        {
          name: 'React',
          level: 4,
        },
        {
          name: 'Next.js',
          level: 4,
        },
        {
          name: 'Flutter',
          level: 1,
        },
      ],
    },
    {
      subtitle: {
        'ja': '開発支援ツール',
        'en': 'Development support tools',
        'zh-CN': '开发支持工具',
        'zh-TW': '開發支援工具',
        'ko': '개발 지원 도구',
      },
      entries: [
        {
          name: 'Git',
          level: 4,
        },
        {
          name: 'GitHub',
          level: 4,
        },
        {
          name: 'Docker',
          level: 3,
        },
      ],
    },
    {
      subtitle: {
        'ja': 'クラウドプラットフォーム',
        'en': 'Cloud platform',
        'zh-CN': '云平台',
        'zh-TW': '雲端平台',
        'ko': '클라우드 플랫폼',
      },
      entries: [
        {
          name: 'Google Apps Script',
          level: 5,
        },
        {
          name: 'Google Tag Manager',
          level: 5,
        },
        {
          name: 'Firebase Hosting',
          level: 3,
        },
        {
          name: 'Cloud Firestore',
          level: 2,
        },
        {
          name: 'Cloud Functions',
          level: 2,
        },
        {
          name: 'Cloud Storage',
          level: 2,
        },
        {
          name: 'BigQuery',
          level: 3,
        },
        {
          name: 'Google Analytics',
          level: 3,
        },
        {
          name: 'Vercel',
          level: 3,
        },
        {
          name: 'Amazon EC2',
          level: 2,
        },
        {
          name: 'Amazon ECS',
          level: 2,
        },
        {
          name: 'Amazon S3',
          level: 2,
        },
        {
          name: 'Amazon EventBridge',
          level: 1,
        },
        {
          name: 'Amazon CloudWatch',
          level: 1,
        },
        {
          name: 'AWS WAF',
          level: 1,
        },
        {
          name: 'AWS CDK',
          level: 2,
        },
        {
          name: 'WordPress',
          level: 2,
        },
      ],
    },
    {
      subtitle: {
        'ja': 'その他ツール',
        'en': 'Other tools',
        'zh-CN': '其他工具',
        'zh-TW': '其他工具',
        'ko': '기타 도구',
      },
      entries: [
        {
          name: 'Slack',
          level: 4,
        },
        {
          name: 'Discord',
          level: 5,
        },
        {
          name: 'Notion',
          level: 3,
        },
        {
          name: 'Miro',
          level: 2,
        },
        {
          name: 'Figma',
          level: 1,
        },
        {
          name: 'ChatGPT',
          level: 3,
        },
      ],
    },
  ],
};
