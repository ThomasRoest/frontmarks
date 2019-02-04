import { RouteComponentProps } from 'react-router-dom';

export type Item = {
  text: string,
  href: string,
};

export type Props = RouteComponentProps & {
  items: Array<Item>,
};

export type ItemStyledProps = { isActive?: boolean };
