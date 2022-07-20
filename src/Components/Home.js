import React from 'react'
import Slickslider from './Slickslide'
import "../style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var s=0;var k=3;
function handleSubmit(a) {
    const ss= [ "i have been an illustrator for over 15 years, but only recently been designing NFT’s. ","i have been an illustrator for over 15 years, but only recently been designing NFT’s. previously design manager at apple but now i am designing for th...","i have been an illustrator for over 15 years, but only recently been designing NFT’s. ","I have changed!4"];

    if(a==1){
            document.getElementById("demo").innerHTML= ss[s];
            s+=1;
            if(s>3) s=0;
    }
    if(a==2){
        document.getElementById("demo").innerHTML= ss[k];
        k-=1;
        if(k<0) k=3;
    }
  }
function Next(props){
    return(
      // <h1 onClick={props.onClick}>hhh</h1>
      <button className="btnnext" onClick={() => {
       props.onClick();
        handleSubmit(1);
      }}><img src="/assets/img/btn-next.jpg" alt="" /></button>
    );
  }

  function Prev(props){
    return(
      // <h1 onClick={props.onClick}>hhh</h1>
      <button className="btnpre" onClick={() => {
        props.onClick();
         handleSubmit(2);
       }}><img src="/assets/img/btn-pre.jpg" alt="" /></button>
    );
  }
 
