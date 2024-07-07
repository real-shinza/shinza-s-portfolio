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
  skills,
  socialMedias,
  works,
} from '../../data';
import styles from './page.module.css';

export default () => {
  return (
    <>
      <Header />
      <main>
        <Card id='profile' title='プロフィール'>
          <div className={styles.profile_left}>
            <ProfileImage />
          </div>
          <div className={styles.profile_right}>
            <div className={styles.name}>
              <div className={styles.main_name}>
                新佐 佳也
              </div>
              <div className={styles.sub_name} lang='en'>
                Shinza Yoshiya
              </div>
              <div className={styles.sub_name} lang='ja'>
                しんざ よしや
              </div>
              <div className={styles.sub_name} lang='zh'>
                新佐 佳也
              </div>
              <div className={styles.sub_name} lang='ko'>
                신자 요시야
              </div>
            </div>
            <div className={styles.description}>
              <p>
                西暦2000年&#40;平成12年&#41;生まれ。<br />
                石川県野々市市出身。加賀国と能登国の混血。<br />
                エセ関西弁混じりの金沢弁を話します。<br />
                現在は社会人をしながら通信制大学に通っています。<br />
              </p>
            </div>
            <div>
              {socialMedias.map((data, index) => (
                <SocialMedia socialMedia={data} key={index} />
              ))}
            </div>
          </div>
        </Card>
        <Card id='work' title='作品'>
          {works.map((data, index) => (
            <Work work={data} key={index} />
          ))}
        </Card>
        <Card id='biography' title='略歴'>
          {biographies.map((data, index) => (
            <SubContent subtitle={data.subtitle} key={index}>
              <Biography data={data.biographies} />
            </SubContent>
          ))}
        </Card>
        <Card id='skill' title='スキル'>
          {skills.map((data, index) => (
            <SubContent subtitle={data.subtitle} key={index}>
              <Skill data={data.skills} />
            </SubContent>
          ))}
        </Card>
        <Card id='license' title='所有資格'>
          <License licenses={licenses} />
        </Card>
      </main>
    </>
  );
}
