import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Logo = lazy(() => import('../components/header/Logo'));

const AlbumPage = lazy(() => import('../components/album/AlbumPage'));

const PhotoPage = lazy(() => import('../components/photo/PhotoPage'));

const NotFoundPage = lazy(() => import('../components/notfound/NotFoundPage'));

 const AppRoute = () => (
  <BrowserRouter>
  <div className='wrapper__item'>
      <Suspense fallback={<div className="loader"></div>}>
      <Route component={Logo} exact/>
        <Switch>
          <Route path='/' component={AlbumPage} exact/>
          <Route path='/photo-page/:albumId/:albumTitle/:albumOwner' component={PhotoPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Suspense>
  </div>
  </BrowserRouter>
)

 export default AppRoute;