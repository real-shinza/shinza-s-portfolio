import './skill.css'
import Prop from './skill-prop'

function Skill() {
  return (
    <div className="skill card">
      <h1 className="skill-title">
        スキル
      </h1>
      <Prop
        className="programming-language"
        title="プログラミング言語"
        skills={[
          "C言語",
          "C++",
          "C#",
          "Java",
          "Python3",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
        ]}
      />
      <Prop
        className="framework"
        title="フレームワーク"
        skills={[
          "DirectX9",
          "Unity",
          "jQuery",
          "Node.js",
          "React",
          "Next.js",
        ]}
      />
      <Prop
        className="cloud-platform"
        title="クラウドプラットフォーム"
        skills={[
          "GitHub",
          "Google Apps Script",
          "Google Tag Manager",
          "Cloud Firestore",
          "Firebase Hosting",
          "Cloud Functions",
          "BigQuery",
        ]}
      />
    </div>
  );
}

export default Skill;
