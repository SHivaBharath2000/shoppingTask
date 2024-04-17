import PropTypes from "prop-types";
import { useState } from "react";
function Card({ name, price, image, key, setCount, count }) {
  const[Ison,setIson]=useState(true)
  return (
    <>
      <div className="container-md" style={{marginTop:"10px"}}>
        {/* <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5"> */}
        <div className="card h-100" style={{ width: "236px" }}>
          <img className="card-img-top" src={image} alt="..." />

          <div className="card-body p-4">
            <div className="text-center">
              {/* ({key=3||7}) ?<h5 className="title">{name}</h5>
                                {price}:<h5 className="fw-bolder">{name}</h5>
                                {price} */}
              {key === 3 || key === 6 ? (
                <>
                  <h5 className="title">{name}</h5>
                  <p>{price}</p>
                </>
              ) : (
                <>
                  <h5 className="fw-bolder">{name}</h5>
                  {price}
                </>
              )}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
             {Ison? (<button
                onClick={() =>{ setCount(count + 1); setIson(!Ison)}}
                className="btn btn-outline-dark mt-auto"
                href="#"
              >
              Add to Cart
              </button>): (<button
                onClick={() =>{ setCount(count - 1); setIson(!Ison) }}
                className="btn btn-outline-dark mt-auto"
                href="#"
              >
              Remove from Cart
              </button>)}
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
};

export default Card;
