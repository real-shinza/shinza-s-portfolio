'use client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, SubContent } from '../../../../components';
import { work } from '../../../../data';
import { GetLocale } from '../../../../lib';
import styles from './page.module.css';

export default ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const entry = work.entries.find(entry => entry.id === id);
  if (!entry) notFound();
  return (
    <main>
      <Card id={entry.id} title={entry.name}>
        <Image
          className={styles.image}
          src={entry.image}
          alt='work image'
          width={384}
          height={384}
        />
        <SubContent subtitle={work.subtitle.description}>
          <div className={styles.description} style={{ whiteSpace: 'pre-line' }}>
            {GetLocale(entry.description_long)}
          </div>
        </SubContent>
        <SubContent subtitle={work.subtitle.skill}>
          <div className={styles.skills}>
            {entry.skills.map((skill, index) => (
              <div key={index}>
                {skill}
              </div>
            ))}
          </div>
        </SubContent>
        <SubContent subtitle={work.subtitle.link} isHidden={!entry.links}>
          {entry.links?.map((link, index) => (
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
  );
};
