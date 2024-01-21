import workData from '../../data/work.json';

export function getAllWorks(): WorkInfo[] {
  const data = workData.works;
  const works: WorkInfo[] = data.map(data => ({
    id: data.id,
    name: data.name,
    image: data.image,
    description_short: data.description_short,
    description_long: data.description_long,
    skills: data.skills,
    links: data.links.map(link => ({
      name: link.name,
      link: link.link,
      color_code: {
        backgroundColor: link.color_code,
        borderColor: link.color_code,
      },
    } as WorkLink)),
  } as WorkInfo)
  );
  return works;
}

export function getFilterWorks(id: string): WorkInfo[] {
  const works = getAllWorks();
  return works.filter(work => work.id != id);
}

export function getWork(id: string): WorkInfo | undefined {
  const data = workData.works.find(work => work.id === id);
  if (!data) return undefined;
  const work = {
    id: data.id,
    name: data.name,
    image: data.image,
    description_short: data.description_short,
    description_long: data.description_long,
    skills: data.skills,
    links: data.links.map(link => ({
      name: link.name,
      link: link.link,
      color_code: {
        backgroundColor: link.color_code,
        borderColor: link.color_code,
      },
    } as WorkLink)),
  } as WorkInfo;
  return work;
}
