import React, { useState, useEffect } from 'react';

import './style/Clock.css';

const Clock = ({ forEverYear }) => {

   const [value, setValue] = useState();
 
	useEffect(() => {
		const interval = setInterval(() => {
            const today = new Date();
            let date = today.toLocaleDateString('hu-HU');
            const time = today.toLocaleTimeString('hu-HU');
            
            if (today.getFullYear() > forEverYear) {
               date = `${forEverYear}. ${today.getMonth() + (13 * (today.getFullYear() - forEverYear))}. ${today.getDate()}.`;
            }
            setValue(`${date} ${time}`);
         },
			250
		);
		return () => {
			clearInterval(interval);
		}
	}, [forEverYear]);

   useEffect(() => {
      const dateTimeClassList = document.querySelector('.date-time').classList;
      if (value && !dateTimeClassList.contains('fadedIn')) {
         dateTimeClassList.add('fadedIn');
      }
   }, [value]);

   return(
      <div className='Clock'>
         <h1 className='date-time'>{value}</h1>
      </div>
   );
}

export default Clock;