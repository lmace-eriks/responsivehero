import React, { useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";
import { canUseDOM } from "vtex.render-runtime";

import styles from "./styles.css";

interface ResponsiveHeroProps {

}

const ResponsiveHero: StorefrontFunctionComponent<ResponsiveHeroProps> = ({ }) => {

  return <div>HERO</div>
}

ResponsiveHero.schema = {
  title: "Store Banner",
  type: "object",
  properties: {}
}

export default ResponsiveHero;