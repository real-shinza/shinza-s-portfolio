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
import { GetLocaleString, GetLocaleNanes } from '../../lib';
import styles from './page.module.css';

export default () => {
  return (
    <main>
      <Card id={profile.id} title={profile.title}>
        <div className={styles.profile}>
          <ProfileImage />
          <div className={styles.profile_about}>
            <div className={styles.name}>
              <div className={styles.main_name}>
                {GetLocaleNanes(profile.name).main}
              </div>
              {GetLocaleNanes(profile.name).sub.map((name, index) => (
                <div className={styles.sub_name} key={index}>
                  {name}
                </div>
              ))}
            </div>
            <div className={styles.description}>
              <p style={{ whiteSpace: 'pre-line' }}>
                {GetLocaleString(profile.description)}
              </p>
            </div>
            <div className={styles.social_media}>
              {profile.social_medias.map((entry, index) => (
                <SocialMedia entry={entry} key={index} />
              ))}
            </div>
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
