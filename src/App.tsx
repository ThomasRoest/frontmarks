import React from 'react';
import Container from 'components/Container';
import Button from 'components/Button';

class App extends React.PureComponent {
  render() {
    return (
      <Container>
        Hello world!
        <Button wide text="Suggest more" />
        <Button wide variant="twitter" text="Suggest more" />
      </Container>
    );
  }
}

export default App;
