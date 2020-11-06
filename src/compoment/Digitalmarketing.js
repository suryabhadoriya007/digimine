import React, { Component } from 'react'
import { MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
export default class Digitalmarketing extends Component {
    render() {
        return (
            <>
             <div>
                 <Navbar/>
                 <div className='sectopgap24'>
                   <MDBContainer>
                      
                       <MDBAnimation type="fadeInUp">
                      
                         <MDBView className='overlay3'>
                       <img src={require('../images/Digitalmarke.png')} alt=""/>
                     
                       <MDBMask  className='flexwebcdev-10'>
                         <MDBRow className="lastsense-10" >
                         <h1 className='webcdev-10'>Digital Marketing Services</h1>
                         <p className='paracwebdev-10'>We combine the art and science of Digital Marketing to create winning<br/> strategies that drive measurable results</p>
                       </MDBRow>
                       </MDBMask>
                       </MDBView>
                      
                    
                       </MDBAnimation>
                       </MDBContainer>
                     


<MDBContainer>

  <MDBRow md={6} className='webdev-10'>
    <MDBAnimation reveal type="fadeInUp">
<p className="topcontent-10">Our digital marketing company formulates creative marketing strategies that help you reach out to the right people with the right message at right time through a right channel. Even if you have a modest budget for your online marketing campaign, we can suggest which service your brand needs most to keep it alive & kicking. Our experts can allocate your marketing budget intelligently across various digital marketing services depending on your business size, its revenue goals & target niche and measure ROI. We always use sophisticated and latest digital marketing tools to provide you effective solutions within stipulated time frame.</p>
    </MDBAnimation>
   
</MDBRow>




<MDBRow className="devweb-13">

<MDBAnimation reveal type="fadeInUp">
    <h1> Our Digital Marketing Services</h1>
    
</MDBAnimation>
    
    </MDBRow>
</MDBContainer>





<MDBContainer className=''>

<MDBRow style={{textalign:"center"}} >

  <MDBCol md={4} >
  <Link to="/seo">
    
    <div class="primary-1">
      <h2 className='samessdf'>SEO</h2>
   <p className='shedhadigi'>Potential buyers have a tendency to find products or services by 
   searching & the top most results gain their attention . To convert most of those
    searchers to clients, our digital marketing agency lifts your
    business on higher search engine rankings for better CTRs and much more traffic.</p>
 
  <div class="secondary-2">
    <h2>SEO</h2>
  </div>
</div>
</Link>


    </MDBCol>
    <MDBCol md={4} >
    <Link to="/social-media">
    
   <div class="primary-1">
     <h2 className='samessdf'>Social Media Marketing</h2>
  <p className='shedhadigi'>Individuals are spending more hours on social media compared to somewhere else. More than 95% of one's existing customers & target audience hang-out on Facebook and Twitter & that 
  is our sweet spot. As a renowned and reputable digital marketing company in India.</p>

 <div class="secondary-2">
   <h2>Social Media<br/> Marketing</h2>
 </div>
</div>

</Link>
   </MDBCol>
   <MDBCol md={4} >
   <Link to="/content-market">
    
   <div class="primary-1">
     <h2 className='samessdf'>Content Marketing</h2>
  <p className='shedhadigi'>Content marketing isn't only a campaign for the digital marketing agency; it's really a devotion for us. Our digital marketing company provides full-spectrum content marketing through an integrated content creation & publishing program which includes drafting a capable approach.</p>

 <div class="secondary-2">
   <h2>Content Marketing</h2>
 </div>
</div>
</Link>


   </MDBCol>
   <MDBCol md={4} >
   
   <Link to="/paid-advertising">
   <div class="primary-1">
     <h2 className='samessdf'>Paid Advertising</h2>
  <p className='shedhadigi'>If you talk about paid advertising, you need to focus on advertising campaigns assembled on an innovative engagement model which could ensure a maximum response with minimum marketing spends. </p>

 <div class="secondary-2">
   <h2>Paid Advertising</h2>
 </div>
</div>
</Link>


   </MDBCol>
   <MDBCol md={4} >
   
    <Link to="/email-market">
   <div class="primary-1">
     <h2 className='samessdf'>E-Mail Marketing</h2>
  <p className='shedhadigi'> We're a leading digital marketing company in India also for us, email marketing isn't about sending e-mailers to some huge database awaiting somebody to click & convert. It is something more than that for us.</p>

 <div class="secondary-2">
   <h2>E-mail Marketing</h2>
 </div>
</div>
</Link>

   </MDBCol>

  

  


</MDBRow>



  </MDBContainer>





</div>
                       
                    <Footer/>  
                </div>       
            </>
        )
    }
}
