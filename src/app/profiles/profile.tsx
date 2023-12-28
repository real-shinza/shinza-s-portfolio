import './profile.css';
import Image from 'next/image';
import SnsButton from './sns-button';

function Profile() {
  return (
    <div className="card" id="profile">
      <h1 className="title">
        プロフィール
      </h1>
      <div className="prop">
        <div className="left">
          <Image
            className="image"
            src="/profile.jpg"
            alt="Profile image"
            width={256}
            height={256}
          />
        </div>
        <div className="right">
          <div className="name">
            <div className="ja main-name">
              新佐 かいなり
            </div>
            <div className="en sub-name">
              Shinza Kainari
            </div>
            <div className="ja sub-name">
              シンザ カイナリ
            </div>
            <div className="zh sub-name">
              新佐 佳也
            </div>
            <div className="ko sub-name">
              신자 카이나리
            </div>
          </div>
          <div className="description">
            <p>2000年生まれ。</p>
            <p>石川県野々市市出身ですが、よくお隣の金沢市出身と偽っています。</p>
            <p>現在は社会人をしながら通信制大学に通っています。</p>
            <p>自作ゲームを完成させることが目標です。ガンダムが好きです。</p>
          </div>
          <div className="sns">
            <SnsButton
              name="x"
              href="https://twitter.com/real_kainari"
              src="/sns/x.svg"
              size={32}
            />
            <SnsButton
              name="facebook"
              href="https://www.facebook.com/profile.php?id=100011508277452"
              src="/sns/facebook.svg"
              size={32}
            />
            <SnsButton
              name="discord"
              href="https://discord.com/users/671696583481360385"
              src="/sns/discord.svg"
              size={32}
            />
            <SnsButton
              name="github"
              href="https://github.com/real-shinza"
              src="/sns/github.svg"
              size={32}
            />
            <SnsButton
              name="zenn"
              href="https://zenn.dev/kainari"
              src="/sns/zenn.svg"
              size={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
