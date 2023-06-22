import React, { Component } from 'react';
import NavbarMe from './NavbarMe.js';
import FooterMe from './FooterMe.js' ;
import s from '../css/Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarMe/>
 
<header className={s.bosh_menu} >
  <div className={s.aylanaab} >    
  </div>
<div className={s.header_text} >
  <h2>Biz sizga <span>Dasturla</span> va boshqa kurslarni taklif 
qilamiz.</h2>
<p>Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz 
mumkin. Buning uchun qidiruv tizimidan foydalaning</p>

<div className={s.header_input} >
  <input type="text" placeholder='Qanday kurs o’rganmoqchisiz ?' /> <div>d</div>
</div>
</div>
<div className={s.header_card} >
  <div className={s.card1} ></div>
  <div className={s.card1} ></div>
<div id={s.card1} className={s.card1} ></div>
<div className={s.card2} ></div>
</div>
</header>
        <FooterMe/>
      </div>
    )
  }
}
