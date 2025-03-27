import { BiographyDocument } from '../common/type';

export const biography: BiographyDocument = {
  id: 'biography',
  title: {
    'ja': '略歴',
    'en': 'Biography',
    'zh-CN': '简历',
    'zh-TW': '簡歷',
    'ko': '약력',
  },
  subtitle: {
    period: {
      'ja': '期間',
      'en': 'Period',
      'zh-CN': '期间',
      'zh-TW': '期間',
      'ko': '기간',
    },
    detail: {
      'ja': '詳細',
      'en': 'Details',
      'zh-CN': '详细',
      'zh-TW': '詳細',
      'ko': '상세',
    },
    skill: {
      'ja': 'スキル',
      'en': 'Skill',
      'zh-CN': '技能',
      'zh-TW': '技能',
      'ko': '스킬',
    },
  },
  sections: [
    {
      subtitle: {
        'ja': '学歴',
        'en': 'Educational background',
        'zh-CN': '学历',
        'zh-TW': '學歷',
        'ko': '학력',
      },
      entries: [
        {
          id: 'kanazawa-hokuryo-high-school',
          period:  {
            'ja': '2016年4月 ~ 2019年3月',
            'en': 'Apr. 2016 ~ Mar. 2019',
            'zh-CN': '2016年4月 ~ 2019年3月',
            'zh-TW': '2016年4月 ~ 2019年3月',
            'ko': '2016년 4월 ~ 2019년 3월',
          },
          name: {
            'ja': '石川県立金沢北稜高等学校 総合学科',
            'en': 'General Studies Department, Ishikawa Prefectural Kanazawa Hokuryo High School',
            'zh-CN': '石川县立金泽北陵高级中学 综合学科',
            'zh-TW': '石川縣立金澤北陵高級中學 綜合學科',
            'ko': '이시카와 현립 가나자와 호쿠료 고등학교 종합학과',
          },
          detail: {
            'ja': '工業コースで溶接、旋盤、製図、プログラミングなどを学習していました。',
            'en': 'I studied welding, lathe work, drafting, and programming in an industrial course.',
            'zh-CN': '我在工业课程中学习了焊接、车床、制图和编程等。',
            'zh-TW': '我在工業課程中學習了焊接、車床、製圖和程式設計等。',
            'ko': '산업 과정에서 용접, 선반, 제도, 프로그래밍 등을 배웠습니다.',
          },
        },
        {
          id: 'human-academy-kyoto-campus',
          period:  {
            'ja': '2019年4月 ~ 2021年3月',
            'en': 'Apr. 2019 ~ Mar. 2021',
            'zh-CN': '2019年4月 ~ 2021年3月',
            'zh-TW': '2019年4月 ~ 2021年3月',
            'ko': '2019년 4월 ~ 2021년 3월',
          },
          name: {
            'ja': '総合学園ヒューマンアカデミー京都校 プログラマー専攻',
            'en': 'Programmer Major, Sogo Gakuen Human Academy Kyoto Campus',
            'zh-CN': '综合学院Human Academy京都校 程序员专攻',
            'zh-TW': '綜合學園Human Academy京都校 程式設計專攻',
            'ko': '종합학원 휴먼 아카데미 교토 캠퍼스 프로그래머 전공',
          },
          detail: {
            'ja': '主に C / C++ を使用したゲームプログラミングとアルゴリズムについて学習し、DirectX9 を用いた2D/3D描画、入力処理、音声出力処理の実装を学習しました。\nまた、デザイン専攻の学生も交えて、複数人でのチーム開発を行いゲーム制作を行いました。\n個人的にも Unity と C# を学び、ゲーム開発の基礎とゲームロジックの設計について理解を深めました。',
            'en': 'I mainly studied game programming and algorithms using C / C++ and learned how to implement 2D/3D rendering, input processing, and audio output processing using DirectX9.\nI also worked on game development in a team with design-major students.\nIndividually, I learned Unity and C# to deepen my understanding of game development fundamentals and game logic design.',
            'zh-CN': '我主要学习了使用 C / C++ 进行游戏编程和算法，并学习了如何使用 DirectX9 实现 2D/3D 渲染、输入处理和音频输出处理。\n此外，我还与设计专业的学生一起进行团队开发，共同制作游戏。\n个人方面，我也学习了 Unity 和 C#，加深了对游戏开发基础和游戏逻辑设计的理解。',
            'zh-TW': '我主要學習了使用 C / C++ 進行遊戲程式設計和演算法，並學習了如何使用 DirectX9 實現 2D/3D 繪圖、輸入處理和音效輸出處理。\n此外，我還與設計專業的學生一起進行團隊開發，共同製作遊戲。\n個人方面，我也學習了 Unity 和 C#，加深了對遊戲開發基礎和遊戲邏輯設計的理解。',
            'ko': '주로 C / C++ 를 사용한 게임 프로그래밍과 알고리즘을 학습하며 DirectX9 를 이용한 2D/3D 렌더링, 입력 처리, 오디오 출력 처리를 구현하는 방법을 배웠습니다.\n또한, 디자인 전공 학생들과 함께 팀 개발을 진행하며 게임을 제작했습니다.\n개인적으로도 Unity 와 C# 을 학습하여 게임 개발의 기초와 게임 로직 설계에 대한 이해를 깊이었습니다.',
          },
          skills: [
            'C',
            'C++',
            'C#',
            'Unity',
            'DirectX9',
            'Git',
            'GitHub',
          ],
        },
        {
          id: 'tokyo-online-university',
          period:  {
            'ja': '2022年4月 ~ 現在',
            'en': 'Apr. 2022 ~ Now',
            'zh-CN': '2022年4月 ~ 现在',
            'zh-TW': '2022年4月 ~ 現在',
            'ko': '2022년 4월 ~ 현재',
          },
          name: {
            'ja': '東京通信大学 情報マネジメント学部',
            'en': 'Faculty of Information and Management, Tokyo Online University',
            'zh-CN': '东京通信大学 信息管理学部',
            'zh-TW': '東京通信大學 資訊管理學部',
            'ko': '도쿄통신대학 정보매니지먼트학부',
          },
          detail: {
            'ja': '正社員として働きながら通信制大学に在学。\nプログラミングの基礎、セキュリティの概念、ネットワーク、データベースについて学んでいます。',
            'en': 'I am enrolled in a distance learning university while working as a full-time employee.\nI am studying the fundamentals of programming, security concepts, networking, and databases.',
            'zh-CN': '在全职工作的同时，就读于远程教育大学。\n学习编程基础、安全概念、网络和数据库。',
            'zh-TW': '在全職工作的同時，就讀於遠距教學大學。\n學習程式設計基礎、安全概念、網路和資料庫。',
            'ko': '정규직으로 근무하면서 사이버 대학에 재학 중입니다.\n프로그래밍 기초, 보안 개념, 네트워크 및 데이터베이스를 공부하고 있습니다.',
          },
          skills: [
            'Java',
            'Python3',
          ],
        },
      ],
    },
    {
      subtitle: {
        'ja': '職歴',
        'en': 'Work experience',
        'zh-CN': '职业经历',
        'zh-TW': '職歷',
        'ko': '직력',
      },
      entries: [
        {
          id: 'ses-company',
          period:  {
            'ja': '2021年4月 ~ 2025年3月',
            'en': 'Apr. 2021 ~ Mar. 2025',
            'zh-CN': '2021年4月 ~ 2025年3月',
            'zh-TW': '2021年4月 ~ 2025年3月',
            'ko': '2021년 4월 ~ 2025년 3월',
          },
          name: {
            'ja': '東京都内の某SES企業',
            'en': 'A Certain SES Company in Tokyo',
            'zh-CN': '东京都内某SES公司',
            'zh-TW': '東京都內某SES公司',
            'ko': '도쿄도 내의 특정 SES 기업',
          },
          detail: {
            'ja': '21新卒として入社。\n2022年11月全社表彰。\n2023年7月主任に昇格。\n2024年7月主査に昇格。',
            'en': 'Joined the company as a new graduate in 2021.\nCompany-wide award in November 2022.\nPromoted to Senior Staff in July 2023.\nPromoted to Chief Staff in July 2024.',
            'zh-CN': '作为2021届应届毕业生入职。\n2022年11月获得全公司表彰。\n2023年7月晋升为主任。\n2024年7月晋升为主査。',
            'zh-TW': '作為2021屆應屆畢業生入職。\n2022年11月獲得全公司表揚。\n2023年7月晉升為主任。\n2024年7月晉升為主查。',
            'ko': '2021년 신입 사원으로 입사.\n2022년 11월 전사 표창.\n2023년 7월 주임으로 승진.\n2024년 7월 주사로 승진.',
          },
          skills: [
            'Java',
            'Python3',
            'Linux',
            'Google Chat',
          ],
        },
        {
          id: 'driver-system-integration-testing',
          period:  {
            'ja': '2021年7月 ~ 2021年10月',
            'en': 'Jul. 2021 ~ Oct. 2021',
            'zh-CN': '2021年7月 ~ 2021年10月',
            'zh-TW': '2021年7月 ~ 2021年10月',
            'ko': '2021년 7월 ~ 2021년 10월',
          },
          name: {
            'ja': 'ドライバーシステム結合テスト実施業務',
            'en': 'Driver system integration testing duties',
            'zh-CN': '执行司机系统集成测试的工作',
            'zh-TW': '執行司機系統結合測試的業務',
            'ko': '드라이버 시스템 통합 테스트 수행 업무',
          },
          detail: {
            'ja': '自社開発のWebアプリとAndroidアプリの結合テストに参画し、品質向上を担当。\n主にテストシナリオの作成・テスト管理・品質管理シートの作成を担当し、納品まで対応。',
            'en': 'Participated in the integration testing of in-house developed Web and Android applications, focusing on quality improvement.\nMainly responsible for creating test scenarios, test management, and preparing quality control sheets, ensuring completion up to delivery.',
            'zh-CN': '参与公司自主开发的Web应用和Android应用的集成测试，负责质量提升。\n主要负责编写测试场景、测试管理以及质量管理表的制作，并跟进至交付。',
            'zh-TW': '參與公司自主開發的Web應用和Android應用的整合測試，負責提升品質。\n主要負責編寫測試場景、測試管理以及品質管理表的製作，並跟進至交付。',
            'ko': '자사 개발 Web 애플리케이션과 Android 애플리케이션의 통합 테스트에 참여하여 품질 향상을 담당.\n주로 테스트 시나리오 작성, 테스트 관리, 품질 관리 시트 작성 업무를 맡아 납품까지 대응.',
          },
          skills: [
            'Android',
            'Windows',
            'Excel',
            'Google Chat',
          ],
        },
        {
          id: 'business-tool-integration-testing',
          period:  {
            'ja': '2021年11月',
            'en': 'Nov. 2021',
            'zh-CN': '2021年11月',
            'zh-TW': '2021年11月',
            'ko': '2021년 11월',
          },
          name: {
            'ja': '業務ツール結合テスト実施業務',
            'en': 'Business tool integration testing duties',
            'zh-CN': '执行业务工具集成测试的工作',
            'zh-TW': '執行業務工具結合測試的業務',
            'ko': '업무 도구 통합 테스트 수행 업무',
          },
          detail: {
            'ja': '',
            'en': '',
            'zh-CN': '',
            'zh-TW': '',
            'ko': '',
          },
          skills: [
            'Excel',
            'Microsoft Teams',
          ],
        },
        {
          id: 'technical-support-for-web-advertising',
          period:  {
            'ja': '2021年12月 ~ 2023年8月',
            'en': 'Dec. 2021 ~ Aug. 2023',
            'zh-CN': '2021年12月 ~ 2023年8月',
            'zh-TW': '2021年12月 ~ 2023年8月',
            'ko': '2021년 12월 ~ 2023년 8월',
          },
          name: {
            'ja': 'Web広告技術的サポート業務',
            'en': 'Technical support for web advertising',
            'zh-CN': 'Web广告技术支持工作',
            'zh-TW': 'Web廣告技術支持業務',
            'ko': 'Web 광고 기술 지원 업무',
          },
          detail: {
            'ja': 'タグマネージャーのGoogle Tag Managerを用いて、Google、Yahoo、Meta、LINEなどの様々な広告計測タグの設定をJavaScriptで行いました。\nスプレッドシートなどで管理して行っている業務などを半自動化させ業務効率化を図りました。\n社内ツールや外部のサービスを用いて広告の実績データを取得し、管理・活用の仕組みを構築しました。',
            'en': 'Configured various ad tracking tags for Google, Yahoo, Meta, and LINE using Google Tag Manager and JavaScript.\nAutomated tasks managed in spreadsheets and other tools to improve work efficiency.\nBuilt a system for collecting, managing, and utilizing ad performance data using in-house tools and external services.',
            'zh-CN': '使用Google Tag Manager配置了Google、Yahoo、Meta、LINE等各种广告跟踪标签，并通过JavaScript进行设置。\n对在电子表格等工具中管理的任务进行了半自动化，以提高工作效率。\n利用内部工具和外部服务获取广告的实际数据，并建立了管理和活用的机制。',
            'zh-TW': '使用Google Tag Manager配置了Google、Yahoo、Meta、LINE等各種廣告追蹤標籤，並透過JavaScript進行設定。\n對在電子表格等工具中管理的作業進行半自動化，以提升工作效率。\n利用內部工具和外部服務獲取廣告的實績數據，並建立了管理與活用的機制。',
            'ko': 'Google Tag Manager를 사용하여 Google, Yahoo, Meta, LINE 등의 다양한 광고 추적 태그를 JavaScript로 설정했습니다.\n스프레드시트 등에서 관리하는 업무를 반자동화하여 업무 효율성을 향상시켰습니다.\n사내 도구와 외부 서비스를 활용하여 광고 실적 데이터를 수집하고, 이를 관리·활용하는 시스템을 구축했습니다.',
          },
          skills: [
            'JavaScript',
            'Python3',
            'SQL',
            'jQuery',
            'Node.js',
            'Google Apps Script',
            'Slack API',
            'Google Drive API',
            'Cloud Functions',
            'Cloud Storage',
            'BigQuery',
            'TROCCO',
            'Git',
            'GitHub',
            'Google Tag Manager',
            'Google Analytics',
            'Slack',
            'Chatwork',
          ],
        },
        {
          id: 'ai-sales-bot-development',
          period:  {
            'ja': '2023年9月 ~ 2025年2月',
            'en': 'Sep. 2023 ~ Feb. 2025',
            'zh-CN': '2023年9月 ~ 2025年2月',
            'zh-TW': '2023年9月 ~ 2025年2月',
            'ko': '2023년 9월 ~ 2025년 2월',
          },
          name: {
            'ja': 'AI営業ボット開発業務',
            'en': 'AI sales bot development duties',
            'zh-CN': 'AI销售机器人开发工作',
            'zh-TW': 'AI銷售機器人開發業務',
            'ko': 'AI 영업 봇 개발 업무',
          },
          detail: {
            'ja': 'インターネット広告代理店におけるAI営業Slackボットの開発・保守業務。\nプロダクトマネージャーが作成した要件定義書を基にデザインドキュメントの作成、コーディング、レビュー、QA、デプロイを行いました。',
            'en': 'Developed and maintained an AI sales Slack bot for an internet advertising agency.\nBased on the requirements document created by the product manager, I created design documents, coded, reviewed, performed QA, and deployed the system.',
            'zh-CN': '在互联网广告代理公司负责AI销售Slack机器人开发与维护。\n根据产品经理编写的需求定义文档，进行设计文档的编写、编码、代码审核、QA测试和部署。',
            'zh-TW': '在網路廣告代理公司負責AI銷售Slack機器人的開發與維護。\n根據產品經理撰寫的需求定義文件，進行設計文件的編寫、程式撰寫、代碼審查、QA測試及部署。',
            'ko': '인터넷 광고 대행사에서 AI 영업 Slack 봇의 개발 및 유지보수를 담당.\n프로덕트 매니저가 작성한 요구 사항 정의서를 기반으로 디자인 문서 작성, 코딩, 코드 리뷰, QA, 배포를 수행했습니다.',
          },
          skills: [
            'TypeScript',
            'Python3',
            'Node.js',
            'Express.js',
            'FastAPI',
            'Bolt for JavaScript',
            'Amazon ECS',
            'Amazon S3',
            'Amazon EventBridge',
            'Amazon CloudWatch',
            'AWS WAF',
            'AWS CDK',
            'BigQuery',
            'Google Drive API',
            'Git',
            'GitHub',
            'Docker',
            'Datadog',
            'Slack',
            'Notion',
            'Miro',
          ],
        },
        {
          id: 'landing-page-production',
          period:  {
            'ja': '2025年3月 ~ 現在',
            'en': 'Mar. 2025 ~ Now',
            'zh-CN': '2025年3月 ~ 现在',
            'zh-TW': '2025年3月 ~ 現在',
            'ko': '2025년 3월 ~ 현재',
          },
          name: {
            'ja': 'ランディングページ制作及び広告計測業務',
            'en': 'Landing Page production and advertisement measurement',
            'zh-CN': '落地页制作及广告测量业务',
            'zh-TW': '登陸頁製作及廣告測量業務',
            'ko': '랜딩 페이지 제작 및 광고 측정 업무',
          },
          detail: {
            'ja': 'ランディングページの作成と計測を業務委託として対応。',
            'en': 'Handled the creation and tracking of landing pages as a contracted project.',
            'zh-CN': '以外包形式负责落地页的制作与数据监测。',
            'zh-TW': '以外包形式負責落地頁的製作與數據監測。',
            'ko': '외주 계약으로 랜딩 페이지 제작 및 측정을 담당.',
          },
          skills: [
            'HTML5',
            'CSS3',
            'PHP',
            'WordPress',
            'Git',
            'GitHub',
            'Google Tag Manager',
            'Google Analytics',
            'Slack',
            'Notion',
            'Figma',
          ],
        },
      ],
    },
  ],
};
