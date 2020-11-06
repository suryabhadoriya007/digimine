import React, { Component } from 'react'
import { MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,  } from 'mdbreact';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Paidadvertising extends Component {
    render() {
        return (
            <div>
                 <div className='contentmarkettop'>
               <Navbar/>
               <div className='sectopgap24'>
                     <MDBContainer>
                      
                      <MDBAnimation type="fadeInUp">
                     
                        <MDBView className='overlay3'>
                      <img src={require('../images/Paidperformance.jpg')} alt=""/>
                    
                      <MDBMask  className='flexwebcdev-10'>
                        <MDBRow className="lastsense-10" >
                        <h1 className='webcdev-10'>Paid Advertising</h1>
                        <p className='paracwebdev-10'>Proven experts in managing performance oriented digital marketing campaigns that drive higher ROI</p>
                      </MDBRow>
                      </MDBMask>
                      </MDBView>
                     
                   
                      </MDBAnimation>
                      </MDBContainer>
                      
                      
<MDBContainer>                     
<MDBRow md={6} className='webdev-10'>
   <MDBAnimation reveal type="fadeInUp">
<p className="topcontent-10">Here at Digimonk, we blend different ways of performance-based marketing to produce the best outcomes for your company in the most cost-effective way. We produce content, analyze personas, then choose what would be the right target audience and buying for global clients and drive media planning. We measure the KPIs and optimize campaigns to maximize conversion rates and drive higher ROI.</p>
   </MDBAnimation>
  
</MDBRow>

<MDBRow className="devweb-14">
<MDBAnimation reveal type="fadeInUp">
   <h1>Our Process</h1>
   
 
</MDBAnimation>
   
   </MDBRow>
</MDBContainer> 



<MDBContainer>
<MDBRow >
   <MDBCol md={6} className="seosec-10">
   <MDBCardTitle className='headsubsdi-2 ssd'>Account Audit</MDBCardTitle>
     <p class="card-text">We see a 100 point checklist to check your account which helps recognize potential regions of development. The parameters we cover thoroughly are Verifying the target location, Ensuring accurate grouping of keywords, Verifying proper labeling of ads, etc..
    </p>
   </MDBCol>
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/paidimg1.png')} alt=""/>
                    
   </MDBCol>

</MDBRow >
<div className='secsec-2'>
<MDBRow >
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/paidimg2.png')} alt=""/>
   </MDBCol>
   <MDBCol md={6} className=" seosec-11">
  
   <MDBCardTitle className='headsubsdi-2 ssd1 '>
   TG Identification and Channel Selection</MDBCardTitle>
     <p class="card-text">Our placement and keyword research is very exhaustive and it passes by many steps of iterations before it coming at the final decision..
    </p>
   </MDBCol>
</MDBRow>
</div>


<MDBRow >
   <MDBCol md={6} className="seosec-10">
   <MDBCardTitle className='headsubsdi-2 ssd'>Ads and Landing Page Design and Development</MDBCardTitle>
     <p class="card-text">Our development and design crew gets down to designing the perfect landing pages and advertisement for your enterprise portal. We have ad copies that plan to pull the target group immediately..
    </p>
   </MDBCol>
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/paidimg3.png')} alt=""/>
                    
   </MDBCol>

</MDBRow >


<div className='secsec-2'>
<MDBRow >
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/paidimg4.png')} alt=""/>
   </MDBCol>
   <MDBCol md={6} className=" seosec-11">
  
   <MDBCardTitle className='headsubsdi-2 '>Campaign Optimization</MDBCardTitle>
     <p class="card-text">We test ads inside the ad groups to know which ad is doing best and which one needs correction. The ads are passed by Split Ad Testing, Optimization, A/B Testing as well as Landing Page Session Recording.
    </p>
   </MDBCol>

</MDBRow>
</div>
<MDBRow >
   <MDBCol md={6} className="seosec-10">
   <MDBCardTitle className='headsubsdi-2'>Analysis and Reporting</MDBCardTitle>
     <p class="card-text">Our reports which we produce on daily, weekly and monthly basis will help you stay in full control of the ad campaigns using with actionable insights on visibility and time spent on a page, user engagement map analysis, engagement levels garnered and lots more.
    </p>
   </MDBCol>
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/paidimg5.png')} alt=""/>
                    
   </MDBCol>

</MDBRow >
</MDBContainer>  
</div>
</div>
<Footer/>
            </div>
        )
    }
}
