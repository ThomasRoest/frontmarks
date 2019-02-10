import React from 'react';
import ResourcesList from 'containers/ResourcesList';
import { response } from 'data/resources';
import { getValue } from 'utilities/storage';
import { FAVORITES } from 'constants/lsKeys';

export default () => {
  const favorites = getValue(FAVORITES);
  const items = favorites ? response.filter(item => favorites.includes(item.id)) : [];

  return <ResourcesList items={items} />;
};
