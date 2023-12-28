import './skill.css';
import Prop from './skill-prop';
import data from '../../data/skill.json';

function Skill() {
  const programming_languages = data.programming_languages;
  const frameworks = data.frameworks;
  const project_managements = data.project_managements;
  const cloud_platforms = data.cloud_platforms;
  return (
    <div className="card" id="skill">
      <h1 className="title">
        スキル
      </h1>
      <Prop
        id="programming-language"
        subtitle="プログラミング言語"
        skills={programming_languages}
      />
      <Prop
        id="framework"
        subtitle="フレームワーク"
        skills={frameworks}
      />
      <Prop
        id="project-management"
        subtitle="開発支援ツール"
        skills={project_managements}
      />
      <Prop
        id="cloud-platform"
        subtitle="クラウドプラットフォーム"
        skills={cloud_platforms}
      />
    </div>
  );
}

export default Skill;
