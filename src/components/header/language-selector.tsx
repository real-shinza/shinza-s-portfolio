import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useRouter, usePathname } from '../../i18n/routing';
import { LanguageType } from '../../common/type';
import { languageData } from '../../data';
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
        <Image
          className={styles.country}
          src={languageData[locale].src}
          alt='Country flag'
          width={16}
          height={16}
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
              style={notoSans[data[0]].style}
              onClick={() => handleChange(data[0] as LanguageType)}
              key={index}
            >
              <Image
                className={styles.country}
                src={data[1].src}
                alt='Country flag'
                width={16}
                height={16}
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
