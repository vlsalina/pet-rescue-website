import React from "react";
import { Helmet } from "react-helmet";

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Pet Rescue</title>
      <meta name="description" content="Pet Rescue Website" />
      <link rel="canonical" href="https://pet-rescue-site.netlify.app/" />
    </Helmet>
  );
};

export default Metadata;
