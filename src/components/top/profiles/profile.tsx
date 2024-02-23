import ProfileImages from './profile-image';
import SnsButtons from './sns-button';
import './profile.css';

export default function Profile() {
  return (
    <div className="card" id="profile">
      <h1 className="title">
        プロフィール
      </h1>
      <div className="prop">
        <div className="left">
          <ProfileImages />
        </div>
        <div className="right">
          <div className="name">
            <div className="main-name">
              新佐 佳也
            </div>
            <div className="sub-name" lang="en">
              Shinza Yoshiya
            </div>
            <div className="sub-name" lang="ja">
              しんざ よしや
            </div>
            <div className="sub-name" lang="zh">
              新佐 佳也
            </div>
            <div className="sub-name" lang="ko">
              신자 요시야
            </div>
          </div>
          <div className="description">
            <p>
              西暦2000年&#40;平成12年&#41;生まれ。<br />
              石川県野々市市出身。加賀国と能登国の混血。<br />
              よくお隣の金沢市出身と偽っています。<br />
              エセ関西弁混じりの金沢弁は話していて標準語を話すのが苦手です。<br />
              現在は社会人をしながら通信制大学に通っています。<br />
            </p>
          </div>
          <SnsButtons />
        </div>
      </div>
    </div>
  );
}
