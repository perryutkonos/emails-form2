import renderForm from '../templates/Main';
import renderEmailsElements from '../templates/Email';
import eventHandlers from './eventHandlers';
import { validateEmail } from '../utils/validators';

const App = ({ title, emails, postfix }) => {
  let currentEmails = emails;
  let callBack = () => {};
  let form = document.createElement('div');

  const renderEmails = (newEmails) => {
    const emailsListElement = form.querySelector(`#emails-list-${postfix}`);
    const inputElement = emailsListElement.querySelector(`#input-email-${postfix}`);
    while (inputElement.previousSibling) {
      inputElement.previousSibling.remove();
    }
    const emailsElements = renderEmailsElements(newEmails);
    emailsElements.forEach((emailsElement) => {
      inputElement.before(emailsElement);
    });
  };

  const updateAppEmails = (newEmails) => {
    currentEmails = [...newEmails];
    renderEmails(currentEmails);
    callBack(currentEmails);
  };

  const addEmails = (email) => {
    updateAppEmails([...currentEmails, ...email]);
  };

  const removeEmail = (index) => {
    const newList = [...currentEmails];
    newList.splice(index, 1);
    updateAppEmails([...newList]);
  };

  const countValidEmails = () => {
    const count = currentEmails.filter(validateEmail).length;
    window.alert(`Valid Emails Count: ${count}`);
  };

  form = renderForm({ title, postfix });
  renderEmails(currentEmails);

  eventHandlers({
    form, addEmails, removeEmail, countValidEmails, postfix,
  });

  return {
    form,
    getEmails: () => currentEmails,
    setCallBack: (newCallBack) => { callBack = newCallBack; },
    updateAppEmails,
  };
};

export default App;
