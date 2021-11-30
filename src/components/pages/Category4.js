import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import { Button } from '../Button';



function Category4() {
  return (
    <div className='cards' id="cards">
      <div className="category">
        <Button buttonSize='btn--wide'>
            Wall Hangings
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/Paper/pp1.png'
              text='Fine Art presenting Stunning Photoframe of DemiGoddess'
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
              text='Beautiful Aipan Painting Of Mighty Ganesha represting The Himalayan Culture Over a Cloth'
              path="/Paper3"

            />
            <CardItem
              src='images/Paper/pp4.png'
              text='Hand Made Wall Hanging Portraying Sunset via Mandala Art'
              path='/Paper4'
            />
           
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Category4;
