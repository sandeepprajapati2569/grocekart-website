import MetaData from "@/components/metadata-component/MetaData";
import AboutUsPage from "@/components/pagecomponents/AboutUsPage";
import React from "react";

const index = () => {
  return (
    <div>
      <MetaData pageName="/about" title={`About Us - ${process.env.NEXT_PUBLIC_META_TITLE}`} />
      <AboutUsPage />
    </div>
  );
};

export default index;
