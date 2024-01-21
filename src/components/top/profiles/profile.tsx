import Image from 'next/image';
import SnsButton from './sns-button';
import './profile.css';

export default function Profile() {
  return (
    <div className="card" id="profile">
      <h1 className="title">
        プロフィール
      </h1>
      <div className="prop">
        <div className="left">
          <Image
            className="profile-image"
            src="/profile.jpg"
            alt="Profile image"
            width={256}
            height={256}
            priority={true}
          />
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
            <p>西暦2000年&#40;平成12年&#41;生まれ。</p>
            <p>石川県野々市市出身ですが、よくお隣の金沢市出身と偽っています。</p>
            <p>現在は社会人をしながら通信制大学に通っています。</p>
            <p>自作ゲームを完成させることが目標です。</p>
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
