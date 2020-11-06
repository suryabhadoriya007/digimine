import React, { Component } from 'react'
import { MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,  } from 'mdbreact';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Contentmarket extends Component {
    render() {
        return (
            <>
           <div className='contentmarkettop'>
               <Navbar/>
               <div className='sectopgap24'>
                     <MDBContainer>
                      
                      <MDBAnimation type="fadeInUp">
                     
                        <MDBView className='overlay3'>
                      <img src={require('../images/CONTENT_MARKETING.jpg')} alt=""/>
                    
                      <MDBMask  className='flexwebcdev-10'>
                        <MDBRow className="lastsense-10" >
                        <h1 className='webcdev-10'>Content Marketing</h1>
                        <p className='paracwebdev-10'>Our persistent & targeted efforts in Content Marketing establish you  as a<br/> thought leader with increased reach, higher engagement and website <br/>traffic.</p>
                      </MDBRow>
                      </MDBMask>
                      </MDBView>
                     
                   
                      </MDBAnimation>
                      </MDBContainer>
                      
                      
<MDBContainer>                     
<MDBRow md={6} className='webdev-10'>
   <MDBAnimation reveal type="fadeInUp">
<p className="topcontent-10">We make and advertise content that makes it possible to create brand awareness and boost their traffic lead generation. We create relevant and contextual content pieces that help you engage prospects and customers. We partner with you to deliver insightful whitepapers, blogs, videos and tonnes of engaging content to drive your business objectives.</p>
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
   <MDBCardTitle className='headsubsdi-2 ssd'>Competitive Analysis and Strategy</MDBCardTitle>
     <p class="card-text">We conduct thorough research and analysis on your brand's competition to identify gaps and build a robust content strategy and establish as an industry thought leader.
    </p>
   </MDBCol>
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/contimg1.jpg')} alt=""/>
                    
   </MDBCol>

</MDBRow >
<div className='secsec-2'>
<MDBRow >
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/contimg2.jpg')} alt=""/>
   </MDBCol>
   <MDBCol md={6} className=" seosec-11">
  
   <MDBCardTitle className='headsubsdi-2 ssd1 '>
Content Creation</MDBCardTitle>
     <p class="card-text">Our content experts create insightful and shareable content across channels. We ensure development of unique, platform relevant content in the form of whitepapers, blogs, videos, presentations, infographics, articles, and more.
    </p>
   </MDBCol>
</MDBRow>
</div>


<MDBRow >
   <MDBCol md={6} className="seosec-10">
   <MDBCardTitle className='headsubsdi-2 ssd'>Content Management</MDBCardTitle>
     <p class="card-text">We follow a continuous process of content analysis and creation, covering all digital channels to ensure your brand stays ahead of the competition at all times.
    </p>
   </MDBCol>
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/contimg3.jpg')} alt=""/>
                    
   </MDBCol>

</MDBRow >


<div className='secsec-2'>
<MDBRow >
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/contimg5.jpg')} alt=""/>
   </MDBCol>
   <MDBCol md={6} className=" seosec-11">
  
   <MDBCardTitle className='headsubsdi-2 '>Content Distribution</MDBCardTitle>
     <p class="card-text">Content is developed to be shared across specific target channels. We help you push the content on all relevant digital channels for maximum exposure.
    </p>
   </MDBCol>

</MDBRow>
</div>
<MDBRow >
   <MDBCol md={6} className="seosec-10">
   <MDBCardTitle className='headsubsdi-2'>Content Promotion</MDBCardTitle>
     <p class="card-text">We not only float the content on various online channels, but also promote it further for an expanded reach and consumption.
    </p>
   </MDBCol>
   <MDBCol md={6} className="seosec-2">
   <img src={require('../images/contimg6.jpg')} alt=""/>
                    
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
