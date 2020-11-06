import React, { Component } from 'react'
import { MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollAnimation from 'react-animate-on-scroll';
export default class Iosdevelopment extends Component {
    render() {
        return (
            <>
             
           <div className=''>
             
                <div>
                <Navbar/>
                <div className='sectopgap24'>
                <MDBContainer>
               <MDBRow className='ios-top' >
                   <MDBCol md={6}>
                       <div>
                       <ScrollAnimation animateIn="slideInLeft">
                  <h1 className='ioshead-10 '> IOS Development <br/>Services </h1>
                  </ScrollAnimation>
                  </div>
                   </MDBCol>
                   <MDBCol md={6}>
                   <ScrollAnimation animateIn="slideInRight">
                   <img src  ={require('../images/iosapp.svg')} alt=""/>
                   </ScrollAnimation>
                   </MDBCol>
               </MDBRow>
              
               
               
                </MDBContainer>
                </div>
              
            

                <ScrollAnimation animateIn="slideInUp">     
 <MDBContainer>                     
<MDBRow md={6} className='webdev-10'>
    <MDBAnimation reveal type="fadeInUp">
<p className="contentios-10">Web development is about solving complex problems on the web
   through creative and cutting edge technologies. To see this through, we at Digimonk 
   Technologies provide a complete
   end to end web solutions that help brands to leverage their business.</p>
    </MDBAnimation>
   
</MDBRow>

<MDBRow className="devweb-12">

<MDBAnimation reveal type="fadeInUp">
    <h1> Technologies Expertise</h1>
    {/* <h1 style={{color:"#e40001"}}>Technologies Expertise</h1> */}
    {/* <p className="contentios-10">Web development is about solving complex problems on the web
   through creative and cutting edge technologies. To see this through, we at Digimonk. 
   </p> */}
</MDBAnimation>
    
    </MDBRow>
    </MDBContainer> 
    </ScrollAnimation>
   



    <ScrollAnimation animateIn="fadeIn">
    <MDBContainer>
    <MDBRow className='gaprequirebot'>
<MDBCol md={6}>
<h2 className='mobsty-10'>Mobile Application Design</h2>
<p className='mobstysty-2'>
With consumers utilizing information across multiple devices, 
it is compelling to build applications that operate flawlessly on all devices.
 Digimonk Technologies' solutions lab implements analytical design thinking and develops
  consumer-facing standalone applications, also the complex transaction heavy mobile
   applications with wondrous UX that look great across the environments.</p>
</MDBCol>
<MDBCol  md={6} className='swiftfor'>
<img src  = {require('../images/ios-image-swift-2.png')} alt=""/>
</MDBCol>
    </MDBRow>


    <MDBRow className='gaprequirebot'>
<MDBCol md={6}>
<h2 className='mobsty-10'>Mobile Application Design</h2>
<p className='mobstysty-2'>
With consumers utilizing information across multiple devices, 
it is compelling to build applications that operate flawlessly on all devices.
 Digimonk Technologies' solutions lab implements analytical design thinking and develops
  consumer-facing standalone applications, also the complex transaction heavy mobile
   applications with wondrous UX that look great across the environments.</p>
</MDBCol>
<MDBCol  md={6}>
<img src  ={require('../images/react-native.png')} alt=""/>
</MDBCol>


    </MDBRow>
    </MDBContainer>
    </ScrollAnimation >

<div className='ddfreg'>
<MDBContainer >
<h2 className='mobsty-10'>Looking for Assistance?</h2>
<p className='mobstysty-2'>
We are here to help you. Kindly Drop your Email here</p>
 <MDBRow className='patback'>  
<MDBCol md={6} >
<input type="email" className="form-control"  placeholder="Enter Your Email here" />
</MDBCol>

<MDBCol md={6} style={{textalign:"center"}}>
<button type="button" class="btn btn-deep-orange">Subscribe</button>
</MDBCol>
       </MDBRow>
       </MDBContainer>
       </div>
      
   





       </div>
          
            <Footer/> 
            </div>
            </>
        )
    }
}
