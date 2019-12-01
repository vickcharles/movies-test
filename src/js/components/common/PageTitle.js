import React from "react";

import "../../../assets/sass/pageTitle.sass";

const PageTitle = ({ text }) => {
  return (
    <div>
      <h1 className="page-title">{text}</h1>
    </div>
  );
};

export default PageTitle;
