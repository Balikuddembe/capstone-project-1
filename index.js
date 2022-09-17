const menuBtn = document.querySelector('.menu-btn');
const navbarMenu = document.querySelector('.navbar-right');
const featureList = document.querySelector('.feature-list');
const showMore = document.querySelector('.more-btn');

// Feature data Object
const featureData = [
  {
    name: 'yohai benkler',
    role: 'Professor at Harvard Law School',
    description:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.',
    image: './Images/speaker1.png',
  },
  {
    name: 'Jeon Gil-nam',
    role: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    description:
      'By developing Asia first Internet protocol network SDN and leading Korea first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.',
    image: './Images/speaker2.png',
  },
  {
    name: 'Noh So-young',
    role: 'Art Center Nabi Director, CC Korea Director',
    description:
      'As the author of <Digital Art Art of Our Time>, he opened Art Center Nabi Korea first digital art institution in 2000 and is currently serving',
    image: './Images/speaker3.png',
  },
  {
    name: 'Julia Leda',
    role: 'Head of the Young Pirates of Europe',
    description:
      'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU',
    image: './Images/speaker4.png',
  },
  {
    name: 'Layla Trettikov',
    role: 'Secretary General of the Wikimedia Foundation',
    description:
      'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world population.',
    image: './Images/speaker5.png',
  },
  {
    name: 'Ryan Merkley',
    role: 'Creative Commons CEO, Former Mozilla Foundation COO',
    description:
      'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
    image: './Images/speaker6.png',
  },
];

// hamburger menu
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// open menu on click
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbarMenu.classList.toggle('show-menu');
});

// generate Dynamic feature list
for (let i = 0; i < featureData.length; i += 1) {
  const featureD = featureData[i];

  const feature = document.createElement('div');
  feature.classList.add('feature');
  feature.innerHTML = `
    <div class="feature-item">
        <div class="feature-item-img">
            <img src="${featureD.image}" alt="picture">
        </div>
        <div class="feature-item-text">
            <h3>${featureD.name}</h3>
            <span class="role">${featureD.role} </span>
            <p>
                ${featureD.description}
            </p>
        </div>
    </div>
  `;
  featureList.appendChild(feature);
}

// unhide feature List on click
showMore.addEventListener('click', (e) => {
  e.preventDefault();
  featureList.classList.toggle('hide');
  showMore.textContent = showMore.textContent.includes('See More')
    ? 'See Less'
    : 'See More';
});