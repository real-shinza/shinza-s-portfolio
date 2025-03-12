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
        'ja': 'TypeScriptとNext.jsの学習を兼ねて制作したポートフォリオサイト。\nGitHubにソースコードを公開しています。',
        'en': 'A portfolio website created as part of learning TypeScript and Next.js.\nThe source code is available on GitHub.',
        'zh-CN': '作为学习TypeScript和Next.js的一部分制作的作品集网站。\n源代码已在GitHub上公开。',
        'zh-TW': '作為學習TypeScript和Next.js的一部分製作的作品集網站。\n源代碼已在GitHub上公開。',
        'ko': 'TypeScript와 Next.js 학습을 겸해 제작한 포트폴리오 사이트입니다.\n소스 코드는 GitHub에 공개되어 있습니다.',
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
        'ja': 'HTMLとCSSで制作したシンプルなサイト。\nJavaScriptで数値を英語、日本語、中国語、韓国語に変換します。',
        'en': 'A simple website created with HTML and CSS.\nIt uses JavaScript to convert numbers into English, Japanese, Chinese, and Korean.',
        'zh-CN': '使用HTML和CSS制作的简单网站。\n使用JavaScript将数字转换为英语、日语、中文和韩语。',
        'zh-TW': '使用HTML和CSS製作的簡單網站。\n使用JavaScript將數字轉換為英文、日文、中文和韓文。',
        'ko': 'HTML과 CSS로 제작한 심플한 사이트입니다.\nJavaScript로 숫자를 영어, 일본어, 중국어, 한국어로 변환합니다.',
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
          name: 'View Site',
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
        'ja': '雑に作った横スクロールゲーム',
        'en': 'A hastily made side-scrolling game',
        'zh-CN': '随便制作的横向卷轴游戏',
        'zh-TW': '隨便製作的橫向卷軸遊戲',
        'ko': '대충 만든 횡스크롤 게임',
      },
      description_long: {
        'ja': 'ゲームエンジンのUnityを使用して作成した簡単な横スクロールゲーム。\n入力関連のシステムとローカライゼーションの検証を一番の目的に作ってみました。\n身内ネタ満載のゲームです。若干バグが残っています。\n日本語、英語、簡体字、繁体字、韓国語、インドネシア語に対応しています。',
        'en': 'A simple side-scrolling game created using the Unity game engine.\nThe main purpose was to test input systems and localization.\nThe game is full of inside jokes and still has some minor bugs.\nIt supports Japanese, English, Simplified Chinese, Traditional Chinese, Korean, and Indonesian.',
        'zh-CN': '使用Unity游戏引擎制作的简单横向卷轴游戏。\n主要目的是验证输入系统和本地化。\n游戏充满了内部梗，还存在一些小bug。\n支持日语、英语、简体中文、繁体中文、韩语和印尼语。',
        'zh-TW': '使用Unity遊戲引擎製作的簡單橫向卷軸遊戲。\n主要目的是驗證輸入系統和本地化。\n遊戲充滿了內部梗，還存在一些小bug。\n支持日語、英語、簡體中文、繁體中文、韓語和印尼語。',
        'ko': '게임 엔진 Unity를 사용해 제작한 간단한 횡스크롤 게임입니다.\n입력 시스템과 로컬라이제이션 검증을 목적으로 만들었습니다.\n내부 농담이 가득한 게임이며, 약간의 버그가 남아 있습니다.\n일본어, 영어, 간체자, 번체자, 한국어, 인도네시아어를 지원합니다.',
      },
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
        'ja': 'Discordのボットを制作しました。\n主な機能としては、音声読み上げ、ロール自動付与、誕生日お祝い、地震速報などの機能があります。\nソースコードはお見せすることができないです。',
        'en': 'I created a Discord bot.\nIts main features include text-to-speech, automatic role assignment, birthday celebrations, and earthquake alerts.\nUnfortunately, I cannot share the source code.',
        'zh-CN': '我制作了一个Discord机器人。\n其主要功能包括语音朗读、自动分配角色、生日庆祝和地震预警。\n很抱歉，我无法展示源代码。',
        'zh-TW': '我製作了一個Discord機器人。\n其主要功能包括語音朗讀、自動分配角色、生日慶祝和地震預警。\n很抱歉，我無法展示源代碼。',
        'ko': 'Discord 봇을 제작했습니다.\n주요 기능으로는 음성 읽기, 역할 자동 부여, 생일 축하, 지진 속보 등이 있습니다.\n소스 코드는 공개할 수 없습니다.',
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
        'ja': 'ゲームエンジンのUnityで2D RPGを制作中です。\n開発規模がかなり大きい為、完成まで物凄く時間がかかります。\nソースコードはお見せすることができないです。',
        'en': 'I am currently developing a 2D RPG using the Unity game engine.\nThe development scope is quite large, so it will take a considerable amount of time to complete.\nUnfortunately, I cannot share the source code.',
        'zh-CN': '我正在使用Unity游戏引擎制作2D RPG。\n开发规模非常大，因此完成需要很长时间。\n很抱歉，我无法展示源代码。',
        'zh-TW': '我正在使用Unity遊戲引擎製作2D RPG。\n開發規模非常大，因此完成需要很長時間。\n很抱歉，我無法展示源代碼。',
        'ko': '게임 엔진 Unity로 2D RPG를 개발 중입니다.\n개발 규모가 꽤 커서 완성까지 상당한 시간이 걸릴 것입니다.\n소스 코드는 공개할 수 없습니다.',
      },
      skills: [
        'C#',
        'Unity 6',
        'Odin Inspector and Serializer',
        'Easy Save 3',
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
        'ja': 'ゲームエンジンのUnityでノベルゲームを制作中です。\n一旦簡単に作れる作品を素早く完成させる目的で作成しています。\nソースコードはお見せすることができないです。',
        'en': 'I am currently developing a visual novel using the Unity game engine.\nThe goal is to quickly complete a project that can be made relatively easily.\nUnfortunately, I cannot share the source code.',
        'zh-CN': '我正在使用Unity游戏引擎制作文字冒险游戏。\n目标是快速完成一个相对容易制作的项目。\n很抱歉，我无法展示源代码。',
        'zh-TW': '我正在使用Unity遊戲引擎製作文字冒險遊戲。\n目標是快速完成一個相對容易製作的項目。\n很抱歉，我無法展示源代碼。',
        'ko': '게임 엔진 Unity로 비주얼 노벨을 개발 중입니다.\n일단 쉽게 만들 수 있는 작품을 빠르게 완성하는 것을 목표로 하고 있습니다.\n소스 코드는 공개할 수 없습니다.',
      },
      skills: [
        'C#',
        'Unity 6',
        'Odin Inspector and Serializer',
        'Easy Save 3',
        'GitHub',
        'Visual Studio 2022',
        'Notion',
      ],
    },
  ],
};
