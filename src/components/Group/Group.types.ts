import React from 'react';

export type Props = {
  inline?: boolean,
  children: React.ReactNode,
};

export type StyledProps = Pick<Props, 'inline'>;
