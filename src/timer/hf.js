




export const Hf=()=>{
    return(
        <>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <a class="navbar-brand" href="#">Logo</a>
         {/* when we add logo */}

        {/* <!-- <a class="navbar-brand" href="#">
            <img src="" width="30" height="30" alt="Logo">
          </a> --> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item1">
                <a class="nav-link" href="#">Contact</a>
              </li>
          </ul>
          <ul class="navbar-nav ml-auto" >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">LogIn</button>
        </ul>
        </div>
      </nav>


<header class="header">
<div class="container">
  <div class="row">
  <div class="col-md-6 offset-md-3">
   <h1>Welcome to best practices!!!</h1>

  </div>
  </div>
</div>
</header>



<div class="row" style={{backgroundColor:'black',height:"50px",color:"white",textAlign:"center"}}>
{/* <div class="container text-center py-5"> */}
  <h6>Contact Us</h6>
  <p>timer@gmail.com<i class="fa fa-phone myicon" >+91-1234567890</i></p>
</div>
        </>
    )
}

