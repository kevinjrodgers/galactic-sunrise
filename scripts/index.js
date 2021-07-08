'use strict';

const faqs = [
  {
    "question" : "What platforms will Galactic Sunrise be available on?",
    "answer" : "Galactic Sunrise will be available in Steam on PC, but will later be released on Android and Apple devices, as well as Linux."
  },
  {
    "question" : "How much will the game cost on release?",
    "answer" : "Once the game is in beta, it can be purchased for $15 USD. We plan to release the beta in Fall 2021. After the game is fully released, it can be purchased for $30 USD."
  },
  {
    "question" : "Is there a demo I can play before buying the game?",
    "answer" : "Currently, a demo is not available, but we hope to have release one for testing in the near future!"
  },
  {
    "question" : "What genre is this game?",
    "answer" : "Galactic Sunrise is a sci-fi turn-based roleplaying game."
  },
  {
    "question" : "Does this game have multiplayer?",
    "answer" : "No, Galactic Sunrise will only be a single player game."
  },
  {
    "question" : "Where can I go to see updates about the game?",
    "answer" : "You can see updates for our game in the Dev Blog link at the top of the page, as well as on Facebook, YouTube, Instagram, and Twitter."
  },
  {
    "question" : "Will there be any DLC after the game releases?",
    "answer" : "As of now there are no plans to release any DLC in the future."
  },
  {
    "question" : "Who's developing Galactic Sunrise?",
    "answer" : "Star Fiend Studios is a 2-person team who specialize in stuff."
  },
  {
    "question" : "When will the game come out?",
    "answer" : "Never!"
  },
  {
    "question" : "Is this game even real?",
    "answer" : "Nope!"
  },
  {
    "question" : "Then what is this page for?",
    "answer" : "This site was just a small, fun project to learn and practice web design, collaboration, and a bit of art!"
  }
];

const faqsList = document.createElement('ul');
faqsList.id = 'faqs-list';
faqs.forEach((faq) => {
  const faqsQuestion = document.createElement('p');
  faqsQuestion.classList.add('faqs-question');
  faqsQuestion.textContent = faq.question;

  const faqsAnswer = document.createElement('p');
  faqsAnswer.classList.add('faqs-answer');
  faqsAnswer.textContent = faq.answer;

  const faqsItem = document.createElement('li');
  faqsItem.classList.add('faqs-item');
  faqsItem.appendChild(faqsQuestion);
  faqsItem.appendChild(faqsAnswer);

  faqsList.appendChild(faqsItem);
});


const faqsSection = document.createElement('section');
faqsSection.id = 'faqs';

const h2 = document.createElement('h2');
h2.id = 'faqs-header';
h2.textContent = 'Frequently Asked Questions';

faqsSection.appendChild(h2);
faqsSection.appendChild(faqsList);

const mainContent = document.getElementById('content-wrapper');
mainContent.appendChild(faqsSection);
