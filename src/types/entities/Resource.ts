export type Entity = {
  id: string,
  title: string,
  text: string,
  href: string,
  src: string,
  tags?: Array<{ text: string }>,
};