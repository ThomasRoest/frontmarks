export enum ids {
  'designSystems' = 'design-systems',
  'frontendNews' = 'frontend-news',
  'designFreebies' = 'design-freebies',
  'learningCourses' = 'learning-courses',
  'podcasts' = 'podcasts',
  'books' = 'books',
  'codeEditors' = 'code-editors',
  'workflowTools' = 'workflow-tools',
  'openSourcesPackages' = 'open-source-packages',
  'testingTools' = 'testing-tools',
}

export type Entity = {
  id: ids,
  text: string,
};
