import React from 'react';

const ActionDownVote = ({ downVote }) => (
  <svg onClick={downVote} width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1 7.20239C1 7.8226 1.28774 8.40772 1.77895 8.78638L7.03444 12.8377C7.31475 13.0543 7.68687 13.0543 7.96556 12.8377L13.221 8.78638C13.7123 8.40773 14 7.8226 14 7.20239L14 6.00012L7.5 11.0126L1 6.00012L1 7.20239Z'
      fill='white'
      fillOpacity='0.5'
    />
    <path
      d='M2 0.999969L13 0.99997C13.5523 0.99997 14 1.44769 14 1.99997L14 4.00012L8.10971 8.53111C7.75026 8.80761 7.24974 8.80761 6.89029 8.53111L1 4.00007L1 1.99997C1 1.44768 1.44772 0.999969 2 0.999969Z'
      fill='white'
      fillOpacity='0.5'
    />
  </svg>
);

export default ActionDownVote;
