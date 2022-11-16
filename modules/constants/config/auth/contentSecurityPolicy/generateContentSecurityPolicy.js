const { googleDomains } = require('./googleDomains');

const generateContentSecurityPolicy = () => {
  let csp = ``;
  csp += `base-uri 'self';`;
  csp += `form-action 'self' https://www.facebook.com https://sandbox-pandisplay.helix.q2.com/pci/rendertemplate;`;
  csp += `default-src 'self' *.getpinwheel.com *.plaid.com;`;
  /**
   * NextJS requires 'unsafe-eval' in dev + Smartlook requires in prod
   */
  csp += `script-src 'self' 'unsafe-eval' *.google-analytics.com *.tiktok.com *.getpinwheel.com *.plaid.com https://www.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net *.smartlook.com *.smartlook.cloud *.mixpanel.com localhost:* https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.js ${googleDomains} https://js.dvnfo.com/devicer.min.js;`;
  /**
   * NextJS requires 'unsafe-inline'
   */
  csp += `style-src 'self' 'unsafe-inline';`;
  csp += `img-src 'self' data: https://content.mx.com *.google-analytics.com *.tiktok.com *.privacysandbox.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com *.spiral.us blob: *.cloudinary.com *.zeplin.io https://spiralgenericstorage.s3.us-east-2.amazonaws.com  *.guidestar.org https://www.facebook.com blob: ${googleDomains};`;
  csp += `font-src 'self';`;
  /**
   * @TODO - will have to add production url for tabapay when available or the iframe will be blocked.
   */
  csp += `frame-src  'self' https://bid.g.doubleclick.net cloudinary.com *.getpinwheel.com *.plaid.com *.tabapay.com https://sso.sandbox.tabapay.com:8443 https://sandbox-pandisplay.helix.q2.com/pci/rendertemplate;`;
  csp += `frame-ancestors 'self';`;
  /**
   * @TODO - media should come from self, cloudinary, guidestar, or authorized providers.
   */
  csp += `media-src *;`;
  csp += `child-src blob: *.getpinwheel.com *.plaid.com;`;
  csp += `connect-src blob: ws: *.doubleclick.net *.google-analytics.com *.facebook.com *.tiktok.com https://*.spiral.us *.smartlook.com  *.smartlook.cloud *.mixpanel.com localhost:* https://dvnfo.com;`;
  csp += `object-src 'none';`;

  return csp;
};

module.exports = { generateContentSecurityPolicy };
