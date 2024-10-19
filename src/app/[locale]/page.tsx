'use client';
import {
  Biography,
  Card,
  SubContent,
  License,
  ProfileImage,
  SocialMedia,
  Skill,
  Work,
} from '../../components';
import {
  biography,
  license,
  profile,
  skill,
  work,
} from '../../data';
import { notoSans, GetLocale } from '../../lib';
import styles from './page.module.css';

export default () => {
  return (
    <main>
      <Card id={profile.id} title={profile.title}>
        <div className={styles.profile_left}>
          <ProfileImage />
        </div>
        <div className={styles.profile_right}>
          <div className={styles.name}>
            <div className={styles.main_name} style={notoSans.jp.style}>
              新佐 佳也
            </div>
            <div className={styles.sub_name} style={notoSans.en.style}>
              Shinza Yoshiya
            </div>
            <div className={styles.sub_name} style={notoSans.jp.style}>
              しんざ よしや
            </div>
            <div className={styles.sub_name} style={notoSans.tc.style}>
              新佐 佳也
            </div>
            <div className={styles.sub_name} style={notoSans.kr.style}>
              신자 요시야
            </div>
          </div>
          <div className={styles.description}>
            <p style={{ whiteSpace: 'pre-line' }}>
              {GetLocale(profile.description)}
            </p>
          </div>
          <div className={styles.social_media}>
            {profile.social_medias.map((entry, index) => (
              <SocialMedia entry={entry} key={index} />
            ))}
          </div>
        </div>
      </Card>
      <Card id={work.id} title={work.title}>
        <Work entries={work.entries} />
      </Card>
      <Card id={biography.id} title={biography.title}>
        {biography.sections.map((section, index) => (
          <SubContent subtitle={section.subtitle} key={index}>
            <Biography entries={section.entries} />
          </SubContent>
        ))}
      </Card>
      <Card id={skill.id} title={skill.title}>
        {skill.sections.map((section, index) => (
          <SubContent subtitle={section.subtitle} key={index}>
            <Skill entries={section.entries} />
          </SubContent>
        ))}
      </Card>
      <Card id={license.id} title={license.title}>
        <License entries={license.entries} />
      </Card>
    </main>
  );
};
