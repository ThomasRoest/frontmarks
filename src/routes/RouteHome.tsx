import React from 'react';
import ResourcesList from 'containers/ResourcesList';
import { response } from 'data/resources';

export default () => {
  return <ResourcesList items={response} />;
};
