import './work.css';
import Prop from './work-prop';

function Work() {
  return (
    <div className="card" id="work">
      <h1 className="title">
        作品
      </h1>
      <Prop
        id="shinza-s-portfolio"
        href="https://shinza-s-portfolio.vercel.app/"
        name="Shinza's Portfolio"
        image="/works/portfolio.jpg"
        description="新佐のポートフォリオサイト"
      />
      <Prop
        id="translate-number-to-strings"
        href="https://real-shinza.github.io/translate-number-to-strings/"
        name="Translate number to strings"
        image="/works/zero.jpg"
        description="数値を英語、日本語、中国語、韓国語に変換するサイト"
      />
      <Prop
        id="towa-2d"
        href="https://unityroom.com/games/towa-2d"
        name="とわ2D"
        image="/works/towa-2d.jpg"
        description="雑に作った横スクロールゲーム"
      />
    </div>
  );
}

export default Work;
