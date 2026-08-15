import Header from '../Components/Header';
import PlayButton from '../Components/PlayButton';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
    <div>
      <Header />
      <Link to="/game/">
      <PlayButton />
        </Link>
    </div>
  );
}

export default HomePage;