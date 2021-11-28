import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import { Button } from '../Button';



function Category2() {
  return (
    <div className='cards' id="cards">
      <div className="category">
        <Button buttonSize='btn--wide'>
            Category 2
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/decor/decor1.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/Decor1'
            />
            <CardItem
              src='images/decor/decor2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/Decor2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/Decor3'
            />
            <CardItem
              src='images/decor/decor4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/Decor4'
            />
            <CardItem
              src='images/decor/decor5.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/Decor5'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor6.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/Decor6'
            />
            <CardItem
              src='images/decor/decor7.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/Decor7'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor8.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/Decor8'
            />
            <CardItem
              src='images/decor/decor9.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/Decor9'
            />
            <CardItem
              src='images/decor/decor10.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/Decor10'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor11.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/Decor11'
            />
            <CardItem
              src='images/decor/decor12.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/Decor12'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor13.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/Decor13'
            />
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Category2;
