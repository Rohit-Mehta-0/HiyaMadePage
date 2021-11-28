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
              src='images/Frames/frame1.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path="/Frame1"
            />
            <CardItem
              src='images/Frames/frame2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              path="/Frame2"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Frames/frame3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path="/Frame3"

            />
            <CardItem
              src='images/Frames/frame4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              path="/Frame4"
            />
            <CardItem
              src='images/Frames/frame5.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              path="/Frame5"
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
              src='images/Paper/pp1.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              path="/Paper1"
            />
            <CardItem
              src='images/Paper/pp2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              path="/Paper2"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Paper/pp3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              path="/Paper3"

            />
            <CardItem
              src='images/Paper/pp4.png'
              text='Experience Football on Top of the Himilayan Mountains'
              path='/Paper4'
            />
           
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
