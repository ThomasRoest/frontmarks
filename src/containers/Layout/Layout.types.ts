import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type Props = RouteComponentProps & {
  menu: React.ReactNode,
  content: React.ReactNode,
};

export type State = { menuActive: boolean };
export type StyledProps = { active: State['menuActive'] };
