import './skill.css'
import Prop from './skill_prop'

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
          "Xinput",
          "Unity",
          "jQuery",
          "Node.js",
          "Next.js",
        ]}
      />
      <Prop
        className="cloud-platform"
        title="クラウドプラットフォーム"
        skills={[
          "GitHub",
          "Google App Engine",
          "Google Tag Manager",
          "Cloud Firestore",
          "Firebase Hosting",
          "Cloud Functions",
          "BigQuery",
          "Heroku",
          "Glitch",
        ]}
      />
    </div>
  )
}

export default Skill;