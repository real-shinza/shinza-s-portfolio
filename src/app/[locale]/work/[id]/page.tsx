'use client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Card, SubContent, SkillTag } from '../../../../components';
import { work } from '../../../../data';
import { GetLocaleString } from '../../../../lib';
import styles from './page.module.css';

export default ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const entry = work.entries.find(entry => entry.id === id);
  if (!entry) return notFound();
  return (
    <main>
      <Card id={entry.id} title={entry.name}>
        <Image
          className={styles.image}
          src={entry.image}
          alt='work image'
          width={256}
          height={256}
          style={{ width: '100%', height: 'auto', maxWidth: '256px' }}
        />
        <SubContent subtitle={work.subtitle.description}>
          <div className={styles.description}>
            {GetLocaleString(entry.description_long)}
          </div>
        </SubContent>
        <SubContent subtitle={work.subtitle.skill}>
          <SkillTag skills={entry.skills} />
        </SubContent>
        <SubContent subtitle={work.subtitle.link} isHidden={!entry.links}>
          <div className={styles.buttons}>
            {entry.links && entry.links.map((link, index) => (
              <div key={index}>
                <Link className='external-link' href={link.link} target='_blank'>
                  <button className={styles.button} type='button' style={{ backgroundColor: link.color_code }}>
                    {link.name}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </SubContent>
      </Card>
    </main>
  );
};
