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
          定期的にサイトの修正と内容の更新を実施。
          GitHubにソースコードを公開。
        `),
        'en': dedent(`
          Portfolio website created while learning TypeScript and Next.js.
          Supports Japanese, English, Simplified Chinese, Traditional Chinese, and Korean.
          Regularly maintained with content updates and improvements.
          Source code is publicly available on GitHub.
        `),
        'zh-CN': dedent(`
          在学习TypeScript和Next.js的同时制作的作品集网站。
          支持日语、英语、简体中文、繁体中文和韩语。
          定期进行维护并更新网站内容。
          源代码已在GitHub上公开。
        `),
        'zh-TW': dedent(`
          在學習TypeScript和Next.js的同時製作的作品集網站。
          支援日文、英文、簡體中文、繁體中文和韓文。
          定期進行維護並更新網站內容。
          原始碼已在GitHub上公開。
        `),
        'ko': dedent(`
          TypeScript와 Next.js 학습을 겸해 제작한 포트폴리오 사이트.
          일본어, 영어, 간체자, 번체자, 한국어를 지원.
          사이트 수정 및 콘텐츠 업데이트를 정기적으로 수행.
          소스 코드를 GitHub에 공개.
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
        'en': 'Website that converts numbers into English, Japanese, Chinese, and Korean',
        'zh-CN': '将数字转换为英语、日语、中文和韩语的网站',
        'zh-TW': '將數字轉換為英文、日文、中文和韓文的網站',
        'ko': '숫자를 영어, 일본어, 중국어, 한국어로 변환하는 사이트',
      },
      description_long: {
        'ja': dedent(`
          HTMLとCSSとJavaScriptだけで制作したシンプルなサイト。
          数値を英語、日本語、中国語、韓国語に変換。
          GitHub Pagesを使用してサイトを公開。
        `),
        'en': dedent(`
          Simple website built using only HTML, CSS, and JavaScript.
          Converts numbers into English, Japanese, Chinese, and Korean.
          Published using GitHub Pages.
        `),
        'zh-CN': dedent(`
          仅使用HTML、CSS和JavaScript制作的简洁网站。
          可将数字转换为英语、日语、中文和韩语。
          使用GitHub Pages对网站进行公开。
        `),
        'zh-TW': dedent(`
          僅使用HTML、CSS和JavaScript製作的簡潔網站。
          可將數字轉換為英文、日文、中文和韓文。
          使用GitHub Pages對網站進行公開。
        `),
        'ko': dedent(`
          HTML, CSS, JavaScript만으로 제작한 간단한 사이트.
          숫자를 영어, 일본어, 중국어, 한국어로 변환.
          GitHub Pages를 사용하여 사이트를 공개.
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
        'en': '2D side-scrolling browser game',
        'zh-CN': '2D横向卷轴浏览器游戏',
        'zh-TW': '2D橫向卷軸瀏覽器遊戲',
        'ko': '2D 횡스크롤 브라우저 게임입니다',
      },
      description_long: {
        'ja': dedent(`
          Unityを使用して作成した横スクロールゲーム。
          入力関連のシステムと多言語化の検証を目的として開発。
          敵を倒しながらゴールへ向かうシンプルなゲーム。
          キャラクターの声優は高校時代の友人が担当。
          日本語、英語、簡体字、繁体字、韓国語、インドネシア語に対応。音声は日本語のみ対応。
        `),
        'en': dedent(`
          Side-scrolling game created using Unity.
          Developed to verify input-related systems and multilingual functionality.
          Simple gameplay in which the player defeats enemies and moves toward the goal.
          Character voice acting provided by a friend from my high school days.
          Supports Japanese, English, Simplified Chinese, Traditional Chinese, Korean, and Indonesian. Voice is available only in Japanese.

        `),
        'zh-CN': dedent(`
          使用Unity制作的横向卷轴游戏。
          以验证输入系统和多语言功能为目的进行开发。
          通过击败敌人并前往终点的简洁游戏结构。
          角色配音由我高中时期的朋友负责。
          支持日语、英语、简体中文、繁体中文、韩语和印尼语。语音仅支持日语。
        `),
        'zh-TW': dedent(`
          使用Unity製作的橫向卷軸遊戲。
          以驗證輸入系統和多語言功能為目的進行開發。
          透過擊敗敵人並前往終點的簡潔遊戲結構。
          角色配音由我高中時期的朋友負責。
          支援日文、英文、簡體中文、繁體中文、韓文和印尼文。語音僅支援日文。
        `),
        'ko': dedent(`
          Unity로 제작한 횡스크롤 게임.
          입력 관련 시스템과 다국어 기능 검증을 목적으로 개발.
          적을 쓰러뜨리며 목표 지점으로 이동하는 단순한 게임 구성.
          캐릭터 성우는 고등학교 시절 친구가 담당.
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
        'en': 'Multifunctional Discord bot',
        'zh-CN': '搭载多功能的Discord机器人',
        'zh-TW': '搭載多功能的Discord機器人',
        'ko': '다기능 탑재 Discord 봇',
      },
      description_long: {
        'ja': dedent(`
          Discordのボットを開発。
          音声読み上げ、ロール自動付与、誕生日お祝い、地震速報などの機能を搭載。
          ボットはAWS EC2上で動作し、音声読み上げ機能はDocker上で起動したVOICEVOXにより実装。
          セキュリティ及び個人情報保護の観点からソースコードは非公開。
        `),
        'en': dedent(`
          Developed a Discord bot.
          Provides features such as text-to-speech, automatic role assignment, birthday celebrations, and earthquake alerts.
          Runs on AWS EC2, with the text-to-speech feature implemented using VOICEVOX running in Docker.
          Source code is not publicly available for security and personal data protection reasons.
        `),
        'zh-CN': dedent(`
          开发Discord机器人。
          搭载语音朗读、自动分配角色、生日祝福、地震预警等功能。
          机器人运行在AWS EC2上，语音朗读功能通过在Docker中运行VOICEVOX实现。
          出于安全性和个人信息保护的考虑，源代码未公开。
        `),
        'zh-TW': dedent(`
          開發Discord機器人。
          搭載語音朗讀、自動分配角色、生日祝福、地震速報等功能。
          機器人在AWS EC2上執行，語音朗讀功能透過在Docker中啟動VOICEVOX實作。
          基於安全性與個人資料保護的考量，原始碼不公開。
        `),
        'ko': dedent(`
          Discord 봇을 개발.
          음성 읽기, 역할 자동 부여, 생일 축하, 지진 속보 등의 기능을 탑재.
          봇은 AWS EC2에서 동작하며, 음성 읽기 기능은 Docker에서 구동하는 VOICEVOX로 구현.
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
        'en': '2D RPG made with Unity',
        'zh-CN': '使用Unity制作的2D RPG',
        'zh-TW': '使用Unity製作的2D RPG',
        'ko': 'Unity로 만든 2D RPG',
      },
      image: '/works/unity-rpg.jpg',
      description_short: {
        'ja': 'Unity製の2D RPG',
        'en': '2D RPG made with Unity',
        'zh-CN': '使用Unity制作的2D RPG',
        'zh-TW': '使用Unity製作的2D RPG',
        'ko': 'Unity로 만든 2D RPG',
      },
      description_long: {
        'ja': dedent(`
          Unityを使用して2D RPGを制作中。
          開発規模が大きく、完成までに時間を要する見込み。
          ソースコードは非公開。
        `),
        'en': dedent(`
          Currently developing a 2D RPG using the Unity game engine.
          The development scope is large, so completion is expected to take time.
          Source code is not publicly available.
        `),
        'zh-CN': dedent(`
          正在使用Unity开发2D RPG。
          由于开发规模较大，预计距离完成尚需一段时间。
          源代码未公开。
        `),
        'zh-TW': dedent(`
          正在使用Unity開發2D RPG。
          由於開發規模較大，預計距離完成尚需一段時間。
          原始碼不公開。
        `),
        'ko': dedent(`
          Unity를 사용해 2D RPG를 개발 중.
          개발 규모가 커 완성까지 시간이 소요될 예정.
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
        'en': 'Visual novel made with Unity',
        'zh-CN': '使用Unity制作的文字冒险游戏',
        'zh-TW': '使用Unity製作的文字冒險遊戲',
        'ko': 'Unity로 만든 비주얼 노벨 게임',
      },
      image: '/works/unity-novel.jpg',
      description_short: {
        'ja': 'Unity製のノベルゲーム',
        'en': 'Visual novel made with Unity',
        'zh-CN': '使用Unity制作的文字冒险游戏',
        'zh-TW': '使用Unity製作的文字冒險遊戲',
        'ko': 'Unity로 만든 비주얼 노벨 게임',
      },
      description_long: {
        'ja': dedent(`
          Unityでノベルゲームを制作中。
          ローカライゼーションとセーブ機能の検証も兼ねて開発。
          2026年中の完成および配信を予定。
          ソースコードは非公開。
        `),
        'en': dedent(`
          Currently developing a visual novel game in Unity.
          Also used as a testbed for localization and save system features.
          Planned to be completed and released sometime in 2026.
          Source code is not publicly available.
        `),
        'zh-CN': dedent(`
          正在使用Unity开发文字冒险游戏。
          同时用于验证本地化和存档功能。
          计划在2026年内完成并进行发布。
          源代码未公开。
        `),
        'zh-TW': dedent(`
          正在使用Unity開發文字冒險遊戲。
          同時用於測試在地化與存檔功能。
          計畫於2026年內完成並進行發布。
          原始碼不公開。
        `),
        'ko': dedent(`
          Unity로 비주얼 노벨 게임을 개발 중.
          로컬라이제이션과 세이브 기능 검증을 겸해 개발.
          2026년 내 완성 및 배포를 예정.
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
