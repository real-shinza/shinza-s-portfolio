import './profile.css'
import Image from 'next/image'
import SnsButton from './sns-button'

function Profile() {
  return (
    <div className="profile card">
      <h1 className="profile-title">
        プロフィール
      </h1>
      <div className="profile-prop">
        <div className="profile-left">
          <div className="profile-image">
            <Image
              src="/profile.jpg"
              alt="Profile image"
              width={256}
              height={256}
            />
          </div>
        </div>
        <div className="profile-right">
          <div className="profile-name">
            新佐かいなり（Shinza Kainari）
          </div>
          <div className="profile-description">
            <p>2000年生まれ。</p>
            <p>石川県野々市市出身ですが、よくお隣の金沢市出身と偽っています。</p>
            <p>現在は社会人をしながら通信制大学に通っています。</p>
            <p>自作ゲームを完成させることが目標です。</p>
          </div>
          <div className="profile-sns">
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
