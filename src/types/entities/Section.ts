export enum ids {
  'designSystems' = 'design-systems',
  'learningCourses' = 'learning-courses',
  'frontendNews' = 'frontend-news',
  'designFreebies' = 'design-freebies',
  'podcasts' = 'podcasts',
  'books' = 'books',
  'people' = 'people',
  'conferenceTalks' = 'conference-talks',
  'developmentTools' = 'development-tools',
}

export type Entity = {
  id: ids,
  text: string,
};
