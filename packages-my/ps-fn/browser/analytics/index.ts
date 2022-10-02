import { mixpanel_track } from "./mixpanel";

const DEBUG1 = false; // log

/**
 * Track page view (when a new route is written to browser history)
 * Read more about Mixpanel options:
 * https://docs.google.com/spreadsheets/d/1xXqXaUCOuUJ4EThrkZRwTzMAlBXr3Yr7pQHR2tw2ZEU/edit#gid=0
 */
export const analytics_track_page = function (options: {
  name: string; // name of the page
  path: string; // route of the page, relative to the site, starting with slash
  postSlug?: string; // slug of the blog post, if any
  categorySlug?: string; // slug of the blog category, if any
  experiments?: any; // experiments in the page
}): void {
  // remove trailing slash
  opt.path = opt.path.replace(/[\/]+$/, "");
  // keep lash if root
  if (opt.path === "") opt.path = "/";

  // label
  let label = "PageView: " + opt.name;
  mixpanel_track({ label, options });

  // Google Analytics
  // GA4 may track SPA route changes automatically? See:
  // https://www.analyticsmania.com/post/single-page-web-app-with-google-tag-manager/
  if (typeof window !== "object") return;
  if (DEBUG1) {
    console.warn("gtag track pageview", {
      page_title: opt.name,
      page_path: opt.path
    });
  }
  if (!window.gtag) {
    console.error("!window.gtag");
    return;
  }
  window.gtag("config", process.env.NEXT_PUBLIC_GTAG_ID, {
    page_path: opt.path,
    page_title: opt.name
  });
  // Facebook
  // Facebook automatically tracks changes to push state?
};

/**
 * Track the "Sign up" or "Download our app" button click
 * @param {object} options
 * @param {string} opt.from - where in the site the button was clicked
 */
export const analytics_track_cta = function (options: {
  from: string; // where in the page/site this was displayed
}): void {
  let label = "CTA: " + opt.from;
  mixpanel_track({ label, options });
  // track Facebook
  if (typeof window === "object" && window.fbq) {
    console.log("tracking Facebook Lead click");
    window.fbq("track", "Lead");
  }
  // track in TikTok
  if (typeof window === "object" && window.ttq) {
    window.ttq.track("ClickButton");
  }
};

/**
 * Track all link clicks
 * Navigating to a page ("/" internal), or external ("https://..."), and even hash links ("#...")
 * @param {object} options
 * @param {string} opt.type - type of the link, internal or external
 * @param {string} opt.href - href of the link
 * @param {string} opt.fromSection - where in the site the link was clicked
 * @param {string} opt.fromPageName - name of the page where the link was clicked
 * @param {string} opt.fromPagePath - route of the page where the link was clicked
 */
export const analytics_track_link = function (options: {
  from: string; // where in the page/site this link was displayed
  href: string; // href of the link
}) {
  let label = "link click";
  // format href
  opt.type = href_type(opt.href);
  // opt.href = href_canonical(opt.href); // use canonical url format
  // is CTA
  if (opt.href.includes("1526316317") || opt.href.includes("/auth/register")) {
    if (!opt.from) {
      opt.from = "link";
    }
    analytics_track_cta(options);
    return;
  }
  // is contact, track in TikTok
  if (opt.href.includes("mailto:") || opt.href.includes("tel:")) {
    if (typeof window === "object" && window.ttq) {
      window.ttq.track("Contact");
    }
  }
  // track in Mixpanel
  mixpanel_track({ label, options });
};

/*
 * PRIVATE HELPERS
 */
const href_type = function (href): "internal" | "hashtag" | "external" | "contact" {
  if (href.substring(0, 1) === "#") {
    return "hashtag";
  } else if (href.substring(0, 4) === "http" && !/spiral\.us|localhost:/.test(href.substring(0, 22))) {
    // how to know host name in lib ?
    return "external";
  } else if (href.substring(0, 7) === "mailto:" || href.substring(0, 4) === "tel:") {
    return "contact";
  } else {
    return "internal";
  }
};
