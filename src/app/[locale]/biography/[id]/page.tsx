'use client';
import { notFound } from 'next/navigation';
import { Card, SubContent, SkillTag } from '../../../../components';
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
      </Card>
    </main>
  );
};
