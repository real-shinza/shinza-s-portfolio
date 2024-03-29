import Image from 'next/image';
import Link from 'next/link';
import { redirect } from "next/navigation";
import { getWork, getFilterWorks } from '../../../lib/works/work';
import Header from '../../../components/header/header';
import Prop from '../../../components/work/work-prop';
import './page.css';
import './work.css';

export default function Work({ params }: { params: { id: string } }) {
  const id = params.id;
  const works = getWork(id);
  const otherWorks = getFilterWorks(id);
  if (!works) {
    redirect('/');
  }
  return (
    <>
      <Header />
      <main>
        <div className="card" id="work-info">
          <h1 className="title">
            {works!.name}
          </h1>
          <div>
            <Image
              className="image"
              src={works!.image}
              alt="work image"
              width={384}
              height={384}
            />
          </div>
          <div className="description">
            <h3 className="subtitle">
              説明
            </h3>
            <div className="sentence">
              {works!.description_long}
            </div>
          </div>
          <div className="skill">
            <h3 className="subtitle">
              使用スキル・ツール
            </h3>
            <div className="skills">
              {works!.skills?.map((skill, index) => (
                <div key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="link-buttons">
            {works!.links?.map((link, index) => (
              <div key={index}>
                <Link className="link" href={link.link} target="_blank">
                  <button className="button" type="button" style={link.color_code}>
                    {link.name}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="card" id="work">
          <h1 className="title">
            他の作品
          </h1>
          <div className="area">
            <div className="works">
              {otherWorks.map((work, index) => (
                <Prop
                  key={index}
                  id={work.id}
                  name={work.name}
                  image={work.image}
                  description_short={work.description_short}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
