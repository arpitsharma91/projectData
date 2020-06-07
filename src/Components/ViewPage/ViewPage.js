import React from "react";
import AccountSection from "./AccountSection/AccountSection";
import LicenseSection from "./LicenseSection/LicenseSection";

const viewPage = () => {
  return (
    <React.Fragment>
      <AccountSection />
      <LicenseSection />
    </React.Fragment>
  );
};

export default viewPage;
