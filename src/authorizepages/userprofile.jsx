// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

export function Userprofile({ logged, args }) {

    function Clicklogin(e) {
      e.stopPropagation();
    }
  
    console.log(logged);
  
    if (logged) {
      return (
        <>
          <div style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignContent: "stretch",
            justifyContent: "flex-start"
          }}>
            
            <Link  to="/Loginpage" className='btn btn-outline-primary'onClick={Clicklogin}>
              Login
            </Link>
            <button className='btn btn-outline-secondary'>
              Signup
            </button>
          </div>
        </>
      );
    }
  
    return (
      <>
        <button className="btn btn-outline-primary fw-bolder">
          Hi<span className="text-dark">Srini</span>
        </button>
      </>
    );
  }
  
  Userprofile.defaultProps = {
    logged: true,
  };
