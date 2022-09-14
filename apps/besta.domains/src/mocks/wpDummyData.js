const data = {
  /*
   * MINIMUM DATA TO MAKE THE WEBSITE
   * Wordpress gives us a lot of other data. Any variable not listed here is currently not being used.
   * Whenever you add new functionality, whenever using new properties from Wordpress, add them to this file.
   * These are functions (getters), but call them just like a property (not method).
   * Usage: `wpDummyData.post` or `wpDummyData.posts[0]` or `wpDummyData.images` or `wpDummyData.categories_ids`
   */
  get posts() {
    return [
      {
        id: 11,
        slug: 'the_article_title',
        title: { rendered: 'The Article Title' },
        jetpack_featured_media_url: '',
        excerpt: {
          rendered:
            'This is a short description of the content. <b>It sometimes contains HTML.</b> It could just be a cut off beginning of the full text, or a custom written couple lines of text.',
        },
        content: {
          rendered:
            'This is the full text of the content. It contains HTML, so be careful! Display it like this: <pre><code><div className="excerpt" dangerouslySetInnerHTML={{ __html: postContent }} /></code></pre>',
        },
        date_gmt: '2021-04-26T14:45:00',
        featured_media: this.images[0].id,
        author: this.user.id,
        categories: this.categories_ids,
      },
      {
        id: 12,
        slug: 'another_article',
        title: { rendered: 'Another Blog Article' },
        jetpack_featured_media_url: '',
        excerpt: {
          rendered:
            'This is another short description of the content. <b>It sometimes contains HTML.</b> It could just be a cut off beginning of the full text, or a custom written couple lines of text.',
        },
        content: {
          rendered:
            'This is another full text of the content. It contains HTML, so be careful! Display it like this: <pre><code><div className="excerpt" dangerouslySetInnerHTML={{ __html: postContent }} /></code></pre>',
        },
        date_gmt: '2021-04-29T11:45:00',
        featured_media: this.images[1].id,
        author: this.user.id,
        categories: this.categories_ids,
      },
    ];
  },

  get categories() {
    return [
      {
        id: 21,
        name: 'Do Good',
        slug: 'dogood',
      },
      {
        id: 22,
        name: 'Ethical Banking',
        slug: 'ethicalbanking',
      },
    ];
  },

  get users() {
    return [
      {
        id: 31,
        name: 'Team Spiral',
        slug: 'spiralfinancial',
        avatar_urls: {
          48: 'https://secure.gravatar.com/avatar/74fa74c02831d4a4f22a743441cf37bc?s=48&d=identicon&r=g',
        },
        mpp_avatar: {
          full: 'https://res.cloudinary.com/spiral/images/f_auto,q_auto/v1617812731/wordpress-uploads/pexels-photo-5340276/pexels-photo-5340276.jpeg',
        },
      },
    ];
  },

  get images() {
    return [
      {
        id: 51,
        slug: 'the_image_title',
        title: { rendered: 'The Picture Title' },
        source_url:
          'https://res.cloudinary.com/spiral/images/f_auto,q_auto/v1624059624/wordpress-uploads/Screen-Shot-2021-06-18-at-4.34.36-PM/Screen-Shot-2021-06-18-at-4.34.36-PM.png',
      },
      {
        id: 52,
        slug: 'another_image',
        title: { rendered: 'Another Picture' },
        source_url:
          'https://res.cloudinary.com/spiral/images/f_auto,q_auto/v1624303199/wordpress-uploads/Highlights_MeetStory_1/Highlights_MeetStory_1.jpeg',
      },
    ];
  },

  /*
   * ASSEMBLE and EXPORT
   * Shortcuts:
   *  `wpDummyData.categories_ids` instead of `wpDummyData.categories.map(cat=>cat.id)`
   *  `wpDummyData.category` instead of `wpDummyData.categories[0]`
   */
  get post() {
    return this.posts[0];
  },
  get posts_ids() {
    return this.posts.map((item) => item.id);
  },
  get category() {
    return this.categories[0];
  },
  get categories_ids() {
    return this.categories.map((item) => item.id);
  },
  get user() {
    return this.users[0];
  },
  get users_ids() {
    return this.users.map((item) => item.id);
  },
  get page() {
    return this.pages[0];
  },
  get pages_ids() {
    return this.pages.map((item) => item.id);
  },
  get image() {
    return this.images[0];
  },
  get images_ids() {
    return this.images.map((item) => item.id);
  },
};
export default data;
