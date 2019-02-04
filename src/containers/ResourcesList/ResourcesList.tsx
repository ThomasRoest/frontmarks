import React from 'react';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import Resource from 'containers/Resource';
import * as T from './ResourcesList.types';
import * as S from './ResourcesList.styles';

class ResourcesList extends React.PureComponent<T.Props> {
  render() {
    const { items } = this.props;

    if (!items) {
      return <S.Empty>Nothing here. Yet.</S.Empty>;
    }

    return (
      <Grid>
        {
          !!items.length && items.map(item => (
            <GridItem key={item.id}>
              <Resource data={item} />
            </GridItem>
          ))
        }

        {
          !items.length && <S.Empty>Add favorites and share your collection with others!</S.Empty>
        }
      </Grid>
    );
  }
}

export default ResourcesList;
