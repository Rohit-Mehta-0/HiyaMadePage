import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import { Button } from '../Button';



function Category2() {
  return (
    <div className='cards' id="cards">
      <div className="category">
        <Button buttonSize='btn--wide'>
            Category 2 - Home Decor
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/decor/decor8.png'
              text='Hand Customized Cushions Giving a Instance of Mighty Himalayas (CAN BE CUSTOMIZED FURTHER DEMAND)'
              path='/Decor8'
            />
            <CardItem
              src='images/decor/decor5.png'
              text='Colourful Flags with Spritual Symbols used as Decoratives (CAN BE CUSTOMIZED FURTHER DEMAND)'
              path='/Decor5'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor3.png'
              text='Decorative Wall Hanging with Spritual Symbols(CAN BE CUSTOMIZED FURTHER ON DEMAND)'

             path='/Decor3'
            />
            <CardItem
              src='images/decor/decor4.png'
              text='Flag Quoted With Pahadi Cheete Shan se Jeete (CAN BE CUSTOMIZED FURTHER DEMAND)'
              path='/Decor4'
            />
            <CardItem
              src='images/decor/decor9.png'
              text='Customized Hand Made Cushions with well known Kumaoni Slangs (CAN BE CUSTOMIZED FURTHER DEMAND)'
             path='/Decor9'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor6.png'
              text='Decorative Wall Hanging with Spritual Symbols(CAN BE CUSTOMIZED FURTHER ON DEMAND)'
              path='/Decor6'
            />
            <CardItem
              src='images/decor/decor7.png'
              text='Flag Quoted With Spritual Symbols(CAN BE CUSTOMIZED FURTHER DEMAND)'
              path='/Decor7'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor1.png'
              text='Flag Quoted With Spritual Symbols(CAN BE CUSTOMIZED FURTHER DEMAND)'
              path='/Decor1'
            />
            <CardItem
              src='images/decor/decor2.png'
              text='Flag Quoted With Spritual Symbols(CAN BE CUSTOMIZED FURTHER DEMAND)'
              path='/Decor2'
            />
            <CardItem
              src='images/decor/decor10.png'
              text='Diya Painted with Fine Aipan Art (CAN BE CUSTOMIZED FURTHER DEMAND)'
              path='/Decor10'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor11.png'
              text='Colourful Diya with Different Patterns(CAN BE CUSTOMIZED FURTHER DEMAND)'
              path='/Decor11'
            />
            <CardItem
              src='images/decor/decor12.png'
              text='Eye Catching Diya with Different Patterns(CAN BE CUSTOMIZED FURTHER DEMAND)'
              path='/Decor12'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/decor/decor13.png'
              text='Colourful Plate(Thaal) with Different Patterns(Aipan, Mandala etc)(CAN BE CUSTOMIZED FURTHER DEMAND)'

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
