import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ProductPreviewCard extends Component {
  render() {
    return (
      <div
        className="lg:h-[450px] lg:w-[600px] bg-white border rounded-lg lg:grid lg:grid-cols-2 lg:justify-content-start
                    min-[320px]:h-[610px] min-[320px]:w-[345px]"
      >
        <div>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={require("../assets/images/image-product-desktop.jpg")}
            />
            <source
              media="(min-width: 470px)"
              srcSet={require("../assets/images/image-product-mobile.jpg")}
            />
            <img
              src={require("../assets/images/image-product-mobile.jpg")}
              alt="imagealttext"
              className="border lg:rounded-tl-lg lg:rounded-bl-lg
                        min-[320px]:w-full min-[320px]:h-[240px] min-[320px]:rounded-t-lg
                        lg:h-[450px] lg:rounded-t-none"
            />
          </picture>
        </div>
        <div className="lg:m-[30px] text-left min-[320px]:m-[20px]">
          <p
            className="text-md font-Montserrat text-slate-400 lg:mb-2
                        min-[320px]:mb-[10px]"
          >
            Perfume
          </p>
          <p className="text-4xl font-Fraunces text-darkGrayichBlue">
            Gabriel Essense Eau de Parfum
          </p>
          <p className="text-sm font-Montserrat text-slate-400 lg:my-[25px] min-[320px]:my-[20px]">
            A floral , solar and voluptious interpretation composed by Olivier
            Polge, Perfumer-Creator for the house of CHANEL
          </p>
          <div className="flex flex-row items-center lg:mb-[30px] min-[320px]:mb-[10px]">
            <p className="font-Fraunces text-3xl text-darkcyan mr-[20px]">
              $149.99
            </p>
            <p className="text-sm text-slate-300 line-through">$169.99</p>
          </div>

          <button className="border rounded-lg bg-darkcyan w-full py-[15px] text-white text-md font-medium font-Monteserrat">
            <FontAwesomeIcon icon="cart-shopping" className="mr-3" />
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductPreviewCard;
