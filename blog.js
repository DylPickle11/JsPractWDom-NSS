/* 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"*/

document.querySelector('.article__header').textContent = 'Welcome to the {insert your name here}blog';


/* 2. Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important. */

const articleHeader = document.querySelectorAll('.article__header');

let i = 0;

for (i = 0; i < articleHeader.length; i++) {
articleHeader[i].classList.add('article__headerimportant');
articleHeader[i].classList.remove('article__header');

}

console.log(articleHeader.length);
/* 3. Obtain a reference the element with a class of dashed and remove it. */

const dashed = document.querySelector('.dashed');
dashed.classList.remove('dashed');


/* 4. Obtain a reference the element with a class of article_footer and add the class of goldenrod it */

const articleFooter = document.querySelector('.article__footer');
articleFooter.classList.add('goldenrod');


