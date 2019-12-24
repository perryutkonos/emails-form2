import addRandomEmailHandler from './addRandomEmail';
import removeEmailHandler from './removeEmail';
import inputEvents from './inputEvents';

const eventHandlers = ({
  form, addEmails, removeEmail, countValidEmails, postfix,
}) => {
  const addEmailElement = form.querySelector(`#add-email-${postfix}`);
  const countEmailsElement = form.querySelector(`#count-email-${postfix}`);
  const inputEmailElement = form.querySelector(`#input-email-${postfix}`);

  addEmailElement.addEventListener('click', addRandomEmailHandler(addEmails));
  countEmailsElement.addEventListener('click', countValidEmails);

  form.addEventListener('click', removeEmailHandler({ removeEmail, form }));
  inputEvents({ inputEmailElement, addEmails });
};

export default eventHandlers;
