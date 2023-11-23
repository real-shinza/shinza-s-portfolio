import './work.css'
import Prop from './work_prop'

function Work() {
  return (
    <div className="work card">
      <h1 className="work-title">
        作品
      </h1>
      <Prop
        className="portfolio"
        href="https://shinza-s-portfolio.vercel.app/"
        title="ポートフォリオサイト"
        image="/works/portfolio.jpg"
        description="このポートフォリオサイトです。TypeScript、Next.js、CSSで作成。"
      />
      <Prop
        className="convert-number-to-string"
        href="https://convert-number-to-string.firebaseapp.com/"
        title="Convert numbers to strings"
        image="/works/zero.jpg"
        description="数字を文字に変換するサイト。HTML、CSS、JavaScriptで作成。"
      />
    </div>
  );
}

export default Work;
