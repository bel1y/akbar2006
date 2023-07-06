import React, { Component } from 'react';
import NavbarMe from './NavbarMe.js';
import FooterMe from './FooterMe.js' ;
import s from '../css/Home.module.css';
import haegim from './akbaaar.png';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import blabla from "./guh.png";
import blabla1 from "./hozr.png";
import blan from "./iibo.png";
export default class Home extends Component {
  state={
    data:[],
    t:localStorage.getItem("lang")?localStorage.getItem("lang"):'uz',
    teacher:[{
    teacherid:1,
    teacherName_uz:"Abbas_uz",
    teacherName_ru:"Abbas_ru"
  },
{
  teacherid:2,
  teacherName_uz:"Abbs_uz",
  teacherName_ru:"Abbs_ru"
}],
  t:"uz"
}
postData=()=>{
  var data={
    'course_teacherid':document.querySelector("#mm").value*1,
    'course_title_ru':document.querySelector("#jk").value,
    "course_img":document.querySelector("#th").files[0],
    "course_price":document.querySelector("#hu").value,
    "course_time":document.querySelector("#mk").value,
    "course_teacherid": 5,
   }
   console.log(data);
  }
  render() {
    return (
      <div>
        <NavbarMe/>


        <input id='jk' type="text" />
        <select name="" id="mm">
          {this.state.teacher.map(item=>{
            return <option value={item.teacherid}>{this.state.t==="uz"?(item.teacherName_uz):(this.state.teacherName_ru)}</option>
          })}
        </select>
        <input type="file" id='th' />
        <input type="number" id='hu' />
        <input type="number" id='mk' />
        <button onClick={()=>{this.postData()}} >Yuborish</button>


<header className={s.bosh_menu} >
  <div className={s.aylanaab} >    
  </div>
<div className={s.header_text} >
  <h2>{this.state.t==='uz'?("Biz sizga  va boshqa kurslarni taklif qilamiz."):(this.state.t==='ru'?("Мы предлагаем вам и предлагать другие курсы сделаем."):("Мы предлагаем вам и предлагать другие курсысделаем."))}<span>Dasturla</span>|  </h2>
<p>{this.state.t==='uz'?("Siz istalgan vaqtda har qanday mavzuda kurslarni o’rganishingiz mumkin. Buning uchun qidiruv tizimidan foydalaning"):(this.state.t==='ru'?("Вы можете изучать курсы по любой теме в любое время возможно. Для этого используйте поисковую систему"):("Вы можете изучать курсы по любой теме в любое время возможно. Для этого используйте поисковую систему"))}</p>
<div className={s.header_input} >
  <input type="text" placeholder= ' Qanday kurs o’rganmoqchisiz ?' /> <div><img src={haegim} alt="" /></div>
</div>
</div>
<div className={s.header_card} >
  <div className={s.card1} >
    <div className={s.ibrohim}>
     <div className={s.but}> <button className={s.abbos}>Marketing</button>
      <p className={s.jiyu}>250.000 <span>UZS</span> </p>
      </div>
    <div className={s.take}> 
     <p className={s.butter}>Raqamli marketing bo'yicha <br /> to'liq kurs <span>| 48 soat</span></p>
     </div>
   <div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.1</p>
    <p  className={s.brrrr} >(524)</p>

    </div>
<div className={s.bt}><button className={s.ibf} ><h3><AiOutlineArrowRight/></h3></button></div>

    </div>
  </div>
  <div className={s.card1} >
<button className={s.tomboy} >Dasturlash</button>
<p className={s.suga} >Java Spring bo’yicha <br /> to’liq
kurs(amaliy)</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.0</p>
    <p  className={s.brrrr} >(670)</p>

    </div>
  </div>
<div id={s.card1} className={ s.card1 } >
<div className={s.tham} >  <button className={s.tehen} >Dizayn</button>
<p className={s.jiyu2}>400.000 <span>UZS</span> </p>
</div>
<p className={s.gorya} >Illustrator 0 dan professionalgacha <br />
to’liq kurs <span>|72soat</span> </p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.1</p>
    <p  className={s.brrrr} >(1,250)</p>
    <div className={s.bt}><button className={s.ibf} ><h3><AiOutlineArrowRight/></h3></button></div>
    </div>
</div>
<div id={s.card12} className={s.card1} >
  <button className={s.milaya} >Biznes</button>
  <p className={s.burxon} >Shaxsiy bizne <br />
e’tibor </p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.1</p>
    <p  className={s.brrrr} >(1,250)</p>
    <div className={s.bt}><button className={s.ibf} ><h3><AiOutlineArrowRight/></h3></button></div>
    </div>
</div>
<div className={s.card2} ></div>
</div>
</header>
        <FooterMe/>
        <div className={s.cas}>
<center><p className={s.min} >Bizning eng top kurslarimizni ko'rib chiqing</p></center>

<div className={s.nunh}>
<div className={s.nun}>
  <img src={ blabla } alt="" />
<div className={s.hugug}>  <p className={s.lala} >Java, Spring bo’yicha to’liq <br />
kurs. (amaliy)</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.1</p>
    <p  className={s.brrrr} >(524)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke}>
<div className={s.oke1}> <p className={s.bhbh}>Kurs hajmi</p> <p className={s.bhbh1} >38 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1} >250.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf1} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>
<div className={s.nun2}>
  <img src={ blabla1 } alt="" />
<div className={s.hugug1}>  <p className={s.lala1} >Illustrator boshlang’ichdan <br />
proffessionalgacha</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.1</p>
    <p  className={s.brrrr} >(524)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke}>
<div className={s.oke1}> <p className={s.bhbh}>Kurs hajmi</p> <p className={s.bhbh1} >38 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1} >250.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>

<div className={s.nun3}>
  <img src={ blan } alt="" />
<div className={s.hugug1}>  <p className={s.lala1} >Boshlang’ich Photoshop <br />kurslari</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.1</p>
    <p  className={s.brrrr} >(524)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke}>
<div className={s.oke1}> <p className={s.bhbh}>Kurs hajmi</p> <p className={s.bhbh1} >38 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1} >250.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>
</div>
</div>
      </div>
    )
  }
}
