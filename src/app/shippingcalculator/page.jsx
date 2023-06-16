import React from "react";

const ShippingCalculator = () => {
  return (
    <>
      {/* main container  */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[50%] h-auto flex flex-col">
          <h1 className="text-3xl">Shipping Calculator</h1>
          <p className="text-xs">
            This shipping calculator provides an approximate shipping charges
            and may contain not all shipping methods available. Total parcel
            weight with package is used for calculation. Package weight will be
            automatically added during checkout.
          </p>
          <p className="text-xs">
            If you did not found shipping method to your location please contact
            us. Usually, we can provide shipping to almost anywhere.
          </p>
          <form className="w-[80%] h-[60vh] border bg-[#FBF5EA] rounded-sm mx-auto flex flex-col">
            {/* currency */}
            <div>
              <label htmlFor="currency" className="text-sm">
                Currency
              </label>
              <select
                name="currency"
                id=""
                className="w-auto h-8 text-xs rounded-md"
              >
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="JPY">JPY</option>
                <option value="NZD">NZD</option>
                <option value="SGD">SGD</option>
                <option value="AED">AED</option>
                <option value="RUB">RUB</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            {/* weight , kg */}
            <div>
              <label htmlFor="currency" className="text-sm">
                Weight, kgs
              </label>
              <input
                type="number"
                name="weight"
                id=""
                placeholder="0.0"
                className="w-auto h-8 text-xs rounded-md"
              />
            </div>

            {/* box */}
            <div>
              <label htmlFor="currency" className="text-sm">
                Currency
              </label>
              <select
                name="currency"
                id=""
                className="w-auto h-8 text-xs rounded-md"
              >
                <option value="USD">- choose box -</option>
                <option value="AUD">Bag 25x20x8</option>
                <option value="CAD">№5 23x18x17</option>
                <option value="JPY">№6 30x24x22</option>
                <option value="NZD">№7 38x29x24</option>
                <option value="SGD">№6半 30x24x11</option>
                <option value="AED">№7半 38x29x13</option>
              </select>
            </div>

            {/* Dimensions, cm	 */}
            <div>
              <label htmlFor="currency" className="text-sm">
                Dimensions, cm
              </label>
              <input
                type="number"
                name="weight"
                id=""
                placeholder="30"
                className="w-auto h-8 text-xs rounded-md"
              />
              x
              <input
                type="number"
                name="weight"
                id=""
                placeholder="24"
                className="w-auto h-8 text-xs rounded-md"
              />
              x
              <input
                type="number"
                name="weight"
                id=""
                placeholder="11"
                className="w-auto h-8 text-xs rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingCalculator;
