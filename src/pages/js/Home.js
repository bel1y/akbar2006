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
import vv from "./theards.png";
import vauv from "./oxiri.png";
import foti from "./desktop.png";
import foti1 from "./palette.png";
import foti2 from "./bag.png";
import foti3 from "./coins.png";
import foti4 from "./chart-line.png";
import foti5 from "./medal.png";
import foti6 from "./shield (1).png";
import foti7 from "./heartbeat.png";
import jenn from "./Rectangle 11.1.png";
import jenn1 from "./Rectangle 11.3.png";
import jenn2 from "./Rectangle 11.5.png";
import jenn3 from "./Rectangle 11.7.png";
import jenn4 from "./Rectangle 11.9.png";
import jenn5 from "./Rectangle 11.11.png";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import hoji from "./Rectangle 13.png";
import ustoz from "./“ (1).png";
import uctala from "./“ (2).png";
import jiiij from "./Ellipse (5).png";
import pinterest from "./Group 23 (2).png";
import adidas from "./download.png";
import lyft from "./download 5.png";
import monkey from "./survey monkey icon.png";
import monkeey from "./survey monkey text.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import payme from "./payme.png";
import click from "./logo (7).png";
import upay from "./upay_logo_new.png";
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
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
</div>
<div className={s.no}><div className={s.nun3}>
  
  <img src={ blan } alt="" />
<div className={s.hugug1}>  <p className={s.lala} >Boshlang’ich Photoshop <br />kurslari</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.0</p>
    <p  className={s.brrrr} >(987)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke}>
<div className={s.oke12}> <p className={s.bhbh}>Kurs hajmi</p> <p className={s.bhbh1} >42 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1} >370.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>
<div className={s.nun3}>
  
  <img src={ vv } alt="" />
<div className={s.hugug1}>  <p className={s.lala} >Shaxsiy biznesni rivojlan- <br />
tirish qoidalari</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.0</p>
    <p  className={s.brrrr} >(165)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke}>
<div className={s.oke12}> <p className={s.bhbh}>Kurs hajmi</p> <p className={s.bhbh1} >16 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1} >420.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>
<div className={s.nun3}>
  
  <img src={ vauv } alt="" />
<div className={s.hugug1}>  <p className={s.lala} >1C bo’yicha to’liq kurs <br />
(amaliy)</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.1</p>
    <p  className={s.brrrr} >(1,640)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke}>
<div className={s.oke12}> <p className={s.bhbh}>Kurs hajmi</p> <p className={s.bhbh1} >36 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1} >450.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>
</div>
</div>
<div className={s.moko} >
<div className={s.lali2}>
<p className={s.mk2} >Top kategoriyalar</p>
<button className={s.lali} >Barchasi</button>
</div>
  <div className={s.karta}>
    <div className={s.kart}>
      <img src={ foti } alt="" />
      <p className={s.jk} >Dasturlash</p>
    </div>
    <div className={s.kart}>
      <img src={ foti1 } alt="" />
      <p className={s.jk} >Dizayn</p>
    </div>   <div className={s.kart}>
      <img src={ foti2 } alt="" />
      <p className={s.jk} >Biznes</p>
    </div>   <div className={s.kart}>
      <img src={ foti3 } alt="" />
      <p className={s.jk} >Buxgalteriya</p>
    </div>   <div className={s.kart}>
      <img src={ foti4 } alt="" />
      <p className={s.jk} >Marketing</p>
    </div>   <div className={s.kart}>
      <img src={ foti5 } alt="" />
      <p className={s.jk} >Menejment</p>
    </div>   <div className={s.kart}>
      <img src={ foti6 } alt="" />
      <p className={s.jk} >Xavfsizlik</p>
    </div>   <div className={s.kart}>
      <img src={ foti7 } alt="" />
      <p className={s.jk} >Salomatlik</p>
    </div>
  </div>
  <div className={s.thv}>
{/* <p className={s.thv1} >Dasturlash</p>
<p className={s.thv1} ></p>
<p className={s.thv1} ></p>
<p className={s.thv1} ></p>
<p className={s.thv1} ></p>
<p className={s.thv1} ></p>
<p className={s.thv1} ></p>
<p className={s.thv1} ></p> */}
    <Nav variant="underline" defaultActiveKey="/home">
   
      <Nav.Item className={s.kl} >
        <Nav.Link eventKey="link-1">Dizayn</Nav.Link>
        <Nav.Link eventKey="link-1">Marketing</Nav.Link>
        <Nav.Link eventKey="link-1">Biznes</Nav.Link>
        <Nav.Link eventKey="link-1">Salomatlik</Nav.Link>
        <Nav.Link eventKey="link-1">Menejment</Nav.Link>
        <Nav.Link eventKey="link-1">Buxgalteriya</Nav.Link>
        <Nav.Link eventKey="link-1">Tarmoq</Nav.Link>
        

      </Nav.Item>
 
    </Nav>

  </div>
