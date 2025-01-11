// import React from "react";
import Form from "@/Components/LifeInsurance/Form";
import Info from "@/Components/LifeInsurance/Info";
import Component1 from "@/Components/LifeInsurance/Component1";
import Component8 from "@/Components/LifeInsurance/Component8";
import Component9 from "@/Components/LifeInsurance/component9";
import Component2 from "@/Components/LifeInsurance/Component2";
import Customer from "@/Components/LifeInsurance/Customer";
import Components4 from "@/Components/LifeInsurance/Components4";
import Component5 from "@/Components/LifeInsurance/Component5";
import Component6 from "@/Components/LifeInsurance/Component6";
import Component7 from "@/Components/LifeInsurance/Component7";
import Coverage from "@/Components/LifeInsurance/Coverage";

function LifeInsurance() {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col md:flex-row justify-center items-center m-auto md:px-56 pt-24 mb-40"
      >
        <div >
          <Info />
        </div>
        <div >
          <Form />
        </div>
      </div>
      <div>
        <Component1 />
      </div>
      <div>
        <Component2 />
      </div>
      <div>
        <Coverage />
      </div>
      <div>
        <Customer/>
      </div>
      <div>
        <Components4 />
      </div>
      <div>
        <Component5 />
      </div>
      <div>
        <Component6 />
      </div>
      <div>
        <Component7 />
      </div>
      <div className="bg-white">
        <Component8 />
      </div>
      <div>
        <Component9 />
      </div>
    </div>
  );
}

export default LifeInsurance;