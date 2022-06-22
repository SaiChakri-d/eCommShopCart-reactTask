import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const [childRender, setchildRender] = useState(true);

  const Toggle = () => {
    if (childRender === true) {
      props.addItem(childRender);
    } else {
      props.removeItem(childRender);
    }
    setchildRender(!childRender);
  };

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Sale badge--> */}
          {props.Name === "Special Item" || props.Name === "Sale Item" ? (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : (
            <></>
          )}
          {/* <!-- Product image--> */}
          <img className="card-img-top" src={`${props.Image}`} alt="..." />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{props.Name}</h5>
              {/* <!-- Product reviews--> */}
              {props.Name === "Popular Item" ||
              props.Name === "Special Item" ? (
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              ) : (
                <></>
              )}
              {/* <!-- Product price--> */}
              {props.Name === "Special Item" || props.Name === "Sale Item" ? (
                <>
                  {" "}
                  <span className="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  <span>{props.Price}</span>{" "}
                </>
              ) : (
                <>{props.Price}</>
              )}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {childRender ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={Toggle}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={Toggle}
                >
                  Remove from the cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