</div>

<div className={s.rey}>
<div className={s.ray1} >
  <div className={s.run}>
  <img src={ jenn } alt="" />
<div className={s.hugug1}>  <p className={s.lalas} >Python bo’yicha boshlang’ich <br />  
dasturlash</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.0</p>
    <p  className={s.brrrr} >(987)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke1}>
<div className={s.oke12}> <p className={s.bhbhh}>Kurs hajmi</p> <p className={s.bhbh1g} >42 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1g} >370.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>
<div className={s.run}>
  <img src={ jenn1 } alt="" />
<div className={s.hugug1}>  <p className={s.lalasi} >Java bo’yicha boshlang’ich <br />
dasturlash</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.0</p>
    <p  className={s.brrrr} >(987)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke1}>
<div className={s.oke12}> <p className={s.bhbhh}>Kurs hajmi</p> <p className={s.bhbh1g} >42 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1g} >370.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>  
<div className={s.run}>
  <img src={ jenn2 } alt="" />
<div className={s.hugug1}>  <p className={s.lalasi} >Spring to’liq kurs</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.0</p>
    <p  className={s.brrrr} >(987)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke1}>
<div className={s.oke12}> <p className={s.bhbhh}>Kurs hajmi</p> <p className={s.bhbh1g} >42 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1g} >370.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>   
<div className={s.run}>
  <img src={ jenn3 } alt="" />
<div className={s.hugug1}>  <p className={s.lalasi} >C++ da massivlar bilan
ishlash</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.0</p>
    <p  className={s.brrrr} >(987)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke1}>
<div className={s.oke12}> <p className={s.bhbhh}>Kurs hajmi</p> <p className={s.bhbh1g} >42 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1g} >370.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div> 

<div className={s.run}>
  <img src={ jenn4 } alt="" />
<div className={s.hugug1}>  <p className={s.lalasi} >JCSS da grid texnologiyalari</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.0</p>
    <p  className={s.brrrr} >(987)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke1}>
<div className={s.oke12}> <p className={s.bhbhh}>Kurs hajmi</p> <p className={s.bhbh1g} >42 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1g} >370.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div> 
<div className={s.run}>
  <img src={ jenn5 } alt="" />
<div className={s.hugug1}>  <p className={s.lalasi} >JHTML 5 imkoniyatlari, CSS 3 
imkoniyatlari</p>
<div className={s.icon} >
     <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3> <AiFillStar /></h3>
    <h3><AiOutlineStar/></h3> <p>4.0</p>
    <p  className={s.brrrr} >(987)</p>
    <div className={s.bt}></div>
    </div></div>
<div className={s.okeoke1}>
<div className={s.oke12}> <p className={s.bhbhh}>Kurs hajmi</p> <p className={s.bhbh1g} >42 soat</p> </div>
<div className={s.oke2}><p className={s.bhbh}>Kurs narxi</p> <p className={s.bhbh1g} >370.000 <span>UZS</span> </p></div>
<div className={s.oke2}><button className={s.ibf3} ><h3><AiOutlineArrowRight/></h3></button></div>
</div>
</div>  

</div>
</div>

<div className={s.admikn2} ><div className={s.admin}>
<img className={s.adab} src={ hoji } alt="" />  
<div className={s.madi} >
  <img className={s.mkooo} src={ustoz} alt="" />
<p className={s.farzzz} >“O’z qalbing va ichki sezgingga ergashish uchun <br />
yetarlicha jur’atli bo’l. Zotan shu ikki tuyg’u <br />
sening aslida kim bo’lishni xoxlashingni aniq biladi.”</p>
<div className={s.fufu} ><img className={s.uf} src={ uctala } alt="" />
<p className={s.jkg} >Stiv Jobs</p>

