import Peop from './biography-prop';
import './biography.css';
import data from '../../data/biography.json';

function Biography() {
  const educational_background: BiographyData[] = data.educational_background;
  const work_history: BiographyData[] = data.work_history;
  return (
    <div className="card" id="biography">
      <h1 className="title">
        略歴
      </h1>
      <Peop
        id="educational-background"
        subtitle="学歴"
        biographies={educational_background}
      />
      <Peop
        id="work-history"
        subtitle="職歴"
        biographies={work_history}
      />
    </div>
  );
}

export default Biography;
