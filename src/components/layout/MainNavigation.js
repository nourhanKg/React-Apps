import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

import FavoritesContext from '../../store/favorites-contex';

function MainNav() {
  const favCon = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li><Link to='/'>All Meet Ups</Link></li>
          <li><Link to='/new-meetup'>New Meet Ups</Link></li>
          <li><Link to='/favorites'>Fav Meet Ups <span className={classes.badge}>{favCon.totalFav}</span></Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default MainNav;