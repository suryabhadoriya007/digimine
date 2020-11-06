import React, { Component } from 'react'
import { MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,  } from 'mdbreact';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Emailmarket extends Component {
    render() {
        return (
            <>
                <div className='contentmarkettop'>
               <Navbar/>
               <div className='sectopgap24'>
                     <MDBContainer>
                      
                      <MDBAnimation type="fadeInUp">
                     
                        <MDBView className='overlay3'>
                      <img src={require('../images/Email-Marketing-Page.jpg')} alt=""/>
                    
                      <MDBMask  className='flexwebcdev-10'>
                        <MDBRow className="lastsense-10" >
                        <h1 className='webcdev-10'>Email Marketing</h1>
                        <p className='paracwebdev-10'>High impact email marketing campaigns to build & nurture relationships with your prospects & customers with trigger-based automation workflows.</p>
                      </MDBRow>
                      </MDBMask>
                      </MDBView>
                     
                   
                      </MDBAnimation>
                      </MDBContainer>
                      
                      
<MDBContainer>                     
<MDBRow md={6} className='webdev-10'>
   <MDBAnimation reveal type="fadeInUp">
<p className="topcontent-10">With big influence EMC ( email marketing campaigns ) inspired by automated workflows and strong monitoring of open, click-through, and conversion rates, we aim to give you the highest achievable ROI ( Return On Investment ) for the business you are running. We enable you to build consistent and worthwhile communication that helps to manage meaningful relationships with the customers..</p>
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
   <MDBCardTitle className='headsubsdi-2 ssd'>Audience Building</MDBCardTitle>
     <p class="card-text">Our email marketing campaigns concentrate on getting new consumers and maintaining the current ones through strategic messaging, engaging designs and related content.
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
   Customer Retention</MDBCardTitle>
     <p class="card-text">Along with impactful email marketing campaigns, we strategize to cross-sell and upsell your brand, driving to consumer retention by a logical way.
    </p>
   </MDBCol>
</MDBRow>
</div>


<MDBRow >
   <MDBCol md={6} className="seosec-10">
   <MDBCardTitle className='headsubsdi-2 ssd'>Campaign Creation</MDBCardTitle>
     <p class="card-text">With the target audience determined and impactful sources at hand, we manage brand promotion campaigns by right marketing methods and tactics. We create automated workflows and lead scoring to send trigger-based email automation that results in quality leads.
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
  
   <MDBCardTitle className='headsubsdi-2 '>Content Creation and Design</MDBCardTitle>
     <p class="card-text">Our design and content specialists go by research and work according to industry demands. They produce very beautifully crafted email designs with impactful content, to drive a CA ( Call to Action )..
    </p>
   </MDBCol>

</MDBRow>
</div>
<MDBRow >
   <MDBCol md={6} className="seosec-10">
   <MDBCardTitle className='headsubsdi-2'>Reporting and Analytics</MDBCardTitle>
     <p class="card-text">After the implementation of the tactics, the outcomes are tracked, measured, assessed and reported with legible, interactive tables and graphs. We include a range of metrics and report numbers on the Open rate, Click-through rate, Delivery rate, Bounce rate, Unsubscribe rate.
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
            </>
        )
    }
}
