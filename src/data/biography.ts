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
          date:  {
            'ja': '2016年4月 ~ 2019年3月',
            'en': 'Apr. 2016 ~ Mar. 2019',
            'zh-CN': '2016年4月 ~ 2019年3月',
            'zh-TW': '2016年4月 ~ 2019年3月',
            'ko': '2016년 4월 ~ 2019년 3월',
          },
          description: {
            'ja': '石川県立金沢北稜高等学校 総合学科',
            'en': 'General Studies Department, Ishikawa Prefectural Kanazawa Hokuryo High School',
            'zh-CN': '石川县立金泽北陵高级中学 综合学科',
            'zh-TW': '石川縣立金澤北陵高級中學 綜合學科',
            'ko': '이시카와 현립 가나자와 호쿠료 고등학교 종합학과',
          },
        },
        {
          id: 'human-academy-kyoto-campus',
          date:  {
            'ja': '2019年4月 ~ 2021年3月',
            'en': 'Apr. 2019 ~ Mar. 2021',
            'zh-CN': '2019年4月 ~ 2021年3月',
            'zh-TW': '2019年4月 ~ 2021年3月',
            'ko': '2019년 4월 ~ 2021년 3월',
          },
          description: {
            'ja': '総合学園ヒューマンアカデミー京都校 プログラマー専攻',
            'en': 'Programmer Major, Sogo Gakuen Human Academy Kyoto Campus',
            'zh-CN': '综合学院Human Academy京都校 程序员专攻',
            'zh-TW': '綜合學園Human Academy京都校 程式設計專攻',
            'ko': '종합학원 휴먼 아카데미 교토 캠퍼스 프로그래머 전공',
          },
        },
        {
          id: 'tokyo-online-university',
          date:  {
            'ja': '2022年4月 ~ 現在',
            'en': 'Apr. 2022 ~ Now',
            'zh-CN': '2022年4月 ~ 现在',
            'zh-TW': '2022年4月 ~ 現在',
            'ko': '2022년 4월 ~ 현재',
          },
          description: {
            'ja': '東京都 通信制大学 情報学部',
            'en': 'Faculty of Information and Management, Tokyo Online University',
            'zh-CN': '东京通信大学 信息管理学部',
            'zh-TW': '東京通信大學 資訊管理學部',
            'ko': '도쿄통신대학 정보매니지먼트학부',
          },
        },
        {
          id: 'national-taiwan-normal-university',
          date:  {
            'ja': '2025年3月 ~ 2025年5月',
            'en': 'Mar. 2025 ~ May 2025',
            'zh-CN': '2025年3月 ~ 2025年5月',
            'zh-TW': '2025年3月 ~ 2025年5月',
            'ko': '2025년 3월 ~ 2025년 5월',
          },
          description: {
            'ja': '国立台湾師範大学 国語教学センター',
            'en': 'Mandarin Training Center, National Taiwan Normal University',
            'zh-CN': '国立台湾师范大学 国语教学中心',
            'zh-TW': '國立臺灣師範大學 國語教學中心',
            'ko': '대만사범대학 중국어교육원',
          },
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
          date:  {
            'ja': '2021年4月 ~ 2025年3月',
            'en': 'Apr. 2021 ~ Mar. 2025',
            'zh-CN': '2021年4月 ~ 2025年3月',
            'zh-TW': '2021年4月 ~ 2025年3月',
            'ko': '2021년 4월 ~ 2025년 3월',
          },
          description: {
            'ja': '東京都内の某SES企業',
            'en': 'A Certain SES Company in Tokyo',
            'zh-CN': '东京都内某SES公司',
            'zh-TW': '東京都內某SES公司',
            'ko': '도쿄도 내의 특정 SES 기업',
          },
        },
        {
          id: 'application-integration-testing',
          date:  {
            'ja': '2021年6月',
            'en': 'Jun. 2021',
            'zh-CN': '2021年6月',
            'zh-TW': '2021年6月',
            'ko': '2021년 6월',
          },
          description: {
            'ja': 'アプリケーション結合テスト実施業務',
            'en': 'Application integration testing duties',
            'zh-CN': '执行应用程序集成测试的工作',
            'zh-TW': '執行應用程式結合測試的業務',
            'ko': '애플리케이션 통합 테스트 수행 업무',
          },
        },
        {
          id: 'driver-system-integration-testing',
          date:  {
            'ja': '2021年7月 ~ 2021年10月',
            'en': 'Jul. 2021 ~ Oct. 2021',
            'zh-CN': '2021年7月 ~ 2021年10月',
            'zh-TW': '2021年7月 ~ 2021年10月',
            'ko': '2021년 7월 ~ 2021년 10월',
          },
          description: {
            'ja': 'ドライバーシステム結合テスト実施業務',
            'en': 'Driver system integration testing duties',
            'zh-CN': '执行司机系统集成测试的工作',
            'zh-TW': '執行司機系統結合測試的業務',
            'ko': '드라이버 시스템 통합 테스트 수행 업무',
          },
        },
        {
          id: 'business-tool-integration-testing',
          date:  {
            'ja': '2021年11月',
            'en': 'Nov. 2021',
            'zh-CN': '2021年11月',
            'zh-TW': '2021年11月',
            'ko': '2021년 11월',
          },
          description: {
            'ja': '業務ツール結合テスト実施業務',
            'en': 'Business tool integration testing duties',
            'zh-CN': '执行业务工具集成测试的工作',
            'zh-TW': '執行業務工具結合測試的業務',
            'ko': '업무 도구 통합 테스트 수행 업무',
          },
        },
        {
          id: 'technical-support-for-web-advertising',
          date:  {
            'ja': '2021年12月 ~ 2023年8月',
            'en': 'Dec. 2021 ~ Aug. 2023',
            'zh-CN': '2021年12月 ~ 2023年8月',
            'zh-TW': '2021年12月 ~ 2023年8月',
            'ko': '2021년 12월 ~ 2023년 8월',
          },
          description: {
            'ja': 'Web広告技術的サポート業務',
            'en': 'Technical support for web advertising',
            'zh-CN': 'Web广告技术支持工作',
            'zh-TW': 'Web廣告技術支持業務',
            'ko': 'Web 광고 기술 지원 업무',
          },
        },
        {
          id: 'ai-sales-bot-development',
          date:  {
            'ja': '2023年9月 ~ 2025年2月',
            'en': 'Sep. 2023 ~ Feb. 2025',
            'zh-CN': '2023年9月 ~ 2025年2月',
            'zh-TW': '2023年9月 ~ 2025年2月',
            'ko': '2023년 9월 ~ 2025년 2월',
          },
          description: {
            'ja': 'AI営業ボット開発業務',
            'en': 'AI sales bot development duties',
            'zh-CN': 'AI销售机器人开发工作',
            'zh-TW': 'AI銷售機器人開發業務',
            'ko': 'AI 영업 봇 개발 업무',
          },
        },
        {
          id: 'landing-page-production',
          date:  {
            'ja': '2025年3月 ~ 現在',
            'en': 'Mar. 2025 ~ Now',
            'zh-CN': '2025年3月 ~ 现在',
            'zh-TW': '2025年3月 ~ 現在',
            'ko': '2025년 3월 ~ 현재',
          },
          description: {
            'ja': 'ランディングページ制作及び広告計測業務',
            'en': 'Landing Page production and advertisement measurement',
            'zh-CN': '落地页制作及广告测量业务',
            'zh-TW': '登陸頁製作及廣告測量業務',
            'ko': '랜딩 페이지 제작 및 광고 측정 업무',
          },
        },
      ],
    },
  ],
};
