import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Card, SubContent, Header } from '../../../components';
import { works } from '../../../data';
import styles from './page.module.css';

export default ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const work = works.find(data => data.id === id);
  if (!work) redirect('/');
  return (
    <>
      <Header />
      <main>
        <Card id='work' title={work.name}>
          <Image
            className={styles.image}
            src={work.image}
            alt='work image'
            width={384}
            height={384}
          />
          <SubContent subtitle='説明'>
            <div className={styles.description} style={{whiteSpace: 'pre-line'}}>
              {work.description_long}
            </div>
          </SubContent>
          <SubContent subtitle='使用スキル・ツール'>
            <div className={styles.skills}>
              {work.skills.map((skill, index) => (
                <div key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </SubContent>
          <SubContent subtitle='リンク' isHidden={!work.links}>
            {work.links?.map((link, index) => (
              <div className={styles.link_button} key={index}>
                <Link className={styles.link} href={link.link} target='_blank'>
                  <button className={styles.button} type='button' style={{ backgroundColor: link.color_code }}>
                    {link.name}
                  </button>
                </Link>
              </div>
            ))}
          </SubContent>
        </Card>
      </main>
    </>
  );
};
