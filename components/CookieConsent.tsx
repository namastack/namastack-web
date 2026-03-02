'use client'

import React, { useState, useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import pluginConfig from './CookieConsentConfig';
import { GoogleAnalytics } from "@next/third-parties/google";

const CookieConsentComponent = () => {
  const [enableGA, setEnableGA] = useState(false);

  useEffect(() => {
    CookieConsent.run({
      ...pluginConfig,
      onConsent: () => handleConsentChange(),
      onChange: () => handleConsentChange(),
    });
  }, []);

  const handleConsentChange = () => {
    if (CookieConsent.acceptedCategory("analytics")) {
      setEnableGA(true);
      console.log("GA ACTIVATED");
    } else {
      setEnableGA(false);
      console.log("GA DEACTIVATED");
      removeGACookies();
    }
  };

  const removeGACookies = () => {
    document.cookie = "_ga=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "_gid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "_gat=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  };

  return (
    <>
      {enableGA && (
        <GoogleAnalytics gaId="G-7T0WYS15SK" />
      )}
      <a href="#" onClick={CookieConsent.showPreferences}>
        Show Cookie Preferences
      </a>
    </>
  );
};

export default CookieConsentComponent;
