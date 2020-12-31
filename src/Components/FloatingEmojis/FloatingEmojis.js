import React from 'react';
import './style/FloatingEmojis.css';

const FloatingEmojis = ({ emoji }) => {
   const emojiArray = [emoji, emoji, emoji, emoji, emoji];
   const order = [0, 3, 1, 2, 4];

   return(
      <div className='FloatingEmojis'>
         {emojiArray.map((emojiElement, i) => {
            return <span key={i} className={`emoji${i} emoji-animation-${order[i]}`}>{emojiElement}</span>;
         })}
      </div>
   );
}

export default FloatingEmojis;