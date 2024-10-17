'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  inter,
  notoSansJP,
  notoSansSC,
  notoSansTC,
  notoSansKR,
  GetHl,
} from '../../lib';
import styles from './language-selector.module.css';

export const LanguageSelector = () => {
  const router = useRouter();
  const [lang, setLang] = useState(GetHl());
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (selectedLang: string) => {
    setLang(selectedLang);
    setIsOpen(false);
    const currentParams = new URLSearchParams();
    currentParams.set('hl', selectedLang);
    router.replace(`?${currentParams.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.container}>
      <div className={styles.selector} onClick={toggleDropdown}>
        {lang === 'ja' && '日本語'}
        {lang === 'en' && 'English'}
        {lang === 'zh-CN' && '简体中文'}
        {lang === 'zh-TW' && '繁體中文'}
        {lang === 'ko' && '한국어'}
      </div>
      {isOpen && (
        <div className={styles.options}>
          <div className={styles.option} style={notoSansJP.style} onClick={() => handleChange('ja')}>日本語</div>
          <div className={styles.option} style={inter.style} onClick={() => handleChange('en')}>English</div>
          <div className={styles.option} style={notoSansSC.style} onClick={() => handleChange('zh-CN')}>简体中文</div>
          <div className={styles.option} style={notoSansTC.style} onClick={() => handleChange('zh-TW')}>繁體中文</div>
          <div className={styles.option} style={notoSansKR.style} onClick={() => handleChange('ko')}>한국어</div>
        </div>
      )}
    </div>
  );
};
