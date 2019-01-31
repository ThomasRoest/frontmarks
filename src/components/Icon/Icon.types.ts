export type Name = 'twitter' | 'heart' | 'heart-border';

export type Props = {
  name: Name,
  color?: 'red',
};

export type StyledProps = Pick<Props, 'color'>;