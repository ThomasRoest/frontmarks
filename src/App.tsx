import React from 'react';
import Layout from 'containers/Layout';
import Button from 'components/Button';
import Text from 'components/Text';
import Menu from 'components/Menu';
import Group from 'components/Group';
import GlobalStyles from 'styles/global';

class App extends React.PureComponent {
  renderMenu() {
    return (
      <Group>
        <Menu
          items={[{
            text: 'All resources'
          }, {
            text: 'Design systems'
          }, {
            text: 'Frontend news'
          }]}
        />

        <Group>
          <Button text="Suggest more" wide />
          <Text variant="caption" color="gray">
            Built by <a href="https://bananabobby.github.io" target="_blank">Dmitry Belyaev</a>
          </Text>
        </Group>
      </Group>
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
