import html from './template.html';

const Main = ({ title, postfix }) => {
  const template = html.replace('#TITLE#', title).replace(/#POSTFIX#/g, postfix);
  const form = document.createElement('div');
  form.className = 'emails-container';
  form.innerHTML = template;

  return form;
};

export default Main;
