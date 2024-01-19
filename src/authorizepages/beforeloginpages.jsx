import { Userprofile } from "./userprofile";

export function Loginbeforetabs(){
    return(
        <>
         <div>
             
             <nav className="navbar navbar-expand-lg bg-body-tertiary">
                             <div className="container-fluid">
                                 <a className="navbar-brand" href="#">
                                     <img
                                         src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-telestream-press-kit-12.png"
                                         alt="Logo"
                                         width={30}
                                         height={24}
                                         className="d-inline-block align-text-top"
                                     />
 <span className="text-danger fw-bolder">
                Our<span className="text-warning">Choice</span>
              </span>                                 </a>
                             </div>
                             <span >
                          <Userprofile  logged={true} /> 
                     </span>
                         </nav>
                         </div>
        </>
    )
}