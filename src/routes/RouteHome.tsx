import React from 'react';
import ResourcesList from 'containers/ResourcesList';
import { response, dictionary } from 'data/resources';

export default () => {
  const favoritesParameter = new URL(window.location.href).searchParams.get('favorites');
  const favoriteIds = favoritesParameter && favoritesParameter.split(',');
  const items = favoriteIds ? favoriteIds.map(id => dictionary[+id]).filter(x => x) : response;

  return <ResourcesList items={items} />;
};
