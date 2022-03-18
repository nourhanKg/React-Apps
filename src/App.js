import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpsPage from './pages/NewMeetUps';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    // localhost:3000/path
    // my-page.com/path
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetUpsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
