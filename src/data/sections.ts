import * as TSection from 'types/entities/Section';

type Entities = { [key: string]: Pick<TSection.Entity, 'text'> };

export const ids = TSection.ids;

export const entities: Entities = {
  [ids.designSystems]: { text: 'Design systems' },
  [ids.frontendNews]: { text: 'Frontend news' },
  [ids.designFreebies]: { text: 'Design freebies' },
  [ids.learningCourses]: { text: 'Learning courses' },
  [ids.podcasts]: { text: 'Podcasts' },
  [ids.books]: { text: 'Books' },
  [ids.people]: { text: 'People' },
  [ids.conferenceTalks]: { text: 'Conference talks' },
  [ids.developmnetTools]: { text: 'Development tools' },
  [ids.libraries]: { text: 'Libraries' },
};

export const response = Object.keys(entities).map(id => ({ id, ...entities[id] }));
