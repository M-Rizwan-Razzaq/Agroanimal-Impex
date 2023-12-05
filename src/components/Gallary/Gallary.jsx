import React from "react";
import gallaryHead from "../../images/gallaryHead.jpg";

import "./gallary.css";
import CompoHeader from "../common/CompoHeader";
const Gallary = () => {
  return (
    <div>
      <section>
        <CompoHeader name="Gallary" image={gallaryHead} />
      </section>
    </div>
  );
};

export default Gallary;
