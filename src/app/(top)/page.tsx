'use client';
import { GoogleTagManager } from '@next/third-parties/google';
import {
  Biography,
  Card,
  SubContent,
  Header,
  License,
  ProfileImage,
  SocialMedia,
  Skill,
  Work,
} from '../../components';
import {
  biographies,
  licenses,
  profile,
  skills,
  socialMedias,
  works,
} from '../../data';
import {
  GetFont,
  inter,
  notoSansJP,
  notoSansTC,
  notoSansKR,
  GetHl,
  GetLocale,
} from '../../lib';
import styles from './page.module.css';

export default () => {
  return (
    <body lang={GetHl()} style={GetFont().style}>
      <GoogleTagManager gtmId='GTM-THB3JD7F'/>
      <Header />
      <main>
        <Card id={profile.id} title={profile.title}>
          <div className={styles.profile_left}>
            <ProfileImage />
          </div>
          <div className={styles.profile_right}>
            <div className={styles.name}>
              <div className={styles.main_name} style={notoSansJP.style} lang='ja'>
                新佐 佳也
              </div>
              <div className={styles.sub_name} style={inter.style} lang='en'>
                Shinza Yoshiya
              </div>
              <div className={styles.sub_name} style={notoSansJP.style} lang='ja'>
                しんざ よしや
              </div>
              <div className={styles.sub_name} style={notoSansTC.style} lang='zh'>
                新佐 佳也
              </div>
              <div className={styles.sub_name} style={notoSansKR.style} lang='ko'>
                신자 요시야
              </div>
            </div>
            <div className={styles.description}>
              <p style={{whiteSpace: 'pre-line'}}>
                {GetLocale(profile.description)}
              </p>
            </div>
            <div className={styles.social_media}>
              {socialMedias.map((entry, index) => (
                <SocialMedia entry={entry} key={index} />
              ))}
            </div>
          </div>
        </Card>
        <Card id={works.id} title={works.title}>
          <Work entries={works.entries} />
        </Card>
        <Card id={biographies.id} title={biographies.title}>
          {biographies.sections.map((section, index) => (
            <SubContent subtitle={section.subtitle} key={index}>
              <Biography entries={section.entries} />
            </SubContent>
          ))}
        </Card>
        <Card id={skills.id} title={skills.title}>
          {skills.sections.map((section, index) => (
            <SubContent subtitle={section.subtitle} key={index}>
              <Skill entries={section.entries} />
            </SubContent>
          ))}
        </Card>
        <Card id={licenses.id} title={licenses.title}>
          <License entries={licenses.entries} />
        </Card>
      </main>
    </body>
  );
};
