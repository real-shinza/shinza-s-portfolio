export type LanguageType = 'ja' | 'en' | 'zh-CN' | 'zh-TW' | 'ko';
export type LanguageStrings = Record<LanguageType, string>;
export type LanguageData = Record<LanguageType, { name: string, src: string }>;

