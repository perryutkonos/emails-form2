// @flow
import React from 'react';
import Button from '../../ui-components/Button';
import ButtonList from '../../ui-components/ButtonList';

import './styles.pcss';

type Props = {

};

const Controls = (props: Props) => (
  <div className="emails-controls">
    <ButtonList>
      <Button>Add email</Button>
      <Button>Get emails count</Button>
    </ButtonList>
  </div>
);

export default Controls;
