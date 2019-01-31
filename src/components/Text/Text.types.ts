import React from 'react';

export type Props = {
  variant?: 'caption' | 'body' | 'heading',
  color?: 'gray',
  weight?: 'bold',
  children: React.ReactNode,
};

export type StyledProps = Pick<Props, 'variant' | 'weight' | 'color'>;