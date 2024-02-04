import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/Newmeetup";
import MainNavigation from "./components/Layout/MainNavigation";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/' exact> 
        <AllMeetupsPage/>
      </Route>
      <Route path='/new-meetup'> 
        <NewMeetupPage/> 
      </Route>
      <Route  path= '/favorites'> 
        <FavoritesPage/> 
      </Route> 
      </Switch>
    </Layout>
  );
}

export default App;