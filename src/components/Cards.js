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
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
            />
            <CardItem
              src='images/img-8.jpg'
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
    <br></br><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
      <div className="category">
        <Button buttonSize='btn--wide'>
            Category 2
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
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
      <br></br><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
      <div className="category">
        <Button buttonSize='btn--wide'>
            Category 3
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'

            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
            />
            <CardItem
              src='images/img-8.jpg'
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
    </div>
  );
}

export default Cards;