</div>


</div>
</div></div>

<div className={s.ok} >
<center><p className={s.dfg} >Biz haqimizda boshqalar fikri</p></center>
<Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwipera"
      >
        <SwiperSlide  >
          <center>  <img src={jiiij} alt="" />
            <p>Ted Howard</p>
            <p>Senior Designer</p></center>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>
        </SwiperSlide>
        <SwiperSlide  >
          <center>  <img src={jiiij} alt="" />
            <p>Ted Howard</p>
            <p>Senior Designer</p></center>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>
        </SwiperSlide>
        <SwiperSlide  >
          <center>  <img src={jiiij} alt="" />
            <p>Ted Howard</p>
            <p>Senior Designer</p></center>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>
        </SwiperSlide>
        <SwiperSlide  >
          <center>  <img src={jiiij} alt="" />
            <p>Ted Howard</p>
            <p>Senior Designer</p></center>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>
        </SwiperSlide>
        <SwiperSlide  >
          <center>  <img src={jiiij} alt="" />
            <p>Ted Howard</p>
            <p>Senior Designer</p></center>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>
        </SwiperSlide>
        <SwiperSlide  >
          <center>  <img src={jiiij} alt="" />
            <p>Ted Howard</p>
            <p>Senior Designer</p></center>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras turpis 
volutpat libero orci placerat varius. Diam egestas morbi suspendisse morbi. 
Quis et volutpat donec ipsum malesuada ipsum mattis tincidunt mattis. 
Proin tristique ultrices egestas ut vitae consectetur est.</p>
        </SwiperSlide>
      </Swiper>

<center><p className={s.lkl} >Bizning hamkorlar</p></center>

<div  className={s.lpl} >


<img src={pinterest} alt="" />
<img src={ adidas } alt="" />
<img src={  lyft} alt="" />
<img src={  monkey} alt="" />
<img src={monkeey} alt="" />
</div>


<div className={s.dih} >
    <div className={s.dih1} >
      <p> Asosiy</p>
      <p className={s.kop} >Loyiha haqida</p>
      <p className={s.kop} >Kurslar</p>
      <p className={s.kop} >Mentorlarga</p>
      <p className={s.kop} >Ommaviy oferta</p>
      <p className={s.kop} >Maxfiylik siyosati</p>

    </div>
    
    <div className={s.dih1} >
      <p>Qo’shimcha</p>
      <p className={s.kop} >Bizning jamoa</p>
      <p className={s.kop} >Biz bilan hamkorlik</p>
      <p className={s.kop} >Bu qanday ishlaydi ?</p>
  
      </div>
    <div className={s.dih1} >
    <p>Qo’llab quvvatlash</p>
    <p className={s.kop} >Eng ko’p beriladigan savollar</p>
    <p className={s.kop} > Kontakt</p>


    </div>
    <div className={s.dih1} >
<p>To’lov turlari</p>
<div className={s.mik}  >
<img src={payme} alt="" />
<img src={click} alt="" />
<img src={upay} alt="" />
</div>
<p>100011, Toshkent sh. Shayxontohur tum., <br />
Zarqaynar ko'ch., 3B-uy</p>

<button className={s.dji} >Biz bilan aloqa</button>
    </div>

</div>


</div>


{/* <div className={s.oyna} >
<div className={s.mini_oyna} >
<div className={s.close} onClick={()=>{document.querySelector(s.oyna).style.display="none"}} >X</div>
Siz rostan ham {this.state.delete1.fullname} ni uchirmoqchimisiz. Shu nomer {this.state.delete1.phone_number} sizga yoqmayaptimi?
<button onClick={()=>{this.deleteData()}} >Daa</button><button onClick={()=>{document.querySelector(s.oyna).style.display="none"}} >Neet</button>

</div>
</div>

<table style={{width:"100%"}} >
  <tr style={{border:"1px solid black"}} >
    <th style={{border:"1px solid black"}}   >email</th>
    <th style={{border:"1px solid black"}}   >phone</th>
    <th style={{border:"1px solid black"}}   >masseger</th>
    <th style={{border:"1px solid black"}}   >fullname</th>
    <th style={{border:"1px solid black"}}   >delete</th>
    <th style={{border:"1px solid black"}}   >edit</th>


  </tr>
  
</table> */}









      </div>
    )
  }
}
