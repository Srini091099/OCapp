
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mt-5">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        style={{ width: '80%', margin: '0 auto' }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className={index === 0 ? 'active' : ''}
            onClick={() => handleSelect(0)}
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            className={index === 1 ? 'active' : ''}
            onClick={() => handleSelect(1)}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            className={index === 2 ? 'active' : ''}
            onClick={() => handleSelect(2)}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval={1000}>
            <img src="https://img10.hkrtcdn.com/31254/bnr_3125399_o.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${index === 1 ? 'active' : ''}`} data-bs-interval={1000}>
            <img src="https://img8.hkrtcdn.com/31111/bnr_3111077_o.jpg" className="d-block w-100" alt="..." />
            </div>
            
          <div className={`carousel-item ${index === 2 ? 'active' : ''}`} data-bs-interval={300000}>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6cd4f58ce14ba48d.jpg?q=20" className="d-block w-100" alt="..." />
            </div>
            </div>
        <div  style={{display:'flex',justifyContent:'center'}}>
             <Link to='/home' className='text-warning' >sales is live</Link>
         </div>
             
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          onClick={() => handleSelect(index - 1)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          onClick={() => handleSelect(index + 1)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

