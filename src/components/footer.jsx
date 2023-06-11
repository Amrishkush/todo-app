import { Component } from "react";

class Footer extends Component{
    render(){
        return(
          <div className="container-fluid text-dark mt-5" style={{backgroundColor:"coral"}}>
          
             <div className="row pt-3">
                 <hr style={{width: "20%", marginLeft:"40%", marginBottom: "0%"}}></hr>
                 <h1 className="mt-0">Contact Details</h1>
                 <hr style={{width: "20%", marginLeft:"40%"}}></hr>
               <div className="row justify-content-center">
                    <div className="col-8 m-2">
                       <p className="m-0 fw-bold fst-italic"> 📞  8353942789, 7905319717</p>
                       <p className="m-0 fw-bold fst-italic">✉️ amrishkush@gmail.com</p>
                       <a href="https://linkedin.com/in/amrishkush"><img className= "" src="https://www.pngmart.com/files/21/Linkedin-In-Logo-PNG-Photo.png" width="30" alt="LinkedIn"/></a>
                       <a href="https://github.com/Amrishkush"><img className="" width="60" src="https://www.pngmart.com/files/22/GitHub-PNG-Isolated-Transparent-Image.png" alt="gitHub"/></a>
                    </div>
               </div>
               <hr></hr>
               <div className="row">
                   <p>Made by <strong>Amrish Pratap Singh</strong> ©️2023</p>
               </div>
             </div>
          </div>
        )
    }
}

export default Footer