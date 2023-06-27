import React, { Component } from 'react';
import NavbarMe from './NavbarMe.js';
import FooterMe from './FooterMe.js' ;
import s from '../css/Home.module.css';
import haegim from './akbaaar.png'
export default class Home extends Component {
  state={
    t:localStorage.getItem("lang")?localStorage.getItem("lang"):'uz'
  }
  render() {
    return (
      <div>
        <NavbarMe/>
 
<header className={s.bosh_menu} >
  <div className={s.aylanaab} >    
  </div>
<div className={s.header_text} >
  <h2>Biz sizga <span>Dasturla</span>| va boshqa kurslarni taklif 
qilamiz.</h2>
<p>{this.state.t==='uz'?("biz Iteen"):(this.state.t==='ru'?("Вы можете изучать курсы по любой теме в любое время возможно. Для этого используйте поисковую систему"):("Вы можете изучать курсы по любой теме в любое время возможно. Для этого используйте поисковую систему"))}</p>








<div className={s.header_input} >
  <input type="text" placeholder='Qanday kurs o’rganmoqchisiz ?' /> <div><img src={haegim} alt="" /></div>
</div>
</div>
<div className={s.header_card} >
  <div className={s.card1} >
    <div className="ibrohim">
      <button className="abbos">Marketing</button>
      <p className="jiyu">250.000 <span>UZS</span> </p>
    </div>
  </div>
  <div className={s.card1} ></div>
<div id={s.card1} className={s.card1} ></div>
<div className={s.card1} ></div>
<div className={s.card2} ></div>
</div>
</header>
        <FooterMe/>
      </div>
    )
  }
}
