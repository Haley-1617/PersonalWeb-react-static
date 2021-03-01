import aboutbg from '../images/aboutBackground.png';
import portfoliobg from '../images/portfolioBackground.png';
import contactbg from '../images/contactBackground.png';

const Items = [
  {
    id: 1,
    name: 'About',
    background: aboutbg,
    content:
      'I am a senior at the <b>University of California San Diego</b>' +
      ' majoring in Mathematics and Computer Science. I have a great passion ' +
      'for exploring varied topics in Computer Science. Recently, I have ' +
      'reconstructed my personal website using React.js and Firebase. ' +
      'I am learning Golang, Advanced CSS and Sass, and App dev and wish to create more ' +
      'App/Web APIs in the future. Scrolling down to learn more about ' +
      'projects I have done in the past!<br /><br />' +
      'Here are some <b>technologies</b> I have recently learned:<br />' +
      'React.js, Material-UI, Firebase',
  },
  {
    id: 2,
    name: 'Portfolio',
    background: portfoliobg,
    content: '',
  },
  {
    id: 3,
    name: 'Contact',
    background: contactbg,
    content:
      'I will be graduating in June 2021 and currently looking for a Software ' +
      'Engineer position. I would like to learn more about any position with you.',
  },
];

export default Items;
