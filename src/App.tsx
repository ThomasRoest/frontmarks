import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'containers/Layout';
import Text from 'components/Text';
import Menu from 'components/Menu';
import Group from 'components/Group';
import GlobalStyles from 'styles/global';
import { response as sectionsResponse } from 'data/sections';
import RouteFavorites from 'routes/RouteFavorites';
import RouteSection from 'routes/RouteSection';
import RouteHome from 'routes/RouteHome';
import Route404 from 'routes/Route404';

class App extends React.Component {
  renderMenu = () => {
    const items = sectionsResponse.map(item => ({
      text: item.text,
      href: `/section/${item.id}/`,
    }));

    items.unshift({ text: 'All resources', href: '/' });

    return (
      <Group>
        <Menu items={items} />

        <Text variant="caption" color="gray">
          <Group size="small">
            <div>
              <a href="https://github.com/BananaBobby/frontmarks/blob/master/README.md#contribution" target="_blank">
                Contribute
              </a>
              &nbsp;🎉
            </div>
            <div>
              Built by <a href="https://twitter.com/blv_dmitry" target="_blank">Dmitry Belyaev</a>
            </div>
          </Group>
        </Text>
      </Group>
    );
  }

  renderContent = () => {
    return (
      <Switch>
        <Route exact component={RouteFavorites} path="/favorites/" />
        <Route exact component={RouteSection} path="/section/:sectionId/" />
        <Route exact component={RouteHome} path="/" />
        <Route component={Route404} path="/" />
      </Switch>
    );
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />

        <Router>
          <Layout
            content={this.renderContent()}
            menu={this.renderMenu()}
          />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
