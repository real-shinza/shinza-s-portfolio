'use client';
import { notFound } from 'next/navigation';
import { Card } from '../../../../components';
import { biography } from '../../../../data';
import { GetLocaleString } from '../../../../lib';
import styles from './page.module.css';

export default ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const entry = biography.sections.map(s => s.entries).flat().find(entry => entry.id === id);
  if (!entry) return notFound();
  return (
    <main>
      <Card id={entry.id} title={entry.description}>
        <></>
      </Card>
    </main>
  );
};
