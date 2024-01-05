import Header from '../components/header/header';
import Profile from './profiles/profile';
import Work from './works/work';
import Biography from './biographies/biography';
import Skill from './skills/skill';
import License from './licenses/license';

function Home() {
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

export default Home;
