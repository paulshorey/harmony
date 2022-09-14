import React from 'react';
import Modal from './index';

export default {
  title: 'Design Systems/Atoms/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Tall = Template.bind({});
Tall.args = {
  isOpen: true,
  children: (
    <div>
      <p>
        <b>To close this modal,</b>
        <ol>
          <li>Hit "esc" key</li>
          <li>Click the "X" button</li>
          <li>Click anywhere outside of the modal</li>
        </ol>
        BUT, this does not work in this Storybook component. You must wrap this
        src/components/atoms/Modal in a parent component. Pass prop "isOpen" to this modal. If true,
        it will be opened. If false, it will be closed. Pass a callback function "onRequestClose"
        which will be called when one of the 3 aforementioned things have occured. When that
        happens, set "isOpen" to false.
      </p>

      <h2>Sizing</h2>
      <p>
        <b>When opening, it has a subtle animation!</b> If there is more than 300px of vertical
        content, then the modal will first be rendered as 300px high, then it smoothly expands to
        the height of the content or the height of the window, whichever is smaller. This is
        necessary because we can not tell the height of the content until it is rendered, but also
        we don't want to show a very tall modal for very short content, and also we don't want to
        hard code a specific pixel height for each modal.
      </p>
      <p>
        <b>You must close the controls area below!!!</b> to see how the modal this modal's "smart"
        variable height in action.{' '}
        <b>Shortcut: keyboard button "d" to toggle the bottom controls.</b>
      </p>
      <p>
        Then you'll be able to toggle between Tall/Short version of this (in the left navigation),
        and you'll be able to see the difference. <b>Unfortunately,</b> this Storybook has the
        controls taking up a lot of the vertical space. So, this component thinks that this weird
        size is a mobile phone in landscape orientation. So, it renders the modal as full height, to
        use as much of the precious screen space as possible.{' '}
      </p>
      <p>This modal is styled automatically, differently, depending on the screen size...</p>
      <p>
        If the screen height is small (mobile) so that a modal may not comfortably fit inside it,
        this modal will be styled as 100% height, opened from top to bottom with no space around
        above/below it.
      </p>
      <p>
        If the window is large (desktop), then the modal will open to a variable height, and will be
        vertically centered in the page. If there is very little content shown inside, the modal
        height will be small. If there is a lot of content (so that it needs scrollbars), then the
        modal will be opened as tall as possible! See the 2 examples here in Storybook. This one is
        tall. The next one will have only a bit of content. It will be a short modal.
      </p>

      <h2>props.children</h2>
      <p>
        How to make the content look like it's scrollable? How to add a button or form that is
        always pinned to the bottom of this modal?{' '}
        <b>That should be taken care of by the props.children</b> This modal component does not have
        anything to do with the look or functionality of its contents. It's just provides the style
        and functionality for the shell.{' '}
      </p>

      <h2>Now here's some more text</h2>
      <p>to simulate a very long article which is longer than the screen height...</p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
      <p>
        d kjadfsjkfd lkafsd ljkafsdjlkadfs jladfjs ladfsj hfjls adhkl afdshk dfas adfs fadsadfs adfk
        skadfs kadfsadfs adfsadfsadfs k adfsk adfsk adfs adfsafs hfsa fsakaf skfhjsksfj aaekfhu
      </p>
    </div>
  ),
};

export const Short = Template.bind({});
Short.args = {
  isOpen: true,
  children: (
    <div>
      <h3>src/components/atoms/Modal</h3>
      <p>
        Try this in different window sizes. This Storybook window is very strange, because it has
        the controls taking up a lot of the vertical space!
      </p>
    </div>
  ),
};
