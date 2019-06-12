import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 import Header from '../components/header/Header';
import AlbumPage from '../components/album/AlbumPage';
import PhotoPage from '../components/photo/PhotoPage';
import NotFoundPage from '../components/notfound/NotFoundPage';


 const AppRoute = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={AlbumPage} exact={true}/>
      <Route path="/photo-page" component={PhotoPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </BrowserRouter>
)

 export default AppRoute;