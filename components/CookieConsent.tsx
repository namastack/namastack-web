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
    } else {
      setEnableGA(false);
      CookieConsent.eraseCookies(/^(?!cc_cookie$)/, '/', '.namastack.io');
    }
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
