export type Tag = {
  text: string,
};

export type Props = {
  full?: boolean,
  src: string,
  title: string,
  text: string,
  tags?: Array<Tag>,
  href: string,
  liked?: boolean,
  onLike?: () => void,
  onDislike?: () => void,
};

export type StyledProps = { full: boolean };
