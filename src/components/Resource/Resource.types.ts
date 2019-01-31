export type Tag = {
  text: string,
};

export type Props = {
  src: string,
  title: string,
  text: string,
  tags?: Array<Tag>,
  href: string,
  liked?: boolean,
  onLike?: () => void,
  onDislike?: () => void,
};

export type StyledImageProps = Pick<Props, 'src'>;
