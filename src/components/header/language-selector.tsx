import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Locale, useRouter, usePathname } from '../../i18n/routing';
import { languageData } from '../../data';
import { notoSans } from '../../lib';
import styles from './language-selector.module.css';

export const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as Locale;
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (selectedLang: Locale) => {
    setIsOpen(false);
    router.replace(pathname, { locale: selectedLang, scroll: false });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.selector} onClick={toggleDropdown}>
        <Image
          className={styles.country}
          src={languageData[locale].src}
          alt='Country flag'
          width={21}
          height={14}
        />
        <div className={styles.language}>
          {languageData[locale].name}
        </div>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {Object.entries(languageData).map((data, index) => (
            <div
              className={styles.option}
              style={notoSans[data[0] as Locale].style}
              onClick={() => handleChange(data[0] as Locale)}
              key={index}
            >
              <Image
                className={styles.country}
                src={data[1].src}
                alt='Country flag'
                width={21}
                height={14}
              />
              <div className={styles.language}>
                {data[1].name}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
