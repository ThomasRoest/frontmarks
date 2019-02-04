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
  [ids.codeEditors]: { text: 'Code editors' },
  [ids.workflowTools]: { text: 'Workflow tools' },
  [ids.openSourcesPackages]: { text: 'Open source packages' },
  [ids.testingTools]: { text: 'Testing tools' },
};

export const response = Object.keys(entities).map(id => ({ id, ...entities[id] }));
