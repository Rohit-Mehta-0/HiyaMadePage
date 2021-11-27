import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button';
import {Link} from 'react-router-dom'


function Cards() {
  return (
    <div className='cards' id="cards">
      <h1>Check out these EPIC Works</h1>
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
        </div>
      </div>
      <Link to='/Category1'>
      <Button buttonSize='btn--wide'>
            Show More....
         </Button></Link>
      </div>
    <br/><br/><br/><br/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
      <div className="category">
        <Button buttonSize='btn--wide'>
            Category 2
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/Decor1.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/decor/Decor2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/Decor3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/decor/Decor4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/decor/Decor4.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <Link to='/Category2'>
      <Button to='/Category2' buttonSize='btn--wide'>
            Show More....
         </Button></Link>
      </div>
      <br/><br/><br/><br/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
      <div className="category">
        <Button buttonSize='btn--wide'>
            Category 3
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/Utensils1.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
            />
            <CardItem
              src='images/Utensils/Utensils2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/Utensils3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'

            />
            <CardItem
              src='images/Utensils/Utensils4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
            />
            <CardItem
              src='images/Utensils/Utensils5.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
            />
          </ul>
        </div>
      </div>
      <Link to='/Category3'>
      <Button buttonSize='btn--wide'>
            Show More....
         </Button></Link>
    </div>
    <br/><br/><br/><br/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
      <div className="category">
        <Button buttonSize='btn--wide'>
            Category 4
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Paper/img1.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
            />
            <CardItem
              src='images/Paper/img2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Paper/img3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'

            />
            <CardItem
              src='images/Paper/img4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
            />
            <CardItem
              src='images/Paper/img05.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
