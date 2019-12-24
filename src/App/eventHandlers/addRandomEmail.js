import { randEmail } from '../../utils/generateEmail';

const addRandomEmailHandler = (addEmails) => () => {
  addEmails([randEmail()]);
};

export default addRandomEmailHandler;
