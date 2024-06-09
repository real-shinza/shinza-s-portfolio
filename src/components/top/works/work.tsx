import Prop from '../../work/work-prop';
import { getAllWorks } from '../../../lib/works/work';
import './work.css';

export default function Work() {
  const works = getAllWorks();
  return (
    <div className="card" id="work">
      <h1 className="title">
        作品
      </h1>
      <div className="works">
        {works.map((work, index) => (
          <Prop
            key={index}
            id={work.id}
            name={work.name}
            image={work.image}
            description_short={work.description_short}
          />
        ))}
      </div>
    </div>
  );
}
