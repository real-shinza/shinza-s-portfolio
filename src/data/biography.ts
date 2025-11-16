import dedent from 'ts-dedent';
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
          period: {
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
          },detail: {
            'ja': dedent(`
              工業コースで溶接、旋盤、製図、プログラミングなどを学習。
            `),
            'en': dedent(`
              Studied welding, lathe work, drafting, and programming in an industrial course.
            `),
            'zh-CN': dedent(`
              在工业课程中学习焊接、车床、制图和编程等内容。
            `),
            'zh-TW': dedent(`
              在工業課程中學習焊接、車床、製圖和程式設計等內容。
            `),
            'ko': dedent(`
              공업 코스에서 용접, 선반, 제도, 프로그래밍 등을 학습.
            `),
          },
        },
        {
          id: 'human-academy-kyoto-campus',
          period: {
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
            'ja': dedent(`
              主にC/C++を使用したゲームプログラミングを学習し、DirectX9を用いた2D/3D描画、入力処理、音声出力処理の実装を習得。
              デザイン専攻の学生を含む7人チームでのゲーム開発を経験。
              自己学習としてUnity C#、ゲーム開発の基礎、ゲームロジック設計を学習。
            `),
            'en': dedent(`
              Studied game programming mainly using C/C++, acquiring implementation skills for 2D/3D rendering, input handling, and audio output with DirectX9.
              Gained experience in game development as part of a seven member team including design majors.
              Conducted self-study in Unity C#, game development fundamentals, and game logic design.
            `),
            'zh-CN': dedent(`
              主要学习使用C/C++进行游戏编程，并掌握使用DirectX9实现2D/3D渲染、输入处理和音频输出。
              参与包含设计专业学生在内的七人团队进行游戏开发。
              自行学习Unity C#、游戏开发基础和游戏逻辑设计。
            `),
            'zh-TW': dedent(`
              主要學習使用C/C++進行遊戲程式設計，並掌握使用DirectX9實作2D/3D繪圖、輸入處理與音訊輸出。
              參與包含設計專攻學生在內的七人團隊進行遊戲開發。
              自行學習Unity C#、遊戲開發基礎與遊戲邏輯設計。
            `),
            'ko': dedent(`
              주로 C/C++를 사용한 게임 프로그래밍을 학습하고 DirectX9를 활용한 2D/3D 렌더링, 입력 처리, 음성 출력 구현을 습득.
              디자인 전공 학생을 포함한 7인 팀으로 게임 개발을 수행.
              Unity C#, 게임 개발 기초, 게임 로직 설계를 자체적으로 학습.
            `),
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
          period: {
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
            'ja': dedent(`
              通信制大学に在学。2026年3月卒業見込み。
              正社員として勤務しながら学習を継続。
              プログラミングの基礎、セキュリティの概念、ネットワーク、データベースなどを履修。
            `),
            'en': dedent(`
              Enrolled in a distance learning university, expected to graduate in March 2026.
              Continuing studies while working full-time as a permanent employee.
              Taking courses in programming fundamentals, security concepts, networking, databases, and related fields.
            `),
            'zh-CN': dedent(`
              就读于通信制大学，预计于2026年3月毕业。
              一边作为正式员工全职工作，一边持续学习。
              修读编程基础、安全概念、网络、数据库等相关课程。
            `),
            'zh-TW': dedent(`
              就讀於通訊制大學，預計於2026年3月畢業。
              一邊作為正職員工全職工作，一邊持續學習。
              修讀程式基礎、安全概念、網路、資料庫等相關課程。
            `),
            'ko': dedent(`
              통신제 대학교에 재학 중이며 2026년 3월 졸업 예정.
              정규직으로 근무하면서 학업을 병행.
              프로그래밍 기초, 보안 개념, 네트워크, 데이터베이스 등의 과목을 이수.
            `),
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
        'ko': '경력',
      },
      entries: [
        {
          id: 'ses-company',
          period: {
            'ja': '2021年4月 ~ 2025年3月',
            'en': 'Apr. 2021 ~ Mar. 2025',
            'zh-CN': '2021年4月 ~ 2025年3月',
            'zh-TW': '2021年4月 ~ 2025年3月',
            'ko': '2021년 4월 ~ 2025년 3월',
          },
          name: {
            'ja': '東京都内の某SES企業',
            'en': 'A certain IT outsourcing company in Tokyo',
            'zh-CN': '东京都内的某IT外包公司',
            'zh-TW': '東京都內的某IT外包公司',
            'ko': '도쿄도 내의 어느 IT 아웃소싱 회사',
          },
          detail: {
            'ja': dedent(`
              21新卒として入社。
              2022年11月に全社表彰を受賞。
              2023年7月に主任へ昇格。
              2024年7月に主査へ昇格。
            `),
            'en': dedent(`
              Joined the company as a new graduate in 2021.
              Received a company-wide award in November 2022.
              Promoted to Senior Staff in July 2023.
              Promoted to Chief Staff in July 2024.
            `),
            'zh-CN': dedent(`
              作为2021届应届毕业生入职。
              于2022年11月获得全公司表彰。
              2023年7月晋升为主任。
              2024年7月晋升为主查。
            `),
            'zh-TW': dedent(`
              作為2021屆應屆畢業生入職。
              於2022年11月獲得全公司表揚。
              2023年7月晉升為主任。
              2024年7月晉升為主查。
            `),
            'ko': dedent(`
              2021년 신입 사원으로 입사.
              2022년 11월 전사 표창을 수상.
              2023년 7월 주임으로 승진.
              2024년 7월 주사로 승진.
            `),
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
          period: {
            'ja': '2021年7月 ~ 2021年10月',
            'en': 'Jul. 2021 ~ Oct. 2021',
            'zh-CN': '2021年7月 ~ 2021年10月',
            'zh-TW': '2021年7月 ~ 2021年10月',
            'ko': '2021년 7월 ~ 2021년 10월',
          },
          name: {
            'ja': 'ドライバーシステム結合テスト実施業務',
            'en': 'Driver system integration testing duties',
            'zh-CN': '执行司机系统集成测试的业务',
            'zh-TW': '執行司機系統結合測試的業務',
            'ko': '드라이버 시스템 통합 테스트 수행 업무',
          },
          detail: {
            'ja': dedent(`
              自社開発のWebアプリとAndroidアプリの結合テストに参画し、品質向上を担当。
              テストシナリオの作成、テスト管理、品質管理シートの作成を実施し、納品まで対応。
            `),
            'en': dedent(`
              Participated in integration testing of in-house developed web and Android applications with a focus on quality improvement.
              Created test scenarios, managed test execution, and prepared quality control sheets through to delivery.
            `),
            'zh-CN': dedent(`
              参与公司自研的Web应用和Android应用的集成测试工作，负责质量提升。
              负责编写测试场景、管理测试执行以及制作质量管理表，并跟进至最终交付。
            `),
            'zh-TW': dedent(`
              參與公司自研的Web應用和Android應用的整合測試業務，負責品質提升。
              負責撰寫測試情境、管理測試執行以及製作品質管理表，並跟進至最終交付。
            `),
            'ko': dedent(`
              자사 개발 Web 애플리케이션과 Android 애플리케이션의 통합 테스트에 참여하여 품질 향상을 담당.
              테스트 시나리오 작성, 테스트 관리, 품질 관리 시트 작성을 수행하고 납품까지 대응.
            `),
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
          period: {
            'ja': '2021年11月',
            'en': 'Nov. 2021',
            'zh-CN': '2021年11月',
            'zh-TW': '2021年11月',
            'ko': '2021년 11월',
          },
          name: {
            'ja': '業務ツール結合テスト実施業務',
            'en': 'Business tool integration testing duties',
            'zh-CN': '执行业务工具集成测试的业务',
            'zh-TW': '執行業務工具結合測試的業務',
            'ko': '업무 도구 통합 테스트 수행 업무',
          },
          detail: {
            'ja': dedent(`
              コミュニケーションツールの結合テストに従事し、仕様通りの動作確認を担当。
              事前に作成されたテスト項目に基づきテストを実施し、バグの発見・報告および品質改善のためのフィードバックを実施。
            `),
            'en': dedent(`
              Engaged in integration testing of a communication tool and responsible for verifying behavior against specifications.
              Executed tests based on predefined test cases and handled bug identification, reporting, and feedback for quality improvement.
            `),
            'zh-CN': dedent(`
              负责通信工具的集成测试，确认系统是否按照规格正常运行。
              根据预先制定的测试项目执行测试，进行缺陷发现与报告，并提供反馈以提升质量。
            `),
            'zh-TW': dedent(`
              負責通訊工具的整合測試，確認系統是否依照規格正常運作。
              依據預先制定的測試項目執行測試，進行缺陷發現與回報，並提供回饋以提升品質。
            `),
            'ko': dedent(`
              커뮤니케이션 도구의 통합 테스트를 수행하며 명세서에 따른 동작을 검증.
              사전에 정의된 테스트 항목에 따라 테스트를 수행하고, 버그를 발견·보고하며 품질 개선을 위한 피드백을 제공.
            `),
          },
          skills: [
            'Excel',
            'Microsoft Teams',
          ],
        },
        {
          id: 'technical-support-for-web-advertising',
          period: {
            'ja': '2021年12月 ~ 2023年8月',
            'en': 'Dec. 2021 ~ Aug. 2023',
            'zh-CN': '2021年12月 ~ 2023年8月',
            'zh-TW': '2021年12月 ~ 2023年8月',
            'ko': '2021년 12월 ~ 2023년 8월',
          },
          name: {
            'ja': 'Web広告技術的サポート業務',
            'en': 'Technical support for web advertising',
            'zh-CN': 'Web广告技术支持业务',
            'zh-TW': 'Web廣告技術支持業務',
            'ko': 'Web 광고 기술 지원 업무',
          },
          detail: {
            'ja': dedent(`
              # Web広告計測タグ設定
              Google Tag Managerを用いて、Google、Yahoo、Meta、LINEなどの各種広告計測タグを設定。
              実装にはJavaScriptを使用。

              # GASを用いた小規模な業務効率化
              スプレッドシート等で管理している業務を半自動化し、業務効率化を推進。
              残業予想時間が一定以上となる場合にSlackで警告を行うシステムを開発。

              # Web広告計測データ管理・活用
              社内ツールや外部サービスを用いて広告実績データを取得し、管理・活用の仕組みを構築。
              主にBigQuery上にデータを集約し、広告運用の改善に活用。
            `),
            'en': dedent(`
              # Web advertising measurement tag configuration
              Configured various advertising measurement tags such as Google, Yahoo, Meta, and LINE using Google Tag Manager.
              Used JavaScript for implementation.

              # Small-scale workflow automation with GAS
              Semi-automated tasks managed in spreadsheets and other tools using Google Apps Script to improve operational efficiency.
              Developed a Slack alert system that sends warnings when predicted overtime exceeds a predefined threshold.

              # Web advertising data management and utilization
              Built mechanisms to retrieve, manage, and utilize advertising performance data using internal tools and external services.
              Consolidated data primarily in BigQuery and applied it to improve advertising operations.
            `),
            'zh-CN': dedent(`
              # Web广告监测标签设置
              使用Google Tag Manager配置Google、Yahoo、Meta、LINE等各类广告监测标签。
              实现部分使用JavaScript。

              # 使用GAS的小规模业务自动化
              通过Google Apps Script将以电子表格等方式管理的业务实现半自动化，以提升工作效率。
              开发在预计加班时间超过一定阈值时通过Slack发出警告的系统。

              # Web广告数据管理与利用
              使用公司内部工具及外部服务获取广告实绩数据，并构建数据管理与应用机制。
              主要将数据汇总至BigQuery，并用于优化广告投放运营。
            `),
            'zh-TW': dedent(`
              # Web廣告成效標籤設定
              使用Google Tag Manager設定Google、Yahoo、Meta、LINE等各類廣告成效追蹤標籤。
              實作部分使用JavaScript。

              # 使用GAS進行小規模業務效率化
              透過Google Apps Script將以試算表等方式管理的業務半自動化，以提升作業效率。
              開發在預估加班時間超過一定門檻時於Slack發出警告的系統。

              # Web廣告數據管理與活用
              使用公司內部工具及外部服務取得廣告實績數據，並建立數據管理與活用機制。
              主要將數據集中於BigQuery，並用於優化廣告投放營運。
            `),
            'ko': dedent(`
              # 웹 광고 측정 태그 설정
              Google Tag Manager를 사용하여 Google, Yahoo, Meta, LINE 등의 다양한 광고 측정 태그를 설정.
              구현에는 JavaScript를 사용.

              # GAS를 활용한 소규모 업무 효율화
              Google Apps Script를 활용하여 스프레드시트 등으로 관리하던 업무를 반자동화하고 업무 효율을 향상.
              예상 잔업 시간이 특정 기준을 초과할 경우 Slack으로 경고를 발송하는 시스템을 개발.

              # 웹 광고 데이터 관리 및 활용
              사내 도구와 외부 서비스를 사용해 광고 실적 데이터를取得·관리·활용하는 체계를 구축.
              주로 BigQuery에 데이터를 집약하여 광고 운영 개선에 활용.
            `),
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
          period: {
            'ja': '2023年9月 ~ 2025年2月',
            'en': 'Sep. 2023 ~ Feb. 2025',
            'zh-CN': '2023年9月 ~ 2025年2月',
            'zh-TW': '2023年9月 ~ 2025年2月',
            'ko': '2023년 9월 ~ 2025년 2월',
          },
          name: {
            'ja': 'AI営業ボット開発業務',
            'en': 'AI sales bot development duties',
            'zh-CN': 'AI销售机器人开发业务',
            'zh-TW': 'AI銷售機器人開發業務',
            'ko': 'AI 영업 봇 개발 업무',
          },
          detail: {
            'ja': dedent(`
              インターネット広告代理店におけるAI営業Slackボットの開発・保守業務を担当。
              プロダクトマネージャーが作成した要件定義書に基づき、デザインドキュメント作成、コーディング、レビュー、QA、デプロイを実施。
              開発手法としてスクラムを採用。
            `),
            'en': dedent(`
              Responsible for the development and maintenance of an AI sales Slack bot for an online advertising agency.
              Created design documents, implemented code, conducted reviews, performed QA, and handled deployment based on requirements defined by the product manager.
              Employed Scrum as the development methodology.
            `),
            'zh-CN': dedent(`
              在互联网广告代理公司负责AI销售Slack机器人的开发与维护工作。
              根据产品经理编写的需求文档，执行设计文档编写、编码、代码审查、QA以及部署等任务。
              采用Scrum作为开发方法。
            `),
            'zh-TW': dedent(`
              在網路廣告代理公司負責AI銷售Slack機器人的開發與維護工作。
              根據產品經理撰寫的需求定義文件，執行設計文件撰寫、程式開發、程式碼審查、QA與部署等工作。
              採用Scrum作為開發方法。
            `),
            'ko': dedent(`
              인터넷 광고 대행사에서 AI 영업 Slack 봇의 개발 및 유지보수를 담당.
              프로덕트 매니저가 작성한 요구사항 정의서를 기반으로 디자인 문서 작성, 코딩, 리뷰, QA, 배포를 수행.
              개발 방법론으로 스크럼을 적용.
            `),
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
            'GitHub Actions',
            'GitHub Copilot',
            'Docker',
            'Datadog',
            'Slack',
            'Notion',
            'Miro',
          ],
        },
        {
          id: 'landing-page-production',
          period: {
            'ja': '2025年3月 ~ 2025年5月',
            'en': 'Mar. 2025 ~ May 2025',
            'zh-CN': '2025年3月 ~ 2025年5月',
            'zh-TW': '2025年3月 ~ 2025年5月',
            'ko': '2025년 3월 ~ 2025년 5월',
          },
          name: {
            'ja': 'ランディングページ制作及び広告計測業務',
            'en': 'Landing Page production and advertisement measurement',
            'zh-CN': '落地页制作及广告测量业务',
            'zh-TW': '登陸頁製作及廣告測量業務',
            'ko': '랜딩 페이지 제작 및 광고 측정 업무',
          },
          detail: {
            'ja': dedent(`
              業務委託としてプロジェクトに参画。
              ランディングページの新規作成および既存コーポレートサイトの改修を担当。
              既存のGitHub運用ルールを見直し、運用フローを改善。
              バージョン管理が行われていないプロジェクトにGitHubを導入。
              GitHub Actionsを用いた本番反映自動化の仕組みを構築。
              Dockerなどを用いてローカル開発環境を構築。
            `),
            'en': dedent(`
              Participated in the project as an independent contractor.
              Handled the creation of new landing pages and the modification of existing corporate websites.
              Reviewed and improved existing GitHub operation rules and workflows.
              Introduced GitHub to projects that previously had no version control.
              Built an automated production deployment workflow using GitHub Actions.
              Set up local development environments using tools such as Docker.
            `),
            'zh-CN': dedent(`
              以业务委托的形式参与项目。
              负责新建落地页以及改修现有的企业网站。
              审查并改进现有的GitHub运营规则和工作流程。
              在未进行版本管理的项目中导入GitHub。
              使用GitHub Actions构建自动化部署至生产环境的机制。
              使用Docker等工具搭建本地开发环境。
            `),
            'zh-TW': dedent(`
              以業務委託的形式參與專案。
              負責新建登陸頁面以及改修既有的企業網站。
              重新檢視並改善現有的GitHub運作規範與流程。
              在未使用版本管理的專案中導入GitHub。
              使用GitHub Actions建立自動化部署至正式環境的機制。
              使用Docker等工具建置本地開發環境。
            `),
            'ko': dedent(`
              업무 위탁 형태로 프로젝트에 참여.
              랜딩 페이지 신규 제작과 기존 기업 웹사이트 개편을 담당.
              기존 GitHub 운영 규칙과 워크플로를 재검토하고 개선.
              버전 관리를 적용하지 않았던 프로젝트에 GitHub를 도입.
              GitHub Actions를 사용하여 프로덕션 반영 자동화 시스템을 구축.
              Docker 등을 활용해 로컬 개발 환경을 구축.
            `),
          },
          skills: [
            'HTML5',
            'CSS3',
            'PHP',
            'WordPress',
            'Git',
            'GitHub',
            'GitHub Actions',
            'Docker',
            'Devin AI',
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
