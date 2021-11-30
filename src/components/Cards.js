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
             Utensils
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/ut1.png'
              text='Traditional Kettle with Mandala Art (CAN BE CUSTOMIZED FURTHER DEMAND) See More.....'
              path="/Utensil1"
            />           
            <CardItem
              src='images/Utensils/ut7.png'
              text='Hand Made Mandala Art on Tray (CAN BE CUSTOMIZED FURTHER DEMAND)'
              path="/Utensil7"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Utensils/ut3.png'
              text='Shree Plate(Thaal) with Traditional Kumaoni Aipan (CAN BE CUSTOMIZED FURTHER DEMAND)'
              path="/Utensil3"
            />
            <CardItem
              src='images/Utensils/ut2.png'
              text='Tray With Colourful Mandala Art (CAN BE CUSTOMIZED FURTHER DEMAND) See More....'
              path="/Utensil2"
            />
            <CardItem
              src='images/Utensils/ut5.png'
              text='Traditional Pahadi Vessels Painted with Aipan (CAN BE CUSTOMIZED FURTHER DEMAND)'
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
           Home Decor
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
              text='Unique Aipan Design Presenting Lord Ganesha(CAN BE CUSTOMIZED ON FURTHER DEMAND)'
              path="/Frame2"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Frames/frame3.png'
              text='Hand Made Chowki/Frame Shaped with Aipan Art (CAN BE CUSTOMIZED ON FURTHER DEMAND)'
              path="/Frame3"

            />
            <CardItem
              src='images/Frames/frame4.png'
              text='Magical Beauty of Mighty Lord Shiva Created over Cloth with Aipan Art (CAN BE CUSTOMIZED ON FURTHER DEMAND)'
              path="/Frame4"
            />
            <CardItem
              src='images/Frames/frame5.png'
              text='Magical Beauty of Mighty Lord Shiva Created over Chawki with Aipan Art (CAN BE CUSTOMIZED ON FURTHER DEMAND)'
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
            Wall Hangings
         </Button>
         <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Paper/pp1.png'
              text='Fine Art presenting Stunning Photoframe of DemiGoddess (CAN BE CUSTOMIZED ON FURTHER DEMAND)'
              path="/Paper1"
            />
            <CardItem
              src='images/Paper/pp2.png'
              text='Beautiful Wall Hanging Of Mighty Ganesha made with Mandala Art (CAN BE CUSTOMIZED ON FURTHER DEMAND) '
              path="/Paper2"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Paper/pp3.png'
              text='Beautiful Aipan Painting Of Mighty Ganesha represting The Himalayan Culture Over a Cloth (CAN BE CUSTOMIZED ON FURTHER DEMAND)'
              path="/Paper3"

            />
            <CardItem
              src='images/Paper/pp4.png'
              text='Hand Made Wall Hanging Portraying Sunset via Mandala Art (CAN BE CUSTOMIZED ON FURTHER DEMAND)'
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
