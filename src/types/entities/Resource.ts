import * as TSection from 'types/entities/Section';

export type Entity = {
  id: string,
  sectionId: TSection.ids,
  title: string,
  text: string,
  href: string,
  src: string,
  tags?: Array<{ text: string }>,
};
