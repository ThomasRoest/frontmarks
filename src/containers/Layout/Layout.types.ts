import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type Props = RouteComponentProps & {
  menu: React.ReactNode,
  content: React.ReactNode,
};
