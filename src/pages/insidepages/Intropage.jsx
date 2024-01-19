import { Link } from "react-router-dom";
import { Userprofile } from "../../authorizepages/userprofile";

export function Intropages() {
  return (
    <>
      <div >
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.W9u3wuCyvDrvx0pz4I70jQAAAA?rs=1&pid=ImgDetMain"
                alt="Logo"
                width={30}
                height={24}
                className="d-inline-block align-text-top"
              />
              <span className="text-danger fw-bolder">
                Our<span className="text-warning">Choice</span>
              </span>
            </a>
          </div>
          <span>
            <Userprofile logged={false} />
          </span>
        </nav>
        <div
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50vh",
            height: "50vh",
           
          }}
        >
          <Link to='/Loginpage'>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.W9u3wuCyvDrvx0pz4I70jQAAAA?rs=1&pid=ImgDetMain"
            alt="Logo"
            className="d-inline-block align-text-top"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          </Link>
        </div>
      </div>
    </>
  );
}
