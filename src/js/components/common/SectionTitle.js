import React from "react";

import { Typography } from "@material-ui/core";
import "../../../assets/sass/sectionTitle.sass";

const SectionTitle = ({ text }) => {
  return (
    <div>
      <Typography className="section-title">{text}</Typography>
    </div>
  );
};

export default SectionTitle;
