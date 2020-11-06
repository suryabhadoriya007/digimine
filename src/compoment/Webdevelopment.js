import { MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,  } from 'mdbreact';
import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Webdevelopment extends Component {
    render() {
        return (
            <div>
                 <Navbar/>
                 <div className='sectopgap24'>
                   <MDBContainer>
                      
                       <MDBAnimation type="fadeInUp">
                      
                         <MDBView className='overlay3'>
                       <img src={require('../images/services.jpg')} alt=""/>
                     
                       <MDBMask  className='flexwebcdev-10'>
                         <MDBRow className="lastsense-10" >
                         <h1 className='webcdev-10'>Web Development</h1>
                         <p className='paracwebdev-10'>We at Digimonk Technologies mold businesses leveraging cutting-edge digital technologies,<br/> experience design, and analytics.</p>
                       </MDBRow>
                       </MDBMask>
                       </MDBView>
                      
                    
                       </MDBAnimation>
                       </MDBContainer>
                       
                       
 <MDBContainer>                     
<MDBRow md={6} className='webdev-10'>
    <MDBAnimation reveal type="fadeInUp">
<p className="topcontent-10">Web development is about solving complex problems on the web
   through creative and cutting edge technologies. To see this through, we at Digimonk 
   Technologies provide a complete
   end to end web solutions that help brands to leverage their business.</p>
    </MDBAnimation>
   
</MDBRow>

<MDBRow className="devweb-12">
<MDBAnimation reveal type="fadeInUp">
    <h1>We help companies traverse the complex</h1>
    <h1 style={{color:"#e40001"}}>Web Development Journey</h1>
    </MDBAnimation>
    <div className='circle-outer'>
     <div className='circle'>

     </div>
    </div>
    </MDBRow>



    </MDBContainer>  






<MDBContainer >

<MDBRow >

<MDBCol md={6} className=''> 
<div className='linefirst'></div>
<div class="haexagonal">
<img src={require('../images/Planning_2.png')} alt=""/>
</div>


  <div class="frontwebright">

  <MDBCardTitle className='headsubtit-2'>Front-end Development
  
  </MDBCardTitle>
  </div>
  <div class="frontwebright">

   
    <p class="card-text">A great web appearance needs a highly engaging and interactive front-end development. Our expert developers can mold your ideas and graphics into a highly responsive HTML5, Javascript or CSS3, which turns out to deliver the best solutions for our clients.

</p>

  </div>


  </MDBCol >


 
  <MDBCol md={6} className='side-10'>    
  <div className='thirdline'></div>
  
  <div class="haexagonal1">
<img src={require('../images/Experience Design_3.png')} alt=""/>
</div>

  <div class="frontwebleft">
  <MDBCardTitle className='headsubtit-2'>Custom Web Development</MDBCardTitle>

  
</div>

  <div class="frontwebleft">  
    <p class="card-text">Fully customized web solutions for your organization's numerous web requirements. We specialize in giving custom web development projects with 100% accuracy & perfectly meeting your business necessities. Our team of developers is skilled at using cutting-edge technologies to customize everything from the appearance & quality of front-end to master back-end programming that results in a much dynamic, fully operative & interactive web solution.

</p>

  </div>
  </MDBCol >
  </MDBRow>
  <MDBRow className='marginrowtopless' >
  
  <MDBCol md={6} className='' > 
 
  <div className='linesecond'></div>
  <div class="haexagonal">
<img src={require('../images/Development_1.png')} alt=""/>
</div>
  
  <div class="frontwebright">
   
  <MDBCardTitle className='headsubtit-2'>Open Source Platform Development</MDBCardTitle>
 </div>
  <div class="frontwebright">
    <p class="card-text">We use off-the-shelf development solutions to save time & money. We provide custom open source development services including content management solutions that assure built-in flexibility & fast turnaround at a much affordable cost.
</p>

  </div>
  </MDBCol >
  
  
  <MDBCol md={6} className='side-10'>
  <div class="haexagonal1">
<img src={require('../images/Social Listening_0.png')} alt=""/>
</div>
 
  <div class="frontwebleft">
  <MDBCardTitle className='headsubtit-2'>E-Commerce Development</MDBCardTitle>
 </div>
  <div class="frontwebleft">
    <p class="card-text">Fully customized web solutions for your organization's numerous web requirements. We specialize in giving custom web development projects with 100% accuracy & perfectly meeting your business necessities. Our team of developers is skilled at using cutting-edge technologies to customize everything from the appearance & quality of front-end to master back-end programming that results in a much dynamic, fully operative & interactive web solution.

</p>

  </div>
  </MDBCol >
  </MDBRow>
 
  
  


</MDBContainer>














<MDBContainer fluid className='shaneweb'>
<MDBRow className="clienques">
<MDBMask className='looksame-10'>
  <div className='shasha-10'>
<h1 style={{color:'#fff',fontSize:42,}}>Looking for Web Development services?</h1>
<div>
<a rel="nofollow" class="btn pink big" href="#">Talk to our Experts!</a>
</div>
</div>
</MDBMask>
</MDBRow>

</MDBContainer>





{/* enablers */}
<div className="mainback"  style={{backgroundColor:"#f8f2f2"}}>
<MDBContainer>
  <div className='headcard'>
<MDBCardTitle className='headsubtit'>Web Development Enablers</MDBCardTitle>
</div>
<MDBRow className='same-12' >

<MDBCol md={3}  className='caredena' >

    

<MDBAnimation type="fadeInUp">
                      <img src={require('../images/Cloud_0.png')} alt=""/>
       </MDBAnimation>
       <MDBCardTitle className='headena'>cloud</MDBCardTitle>
     
    </MDBCol> 

     <MDBCol md={3}  className='caredena'>
     <MDBAnimation type="fadeInUp">
                      <img src={require('../images/Mobility_1.png')} alt=""/>
       </MDBAnimation>
       <MDBCardTitle className='headena'>Mobility</MDBCardTitle>
    
    </MDBCol>
    <MDBCol md={3}  className='caredena' >
    <MDBAnimation type="fadeInUp">
                      <img src={require('../images/UI UX.png')} alt=""/>
       </MDBAnimation>
       <MDBCardTitle className='headena'>UI/UX Technologies</MDBCardTitle>
    </MDBCol>
 
    <MDBCol md={3}  className='caredena' >
    <MDBAnimation type="fadeInUp">
                      <img src={require('../images/Artificial Intelligence.png')} alt=""/>
       </MDBAnimation>
       <MDBCardTitle className='headena'>Artificial Intelligence</MDBCardTitle>
    </MDBCol>
    </MDBRow>




    
    <MDBRow className='saame-13' >

<MDBCol md={3} className='caredena-12' >
  
<MDBAnimation type="fadeInUp">
   <img src={require('../images/Digital Marketing_1.png')} alt=""/>
</MDBAnimation>
<MDBCardTitle className='headena'>Digital Marketing</MDBCardTitle>

    </MDBCol> 

     <MDBCol md={3} className='caredena-12'>
     <MDBAnimation type="fadeInUp">
                      <img src={require('../images/IOT.png')} alt=""/>
       </MDBAnimation>
       <MDBCardTitle className='headena'>Internet of Things</MDBCardTitle>
    </MDBCol>
    <MDBCol md={3} className='caredena-12'>
    <MDBAnimation type="fadeInUp">
                      <img src={require('../images/Big Data.png')} alt=""/>
       </MDBAnimation>
       <MDBCardTitle className='headena'>Big Data</MDBCardTitle>
    </MDBCol>
 
    <MDBCol md={3} className='caredena-12'>
    <MDBAnimation type="fadeInUp">
                      <img src={require('../images/Analytics_11.png')} alt=""/>
       </MDBAnimation>
       <MDBCardTitle className='headena'>Analytics</MDBCardTitle>
    </MDBCol>


    </MDBRow>

</MDBContainer>
</div>




<MDBContainer>

<MDBRow className='maindiff-12' >
<div className='differn-10'>
<h1 >Our Key Differentiators</h1>
</div>

<MDBCol md={6} className='sssdorted'>

<div class="statrdo">

<MDBCardTitle className='strado-10'>Strategy and Consulting</MDBCardTitle>


<div class="parastardo">
  <p class="card-text">Our consulting services help formulate a cohesive digital approach to integrate digital technologies with the current infrastructure.

</p>
</div>
</div>

<div class="statrdo">
<MDBCardTitle className='strado-10'>MVP approach for fast GTM</MDBCardTitle>

<div class="parastardo">
  <p class="card-text">Complete product engineering services that bring ideas into realities with a faster time to market.

</p>
</div>
</div>

<div class="statrdo">
<MDBCardTitle className='strado-10'>Analytics-led Approach</MDBCardTitle>

<div class="parastardo">
  <p class="card-text">Finding key insights to improve the process, respond to changes and pivot fast with iterative development.

</p>
</div>
</div>





</MDBCol>

<MDBCol md={6} className='sssdorted'>

<div class="statrdo">
<MDBCardTitle className='strado-10'>Design led Engineering</MDBCardTitle>

<div class="parastardo">
  <p class="card-text">A design-led strategy to entirely transform the user experience and build engaging web and mobile solutions. 

</p>
</div>
</div>
<div class="statrdo">
<MDBCardTitle className='strado-10'>Agile Methodologies and Lean Mindset</MDBCardTitle>

<div class="parastardo">
  <p class="card-text">We are a lean and Agile company and use a combination of Scrum, XP, and Kanban for software development and project management. 

</p>
</div>
</div>
<div class="statrdo">
<MDBCardTitle className='strado-10'>Open Communication</MDBCardTitle>

<div class="parastardo">
  <p class="card-text">Honest, collaborative approach and two-way interaction with clients for higher productivity.  

</p>
</div>
</div>



</MDBCol>


</MDBRow>

  </MDBContainer>

<MDBContainer fluid className='shadowwed'>
<MDBRow className="clienques">
<MDBMask className='looksame-10'>
  <div className='shasha-10'>
<h1 style={{color:'#fff',fontSize:42,}}>Looking for Web Development services?</h1>
<div>
<a rel="nofollow" class="btn pink big" href="#">Talk to our Experts!</a>
</div>
</div>
</MDBMask>
</MDBRow>

</MDBContainer>


<div className='latest-transweb'>
<MDBContainer>
<MDBRow className='latestweb'>

<div className=''>
<h1>Latest Newsletter</h1>
</div>

</MDBRow>
</MDBContainer>

<MDBContainer>
<MDBRow className='secnewsweb'>
<MDBCol md={6}>


<div class="card sidecardmain">
<MDBRow>
<MDBCol md={4}>

  <img class="card-img-top" style={{height:100, width:180}} src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap"/>
  </MDBCol>
  <MDBCol md={6} className='sandoweb'>
  <div class="card-body sodex">
    <div className='textnew-10'>
    <p class="card-text">Top 10 Most Profitable Companies of World in 2019
    </p>
  </div>
 
  </div>
  </MDBCol>
  </MDBRow>
</div>


</MDBCol>
<MDBCol md={6}>

<div class="card sidecardmain">
<MDBRow>
<MDBCol md={4}>

  <img class="card-img-top"  style={{height:100, width:180}}  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap"/>
  </MDBCol>
  <MDBCol md={6} className='sandoweb'>
  <div class="card-body sodex">
    <div className='textnew-10'>
    <p class="card-text">Top 10 Most Profitable Companies of World in 2019
    </p>
  </div>
 
  </div>
  </MDBCol>

  
 
  </MDBRow>
</div>

</MDBCol >
</MDBRow>




</MDBContainer>
</div>


<div className='allblogs-10'>
<MDBRow className='siderotate'>
  <div className='sect-12view'>
<a rel="nofollow" class="btn sad-view " href="#">View all Blogs</a>
</div>
</MDBRow>
</div>

                
               </div>
               <Footer/>
            </div>
        )
    }
}
