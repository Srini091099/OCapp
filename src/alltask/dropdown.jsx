// Make sure you have included Bootstrap CSS and JavaScript in your HTML file.

export function Dropdown() {
    return (
      <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <div className="btn-group">
       

          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{backgroundColor:'lightblue'}}
          >
            Default dropdown
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Menu item 1
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item 2
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Menu item 3
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
  