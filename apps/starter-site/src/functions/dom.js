import { analytics_track_link } from 'src/functions/analytics';
import { href_canonical } from 'src/functions/url';

export const nameHeadings = function () {
  /*
   * Add <a name=""> before each Heading, so we can link to different sections on the page
   */
  let headings = [
    ...[...document.getElementsByTagName('h1')],
    ...[...document.getElementsByTagName('h2')],
    ...[...document.getElementsByTagName('h3')],
    ...[...document.getElementsByTagName('h4')],
    ...[...document.getElementsByTagName('h5')],
    ...[...document.getElementsByTagName('h6')],
  ];
  Array.prototype.forEach.call(headings, function (heading) {
    heading.style.position = 'relative';
    if (heading.classList.contains('thePostTitle')) return;

    let aname = heading.innerText
      .replace(/\s/g, ' ')
      .replace(/[ ]+/g, ' ')
      .replace(/([^a-z0-9 ]+)/gi, '')
      .replace(/^ /, '')
      .replace(/ $/, '')
      .trim();
    if (!document.querySelector(`[name="${aname}"]`)) {
      let anchor = document.createElement('a');
      anchor.setAttribute('name', aname);
      anchor.classList.add('aname');
      heading.prepend(anchor);
    }
    let anameNoUpper = aname.toLowerCase();
    if (!document.querySelector(`[name="${anameNoUpper}"]`)) {
      let anchor = document.createElement('a');
      anchor.setAttribute('name', anameNoUpper);
      anchor.classList.add('aname');
      heading.prepend(anchor);
    }
    let anameNoNumbers = aname
      .replace(/([^a-z ]+)/gi, '')
      .replace(/[ ]+/g, ' ')
      .trim();
    if (!document.querySelector(`[name="${anameNoNumbers}"]`)) {
      let anchor = document.createElement('a');
      anchor.setAttribute('name', anameNoNumbers);
      anchor.classList.add('aname');
      heading.prepend(anchor);
    }
    let anameNoUpperNoNumbers = aname
      .replace(/([^a-z ]+)/gi, '')
      .toLowerCase()
      .replace(/[ ]+/g, ' ')
      .trim();
    if (!document.querySelector(`[name="${anameNoUpperNoNumbers}"]`)) {
      let anchor = document.createElement('a');
      anchor.setAttribute('name', anameNoUpperNoNumbers);
      anchor.classList.add('aname');
      heading.prepend(anchor);
    }
  });
};

export const fixWordpressLinks = function () {
  console.log('\n\n fixWordpressLinks() \n\n');
  /*
   * Modify <a> links
   */
  let links = document.querySelectorAll('article a');
  Array.prototype.forEach.call(links, function (link) {
    let href = href_canonical(link.href) || '';
    try {
      /*
       * Fix Twitter share text
       */
      if (href.includes('twitter.com/share')) {
        let i1 = href.indexOf('text=') + 5;
        let i2 = href.indexOf('&url=');
        if (i1 > 5 && i2 > -1) {
          let html = href.substring(i1, i2);
          try {
            html = decodeURIComponent(unescape(html));
          } catch (e) {
            html = decodeURIComponent(html);
          }
          let div = document.createElement('div');
          div.innerHTML = html;
          let text = div.innerText || div.textContent || '';
          // remove special characters that will not be fixed by escape() or encodeURIComponent()
          text = text.replace(/â/g, '’');
          text = text.replace(/â/g, ' – ');
          text = text.replace(/|||[âÂ¹²³⁴⁵⁶⁷⁸⁹⁰]+/g, '');
          text = text.replace(/[\s]+/g, ' ');
          text = encodeURIComponent(text);
          // text = text.replace(/&nbsp;|\s/gi, ' '); // space removal not working!
          link.classList.add('tweetButton');
          href = href.replace(href.substring(i1, i2), text);
        }
      }

      /*
       * Fix link href, target, ref
       * (always use _blank for external links)
       */
      if (
        href.substring(0, 4) === 'http' &&
        !href.substring(0, 22).includes('spiral.us')
        // && !href.includes('1526316317')
      ) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      } else if (href.includes('/#') || href[0] === '#') {
        link.setAttribute('target', '');
      } else {
        link.setAttribute('href-lang', 'en-us');
        link.setAttribute('target', '');
        link.setAttribute('rel', '');
      }

      /*
       * Track links
       */
      link.href = href;
      link.onclick = function (event) {
        analytics_track_link({ href: href, from: 'wordpress' });
      };
    } catch (e) {
      console.error(`unable to modify link href="${href}" html="${link.innerHTML}"`);
    }
  });
};
