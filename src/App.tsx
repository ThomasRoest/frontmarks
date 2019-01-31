import React from 'react';
import Layout from 'containers/Layout';
import Button from 'components/Button';
import Text from 'components/Text';
import Menu from 'components/Menu';
import GlobalStyles from 'styles/global';

class App extends React.PureComponent {
  renderMenu() {
    return (
      <React.Fragment>
        <Menu
          items={[{
            text: 'All resources'
          }, {
            text: 'Design systems'
          }, {
            text: 'Frontend news'
          }]}
        />
        <Button text="Suggest more" wide />
        <Text variant="caption" color="gray">
          Build by <a href="https://bananabobby.github.io" target="_blank">Dmitry Belyaev</a>
        </Text>
      </React.Fragment>
    );
  }

  renderContent() {
    return (
      222
    );
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Layout content={this.renderContent()} menu={this.renderMenu()} />
      </React.Fragment>
    );
  }
}

export default App;
