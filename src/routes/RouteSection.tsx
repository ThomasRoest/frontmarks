import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ResourcesList from 'containers/ResourcesList';
import { response } from 'data/resources';
import { entities } from 'data/sections';

type Props = RouteComponentProps<{ sectionId: string }>;

export default (props: Props) => {
  const sectionId = props.match.params.sectionId;
  const items = entities[sectionId] && response.filter(item => item.sectionId.toString() === sectionId);

  return <ResourcesList items={items} />;
};