export default function Home() {
    const renderSlides = () =>
    [
    <div className="content4-a">
      <div className="content4-a-left">
        <img src="/assets/img/content4a1.png" alt="" />
        <div className="user">
          <img src="/assets/img/Thumb.png" alt="" />
          <p>Mike Page</p>
        </div>
      </div>
      <div className="content4-a-right">
        <img src="/assets/img/art2.png" alt="" />
        <img src="/assets/img/art3.png" alt="" />
      </div>
    </div>,
    <div className="content4-a">
      <div className="content4-a-left">
        <img src="/assets/img/art4.png" alt="" />
        <div className="user">
          <img src="/assets/img/Thumb2.png" alt="" />
          <p>Jane Foster</p>
        </div>
      </div>
      <div className="content4-a-right">
        <img src="/assets/img/art5.png" alt="" />
        <img src="/assets/img/art7.png" alt="" />
      </div>
    </div>,
    <div className="content4-a">
      <div className="content4-a-left">
        <img src="/assets/img/art8.png" alt="" />
        <div className="user">
          <img src="/assets/img/Thumb3.png" alt="" />
          <p>Brendon Fraser</p>
        </div>
      </div>
      <div className="content4-a-right">
        <img src="/assets/img/art9.png" alt="" />
        <img src="/assets/img/art10.png" alt="" />
      </div>
    </div>, 
  <div className="content4-a">
    <div className="content4-a-left">
      <img src="/assets/img/content4a1.png" alt="" />
      <div className="user">
        <img src="/assets/img/Thumb.png" alt="" />
        <p>Mike Page</p>
      </div>
    </div>
    <div className="content4-a-right">
      <img src="/assets/img/art2.png" alt="" />
      <img src="/assets/img/art3.png" alt="" />
    </div>
  </div>
  ].map(num => (
      <div className="">
        {num}
      </div>
    ));

    const renderSlides2 = () =>
    [
        <div className="content5-a">
        <img src="/assets/img/img1.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
      </div>,
      <div className="content5-a">
        <img src="/assets/img/img2.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
      </div>,
      <div className="content5-a">
        <img src="/assets/img/img3.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
      </div>,
      <div className="content5-a">
      <img src="/assets/img/img1.png" alt="" />
      <p>ethel holmes / nodejs, java, reactjs</p>
    </div>
    ].map(num => (
      <div className="">
        {num}
      </div>
    ));

    const renderSlides3 = () =>
    [
        <div className="content5-a">
        <img src="/assets/img/img4.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
        </div>,
        <div className="content5-a mg">
            <img src="/assets/img/img5.png" alt="" />
            <p>ethel holmes / nodejs, java, reactjs</p>
        </div>,
        <div className="content5-a">
            <img src="/assets/img/img6.png" alt="" />
            <p>ethel holmes / nodejs, java, reactjs</p>
        </div>,
        <div className="content5-a mg">
        <img src="/assets/img/img5.png" alt="" />
        <p>ethel holmes / nodejs, java, reactjs</p>
        </div>
    ].map(num => (
      <div className="">
        {num}
      </div>
    ));
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/assets/css/style2.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <title>Tranning slace</title>
    <div className="container">
      <div className="header2">
        <img src="/assets/img/logo.png" alt="logo" />
        <div className="topnav" id="myTopnav">
          <div className="topnav-center">
            <a href="#" />
            <a href="#">Artists</a>
            <a href="#">Developers</a>
            <a href="#">cms &amp; mods</a>
            <a href="#">about us</a>
            <a href="javascript:void(0);" className="icon" onclick="myFunction()">
              <div className="fa-st" />
            </a>
            <a href="javascript:void(0);" className="icon" onclick="myFunction()">
              <i className="fa fa-user" />
            </a>
          </div>
          <div className="topnav-right">
            <button><img src="/assets/img/singing.jpg" alt="" /><p>Sing in</p></button>
            <button><img src="/assets/img/singup.jpg" alt="" /><p>Sing up</p></button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content1">
          <div className="content1-a">
            <h1>Fully doxxed &amp;</h1>
            <h2>kicka$$</h2>
            <h3>NINJAS OF THE METAVERSE</h3>
          </div>
          <div className="content1-b">
            <img src="assets/img/ninja.jpg" alt="" />
            <p>artist <span>moon dog</span></p>
          </div>
        </div>
        <div className="content2">
          <div className="content2-a">
            <h1>Artists</h1>
            <p>Proven and fully screened Web3 artists; from NFT artists to  virtual and augmented reality designers.</p>
            <button>search artists</button>
          </div>
          <img src="assets/img/line1.jpg" alt="" />
          <div className="content2-a">
            <h1>Artists</h1>
            <p>Proven and fully screened Web3 artists; from NFT artists to  virtual and augmented reality designers.</p>
            <button>search artists</button>
          </div>
          <img src="assets/img/line1.jpg" alt="" />
          <div className="content2-a">
            <h1>Artists</h1>
            <p>Proven and fully screened Web3 artists; from NFT artists to  virtual and augmented reality designers.</p>
            <button>search artists</button>
          </div>
        </div>
        <div className="content3">
          <div className="content3-a">
            <h1>FIND YOUR PROJECTS</h1>
            <h2>CHOSEN ONES</h2>
          </div>
          <div className="content3-b">
            <img src="/assets/img/ninja1.png" alt="" />
            <p>you have no f%$king idea how to find good people in this psychotic web 3.0 space</p>
          </div>
          <div className="content3-c">
            <img src="/assets/img/ninja3.png" alt="" />
            <p>so you browse pre-qualified and screened ninjas of the metaverse</p>
          </div>
          <div className="content3-d">
            <img src="/assets/img/ninja4.png" alt="" />
            <p>you take the steps to setup a project with all your requirements</p>
          </div>
          <div className="content3-e">
            <p>you interview them and invite them into your ranks for world demonation</p>
            <h1>LFG</h1>
            <img src="/assets/img/ninja2.png" alt="" />
            <h4>Featured Artists</h4>
          </div>
       
        
        </div>
        
        <div className='class4'>
        <div><p id="demo" >i have been an illustrator for over 15 years, but only recently been designing NFT’s. previously design manager at apple but now i am designing for th...</p></div>
        <Slider
        nextArrow={<Next type="next" />}
        prevArrow={<Prev type="prev" />}
        dots={true}
        slidesToShow={3}
        slidesToScroll={1}
        // customPaging={customPaging}
        // appendDots={appendDots}
      >
        {renderSlides()}
      </Slider>
          
        </div>
        <div className="content5">
        <p className="p-feature">Featured developers</p>
            <Slider
            nextArrow={<Next type="next" />}
            prevArrow={<Prev type="prev" />}
            dots={true}
            slidesToShow={3}
            slidesToScroll={1}
            // customPaging={customPaging}
            // appendDots={appendDots}
        >
            {renderSlides2()}
        </Slider>

        </div>
        <div className="content6">
          <p className="p-feature">Featured developers</p>
          <Slider
            nextArrow={<Next type="next" />}
            prevArrow={<Prev type="prev" />}
            dots={true}
            slidesToShow={3}
            slidesToScroll={1}
            // customPaging={customPaging}
            // appendDots={appendDots}
        >
            {renderSlides3()}
        </Slider>
        </div>
        <div className="content7">
          <div className="content7-a">
            <h2>because web 3.0 is</h2>
            <h3>shady</h3>
            <h1>AF!</h1>
          </div>
          <div className="content7-b">
            <img src="/assets/img/ninja5.png" alt="" className="content7-imga" />
            <img src="/assets/img/ninja6.png" alt="" className="content7-imgb" />
          </div>
          <p>we hear story after story of resources hiding behind pfp’s and usernames, not showing their faces on video calls, providing average deliverables, and even worse.. scams, fraud, perverts and more! we will shake out baddies before you even get to them.</p>
        </div>
        <div className="content8">
          <h3>HOW WE SOLVE THIS...</h3>
          <div className="content8-a">
            <div className="content8-a1">
              <h1>1</h1>
              <h2>ninja skills review</h2>
              <p>after a minja has submitted their resume, portfolios and linkedin url, we handpick only the minjas who we think are the most well trained and metaverse ready to proceed to stage 2</p>
            </div>
            <div className="content8-a1 content8-a1-ct">
              <h1>1</h1>
              <h2>ninja skills review</h2>
              <p>after a minja has submitted their resume, portfolios and linkedin url, we handpick only the minjas who we think are the most well trained and metaverse ready to proceed to stage 2</p>
            </div>
            <div className="content8-a1 content8-a1-rg">
              <h1>1</h1>
              <h2>ninja skills review</h2>
              <p>after a minja has submitted their resume, portfolios and linkedin url, we handpick only the minjas who we think are the most well trained and metaverse ready to proceed to stage 2</p>
            </div>
          </div>
          <img src="/assets/img/ninja7.png" alt="" />
          <div className="content8-b">
            <p>ok, you’ve heard enough and ready to hire some proper kicka$$ experts to build your project</p>
            <button>post a job</button>
          </div>
        </div>
      </div>
    </div>
    <div className="content9">
      <div className="content9-a">
        <img src="/assets/img/ninja8.png" alt="" />
        <div className="content9-a1">
          <h2>are you a</h2>
          <h1>minja?</h1>
        </div>
      </div>
      <div className="content9-b">
        <div className="content9-b1">
          <h1>ya, an artist</h1>
          <p>you’re an artist who has created masterpieces for NFT collections, VR / ar experiences, or other web 3.0 projects</p>
          <button>apply now</button>
        </div>
        <img src="/assets/img/line2.jpg" alt="" />
        <div className="content9-b1">
          <h1>ya, an artist</h1>
          <p>you’re an artist who has created masterpieces for NFT collections, VR / ar experiences, or other web 3.0 projects</p>
          <button>sign me up</button>
        </div>
        <img src="/assets/img/line2.jpg" alt="" />
        <div className="content9-b1">
          <h1>ya, an artist</h1>
          <p>you’re an artist who has created masterpieces for NFT collections, VR / ar experiences, or other web 3.0 projects</p>
          <button>join now</button>
          {/* <i class="fa-solid fa-bars"  style="color:#fff;"></i> */}
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="fotter1">
        <img src="/assets/img/logo.png" alt="" />
        <p>The number 1 platform for finding fully doxxed and experienced web 3.0 designers, developers, community managers and mods</p>
      </div>
      {/* <hr> */}
      <div className="line" />
      <div className="footer2">
        <h2>here to hire</h2>
        <p>hiring an artist hiring a developer hiring a CM / mod</p>
      </div>
      <div className="footer2">
        <h2>here to apply</h2>
        <p>apply as an artist apply as a developer apply as a Cm / mod</p>
      </div>
      <div className="footer2">
        <h2>other sh!t</h2>
        <p>about faqs contact</p>
        <p>faqs</p>
        <p>contact</p>
      </div>
      <div className="footer2 footer2-img">
        <h2>follow us</h2>
        <img src="/assets/img/iconsent.png" alt="" />
        <img src="/assets/img/icontw.png" alt="" />
        <img src="/assets/img/iconM.png" alt="" />
        <img src="/assets/img/iconyoutube2.png" alt="" />
      </div>
    </div>
    <div className="line2" />
    <div className="term"><p>© 2022. Terms of service. privacy policy. cookie policy.</p></div>
  </div>
  )
}
