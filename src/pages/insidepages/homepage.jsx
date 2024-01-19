import React, { useEffect, useState } from "react";
import { Loginaftertabs } from "../../authorizepages/afetrloginpage";
import { Slider } from "./slider";
import { MOCKDATA } from "../../data.json";
import { Link } from "react-router-dom";

export function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Uncomment this section if you want to fetch data from an API using Axios
    // axios.get('YOUR_API_ENDPOINT')
    //   .then((res) => {
    //     // Ensure that the response contains an array before setting the state
    //     if (Array.isArray(res.data.products)) {
    //       setData(res.data.products);
    //     } else {
    //       console.error("API response does not contain an array");
    //     }
    //   })
    //   .catch((error) => console.error(error));

    // Comment this line if you're fetching data from an API using Axios
    // Ensure that MOCKDATA.products is an array before setting the state
    if (Array.isArray(MOCKDATA.products)) {
      setData(MOCKDATA.products);
    } else {
      console.error("Mock data products is not an array");
    }

    console.log("useEffect mounting phase");
  }, []);

  return (
    <>
      <Loginaftertabs />
      <Slider />
      <div>
        <h2>Data List</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100">
                <Link to={`/productpage/${item.id}`}>
                  <img
                    src={item.thumbnail} // Display the first image from the array
                    alt={item.title}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                </Link>
                <div className="card-body d-flex justify-content-between">
                  <Link to={`/productpage/${item.id}`} className="card-title btn btn-outline-secondary mb-auto">
                    {item.title}
                  </Link>
                  <Link to='/cartpage' className="btn btn-outline-primary">Add to Cart+</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
