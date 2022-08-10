import React from "react";
import { Paragraph } from "@contentful/f36-components";
import { SidebarExtensionSDK } from "@contentful/app-sdk";
import { /* useCMA, */ useSDK } from "@contentful/react-apps-toolkit";

const Sidebar = () => {
  const sdk = useSDK<SidebarExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  return (
    <Paragraph style={{ maxHeight: "200px", overflow: "auto" }}>
      👈 Compose the article content in the{" "}
      <b
        style={{
          padding: "0px 2px 0 2px",
          fontWeight: "600",
          color: "#67728a",
          cursor: "pointer",
          fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
        }}
      >
        {" "}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          data-test-id="cf-ui-icon"
          className="Icon__Icon___38Epv Icon__Icon--small___1yGZK Icon__Icon--muted___3egnD css-1agenp7"
          style={{
            verticalAlign: "middle",
          }}
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path fill="#67728a" d="M8 16h8v2H8zM8 12h8v2H8z"></path>
          <path fill="#67728a" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
        </svg>{" "}
        <span
          style={{
            verticalAlign: "middle",
          }}
        >
          Blog Body
        </span>
      </b>{" "}
      tab. Manage other info like excerpt, slug, title, date, featured image in{" "}
      <b
        style={{
          padding: "0px 3px 0 3px",
          fontWeight: "600",
          color: "#67728a",
          cursor: "pointer",
          fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
        }}
      >
        {" "}
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          data-test-id="cf-ui-icon"
          className="Icon__Icon___38Epv Icon__Icon--small___1yGZK Icon__Icon--muted___3egnD css-1agenp7"
          style={{
            verticalAlign: "middle",
          }}
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path fill="#67728a" d="M8 16h8v2H8zM8 12h8v2H8z"></path>
          <path fill="#67728a" d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
        </svg>{" "}
        <span
          style={{
            verticalAlign: "middle",
          }}
        >
          Editor
        </span>
      </b>{" "}
      tab.
      <br />
      &nbsp;
      <br />
      Press "Publish" below, to preview on{" "}
      <a href="https://staging-blog.spiral.us/blog" target="_blank" style={{ color: "#d92e76" }} rel="noreferrer">
        staging
      </a>
      . <br />
      <b>
        ⚠️ It will take 20+ minutes to deploy to staging. Every time you hit "Publish", it will add another 20 min. So final changes could take a couple hours
        to appear on staging!
      </b>{" "}
      <br />
      After confirming on{" "}
      <a href="https://staging-blog.spiral.us/blog" target="_blank" style={{ color: "#d92e76" }} rel="noreferrer">
        staging
      </a>
      , ask a software engineer / administrator to sync all content to{" "}
      <a href="https://www.spiral.us/blog" target="_blank" style={{ color: "#d92e76" }} rel="noreferrer">
        production
      </a>
      .
      <br />
      &nbsp;
      <br />
      To add disclosure numbers (¹²³),{" "}
      <a href="https://spiralfinancial.atlassian.net/wiki/spaces/SW/pages/529694721/Disclosures" target="_blank" style={{ color: "#d92e76" }} rel="noreferrer">
        read this
      </a>
      .
    </Paragraph>
  );
};

export default Sidebar;
