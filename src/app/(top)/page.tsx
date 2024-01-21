import Header from '../../components/header/header';
import Profile from '../../components/top/profiles/profile';
import Work from '../../components/top/works/work';
import Biography from '../../components/top/biographies/biography';
import Skill from '../../components/top/skills/skill';
import License from '../../components/top/licenses/license';
import './page.css';

export default function Top() {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <Work />
        <Biography />
        <Skill />
        <License />
      </main>
    </>
  );
}
