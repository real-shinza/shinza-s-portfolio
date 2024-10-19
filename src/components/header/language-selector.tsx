import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useRouter, usePathname } from '../../i18n/routing';
import { LanguageType } from '../../common/type';
import { notoSans } from '../../lib';
import styles from './language-selector.module.css';

export const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as LanguageType;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (selectedLang: LanguageType) => {
    setIsOpen(false);
    router.replace(pathname, { locale: selectedLang, scroll: false });
  };

  return (
    <div className={styles.container}>
      <div className={styles.selector} onClick={toggleDropdown}>
        {locale === 'ja' && '日本語'}
        {locale === 'en' && 'English'}
        {locale === 'zh-CN' && '简体中文'}
        {locale === 'zh-TW' && '繁體中文'}
        {locale === 'ko' && '한국어'}
      </div>
      {isOpen && (
        <div className={styles.options}>
          <div className={styles.option} style={notoSans.jp.style} onClick={() => handleChange('ja')}>日本語</div>
          <div className={styles.option} style={notoSans.en.style} onClick={() => handleChange('en')}>English</div>
          <div className={styles.option} style={notoSans.sc.style} onClick={() => handleChange('zh-CN')}>简体中文</div>
          <div className={styles.option} style={notoSans.tc.style} onClick={() => handleChange('zh-TW')}>繁體中文</div>
          <div className={styles.option} style={notoSans.kr.style} onClick={() => handleChange('ko')}>한국어</div>
        </div>
      )}
    </div>
  );
};
