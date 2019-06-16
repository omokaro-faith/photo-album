import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AlbumPage from '../components/album/AlbumPage';
import PhotoPage from '../components/photo/PhotoPage';
import NotFoundPage from '../components/notfound/NotFoundPage';


 const AppRoute = () => (
  <BrowserRouter>
  <div>
    <Switch>
      <Route path='/' component={AlbumPage} exact={true}/>
      <Route path='/photo-page/:albumId/:albumTitle/:albumOwner' component={PhotoPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </BrowserRouter>
)

 export default AppRoute;