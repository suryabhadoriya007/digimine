import { MDBCol, MDBContainer, MDBRow, MDBAnimation, MDBView, MDBMask, MDBIcon, MDBBtn, MDBCard, MDBCardBody} from 'mdbreact'
import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';


export default class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar/>
<div className="about-us linebg">
                  <MDBContainer>
                      <MDBRow>
                          <MDBCol md="9">
                              <div className="about-banner">
                                 <MDBAnimation type="fadeInUp">
                              <h1>BLOG</h1>
                              </MDBAnimation> 
                              <MDBAnimation  type="fadeInUp">
                              <p>
                              Company news, product updates, client insights and various trends from tech industry.</p>
</MDBAnimation>
                              </div>
                          </MDBCol>
                      </MDBRow>
                  </MDBContainer>
              </div>

              <div className="blog-colum linebg">

              <MDBCard className="px-5 pb-5 shadow-none1">
      <MDBCardBody className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
       Our Blog
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
          <MDBAnimation reveal type="fadeInUp">
             <div className="blog-border">
          <Link to="/blog-details">
            <MDBView hover className="mb-4" waves>
              <img
                className="img-fluid"
                src="https://digimonk.in/assets/site/images/Untitled-11.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <div className="blog-des">
            <h4 className="font-weight-bold mb-3">
              <strong>5 Must Watch Movies for Business Persons</strong>
            </h4>
         
            <p>
            Movies for Business Persons. Being an entrepreneur can be challenging, and ...</p>
            <MDBBtn outline  color="danger" rounded size="md">
              Read more
            </MDBBtn>
            </div>
            </Link>
            </div>
            </MDBAnimation>
          </MDBCol>
          <MDBCol lg="4" md="12" className=" mb-4">
          <MDBAnimation reveal type="fadeInUp">
          <div className="blog-border">
          <Link to="/blog-details">
            <MDBView hover className="mb-4" waves>
              <img
                className="img-fluid"
                src="https://digimonk.in/assets/site/images/40950681.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <div className="blog-des">
            <h4 className="font-weight-bold mb-3">
              <strong>Step by Step Guide to Install & Run Python (Django</strong>
            </h4>
            
            <p className="dark-grey-text">
            Django is a powerful web framework that can help you get your Python ...
            </p>
            <MDBBtn outline  color="danger" rounded size="md">
              Read more
            </MDBBtn>
            </div>
            </Link>
            </div>
            </MDBAnimation>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4">
          <MDBAnimation reveal type="fadeInUp">
          <div className="blog-border">
          <Link to="/blog-details">
            <MDBView hover className="mb-4" waves>
           
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            <div className="blog-des">
            <h4 className="font-weight-bold mb-3">
              <strong>Top 4 Digital Transformation Trends of 2020</strong>
            </h4>
            
            <p className="dark-grey-text">
            We are dealing with a global pandemic that has upended literally every industry.
            </p>
            <MDBBtn outline  color="danger" rounded size="md">
              Read more
            </MDBBtn>
            </div>
            </Link>
            </div>
            </MDBAnimation>
          </MDBCol>

          <MDBCol lg="4" md="12" className="mb-4">
          <MDBAnimation reveal type="fadeInUp">
          <div className="blog-border">
          <Link to="/blog-details">
            <MDBView hover className="mb-4" waves>
              <img
                className="img-fluid"
                src="https://digimonk.in/assets/site/images/Top_technology_trends.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
           <div className="blog-des">
            <h4 className="font-weight-bold mb-3">
              <strong>Top 5 Technology Trends in 2020</strong>
            </h4>
            
            <p className="dark-grey-text">
            As a tech-savvy, you must be aware of the things that are going to change the world of tech in 2020....
            </p>
            <MDBBtn outline  color="danger" rounded size="md">
              Read more
            </MDBBtn>
            </div>
            </Link>
           </div>
            </MDBAnimation>
          </MDBCol>

          <MDBCol lg="4" md="12" className="mb-4">
          <MDBAnimation reveal type="fadeInUp">
          <div className="blog-border">
          <Link to="/blog-details">
            <MDBView hover className="mb-4" waves>
              <img
                className="img-fluid"
                src="https://digimonk.in/assets/site/images/Technical_SEO_.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
           <div className="blog-des">
            <h4 className="font-weight-bold mb-3">
              <strong> 10 Technical SEO Tips  </strong>
            </h4>
            
            <p className="dark-grey-text">
            So today in this article we are going to talk about technical SEO. And how you can boost your rankings by ...</p>
            <MDBBtn outline  color="danger" rounded size="md">
              Read more
            </MDBBtn>
            </div>
            </Link>
           </div>
            </MDBAnimation>
          </MDBCol>


          <MDBCol lg="4" md="12" className="mb-4">
          <MDBAnimation reveal type="fadeInUp">
          <div className="blog-border">
          <Link to="/blog-details">
            <MDBView hover className="mb-4" waves>
              <img
                className="img-fluid"
                src="https://digimonk.in/assets/site/images/1_(1).jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
           <div className="blog-des">
            <h4 className="font-weight-bold mb-3">
              <strong>  9 Instagram Hacks You Should Know  </strong>
            </h4>
            
            <p className="dark-grey-text">
            Stories are a great way to engage visitors and sometimes we need some background music in our story...</p>
            <MDBBtn outline  color="danger" rounded size="md">
              Read more
            </MDBBtn>
            </div>
            </Link>
           </div>
            </MDBAnimation>
          </MDBCol>


        </MDBRow>
      </MDBCardBody>
    </MDBCard>

              </div>

              <Footer/>
                
            </div>
        )
    }
}
