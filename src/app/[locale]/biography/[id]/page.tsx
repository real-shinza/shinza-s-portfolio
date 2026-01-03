'use client';
import { notFound } from 'next/navigation';
import { LinkButton, Card, SubContent, SkillTag } from '../../../../components';
import { biography } from '../../../../data';
import { GetLocaleString } from '../../../../lib';
import styles from './page.module.css';

export default ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const entry = biography.sections.map(s => s.entries).flat().find(entry => entry.id === id);
  if (!entry) return notFound();
  return (
    <main>
      <Card id={entry.id} title={entry.name}>
        <SubContent subtitle={biography.subtitle.period}>
          <div className={styles.period}>
            {GetLocaleString(entry.period)}
          </div>
        </SubContent>
        <SubContent subtitle={biography.subtitle.detail}>
          <div className={styles.detail}>
            {GetLocaleString(entry.detail)}
          </div>
        </SubContent>
        <SubContent subtitle={biography.subtitle.skill} isHidden={!entry.skills}>
          <SkillTag skills={entry.skills} />
        </SubContent>
        <SubContent subtitle={biography.subtitle.link} isHidden={!entry.link}>
          {entry.link && (
            <LinkButton
              name={entry.link.name}
              link={entry.link.link}
              color_code={'#5e5e5e'}
            />
          )}
        </SubContent>
      </Card>
    </main >
  );
};
