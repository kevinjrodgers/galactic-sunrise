let blogPost = document.getElementById('blog-post');

function swapBlogPost(date) {
  blogPost.textContent = '';
  // Set up the Next and Previous buttons at the top of the article
  //createNextPreviousBar();
  switch (date) {
    case 'july-2021':
      createJulyPost();
      break;
    case 'august-2021':
      createAugPost();
      break;
  }
}

function createJulyPost() {
  let blogHeader = document.createElement('h1');
  let blogHeaderText = document.createTextNode('Official Launch of Our Website!');

  let blogDateHeader = document.createElement('h4');
  let blogDateHeaderText = document.createTextNode('July 29th, 2021');

  let blogLiveAnnouncementImg = document.createElement('img');
  blogLiveAnnouncementImg.setAttribute('id', 'website-live-announcement-img');
  blogLiveAnnouncementImg.setAttribute('src', 'images/dev-blog/yay-hooray-website-is-live.png');

  let paragraphOne = document.createElement('p');
  let paragraphOneText = document.createTextNode(
    'We at Star Fiend Studios are very excited to announce the official launch of our website!'
  );

  let paragraphTwo = document.createElement('p');
  let paragraphTwoText =
    document.createTextNode(`Many of our users and patreons have been excitedly
      asking for updates about Galactic Sunrise. We thought it would be a great
      idea to create a website to help answer any of your questions and create 
      a way for people to stay up to date with news and updates for the game!`);

  let paragraphThree = document.createElement('p');
  let paragraphThreeText =
    document.createTextNode(`We hope you all are just as excited about the game
      as much as we are and please be sure to subscribe to our newsletter. We will be
      sending out monthly updates on the game through email and on our website
      so you can stay up to date with the latest news!`);

  blogHeader.appendChild(blogHeaderText);
  blogPost.appendChild(blogHeader);

  blogDateHeader.appendChild(blogDateHeaderText);
  blogPost.appendChild(blogDateHeader);

  blogPost.appendChild(blogLiveAnnouncementImg);

  paragraphOne.appendChild(paragraphOneText);
  blogPost.appendChild(paragraphOne);

  paragraphTwo.appendChild(paragraphTwoText);
  blogPost.appendChild(paragraphTwo);

  paragraphThree.appendChild(paragraphThreeText);
  blogPost.appendChild(paragraphThree);
}

function createAugPost() {
  let blogHeader = document.createElement('h1');
  let blogHeaderText = document.createTextNode('Introducing Our First Game: Galactic Sunrise!');

  let blogDateHeader = document.createElement('h4');
  let blogDateHeaderText = document.createTextNode('August 16th, 2021');

  let gameLogoImg = document.createElement('img');
  gameLogoImg.setAttribute('src', 'images/galactic-sunrise.png');
  gameLogoImg.classList.add('blog-img');

  let paragraphOne = document.createElement('p');
  let paragraphOneText =
    document.createTextNode(`As many of you know, we at Star Fiend Studios are working on a turn-based rpg called Galactic Sunrise.
                                                  We thought it would be best to formally introduce it!`);

  let paragraphTwo = document.createElement('p');
  let paragraphTwoText =
    document.createTextNode(`Although it is very early in the works, it will be
      a sci-fi rpg heavily inspired by a game called Golden Sun back on the Game Boy
      Advance. Golden Sun has a soft spot in our hearts. We hope to capture that
      same sense of wonder and excitment in Galactic Sunrise that we experienced when 
      playing Golden Sun. We truly hope that Galactic Sunrise will be an unforgettable
      experience for players that have never played Golden Sun and players that
      are die hard fans of the series!`);

  let paragraphThree = document.createElement('p');
  let paragraphThreeText = document.createTextNode(`We will be showcasing some
    of the concept art in the next update. We hope to see you then!`);

  blogHeader.appendChild(blogHeaderText);
  blogPost.appendChild(blogHeader);

  blogDateHeader.appendChild(blogDateHeaderText);
  blogPost.appendChild(blogDateHeader);

  blogPost.appendChild(gameLogoImg);

  paragraphOne.appendChild(paragraphOneText);
  blogPost.appendChild(paragraphOne);

  paragraphTwo.appendChild(paragraphTwoText);
  blogPost.appendChild(paragraphTwo);

  paragraphThree.appendChild(paragraphThreeText);
  blogPost.appendChild(paragraphThree);
}

function createNextPreviousBar() {
  let nextPreviousBar = document.createElement('section');
  nextPreviousBar.setAttribute('class', 'next-previous-bar');

  let nextLink = document.createElement('a');
  nextLink.setAttribute('id', 'next-previous-bar-left');
  nextLink.setAttribute('href', '#');
  let nextLinkParagraph = document.createElement('p');
  let nextLinkText = document.createTextNode('&#x3c;&#x3c; Next');
  nextLinkParagraph.appendChild(nextLinkText);
  nextLink.appendChild(nextLinkParagraph);

  let previousLink = document.createElement('a');
  previousLink.setAttribute('id', 'next-previous-bar-right');
  previousLink.setAttribute('href', '#');
  let previousLinkParagraph = document.createElement('p');
  let previousLinkText = document.createTextNode('Previous &#x3e;&#x3e;');
  previousLinkParagraph.appendChild(previousLinkText);
  previousLink.appendChild(previousLinkParagraph);

  nextPreviousBar.appendChild(nextLink);
  nextPreviousBar.appendChild(previousLink);
}

function setup() {
  // Add in EventListeners
  let julyPost = document.getElementById('july-post');
  julyPost.addEventListener('click', (e) => {
    e.preventDefault();
    swapBlogPost('july-2021');
  });
  let augustPost = document.getElementById('august-post');
  augustPost.addEventListener('click', (e) => {
    e.preventDefault();
    swapBlogPost('august-2021');
  });
}

window.onload = function () {
  swapBlogPost('august-2021');
  setup();
};
