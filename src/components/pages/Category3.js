import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import { Button } from '../Button';



function Category3() {
  return (
    <div className='cards' id="cards">
      <div className="category">
        <Button buttonSize='btn--wide'>
            Photoframes
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/Frames/frame1.png'
              text='Fine Colorful Art Portraying "BABA NEEMKIROLI" supported with Aipan Design'
              path="/Frame1"
            />
            <CardItem
              src='images/Frames/frame2.png'
              text='Unique Aipan Design Presenting Lord Ganesha.'
              label='Luxury'
              path="/Frame2"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Frames/frame3.png'
              text='Hand Made Chowki/Frame Shaped with Aipan Art'
              path="/Frame3"

            />
            <CardItem
              src='images/Frames/frame4.png'
              text='Magical Beauty of Mighty Lord Shiva Created over Cloth with Aipan Art'
              path="/Frame4"
            />
            <CardItem
              src='images/Frames/frame5.png'
              text='Magical Beauty of Mighty Lord Shiva Created over Chawki with Aipan Art'
              path="/Frame5"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Frames/frame6.png'
              text='Chawki/ Wall Hanging Portraying Lord Shiva with Fine Aipan Work'
              path="/Frame6"
            />
            </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Category3;
