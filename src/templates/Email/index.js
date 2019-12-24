import html from './template.html';
import { validateEmail } from '../../utils/validators';

const renderEmailsElements = (emails) => emails.map((email) => {
  const template = html.replace('#EMAIL#', email);
  const additionalClass = !validateEmail(email) ? 'emails-item--error' : '';

  const emailElement = document.createElement('div');
  emailElement.className = `emails-item ${additionalClass}`;
  emailElement.innerHTML = template;

  return emailElement;
});

export default renderEmailsElements;
