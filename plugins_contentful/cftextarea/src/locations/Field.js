import { useSDK } from "@contentful/react-apps-toolkit";

export default function Field() {
  const sdk = useSDK();
  const field = sdk?.field;

  if (field.id === "body") {
    return (
      <div
        style={{
          padding: "20px",
          fontSize: "16px",
        }}
      >
        ☝️ Click the{" "}
        <b
          style={{
            padding: "0px 7px 0 6px",
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
        tab above to edit this content.
      </div>
    );
  }
}
