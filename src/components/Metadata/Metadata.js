import React from "react";
import { Helmet } from "react-helmet";

const Metadata = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Pet Rescue - Animals and Shelter Charity</title>
      <link rel="canonical" href="https://pet-rescue-site.netlify.app/" />
      <meta name="description" content="Animals and Shelter Charity" />
    </Helmet>
  );
};

export default Metadata;
