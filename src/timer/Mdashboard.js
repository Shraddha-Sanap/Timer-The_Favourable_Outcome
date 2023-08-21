import React from 'react';

import './style.css'

export const Mdashboard=()=>{

return(
    <>
    {/* <!-- start of nav bar  --> <!--navbar-dark/light bg-dark/light -->*/}
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <a className="navbar-brand ms-2" href="#" src="images1/logo.png">
        <img className="a" src="images1/Logo.png" alt="Third slide" style={{height:"60px"}}></img>
        </a>

         {/* <a className="navbar-brand" href="#">
            <image src="images1/logo.png" style={{width:"30px",height:"30px",alt:"Logo"}}/>
          </a>  */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
            </li>
            {/* <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item1">
                <a className="nav-link" href="#">Contact</a>
              </li>
          </ul>
          </div>
          <div className='me-auto d-flex' >
          <ul className="navbar-nav me-2">
            <button className="btn btn-outline-success" type="submit" >SignUp</button>
        </ul>
        <ul className="navbar-nav me-2">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">LogIn</button>
        </ul>
        </div>
      </nav>

    {/* <!-- end of nav bar  --> */}


    <header className="header">

        <div className="container">
          <div className="row">
          <div className="col-md-6 offset-md-3">
           <h1>Welcome to best practices!!!</h1>
            {/* <!-- <div class="asp"></div>
            <div class="org"></div> --> */}
          </div>
          </div>
        </div>
    </header>



    <section className="asporg" >
      
       <div className="container " style={{textAlign: "center", paddingTop: "50px"}}>
       {/* style="text-align: center; padding-top: 50px;" */}

     <div className="row" >
        <div className="col-md-4" style={{position:"absolute",left:"100px"}}>
          <div className="demo" >
            <h3 style={{marginBottom:"50px"}}>Take a Demo Test!</h3>
            <button  type="button" className="btn btn-warning" style={{margin:"auto",textAlign: "center",borderRadius: "20px"}}>Demo</button>
            {/* style="margin-left: 40%;" */}
             </div>
            </div>

        <div className="col-md-4" style={{position: "absolute", right:"100px"}}> 
                {/* style="position: absolute; right: 100px;" */}
          <div className="a">
            <h3>To get familiar with website click on visite!</h3>
            <button  type="button" className="btn btn-dark"style={{borderRadius: "20px"}}>visite</button>
          </div>
        </div>

        </div>
                {/* <!-- <div class="space">
                    <p>                                                                                                                         </p>
                    </div> --> */}
       </div>

       <div className="container" style={{textAlign:"center",paddingTop:"50px", marginBottom:"50px"}}>
        <div className="row" style={{marginTop:"5%"}}>
        <div  className="col-md-4" style={{paddingTop:"100px",margin:"auto"}}>
            <div className="card" style={{height:"250px",backgroundColor:"ghostwhite",boxShadow:"10px 10px 5px lightgray"}}>
                <i className="glyphicon glyphicon-thumbs-up" ></i>
            <h2 style={{marginTop:"30px"}}>Aspirant</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis blanditiis, est quae libero, odio illum</p>
            <button type="button" className="btn btn-primary">Start Practice</button>
            </div>
        </div>

            <div className="col-md-4" style={{paddingTop:"100px",margin:"auto"}}>
                <div className="card" style={{height:"250px",boxShadow:"10px 10px 5px lightgray",background:"ghostwhite"}}>
                <i className="fa fa-bars" ></i>
                <h2 style={{marginTop:"30px"}}>Organization</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis blanditiis, est quae libero, odio illum</p>
                <button type="button" className="btn btn-success" >Hire Now</button>
            </div>
          </div>     
            </div>
        </div>
        </section>


        <section className="carousel" style={{paddingTop:"50px",height:"600px",backgroundColor:"lightgray"}}>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" >
                <div className="carousel-item active">
                  <img className="d-block w-100" src="images1/pennant.png" alt="First slide" style={{height:"500px"}}/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="images1/i1.jpg" alt="Second slide" style={{height:"500px"}}/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="images1/specialoffer.png" alt="Third slide" style={{height:"500px"}}/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
           </section>



           <section className="Reviews" style={{backgroundColor:"gray",height:"300px",marginTop:"80px",marginBottom:"20px"}}>
          <div className="container text-center py-5">
            <h1>Reviews</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ab?</p>
             {/* 
            <!-- <i class="fa fa-phone myicon"></i>
            <i class=" fa fa-heart myicon" style="color: red;"></i> --> */}

          </div>
        </section>
             
              
        <div className="row" style={{backgroundColor:'black',height:"50px",color:"white",textAlign:"center"}}>
          {/* <div class="container text-center py-5"> */}
            <h6>Contact Us</h6>
            <p>timer@gmail.com<i class="fa fa-phone myicon" >+91-1234567890</i></p>
    
          {/* </div> */}
         </div>
         
    
    </>
 )
}