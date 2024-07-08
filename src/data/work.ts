import { Works } from '../common/type';

export const works: Works = [
  {
    id: 'shinza-s-portfolio',
    name: 'Shinza\'s Portfolio',
    image: '/works/shinza-s-portfolio.jpg',
    description_short: '新佐のポートフォリオサイト',
    description_long: 'TypeScriptとNext.jsの学習を兼ねて制作したポートフォリオサイトです。\nGitHubにソースコードも公開しています。',
    skills: [
      'TypeScript',
      'CSS Modules',
      'Next.js',
      'ESLint',
      'GitHub',
      'Vercel',
      'Google Tag Manager',
      'Google Analytics',
      'Visual Studio Code',
    ],
    links: [
      {
        name: 'View Site',
        link: 'https://shinza-s-portfolio.vercel.app/',
        color_code: '#008000',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/real-shinza/shinza-s-portfolio',
        color_code: '#181717',
      },
    ],
  },
  {
    id: 'translate-number-to-strings',
    name: 'Translate number to strings',
    image: '/works/translate-number-to-strings.jpg',
    description_short: '数値を英語、日本語、中国語、韓国語に変換するサイト',
    description_long: 'HTMLとCSSで制作したシンプルなサイトです。\nJavaScriptで数値を英語、日本語、中国語、韓国語に変換しています。',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'GitHub',
      'GitHub Pages',
      'Google Tag Manager',
      'Google Analytics',
      'Visual Studio Code',
    ],
    links: [
      {
        name: 'View Site',
        link: 'https://real-shinza.github.io/translate-number-to-strings/',
        color_code: '#008000',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/real-shinza/translate-number-to-strings',
        color_code: '#181717',
      },
    ],
  },
  {
    id: 'towa-2d',
    name: 'とわ2D',
    image: '/works/towa-2d.jpg',
    description_short: '雑に作った横スクロールゲーム',
    description_long: 'ゲームエンジンのUnityを使用して作成した簡単な横スクロールゲームです。\n入力関連のシステムとローカライゼーションの検証を一番の目的に作ってみました。\n身内ネタ満載のゲームです。若干バグが残っています。\n日本語、英語、簡体字、繁体字、韓国語、インドネシア語に対応しています。',
    skills: [
      'C#',
      'Unity 2022',
      'GitHub',
      'Visual Studio 2022',
    ],
    links: [
      {
        name: 'View Site',
        link: 'https://unityroom.com/games/towa-2d',
        color_code: '#008000',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/real-shinza/towa-2d',
        color_code: '#181717',
      },
    ],
  },
  {
    id: 'discord-bot',
    name: 'Discordボット',
    image: '/works/discord-bot.jpg',
    description_short: 'Discordの多機能ボット',
    description_long: 'Discordのボットを制作しました。\n主な機能としては、音声読み上げ、ロール自動付与、誕生日お祝い、地震速報などの機能があります。\nソースコードをお見せすることができないです。',
    skills: [
      'TypeScript',
      'discord.js',
      'VOICEVOX',
      'ESLint',
      'GitHub',
      'Docker',
      'Visual Studio Code',
    ],
  },
  {
    id: 'unity-rpg',
    name: 'Unity製PRG制作アセット',
    image: '/works/unity-rpg.jpg',
    description_short: 'UnityでRPGを作る為のアセット',
    description_long: 'ゲームエンジンのUnityでRPGを作成する為のアセットを制作中です。\n開発規模がかなり大きい為、完成まで物凄く時間がかかります。\nソースコードをお見せすることができないです。',
    skills: [
      'C#',
      'Unity 2022',
      'Odin Inspector and Serializer',
      'GitHub',
      'Visual Studio 2022',
    ],
  },
];
