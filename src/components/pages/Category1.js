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
              src='images/Utensils/ut1.png'
              text='Traditional Kettle with Mandala Art'
              path="/Utensil1"
            />           
            <CardItem
              src='images/Utensils/ut2.png'
              text='Hand Made Mandala Art on Tray'
              path="/Utensil2"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/ut3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path="/Utensil3"
            />
            <CardItem
              src='images/Utensils/ut4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              path="/Utensil4"
            />
            <CardItem
              src='images/Utensils/ut5.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              path="/Utensil5"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/ut6.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path="/Utensil6"
            />           
            <CardItem
              src='images/Utensils/ut7.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              path="/Utensil7"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/ut8.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path="/Utensil8"
            />
            <CardItem
              src='images/Utensils/ut9.png'
              text='Experience Football on Top of the Himilayan Mountains'
              path="/Utensil9"
            />
          
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Category1;
