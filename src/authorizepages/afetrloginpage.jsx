import { Dropdown } from "../alltask/dropdown";
import { Userprofile } from "./userprofile";

export function Loginaftertabs() {
  return (
    <>
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
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
              </span>
            </a>
            <div className="d-flex align-items-center ms-auto">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
                <span class="material-symbols-outlined btn btn-light ms-3">search</span>
              </div>
              <i className="material-icons btn btn-light ms-3" style={{ fontSize: "24px" }}>
                shopping_cart
              </i>
              <span
                className="material-symbols-outlined btn btn-light ms-2"
                style={{ fontSize: "24px" }}
              >
                storefront
              </span>
            </div>
          </div>
          <span>
            <Userprofile logged={false} />
          </span>
          
        </nav>
        <div >
        <Dropdown/>
        </div>
      </div>
    </>
  );
}
