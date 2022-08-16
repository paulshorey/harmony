import { useEffect, useRef, useState } from "react";
import { useFieldValue } from "@contentful/react-apps-toolkit";
import { Editor } from "@tinymce/tinymce-react";

const Entry = () => {
  const [value, set_value] = useFieldValue("body", "en-US");
  const editorRef = useRef(null);
  const [initialValue, set_initialValue] = useState("");
  useEffect(() => {
    if (value && !initialValue) {
      set_initialValue(value);
    }
  }, [value, initialValue]);

  useEffect(() => {
    window.tinymce.PluginManager.add("insertTemplate", function (editor, url) {
      const openDialog_toc = function () {
        return editor.windowManager.open({
          title: "TOC...",
          body: {
            type: "panel",
            items: [
              {
                type: "input",
                name: "title",
                label: "Title of this paragraph",
              },
              {
                type: "textarea",
                name: "items",
                label: "Items. Separate each with new line. (Ok to paste links from clipboard)",
              },
              {
                type: "textarea",
                name: "links",
                label: "Link URLs. (For each line above, define a link URL for that text. Separate by new line.)",
              },
            ],
          },
          buttons: [
            {
              type: "cancel",
              text: "Close",
            },
            {
              type: "submit",
              text: "Save",
              primary: true,
            },
          ],
          onSubmit: function (api) {
            var data = api.getData();
            var items = data.items?.split("\n") || [];
            var links = data.links?.split("\n") || [];
            editor.insertContent(`
              <p class="has-small-font-size"><strong>${data.title}:</strong></p>
              <ul class="is-style-none has-small-font-size">
              ${items.map((text, i) => `<li><a href="${links[i] || ""}" target="">${text}</a></li>`).join("")}
              </ul>
            `);
            api.close();
          },
        });
      };
      const openDialog_tweet = function () {
        return editor.windowManager.open({
          title: "Tweet...",
          body: {
            type: "panel",
            items: [
              {
                type: "textarea",
                name: "quote",
                label: "Quote to Tweet",
              },
            ],
          },
          buttons: [
            {
              type: "cancel",
              text: "Close",
            },
            {
              type: "submit",
              text: "Save",
              primary: true,
            },
          ],
          onSubmit: function (api) {
            var data = api.getData();
            /* Insert content when the window form is submitted */
            editor.insertContent(
              `<blockquote class="wp-block-coblocks-click-to-tweet"><p class="wp-block-coblocks-click-to-tweet__text">${data.quote}</p><a class="wp-block-coblocks-click-to-tweet__twitter-btn" href="http://twitter.com/share?&amp;text=If%20you%20have%20not%20received%20your%20stimulus%20check%2C%20the%20first%20thing%20you%20should%20do%20is%20track%20its%20status%20at%20the%20IRS.&amp;url=https%3A%2F%2Fblogspiralus.wpcomstaging.com%2F2021%2F05%2F12%2F4-reasons-why-you-may-not-have-received-your-stimulus-check%2F" rel="noopener noreferrer" target="_blank">Tweet</a></blockquote>`
            );
            api.close();
          },
        });
      };
      const openDialog_imgCaption = function () {
        return editor.windowManager.open({
          title: "Image with caption...",
          body: {
            type: "panel",
            items: [
              {
                type: "input",
                name: "image",
                label: "Image URL (you should upload image to Cloudinary, then copy the URL from there by clicking the chai link icon)",
              },
              {
                type: "input",
                name: "imageAlt",
                label: "Image alt text (important for SEO)",
              },
              {
                type: "input",
                name: "caption",
                label: "Caption text (you'll be able to edit and add links later)",
              },
              {
                type: "input",
                name: "width",
                label: "Width (750px is a good size. 900px maximum)",
              },
              {
                type: "input",
                name: "height",
                label: "Height (relative to the width)",
              },
            ],
          },
          buttons: [
            {
              type: "cancel",
              text: "Close",
            },
            {
              type: "submit",
              text: "Save",
              primary: true,
            },
          ],
          onSubmit: function (api) {
            var data = api.getData();
            /* Insert content when the window form is submitted */
            editor.insertContent(`<div class="blog-figure">
            <img class="blog-figure-image" loading="lazy" src="${data.image}" alt="${data.imageAlt}" width="${data.width || 750}" height="${
              data.height || ""
            }"><div class="blog-figure-caption">${data.caption}</div></div>
            `);
            api.close();
          },
        });
      };
      const openDialog_img = function () {
        return editor.windowManager.open({
          title: "Image...",
          body: {
            type: "panel",
            items: [
              {
                type: "input",
                name: "image",
                label: "Image URL (you should upload image to Cloudinary, then copy the URL from there by clicking the chai link icon)",
              },
              {
                type: "input",
                name: "imageAlt",
                label: "Image alt text (important for SEO)",
              },
              {
                type: "input",
                name: "caption",
                label: "Caption text (you'll be able to edit and add links later)",
              },
              {
                type: "input",
                name: "width",
                label: "Width (750px is a good size. 900px maximum)",
              },
              {
                type: "input",
                name: "height",
                label: "Height (relative to the width)",
              },
            ],
          },
          buttons: [
            {
              type: "cancel",
              text: "Close",
            },
            {
              type: "submit",
              text: "Save",
              primary: true,
            },
          ],
          onSubmit: function (api) {
            var data = api.getData();
            /* Insert content when the window form is submitted */
            editor.insertContent(`<div class="blog-figure">
            <img class="blog-figure-image" loading="lazy" src="${data.image}" alt="${data.imageAlt}" width="${data.width || 900}" height="${
              data.height || ""
            }"><div class="blog-figure-caption">${data.caption}</div></div>
            `);
            api.close();
          },
        });
      };
      /* Adds a menu item, which can then be included in any menu via the menu/menubar configuration */
      editor.ui.registry.addMenuItem("img", {
        text: "Image...",
        onAction: function () {
          /* Open window */
          openDialog_img();
        },
      });
      editor.ui.registry.addMenuItem("imgCaption", {
        text: "Image with caption...",
        onAction: function () {
          /* Open window */
          openDialog_imgCaption();
        },
      });
      editor.ui.registry.addMenuItem("tweet", {
        text: "Tweet...",
        onAction: function () {
          /* Open window */
          openDialog_tweet();
        },
      });
      editor.ui.registry.addMenuItem("toc", {
        text: "Table of contents (text/links)...",
        onAction: function () {
          /* Open window */
          openDialog_toc();
        },
      });
    });
  }, []);

  return (
    <div>
      <Editor
        apiKey="3b5qgbz8a2r2a6y5gitmhofxcs6fy6v3t966s3nzyqv6t11w"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          resize: "none",
        }}
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        init={{
          menu: {
            custom: { title: "🌄 Insert image / template", items: "img imgCaption tweet toc" },
          },
          menubar: "edit format table insert custom",
          plugins: `insertTemplate advlist autolink lists link image charmap preview anchor
        searchreplace visualblocks code fullscreen
        insertdatetime media table paste code help wordcount advlist code emoticons link lists table autoresize`,
          toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | link blocks",
          content_css: "css/writer.css",
          setup: function (editor) {
            editor.on("init", function (e) {
              editor.execCommand("mceFullScreen");
            });
          },
        }}
        onEditorChange={set_value}
      />
    </div>
  );
};

export default Entry;
