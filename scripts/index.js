'use strict';

const faqs = [
  {
    "question" : "What platforms will Galactic Sunrise be available on?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "How much will the game cost on release?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "Is there a demo I can play before buying the game?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "What genre is this game?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "Does this game have multiplayer?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "Where can I go to see updates about the game?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "Will there be any DLC after the game releases?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "Who's developing Galactic Sunrise?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "When will the game come out?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "Is this game even real?",
    "answer" : "PC (Steam), iOS, and Android"
  },
  {
    "question" : "Then what is this page for?",
    "answer" : "PC (Steam), iOS, and Android"
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
