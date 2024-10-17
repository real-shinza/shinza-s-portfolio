'use client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { GoogleTagManager } from '@next/third-parties/google';
import { Card, SubContent, Header } from '../../../components';
import { works } from '../../../data';
import {
  GetFont,
  GetHl,
  GetLocale,
} from '../../../lib';
import styles from './page.module.css';

export default ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const work = works.entries.find(entry => entry.id === id);
  if (!work) redirect('/');
  return (
    <body lang={GetHl()} style={GetFont().style}>
      <GoogleTagManager gtmId='GTM-THB3JD7F'/>
      <Header />
      <main>
        <Card id={works.id} title={work.name}>
          <Image
            className={styles.image}
            src={work.image}
            alt='work image'
            width={384}
            height={384}
          />
          <SubContent subtitle={works.subtitle.description}>
            <div className={styles.description} style={{whiteSpace: 'pre-line'}}>
              {GetLocale(work.description_long)}
            </div>
          </SubContent>
          <SubContent subtitle={works.subtitle.skill}>
            <div className={styles.skills}>
              {work.skills.map((skill, index) => (
                <div key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </SubContent>
          <SubContent subtitle={works.subtitle.link} isHidden={!work.links}>
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
    </body>
  );
};
