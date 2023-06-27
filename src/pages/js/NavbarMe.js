import React, { Component } from 'react'
import calvin from './soliyev.png'
export default class NavbarMe extends Component {
  state={
    t:localStorage.getItem("lang")?localStorage.getItem("lang"):'ru'
  }
  setLanguage(){
    var a=document.querySelector("#til").value
    console.log(a);
    localStorage.setItem("lang",a)
    window.location.reload()
  }
  componentDidMount(){
    document.querySelector("#til").value=this.state.t
  }
  render() {
    return (
      <div>     
<div className="soliyev">
<div className="akbar">
<div className="seokjin"><img src={calvin} alt="" />
<select className='callin' onChange={()=>{this.setLanguage()}} id="til">
  <option value="uz">{this.state.t==="uz"?("O`zbek"):(this.setState.t==="ru"?("узбек"):("Uzbek"))}</option>
  <option value="ru">{this.state.t==="uz"?("Rus tili"):(this.setState.t==="ru"?("узбек1"):("Russian"))}</option>
</select>
</div>
<div className="seokjin2">
<select className='mic' id="">
  <option className='mic' value="">UZBEK</option>
  <option className='mic' value="">RUS</option>
  <option className='mic' value="">ENGLISH</option>
</select>
<button className="ibo">KIRISH</button>
</div>
</div>
<div className="swan">
</div>
</div>
      </div>
    )
  }
}
