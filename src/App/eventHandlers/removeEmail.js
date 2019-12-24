const removeEmailHandler = ({ removeEmail, form }) => (event) => {
  const { target } = event;
  const currentCloseElement = target.closest('.emails-close');
  if (!currentCloseElement || !form.contains(currentCloseElement)) {
    return false;
  }
  let indexEmail = 0;
  form.querySelectorAll('.emails-close').forEach((closeElement, index) => {
    if (closeElement === currentCloseElement) {
      indexEmail = index;
    }
  });

  removeEmail(indexEmail);

  return true;
};

export default removeEmailHandler;
