import { BiographyDocument } from '../common/type';

export const biographies: BiographyDocument = {
  id: 'biography',
  title: {
    ja: '略歴',
    en: 'Biography',
    cn: '简历',
    tw: '簡歷',
    ko: '약력',
  },
  sections: [
    {
      subtitle: {
        ja: '学歴',
        en: 'Educational background',
        cn: '学历',
        tw: '學歷',
        ko: '학력',
      },
      entries: [
        {
          date: {
            ja: '2016年4月 ~ 2019年3月',
            en: 'Apr. 2016 ~ Mar. 2019',
            cn: '2016年4月 ~ 2019年3月',
            tw: '2016年4月 ~ 2019年3月',
            ko: '2016년 4월 ~ 2019년 3월',
          },
          description: {
            ja: '石川県 高等学校 総合学科',
            en: 'Integrated course, High School in Ishikawa',
            cn: '石川县 高级中学 综合科',
            tw: '石川縣 高級中學 綜合科',
            ko: '이시카와현 고등학교 종합학과',
          },
        },
        {
          date: {
            ja: '2019年4月 ~ 2021年3月',
            en: 'Apr. 2019 ~ Mar. 2021',
            cn: '2019年4月 ~ 2021年3月',
            tw: '2019年4月 ~ 2021年3月',
            ko: '2019년 4월 ~ 2021년 3월',
          },
          description: {
            ja: '京都府 専門学校 プログラマー専攻',
            en: 'Programmer Major, Vocational School in Kyoto',
            cn: '京都府 专科学校 程序员专业',
            tw: '京都府 專科學校 程式設計師專攻',
            ko: '교토부 전문학교 프로그래머 전공',
          },
        },
        {
          date: {
            ja: '2022年4月 ~ 現在',
            en: 'Apr. 2022 ~ Now',
            cn: '2022年4月 ~ 现在',
            tw: '2022年4月 ~ 現在',
            ko: '2022년 4월 ~ 현재',
          },
          description: {
            ja: '東京都 通信制大学 情報学部',
            en: 'Faculty of Information, Online University in Tokyo',
            cn: '东京都 远程教育大学 信息学院',
            tw: '東京都 遠程教育大學 資訊學院',
            ko: '도쿄도 통신제 대학교 정보학부',
          },
        },
      ],
    },
    {
      subtitle: {
        ja: '職歴',
        en: 'Work experience',
        cn: '职业经历',
        tw: '職歷',
        ko: '직력',
      },
      entries: [
        {
          date: {
            ja: '2021年4月 ~ 現在',
            en: 'Apr. 2021 ~ Now',
            cn: '2021年4月 ~ 现在',
            tw: '2021年4月 ~ 現在',
            ko: '2021년 4월 ~ 현재',
          },
          description: {
            ja: '東京都 SES企業',
            en: 'SES company in Tokyo',
            cn: '东京都 SES企业',
            tw: '東京都 SES企業',
            ko: '도쿄도 SES 기업',
          },
        },
        {
          date: {
            ja: '2021年6月',
            en: 'Jun. 2021',
            cn: '2021年6月',
            tw: '2021年6月',
            ko: '2021년 6월',
          },
          description: {
            ja: 'アプリケーション結合テスト実施業務',
            en: 'Application integration testing duties',
            cn: '执行应用程序集成测试的工作',
            tw: '執行應用程式結合測試的業務',
            ko: '애플리케이션 통합 테스트 수행 업무',
          },
        },
        {
          date: {
            ja: '2021年7月 ~ 2021年10月',
            en: 'Jul. 2021 ~ Oct. 2021',
            cn: '2021年7月 ~ 2021年10月',
            tw: '2021年7月 ~ 2021年10月',
            ko: '2021년 7월 ~ 2021년 10월',
          },
          description: {
            ja: 'ドライバーシステム結合テスト実施業務',
            en: 'Driver system integration testing duties',
            cn: '执行司机系统集成测试的工作',
            tw: '執行司機系統結合測試的業務',
            ko: '드라이버 시스템 통합 테스트 수행 업무',
          },
        },
        {
          date: {
            ja: '2021年11月',
            en: 'Nov. 2021',
            cn: '2021年11月',
            tw: '2021年11月',
            ko: '2021년 11월',
          },
          description: {
            ja: '業務ツール結合テスト実施業務',
            en: 'Business tool integration testing duties',
            cn: '执行业务工具集成测试的工作',
            tw: '執行業務工具結合測試的業務',
            ko: '업무 도구 통합 테스트 수행 업무',
          },
        },
        {
          date: {
            ja: '2021年12月 ~ 2023年8月',
            en: 'Dec. 2021 ~ Aug. 2023',
            cn: '2021年12月 ~ 2023年8月',
            tw: '2021年12月 ~ 2023年8月',
            ko: '2021년 12월 ~ 2023년 8월',
          },
          description: {
            ja: 'Web広告技術的サポート業務',
            en: 'Technical support for web advertising',
            cn: 'Web广告技术支持工作',
            tw: 'Web廣告技術支持業務',
            ko: 'Web 광고 기술 지원 업무',
          },
        },
        {
          date: {
            ja: '2023年9月 ~ 現在',
            en: 'Sep. 2023 ~ Now',
            cn: '2023年9月 ~ 现在',
            tw: '2023年9月 ~ 現在',
            ko: '2023년 9월 ~ 현재',
          },
          description: {
            ja: 'AI営業ボット開発業務',
            en: 'AI Sales Bot Development Duties',
            cn: 'AI销售机器人开发工作',
            tw: 'AI銷售機器人開發業務',
            ko: 'AI 영업 봇 개발 업무',
          },
        },
      ],
    },
  ],
};
