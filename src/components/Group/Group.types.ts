import React from 'react';

export type Props = {
  inline?: boolean,
  size?: 'small',
  children: React.ReactNode,
};

export type StyledProps = Pick<Props, 'inline' | 'size'>;
