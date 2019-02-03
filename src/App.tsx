import React from 'react';
import Layout from 'containers/Layout';
import Button from 'components/Button';
import Text from 'components/Text';
import Menu from 'components/Menu';
import Group from 'components/Group';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Resource from 'containers/Resource';
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
      <Grid>
        {
          [1,2,3,4,5,6,7,8].map(_ => (
            <GridItem key={_}>
              <Resource
                data={{
                  id: _.toString(),
                  src: '',
                  title: 'Booking Design system',
                  text: 'Our design system helps us work together to build a great experience for all of Shopify’s merchants.',
                  href: '#',
                  tags: [{ text: 'React' }],
                }}
              />
            </GridItem>
          ))
        }
      </Grid>
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
