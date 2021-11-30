import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import { Button } from '../Button';



function Category1() {
  return (
    <div className='cards' id="cards">
     <div className="category">
        <Button buttonSize='btn--wide'>
            Category 1 - Utensils
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/Utensils/ut1.png'
              text='Traditional Kettle with Mandala Art '
              path="/Utensil1"
            />           
            <CardItem
              src='images/Utensils/ut7.png'
              text='Hand Made Mandala Art on Tray'
              path="/Utensil7"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/ut3.png'
              text='Shree Plate(Thaal) with Traditional Kumaoni Aipan'
              path="/Utensil3"
            />
            <CardItem
              src='images/Utensils/ut2.png'
              text='Tray With Colourful Mandala Art'
              path="/Utensil2"
            />
            <CardItem
              src='images/Utensils/ut5.png'
              text='Traditional Pahadi Vessels Painted with Aipan'
              path="/Utensil5"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/ut6.png'
              text='Kettle (Yellow) With Basic Aipan'
              path="/Utensil6"
            />           
            <CardItem
              src='images/Utensils/ut4.png'
              text='Traditional Pahadi Vessels Painted with Aipan'
              path="/Utensil4"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/ut8.png'
              text='Beautiful Aipan Painted on Traditional Kettle'
              path="/Utensil8"
            />
            <CardItem
              src='images/Utensils/ut9.png'
              text='Swastik Plate (Thaal) Painted With Aipan Designs '
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
