import React, { useState } from 'react'
import '../Style/Style.css'
import wlc from '../assets/wlc.jpg'
import { useNavigate } from 'react-router-dom'

export default function Home(){
const navigate=useNavigate();
const [count1,setcount1]=useState(0);
const [count2,setcount2]=useState(0);
const [count3,setcount3]=useState(0);

    return (
      <div className='div-container'>
     <header className='container'>
     <span><h1 style={{float:'left',left:'0px'}}>ABCD</h1> <i class="fa fa-camera-retro fa-3x"></i></span>
       <nav>
          <ul className="nav_links">
            <li><a href='#Services' className='nav_links_name'>Services</a></li>
            <li><a href='#Products' className='nav_links_name'>Products</a></li>
            <li><a href='#Contact' className='nav_links_name'>Contact</a></li>
          </ul>  
        </nav>
        <span className="cta"><button className='btn btn-primary' onClick={()=>{navigate('/Login')}}>Login / Sign Up</button></span>
     </header>
    {/* <hr style={{color:"#fff"}}/>*/}
   
     <section>
      <img src={wlc} alt='logo unavailable' className='logo'></img>
      <div className='text-on-image text-center'>
             <h3 style={{color:'white','fontSize':'100px'}}>Welcome</h3>

          </div>
     </section>
     <section className="grid" id='Products'>
     <div>
      <h1>Item1</h1>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis quisquam culpa magni odit non odio consequatur explicabo at sint.<br/>
     <span style={{'display':'flex','justifyContent':'flex-start','alignItems':'center'}} >  
     <button className='btn btn-secondary btn-sm' onClick={()=>setcount1(count1+1)} data-testid="increment" >+</button>
      <span style={{'marginLeft':'12%'}}>{count1}</span>
    <button className='btn btn-secondary btn-sm' onClick={()=>setcount1(count1-1)} data-testid="decrement">-</button>
    </span>
    <button className='btn btn-dark'>Add Item</button>
    </div>
    <div>
      <h1>Item2</h1>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis quisquam culpa magni odit non odio consequatur explicabo at sint.<br/>
     <span style={{'display':'flex','justifyContent':'flex-start','alignItems':'center'}} >  
     <button className='btn btn-secondary btn-sm' onClick={()=>setcount2(count2+1)}>+</button>
      <span style={{'marginLeft':'12%'}}>{count2}</span>
    <button className='btn btn-secondary btn-sm' onClick={()=>setcount2(count2-1)}>-</button>
    </span>
    <button className='btn btn-dark'>Add Item</button>
    </div>
    <div>
      <h1>Item3</h1>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis quisquam culpa magni odit non odio consequatur explicabo at sint.<br/>
     <span style={{'display':'flex','justifyContent':'flex-start','alignItems':'center'}} >  
     <button className='btn btn-secondary btn-sm' onClick={()=>setcount3(count3+1)}>+</button>
      <span style={{'marginLeft':'12%'}}>{count3}</span>
    <button className='btn btn-secondary btn-sm' onClick={()=>setcount3(count3-1)}>-</button>
    </span>
    <button className='btn btn-dark'>Add Item</button>
    </div>
 </section>
     <section>
     <section id="Services">
          <div className="grid1">
            <div className="icon"><i className="fa fa-3x fa-fire"></i></div>
            <div className="desc">
              <h2>Premium Materials</h2>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className="grid1">
            <div className="icon"><i class="fa fa-3x fa-truck"></i></div>
            <div className="desc">
              <h2>Fast Shipping</h2>
              <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
              </p>
            </div>
          </div>
          <div className="grid1">
            <div className="icon">
              <i className="fa fa-3x fa-battery-full" aria-hidden="true"></i>
            </div>
            <div className="desc">
              <h2>Quality Assurance</h2>
              <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
              </p>
            </div>
          </div>
        </section>
</section> 
 
     <hr style={{color:"black"}}/>
  <footer className="footer" id='Contact' >
    <div className="inner-footer">
        <div className="social-links">
            <ul>
                <li className="social-items"><a href="#facebook"><i className="fab fa-facebook"></i></a></li>
                <li className="social-items"><a href="#twitter"><i className="fab fa-twitter-square"></i></a></li>
                <li className="social-items"><a href="#instagram"><i className="fab fa-instagram"></i></a></li>
                <li className="social-items"><a href="#tumblr"><i className="fab fa-tumblr-square"></i></a></li>
            </ul>
        </div>
    </div>
</footer>
     </div>
    )
  }

