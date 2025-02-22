import React from 'react';

const OfferComponent = () => {
  return (
    <div className='offer-component'>
      <div className='offer-under'>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/03/26/49/52/360_F_326495250_pWoYD66lkPA7WZDzWbX7mTWzSrFJ1UCh.jpg)` }}
        ></div>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(https://media.istockphoto.com/id/480326822/photo/twilight-of-industrial-petroleum-plant.jpg?s=612x612&w=0&k=20&c=9FEo3z0PMblY_IVqTUC2lqX4NPh4kwFnklG37Vzzjm8=)` }}
        ></div>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/03/06/62/40/360_F_306624047_QcF2cA57bjGpvFDAlSQDPdSlvAgXwfJC.jpg)` }}
        ></div>
      </div>
      <div className='offer-zone'>
        <div 
          className='main-offer' 
          style={{ backgroundImage: `url(https://t4.ftcdn.net/jpg/00/62/36/33/360_F_62363310_d3CZCpZiKRfZxLcDXrwnLyzWeBwqM5dp.jpg)` }}
        ></div>
      </div>
    </div>
  );
};

export default OfferComponent;
