const ENTER_KEY_CODE = 'Enter';
const SPACE_KEY_CODE = ' ';
const COMMA_KEY_CODE = ',';

const inputEvents = ({ inputEmailElement, addEmails }) => {
  const saveEmail = () => {
    const email = inputEmailElement.value;
    if (!email) {
      return false;
    }

    addEmails([email]);
    // eslint-disable-next-line no-param-reassign
    inputEmailElement.value = '';
    return true;
  };

  inputEmailElement.addEventListener('blur', saveEmail);

  inputEmailElement.addEventListener('keydown', (event) => {
    if (![ENTER_KEY_CODE, COMMA_KEY_CODE, SPACE_KEY_CODE].includes(event.key)) {
      return false;
    }
    event.preventDefault();
    saveEmail();

    return true;
  });

  inputEmailElement.addEventListener('paste', (event) => {
    const text = event.clipboardData.getData('Text');
    if (!text) {
      return false;
    }

    event.preventDefault();
    const newEmails = text.replace(/\s/g, ',').split(',').filter((email) => email !== '');
    return addEmails(newEmails);
  });
};

export default inputEvents;
