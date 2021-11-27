import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import { Button } from '../Button';



function Category1() {
  return (
    <div className='cards' id="cards">
     <div className="category">
        <Button buttonSize='btn--wide'>
            Category 1
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/Frames/frames1.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
            />           
            <CardItem
              src='images/Frames/frames2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Frames/frames3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
            />
            <CardItem
              src='images/Frames/frames4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
            />
            <CardItem
              src='images/Frames/frames5.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Frames/frames6.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
            />           
            <CardItem
              src='images/Frames/frames7.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Category1;
