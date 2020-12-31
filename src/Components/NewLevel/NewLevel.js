import React from 'react';
import './style/NewLevel.css';

const NewLevel = ({ version }) => {
   return(
      <div className='NewLevel'>
         <div className='card'>
            <h1>New Level Available!</h1>
            <h2>Welcome to 2020 version {version}!</h2>
         </div>
      </div>
   );
}

export default NewLevel;