import { useContext } from 'react';
import FavoritesContext from '../store/favorites-contex';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favCon = useContext(FavoritesContext);
  let content;
  if (favCon.totalFav === 0) {
    content = <p>You don't have any favorites at the moment.</p>
  }
  else {
    content = <MeetupList meetups={favCon.favorites} />
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}
export default FavoritesPage;