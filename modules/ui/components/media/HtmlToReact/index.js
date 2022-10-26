import parse, { domToReact } from 'html-react-parser';
import DisclosureNumber from 'src/components/disclosures/atoms/DisclosureNumber';

const formatTextFromCMS = function (str, { variant } = {}) {
  let html = str;

  html = html.replace(/<a href="https?:\/\/w?w?w?\.?spiral\.us/g, '<a href="'); // internal links
  html = html.replace(/<a href=""/g, '<a href="/"'); // fix if removed too much
  html = html.replace(/<a href="http/g, '<a target="_blank" rel="noreferrer nofollow" href="http');
  if (variant === 'inline') {
    html = html.replace(/<p/g, '<span');
    html = html.replace(/\/p>/g, '/span>');
  }
  html = html.replace(/&sup1;/g, '¹');
  html = html.replace(/&sup2;/g, '²');
  html = html.replace(/&sup3;/g, '³');
  html = html.replace(/&sup4;/g, '⁴');
  html = html.replace(/&sup5;/g, '⁵');
  html = html.replace(/&sup6;/g, '⁶');
  html = html.replace(/&sup7;/g, '⁷');
  html = html.replace(/&sup8;/g, '⁸');
  html = html.replace(/&sup9;/g, '⁹');
  html = html.replace(/&sup0;/g, '⁰');
  let regex = /([¹²³⁴⁵⁶⁷⁸⁹⁰]+)/g;
  html = html.replace(regex, `<span class="disTemporary">$1</span>`);
  return html;
};

export default function ({ html, variant, ...props }) {
  if (!html) return null;
  html = formatTextFromCMS(html, { variant });
  let options = {
    replace: (domNode) => {
      if (domNode.parent) {
        if (domNode.parent?.attribs?.class === 'disTemporary') {
          return <DisclosureNumber disId={domNode.data} />;
        }
      }
    },
  };
  let parsed = parse(html, options);
  return (
    <span className="HtmlToReact" {...props}>
      {parsed}
    </span>
  );
}
