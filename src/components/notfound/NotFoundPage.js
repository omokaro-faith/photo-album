import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/notfound/_notfound.css'
const NotFoundPage = () => (
  <div>
    <h1>Nothing to see here, go back to <Link to='/'>albums page </Link></h1>
  </div>
)

 export default NotFoundPage; 