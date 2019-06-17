import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const AlbumPage = lazy(() => import('../components/album/AlbumPage'));

const PhotoPage = lazy(() => import('../components/photo/PhotoPage'));

const NotFoundPage = lazy(() => import('../components/photo/PhotoPage'));

 const AppRoute = () => (
  <BrowserRouter>
  <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' component={AlbumPage} exact={true}/>
          <Route path='/photo-page/:albumId/:albumTitle/:albumOwner' component={PhotoPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Suspense>
  </div>
  </BrowserRouter>
)

 export default AppRoute;