import dedent from 'ts-dedent';
import { WorkDocument } from '../common/type';

export const work: WorkDocument = {
  id: 'work',
  title: {
    'ja': '作品',
    'en': 'Work',
    'zh-CN': '作品',
    'zh-TW': '作品',
    'ko': '작품',
  },
  subtitle: {
    description: {
      'ja': '説明',
      'en': 'Description',
      'zh-CN': '说明',
      'zh-TW': '說明',
      'ko': '설명',
    },
    skill: {
      'ja': 'スキル',
      'en': 'Skill',
      'zh-CN': '技能',
      'zh-TW': '技能',
      'ko': '스킬',
    },
    link: {
      'ja': 'リンク',
      'en': 'Link',
      'zh-CN': '链接',
      'zh-TW': '連結',
      'ko': '링크',
    },
  },
  entries: [
    {
      id: 'shinza-s-portfolio',
      name: {
        'ja': '新佐のポートフォリオ',
        'en': 'Shinza\'s Portfolio',
        'zh-CN': '新佐的作品集',
        'zh-TW': '新佐的作品集',
        'ko': '신자의 포트폴리오',
      },
      image: '/works/shinza-s-portfolio.jpg',
      description_short: {
        'ja': '新佐のポートフォリオサイト',
        'en': 'Shinza\'s Portfolio Website',
        'zh-CN': '新佐的作品集网站',
        'zh-TW': '新佐的作品集網站',
        'ko': '신자의 포트폴리오 사이트',
      },
      description_long: {
        'ja': dedent(`
          TypeScriptとNext.jsの学習を兼ねて制作したポートフォリオサイト。
          日本語、英語、簡体字、繁体字、韓国語に対応。
          定期的にサイトの修正と内容の更新を行っています。
          GitHubにソースコードを公開しています。
        `),
        'en': dedent(`
          A portfolio website created while learning TypeScript and Next.js.
          It supports Japanese, English, Simplified Chinese, Traditional Chinese, and Korean.
          I regularly update the site's content and make improvements.
          The source code is available on GitHub.
        `),
        'zh-CN': dedent(`
          在学习TypeScript和Next.js 的同时制作的作品集网站。
          支持日语、英语、简体中文、繁体中文和韩语。
          我会定期维护网站并更新内容。
          源代码已在GitHub上公开。
        `),
        'zh-TW': dedent(`
          在學習TypeScript和Next.js的同時製作的作品集網站。
          支援日文、英文、簡體中文、繁體中文和韓文。
          我會定期維護網站並更新內容。
          原始碼已在GitHub上公開。
        `),
        'ko': dedent(`
          TypeScript와 Next.js를 학습하면서 제작한 포트폴리오 사이트.
          일본어, 영어, 간체자, 번체자, 한국어를 지원.
          사이트를 정기적으로 수정하고 콘텐츠를 업데이트하고 있습니다.
          소스 코드는 GitHub에 공개되어 있습니다.
        `),
      }
      ,
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
          name: 'GitHub',
          link: 'https://github.com/real-shinza/shinza-s-portfolio',
          color_code: '#181717',
        },
      ],
    },
    {
      id: 'translate-number-to-strings',
      name: {
        'ja': 'Translate number to strings',
        'en': 'Translate number to strings',
        'zh-CN': 'Translate number to strings',
        'zh-TW': 'Translate number to strings',
        'ko': 'Translate number to strings',
      },
      image: '/works/translate-number-to-strings.jpg',
      description_short: {
        'ja': '数値を英語、日本語、中国語、韓国語に変換するサイト',
        'en': 'A website that converts numbers into English, Japanese, Chinese, and Korean',
        'zh-CN': '将数字转换为英语、日语、中文和韩语的网站',
        'zh-TW': '將數字轉換為英文、日文、中文和韓文的網站',
        'ko': '숫자를 영어, 일본어, 중국어, 한국어로 변환하는 사이트',
      },
      description_long: {
        'ja': dedent(`
          HTMLとCSSとJavaScriptだけで制作したシンプルなサイト。
          数値を英語、日本語、中国語、韓国語に変換します。
          GitHub Pagesを使用してサイトを公開しています。
        `),
        'en': dedent(`
          A simple website built using only HTML, CSS, and JavaScript.
          It converts numbers into English, Japanese, Chinese, and Korean.
          The site is published using GitHub Pages.
        `),
        'zh-CN': dedent(`
          仅使用 HTML、CSS 和 JavaScript 制作的简洁网站。
          可以将数字转换为英语、日语、中文和韩语。
          该网站使用GitHub Pages公开。
        `),
        'zh-TW': dedent(`
          僅使用 HTML、CSS 和 JavaScript 製作的簡潔網站。
          可以將數字轉換為英文、日文、中文和韓文。
          此網站使用GitHub Pages公開。
        `),
        'ko': dedent(`
          HTML, CSS, JavaScript만으로 제작한 간단한 사이트。
          숫자를 영어, 일본어, 중국어, 한국어로 변환합니다。
          이 사이트는 GitHub Pages를 통해 공개되어 있습니다.
        `),
      },
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
          name: 'Web Site',
          link: 'https://real-shinza.github.io/translate-number-to-strings/',
          color_code: '#52c2d0',
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
      name: {
        'ja': 'とわ 2D',
        'en': 'Towa 2D',
        'zh-CN': '永远 2D',
        'zh-TW': '永遠 2D',
        'ko': '토와 2D',
      },
      image: '/works/towa-2d.jpg',
      description_short: {
        'ja': '2D横スクロールブラウザゲーム',
        'en': 'A 2D side-scrolling browser game',
        'zh-CN': '2D横向卷轴浏览器游戏',
        'zh-TW': '2D橫向卷軸瀏覽器遊戲',
        'ko': '2D 횡스크롤 브라우저 게임입니다',
      },
      description_long: {
        'ja': dedent(`
          Unityを使用して作成した横スクロールゲーム。
          入力関連のシステムとローカライゼーションの検証を目的に作成。
          敵を倒しながらゴールへ向かう簡単なゲーム。
          キャラクターの声優は高校時代の友人に担当してもらっています。
          日本語、英語、簡体字、繁体字、韓国語、インドネシア語に対応。音声は日本語のみ対応。
        `),
        'en': dedent(`
          A side-scrolling game created using Unity.
          It was developed to test input-related systems and localization workflows.
          A simple game where you defeat enemies and head toward the goal.
          The character's voice actor is a friend from my high school days.
          Supports Japanese, English, Simplified Chinese, Traditional Chinese, Korean, and Indonesian. Voice support is available only in Japanese.
        `),
        'zh-CN': dedent(`
          使用Unity制作的横向卷轴游戏。
          开发此游戏是为了验证输入系统和本地化功能。
          这是一个一边打败敌人一边前往终点的简单游戏。
          角色的配音由我高中时期的朋友担任。
          支持日语、英语、简体中文、繁体中文、韩语和印尼语。语音仅支持日语。
        `),
        'zh-TW': dedent(`
          使用Unity製作的橫向卷軸遊戲。
          開發本遊戲是為了測試輸入系統和在地化功能。
          這是一款一邊擊敗敵人一邊前往終點的簡單遊戲。
          角色的配音由我高中時期的朋友擔任。
          支援日文、英文、簡體中文、繁體中文、韓文和印尼文。語音僅支援日文。
        `),
        'ko': dedent(`
          Unity로 제작한 횡스크롤 게임.
          입력 관련 시스템과 로컬라이제이션 기능을 검증하기 위해 개발했습니다.
          적을 쓰러뜨리며 골지점으로 향하는 간단한 게임.
          캐릭터의 성우는 고등학교 시절 친구가 맡아주었습니다.
          일본어, 영어, 간체자, 번체자, 한국어, 인도네시아어를 지원. 음성은 일본어만 지원.
        `),
      },
      skills: [
        'C#',
        'Unity 2022',
        'GitHub',
        'Visual Studio 2022',
      ],
      links: [
        {
          name: 'unityroom',
          link: 'https://unityroom.com/games/towa-2d',
          color_code: '#007bff',
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
      name: {
        'ja': 'Discordボット',
        'en': 'Discord Bot',
        'zh-CN': 'Discord机器人',
        'zh-TW': 'Discord機器人',
        'ko': 'Discord 봇',
      },
      image: '/works/discord-bot.jpg',
      description_short: {
        'ja': '多機能搭載Discordボット',
        'en': 'A multifunctional Discord bot',
        'zh-CN': '搭载多功能的Discord机器人',
        'zh-TW': '搭載多功能的Discord機器人',
        'ko': '다기능 탑재 Discord 봇',
      },
      description_long: {
        'ja': dedent(`
          Discordのボットを開発。
          音声読み上げ、ロール自動付与、誕生日お祝い、地震速報などの機能があります。
          ボットはAWS EC2上で動作。音声読み上げ機能はDockerでVOICEVOXを起動して実装。
          セキュリティ面や個人情報保護の観点からソースコードは非公開。
        `),
        'en': dedent(`
          Developed a Discord bot.
          It provides features such as text-to-speech, automatic role assignment, birthday celebrations, and earthquake alerts.
          The bot runs on AWS EC2, and the text-to-speech feature is implemented by running VOICEVOX in Docker.
          Due to security and personal data protection concerns, the source code is not publicly available.
        `),
        'zh-CN': dedent(`
          开发Discord机器人。
          具备语音朗读、自动分配角色、生日祝福、地震预警等功能。
          机器人运行在AWS EC2上，语音朗读功能是通过在Docker中运行VOICEVOX实现。
          出于安全性和个人信息保护的考虑，源代码未公开。
        `),
        'zh-TW': dedent(`
          開發Discord機器人。
          具備語音朗讀、自動分配角色、生日祝福、地震速報等功能。
          機器人在AWS EC2上執行，語音朗讀功能是透過在Docker中啟動VOICEVOX來實作。
          基於安全性和個人資料保護的考量，原始碼不公開。
        `),
        'ko': dedent(`
          Discord 봇을 개발했습니다.
          음성 읽기, 역할 자동 부여, 생일 축하, 지진 속보 등의 기능이 있습니다.
          봇은 AWS EC2에서 동작하며, 음성 읽기 기능은 Docker로 VOICEVOX를 구동하여 구현.
          보안 및 개인정보 보호 측면에서 소스 코드는 비공개.
        `),
      },
      skills: [
        'TypeScript',
        'discord.js',
        'VOICEVOX',
        'ESLint',
        'GitHub',
        'GitHub Actions',
        'Docker',
        'AWS EC2',
        'Visual Studio Code',
      ],
    },
    {
      id: 'unity-rpg',
      name: {
        'ja': 'Unity製の2D RPG',
        'en': 'A 2D RPG made with Unity',
        'zh-CN': '使用Unity制作的2D RPG',
        'zh-TW': '使用Unity製作的2D RPG',
        'ko': 'Unity로 만든 2D RPG',
      },
      image: '/works/unity-rpg.jpg',
      description_short: {
        'ja': 'Unity製の2D RPG',
        'en': 'A 2D RPG made with Unity',
        'zh-CN': '使用Unity制作的2D RPG',
        'zh-TW': '使用Unity製作的2D RPG',
        'ko': 'Unity로 만든 2D RPG',
      },
      description_long: {
        'ja': dedent(`
          Unityを使用してで2D RPGを制作中。
          開発規模がかなり大きい為、完成までまだ時間がかかりそうです。
          ソースコードは非公開。
        `),
        'en': dedent(`
          Currently developing a 2D RPG using the Unity game engine.
          The development scope is quite large, so it will likely take some time to complete.
          The source code is not publicly available.
        `),
        'zh-CN': dedent(`
          使用Unity正在开发2D RPG。
          由于开发规模相当大，预计距离完成还需要一段时间。
          源代码未公开。
        `),
        'zh-TW': dedent(`
          使用Unity正在開發2D RPG。
          由於開發規模相當大，預計距離完成還需要一些時間。
          原始碼不公開。
        `),
        'ko': dedent(`
          Unity를 사용해 2D RPG를 개발 중.
          개발 규모가 상당히 커서 완성까지는 아직 시간이 걸릴 것으로 보입니다.
          소스 코드는 비공개.
        `),
      },
      skills: [
        'C#',
        'Unity 6',
        'Odin Inspector and Serializer',
        'Easy Save 3',
        'xNode',
        'GitHub',
        'Visual Studio 2022',
        'Notion',
      ],
    },
    {
      id: 'unity-novel',
      name: {
        'ja': 'Unity製のノベルゲーム',
        'en': 'A visual novel made with Unity',
        'zh-CN': '使用Unity制作的文字冒险游戏',
        'zh-TW': '使用Unity製作的文字冒險遊戲',
        'ko': 'Unity로 만든 비주얼 노벨 게임',
      },
      image: '/works/unity-novel.jpg',
      description_short: {
        'ja': 'Unity製のノベルゲーム',
        'en': 'A visual novel made with Unity',
        'zh-CN': '使用Unity制作的文字冒险游戏',
        'zh-TW': '使用Unity製作的文字冒險遊戲',
        'ko': 'Unity로 만든 비주얼 노벨 게임',
      },
      description_long: {
        'ja': dedent(`
          Unityでノベルゲームを制作中。
          ローカライゼーションとセーブ機能の検証も兼ねています。
          2026年中までには完成させて、どこかで配信するつもりです。
          ソースコードは非公開。
        `),
        'en': dedent(`
          Currently developing a visual novel game in Unity.
          It also serves as a testbed for localization and save system features.
          I plan to complete it by sometime in 2026 and release it somewhere.
          The source code is not publicly available.
        `),
        'zh-CN': dedent(`
          使用Unity正在开发视觉小说游戏。
          也同时用于验证本地化和存档功能。
          计划在2026年内完成，并在某处发布。
          源代码未公开。
        `),
        'zh-TW': dedent(`
          使用Unity正在開發視覺小說遊戲。
          也同時用於測試在地化與存檔功能。
          計畫在2026年內完成，並在某處發布。
          原始碼不公開。
        `),
        'ko': dedent(`
          Unity로 비주얼 노벨 게임을 개발 중.
          로컬라이제이션과 세이브 기능의 검증도 겸하고 있습니다.
          2026년 중에는 완성하여 어딘가에서 배포할 예정입니다.
          소스 코드는 비공개.
        `),
      },
      skills: [
        'C#',
        'Unity 6',
        'Odin Inspector and Serializer',
        'Easy Save 3',
        'xNode',
        'GitHub',
        'Visual Studio 2022',
        'Notion',
      ],
    },
  ],
};
