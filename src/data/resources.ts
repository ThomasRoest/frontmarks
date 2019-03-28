import * as TResource from 'types/entities/Resource';
import { ids } from 'types/entities/Section';

type ResourceDict = { [id: number]: TResource.Entity };

const getDict = (items: TResource.Entity[]): ResourceDict => {
  return items.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});
};

/**
 * - Add new resources on top of the current list
 * - Never change existing ids, they might be shared
 */

/* tslint:disable */
export const order = [
  "92","4","50","26",
  "77","33","48","65",
  "74","84", "25","63",
  "43","93","22","88",
  "52","68","13","97",
  "28","11","10","99",
  "46","39","7","55",
  "45","76", "27","82",
  "95","8","38","51",
  "49","91","73","105",
  "79","69","35","64",
  "60","62","36","81",
  "66","102", "44","17",
  "24","72","75","6",
  "37","16","101","32",
  "3","23","61","12",
  "31","70","5","71",
  "100","42", "57","9",
  "80","98","103","19",
  "29","40","53","47",
  "56","96","104","1",
  "15","34","14","20",
  "30","67", "54","58",
  "83","78","89","2",
  "0","90","87","21",
  "18","59","86","94",
  "41"
];

const developmentTools: ResourceDict = getDict([{
  id: '105',
  title: 'Carbon',
  text: 'Create and share beautiful images of your source code. Start typing or drop a file into the text area to get started.',
  href: 'https://carbon.now.sh',
  src: '/img/logos/development-tools/carbon.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Utility' }],
}, {
  id: '104',
  title: 'Grabient',
  text: 'Customisable gradient presets collection for your project',
  href: 'https://www.grabient.com/',
  src: '/img/logos/development-tools/grabient.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Utility' }],
}, {
  id: '103',
  title: 'iTerm 2',
  text: 'A terminal emulator for MacOS that does amazing things.',
  href: 'https://www.iterm2.com/',
  src: '/img/logos/development-tools/iterm.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Terminal' }],
}, {
  id: '102',
  title: 'Zeplin',
  text: 'Connected space for product teams. It’s all about the details. Handoff designs and styleguides with accurate specs, assets, code snippets—automatically.',
  href: 'https://zeplin.io/',
  src: '/img/logos/development-tools/zeplin.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Design' }],
}, {
  id: '101',
  title: 'Fork',
  text: 'A fast and friendly git client for Mac and Windows.',
  href: 'https://git-fork.com/',
  src: '/img/logos/development-tools/fork.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Git' }],
}, {
  id: '100',
  title: 'Tower',
  text: 'Visual git client for Mac and Windows.',
  href: 'https://www.git-tower.com',
  src: '/img/logos/development-tools/tower.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Git' }],
}, {
  id: '99',
  title: 'JSFiddle',
  text: 'Live code editor for frontend technologies.',
  href: 'https://jsfiddle.net/',
  src: '/img/logos/development-tools/jsfiddle.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Code editor' }],
}, {
  id: '98',
  title: 'CodeSandbox',
  text: 'An online editor that helps you create web applications, from prototype to deployment.',
  href: 'https://codesandbox.io/',
  src: '/img/logos/development-tools/codesandbox.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Code editor' }],
}, {
  id: '97',
  title: 'Litmus Putsmail',
  text: 'Test your HTML emails before sending them!',
  href: 'https://putsmail.com/',
  src: '/img/logos/development-tools/putsmail.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Testing' }],
}, {
  id: '96',
  title: 'Browserstack',
  text: 'The only testing infrastructure you need. Instant access to 2000+ real mobile devices and browsers. Ship mobile apps and websites that work for everyone, every time.',
  href: 'https://www.browserstack.com/',
  src: '/img/logos/development-tools/browserstack.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Testing' }],
}, {
  id: '95',
  title: 'Avocode',
  text: 'Automate your design hand-off workflow. Open designs without design tools. Export images without preparing layers. Click on layers to get code.',
  href: 'https://avocode.com/',
  src: '/img/logos/development-tools/avocode.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Design' }],
}, {
  id: '94',
  title: 'Can I Use',
  text: '"Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.',
  href: 'https://caniuse.com',
  src: '/img/logos/development-tools/can-i-use.svg',
  sectionId: ids.developmentTools,
  tags: [{ text: 'Testing' }],
}]);

const conferenceTalks: ResourceDict = getDict([{
  id: '93',
  title: 'In the loop',
  text: 'Jake Archibald - JSConf.Asia',
  href: 'https://www.youtube.com/watch?v=cCOL7MC4Pl0',
  src: '/img/logos/conference-talks/js-conf-asia.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '92',
  title: '10 Things I Regret About Node.js',
  text: 'Ryan Dahl - JSConf EU',
  href: 'https://www.youtube.com/watch?v=M3BM9TB-8yA',
  src: '/img/logos/conference-talks/js-conf-eu.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '91',
  title: 'React.js for TV UIs',
  text: 'Steve McGuire - Netflix JavaScript Talks',
  href: 'https://www.youtube.com/watch?v=5sETJs2_jwo',
  src: '/img/logos/conference-talks/netflix-talks.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '90',
  title: 'Secrets to a Successful Design System',
  text: 'Monica Lent - React Day Berlin',
  href: 'https://www.youtube.com/watch?v=88TOxfKzkHw',
  src: '/img/logos/conference-talks/react-day-berlin.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '89',
  title: 'Navigating the Hype-Driven Frontend Development World Without Going Insane',
  text: 'Kitze - React Day Berlin',
  href: 'https://www.youtube.com/watch?v=QZ6aC6G0ufg',
  src: '/img/logos/conference-talks/react-day-berlin.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '88',
  title: 'JavaScript Engines - How Do They Even?',
  text: 'Franziska Hinkelmann - JSConf EU',
  href: 'https://www.youtube.com/watch?v=p-iiEDtpy6I',
  src: '/img/logos/conference-talks/js-conf-eu.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '87',
  title: 'Deep Learning in JS',
  text: 'Ashi Krishnan - JSConf EU',
  href: 'https://www.youtube.com/watch?v=SV-cgdobtTA',
  src: '/img/logos/conference-talks/js-conf-eu.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '86',
  title: 'Creating And Evolving A Cross-Platform System At Scale',
  text: 'Karri Saarinen - Rethink',
  href: 'https://www.rethinkhq.com/videos/systematic-cross-platform-design/karri-saarinen-airbnb',
  src: '/img/logos/conference-talks/rethink.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '84',
  title: 'Immutable data structures for functional JS',
  text: 'Anjana Vakil - JSConf EU',
  href: 'https://www.youtube.com/watch?v=Wo0qiGPSV-s',
  src: '/img/logos/conference-talks/js-conf-eu.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '83',
  title: 'Node.js at Netflix',
  text: 'Kim Trott - Node.js Interactive',
  href: 'https://www.youtube.com/watch?v=p74282nDMX8',
  src: '/img/logos/youtube.svg',
  sectionId: ids.conferenceTalks,
}, {
  id: '82',
  title: 'The myth of the "Real Javascript Developer"',
  text: 'Brenna O\'Brien - Front-Trends',
  href: 'https://www.youtube.com/watch?v=Xt5qpbiqw2g',
  src: '/img/logos/conference-talks/front-trends.svg',
  sectionId: ids.conferenceTalks,
}]);

const people: ResourceDict = getDict([{
  id: '81',
  title: 'Jason Miller',
  text: 'Creator of Preact',
  href: 'https://twitter.com/_developit',
  src: '/img/logos/people/jason-miller.png',
  sectionId: ids.people,
}, {
  id: '80',
  title: 'Evan You',
  text: 'Creator of Vue.js',
  href: 'https://twitter.com/youyuxi',
  src: '/img/logos/people/evan-you.png',
  sectionId: ids.people,
}, {
  id: '79',
  title: 'Addy Osmani',
  text: 'Engineering Manager working on Google Chrome.',
  href: 'https://twitter.com/addyosmani',
  src: '/img/logos/people/addy-osmani.png',
  sectionId: ids.people,
}, {
  id: '78',
  title: 'Kent C. Dodds',
  text: 'Creator of testingjavascript.com,\nEgghead.io instructor',
  href: 'https://twitter.com/kentcdodds',
  src: '/img/logos/people/kent-c-dodds.png',
  sectionId: ids.people,
}, {
  id: '77',
  title: 'Lea Verou',
  text: 'W3C CSS Working Group Invited Expert.',
  href: 'https://twitter.com/LeaVerou',
  src: '/img/logos/people/lea-verou.png',
  sectionId: ids.people,
}, {
  id: '76',
  title: 'Dan Abramov',
  text: 'React.js core team.',
  href: 'https://twitter.com/dan_abramov',
  src: '/img/logos/people/dan-abramov.png',
  sectionId: ids.people,
}, {
  id: '75',
  title: 'John Resig',
  text: 'Creator of JQuery.',
  href: 'https://twitter.com/jeresig',
  src: '/img/logos/people/john-resig.png',
  sectionId: ids.people,
}, {
  id: '74',
  title: 'Sindre Sorhus',
  text: 'Creator of Ava.js and literally hundreds of other packages.',
  href: 'https://twitter.com/sindresorhus',
  src: '/img/logos/people/sindre-sorhus.png',
  sectionId: ids.people,
}, {
  id: '73',
  title: 'Max Stoiber',
  text: 'Creator of Styled-Components.',
  href: 'https://twitter.com/mxstbr',
  src: '/img/logos/people/max-stoiber.png',
  sectionId: ids.people,
}, {
  id: '72',
  title: 'Oleg Slobodskoi',
  text: 'Creator of JSS.',
  href: 'https://twitter.com/oleg008',
  src: '/img/logos/people/oleg-slobodskoi.png',
  sectionId: ids.people,
}, {
  id: '71',
  title: 'Sean Thomas Larking',
  text: 'Webpack core team.',
  href: 'https://twitter.com/TheLarkInn',
  src: '/img/logos/people/sean-t-larking.png',
  sectionId: ids.people,
}, {
  id: '70',
  title: 'Mark Dalgleish',
  text: 'CSS Modules co-creator,\nMelbJS organiser',
  href: 'https://twitter.com/markdalgleish',
  src: '/img/logos/people/mark-dalgleish.png',
  sectionId: ids.people,
}]);

const books: ResourceDict = getDict([{
  id: '69',
  title: 'Front-End Developer Handbook',
  text: 'A guide that anyone could use to learn about the practice of front-end development. It broadly outlines and discusses the practice of front-end engineering: how to learn it and what tools are used when practicing it.',
  href: 'https://frontendmasters.com/books/front-end-handbook/',
  src: '/img/logos/learning-courses/frontend-masters.svg',
  sectionId: ids.books,
}, {
  id: '68',
  title: 'Eloquent Javascript',
  text: 'A book about JavaScript, programming, and the wonders of the digital.',
  href: 'https://eloquentjavascript.net/',
  src: '/img/logos/books/eloquent-javascript.svg',
  sectionId: ids.books,
  tags: [{ text: 'Javascript' }],
}, {
  id: '67',
  title: 'You Don\'t Know JS',
  text: 'A series of books diving deep into the core mechanisms of the JavaScript language.',
  href: 'https://github.com/getify/You-Dont-Know-JS',
  src: '/img/logos/books/you-dont-know-js.svg',
  sectionId: ids.books,
  tags: [{ text: 'Javascript' }],
}, {
  id: '66',
  title: 'Javascript Design Patterns',
  text: 'A book about the reusable solutions to commonly occurring problems in software design',
  href: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/',
  src: '/img/logos/books/javascript-design-patterns.svg',
  sectionId: ids.books,
  tags: [{ text: 'Javascript' }],
}, {
  id: '65',
  title: 'Typescript Deep Dive',
  text: 'A book based on the lessons from Stack Overflow / DefinitelyTyped and general engagement with the TypeScript community.',
  href: 'https://basarat.gitbooks.io/typescript/content/',
  src: '/img/logos/books/typescript-deep-dive.svg',
  sectionId: ids.books,
  tags: [{ text: 'Typescript' }],
}, {
  id: '64',
  title: 'Vue Handbook',
  text: 'An e-book about frontend development with Vue.js',
  href: 'https://vuehandbook.com',
  src: '/img/logos/books/vue-handbook.svg',
  sectionId: ids.books,
  tags: [{ text: 'Vue' }],
}]);

const podcasts: ResourceDict = getDict([{
  id: '63',
  title: 'Frontside',
  text: 'Dedicated to the art and science of thoughtfully executed software development.',
  href: 'https://frontside.io/podcast/',
  src: '/img/logos/podcasts/frontside.svg',
  sectionId: ids.podcasts,
}, {
  id: '62',
  title: 'Egghead Podcasts',
  text: 'Humans talking about the business of building software, constant learning, and balancing it with everyday life.',
  href: 'https://egghead.io/podcasts',
  src: '/img/logos/learning-courses/egghead.svg',
  sectionId: ids.podcasts,
}, {
  id: '61',
  title: 'FreeCodeCamp',
  text: 'The official podcast of the freeCodeCamp open source community. Learn to code with free online courses, programming projects, and interview preparation for developer jobs.',
  href: 'https://freecodecamp.libsyn.com/',
  src: '/img/logos/podcasts/free-code-camp.svg',
  sectionId: ids.podcasts,
}, {
  id: '60',
  title: 'Syntax',
  text: 'A tasty treats podcast for web developers',
  href: 'https://syntax.fm/',
  src: '/img/logos/podcasts/syntax.svg',
  sectionId: ids.podcasts,
}, {
  id: '59',
  title: 'Developer tea',
  text: 'A podcast for developers designed to fit inside your tea break',
  href: 'https://developertea.com/',
  src: '/img/logos/podcasts/developer-tea.svg',
  sectionId: ids.podcasts,
}, {
  id: '58',
  title: 'Fun Fun Function',
  text: 'A fun and friendly monday morning YouTube show about programming.',
  href: 'https://youtube.com/funfunfunction',
  src: '/img/logos/youtube.svg',
  sectionId: ids.podcasts,
}, {
  id: '57',
  title: 'This dot',
  text: 'Podcasts and events in Raleigh and the Bay Area on various topics across the web platform.',
  href: 'https://www.thisdot.co/modern-web',
  src: '/img/logos/podcasts/this-dot.svg',
  sectionId: ids.podcasts,
}, {
  id: '56',
  title: 'Frontend happy hour',
  text: 'A podcast featuring panelists of engineers from tech companies talking over drinks about all things Front End development.',
  href: 'https://frontendhappyhour.com/',
  src: '/img/logos/podcasts/frontend-happy-hour.svg',
  sectionId: ids.podcasts,
}, {
  id: '55',
  title: 'JS Party',
  text: 'A community celebration of JavaScript and the web.',
  href: 'https://changelog.com/jsparty',
  src: '/img/logos/podcasts/js-party.svg',
  sectionId: ids.podcasts,
}, {
  id: '54',
  title: 'ToolsDay',
  text: 'A show about the latest in tech tools, tips, and tricks.',
  href: 'http://toolsday.io',
  src: '/img/logos/podcasts/toolsday.svg',
  sectionId: ids.podcasts,
}, {
  id: '53',
  title: 'CodeNewbie',
  text: 'Stories from people on their coding journey.',
  href: 'https://www.codenewbie.org/podcast',
  src: '/img/logos/podcasts/codenewbie.svg',
  sectionId: ids.podcasts,
}, {
  id: '52',
  title: 'Software Defined Survival',
  text: 'A podcast that interviews the people and companies in AV/IT that use software to reinvent themselves and the way they do business.',
  href: 'https://softwaredefinedsurvival.com/',
  src: '/img/logos/podcasts/software-defined-survival.svg',
  sectionId: ids.podcasts,
}, {
  id: '51',
  title: 'Developer on Fire',
  text: 'Inspiring software developers tell their stories.',
  href: 'https://developeronfire.com/',
  src: '/img/logos/placeholder.svg',
  sectionId: ids.podcasts,
}]);

const learningCourses = getDict([{
  id: '50',
  title: 'Frontloops',
  text: 'Learn frontend development by solving real-world tasks. You receive handcrafted challenges directly to your email.',
  href: 'https://frontloops.io/',
  src: '/img/logos/learning-courses/frontloops.svg',
  sectionId: ids.learningCourses,
  tags: [{ text: 'CSS' }, { text: 'Javascript' }],
}, {
  id: '49',
  title: 'Learn Javascript',
  text: 'The easiest way to learn & practice modern JavaScript fundamentals.',
  href: 'https://learnjavascript.online/',
  src: '/img/logos/learning-courses/learn-javascript-online.svg',
  sectionId: ids.learningCourses,
  tags: [{ text: 'Javascript' }],
}, {
  id: '48',
  title: 'Egghead',
  text: 'Learn the best JavaScript tools and frameworks from industry pros.',
  href: 'https://egghead.io/',
  src: '/img/logos/learning-courses/egghead.svg',
  sectionId: ids.learningCourses,
}, {
  id: '47',
  title: 'Javascript.info',
  text: 'How it\'s done now. From the basics to advanced topics with simple, but detailed explanations.',
  href: 'http://javascript.info/',
  src: '/img/logos/learning-courses/javascript-info.svg',
  sectionId: ids.learningCourses,
  tags: [{ text: 'Javascript' }],
}, {
  id: '46',
  title: 'Codecademy',
  text: 'An online interactive platform that offers free coding classes in 12 different programming languages.',
  href: 'https://www.codecademy.com/',
  src: '/img/logos/learning-courses/code-academy.svg',
  sectionId: ids.learningCourses,
}, {
  id: '45',
  title: 'Scrimba',
  text: 'Scrimba is a powerful new way of learning code. Play around with the instructors code any time, right in the player.',
  href: 'https://scrimba.com/',
  src: '/img/logos/learning-courses/scrimba.svg',
  sectionId: ids.learningCourses,
}, {
  id: '44',
  title: 'FreeCodeCamp',
  text: 'FreeCodeCamp.org is a tiny non-profit that\'s helping millions of people learn to code for free.',
  href: 'https://www.freecodecamp.org/',
  src: '/img/logos/learning-courses/free-code-camp.svg',
  sectionId: ids.learningCourses,
}, {
  id: '43',
  title: 'Testing Javascript',
  text: 'Learn the smart, efficient way to test any JavaScript application.',
  href: 'https://testingjavascript.com/',
  src: '/img/logos/learning-courses/testing-javascript.svg',
  tags: [{ text: 'Testing' }],
  sectionId: ids.learningCourses,
}, {
  id: '42',
  title: '#Javascript30',
  text: '30 day vanilla JS coding challenge',
  href: 'https://javascript30.com/',
  src: '/img/logos/learning-courses/javascript-30.svg',
  tags: [{ text: 'Javascript' }],
  sectionId: ids.learningCourses,
}, {
  id: '41',
  title: 'Frontend Masters',
  text: 'Advance your skills with in-depth, modern front-end engineering courses.',
  href: 'https://frontendmasters.com/',
  src: '/img/logos/learning-courses/frontend-masters.svg',
  sectionId: ids.learningCourses,
}, {
  id: '40',
  title: 'Vue School',
  text: 'Learn Vue.js and modern, cutting-edge front-end technologies from core-team members and industry experts with our premium tutorials and video courses.',
  href: 'https://vueschool.io/',
  src: '/img/logos/learning-courses/vue-school.svg',
  tags: [{ text: 'Vue' }],
  sectionId: ids.learningCourses,
}, {
  id: '39',
  title: 'Level Up Tutorials',
  text: '800+ free video tutorials created, recorded, edited, published and maintained by Scott Tolinski.',
  href: 'https://www.leveluptutorials.com/',
  src: '/img/logos/learning-courses/level-up.svg',
  sectionId: ids.learningCourses,
}]);

const designFreebies: ResourceDict = getDict([{
  id: '38',
  title: 'Unsplash',
  text: 'Beautiful, free photos. Gifted by the world’s most generous community of photographers.',
  href: 'https://unsplash.com/',
  src: '/img/logos/design-freebies/unsplash.svg',
  tags: [{ text: 'Photos' }],
  sectionId: ids.designFreebies,
}, {
  id: '37',
  title: 'Burst',
  text: 'Burst is a free stock photo platform that is powered by Shopify. Its library includes thousands of high-resolution, royalty-free images that were shot by our global community of photographers.',
  href: 'https://burst.shopify.com/',
  src: '/img/logos/design-freebies/burst.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Photos' }],
}, {
  id: '36',
  title: 'unDraw',
  text: 'Open-source illustrations for every project you can imagine and create',
  href: 'https://undraw.co/',
  src: '/img/logos/design-freebies/undraw.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Illustrations' }],
}, {
  id: '35',
  title: 'Humaaans',
  text: 'Mix-&-match illustrations of people with a design library.',
  href: 'https://www.humaaans.com/',
  src: '/img/logos/design-freebies/humaaans.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Illustrations' }],
}, {
  id: '34',
  title: 'Ouch!',
  text: 'Ouch is another side project of Icons8 dedicated to interface illustrations. They would give a clean, trendy look to your designs.',
  href: 'https://icons8.com/ouch',
  src: '/img/logos/design-freebies/ouch.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Illustrations' }],
}, {
  id: '33',
  title: 'Material Icons',
  text: 'Material icons are delightful, beautifully crafted symbols for common actions and items. Download on desktop to use them in your digital products.',
  href: 'https://material.io/tools/icons',
  src: '/img/logos/design-freebies/material-icons.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Icons' }],
}, {
  id: '32',
  title: 'Font Awesome',
  text: 'Get vector icons and social logos on your website with Font Awesome, the web\'s most popular icon set and toolkit.',
  href: 'https://fontawesome.com/icons',
  src: '/img/logos/design-freebies/font-awesome.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Icons' }],
}, {
  id: '31',
  title: 'Unicons',
  text: '1000+ Pixel-perfect vector icons and Iconfont for your next project.',
  href: 'https://iconscout.com/unicons',
  src: '/img/logos/design-freebies/unicons.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Icons' }],
}, {
  id: '30',
  title: 'Google Fonts',
  text: 'An extensive fonts catalog, you can share and integrate typography into any design project seamlessly.',
  href: 'https://fonts.google.com/',
  src: '/img/logos/design-freebies/google-fonts.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Fonts' }],
}, {
  id: '29',
  title: 'UI Faces',
  text: 'An aggregator to speed up the process while designing UI and in need to populate user avatars with real looking photos.',
  href: 'https://uifaces.co/',
  src: '/img/logos/design-freebies/ui-faces.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Avatars' }],
}, {
  id: '28',
  title: 'Mazwai',
  text: 'Great collection of high definition videos for your product.',
  href: 'http://mazwai.com',
  src: '/img/logos/design-freebies/mazwai.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Videos' }],
}, {
  id: '27',
  title: 'Coverr',
  text: 'Beautiful, free videos for your homepage. 7 new videos every Monday.',
  href: 'http://www.coverr.co/',
  src: '/img/logos/design-freebies/coverr.svg',
  sectionId: ids.designFreebies,
  tags: [{ text: 'Videos' }],
}]);

const frontendNews: ResourceDict = getDict([{
    id: '27',
    title: 'Frontend Focus',
    text: 'A once–weekly roundup of the best front-end news, articles and tutorials. HTML, CSS, WebGL, Canvas, browser tech, and more.',
    href: 'https://frontendfoc.us/',
    src: '/img/logos/frontend-news/frontend-focus.svg',
    sectionId: ids.frontendNews,
  }, {
  id: '26',
  title: 'Frontend Weekly',
  text: 'The best articles, links and news related to Frontend Development delivered once a week to your inbox.',
  href: 'https://frontendweekly.co/',
  src: '/img/logos/frontend-news/frontend-weekly.svg',
  sectionId: ids.frontendNews,
}, {
  id: '25',
  title: 'Front-end Front',
  text: 'A crowd curated feed of front-end related articles.',
  href: 'https://frontendfront.com/',
  src: '/img/logos/frontend-news/frontend-front.svg',
  sectionId: ids.frontendNews,
}, {
  id: '24',
  title: 'Codrops',
  text: 'Codrops is a web design and development blog that publishes articles and tutorials about the latest web trends, techniques and new possibilities.',
  href: 'https://tympanus.net/codrops/',
  src: '/img/logos/frontend-news/codrops.svg',
  sectionId: ids.frontendNews,
}, {
  id: '23',
  title: 'CSS Weekly',
  text: 'Weekly e-mail roundup of css articles, tutorials, experiments and tools.',
  href: 'https://css-weekly.com/',
  src: '/img/logos/frontend-news/css-weekly.svg',
  sectionId: ids.frontendNews,
}, {
  id: '22',
  title: 'Echo JS',
  text: 'Echo JS is a community-driven news site entirely focused on JavaScript development, HTML5, and front-end news.',
  href: 'http://www.echojs.com/',
  src: '/img/logos/placeholder.svg',
  sectionId: ids.frontendNews,
}, {
  id: '21',
  title: 'CSS-Tricks',
  text: 'CSS-Tricks is about building websites and all that entails, mostly from a front-end perspective.',
  href: 'https://css-tricks.com/',
  src: '/img/logos/frontend-news/css-tricks.svg',
  sectionId: ids.frontendNews,
}, {
  id: '20',
  title: 'Smashing Magazine',
  text: 'Smashing Magazine delivers reliable, useful, but most importantly practical articles to web designers and developers.',
  href: 'https://www.smashingmagazine.com/',
  src: '/img/logos/frontend-news/smashing-magazine.svg',
  sectionId: ids.frontendNews,
}, {
  id: '19',
  title: 'Friday Front-end',
  text: 'Front-end development links tweeted daily, emailed weekly.',
  href: 'https://fridayfrontend.com/',
  src: '/img/logos/frontend-news/friday-frontend.svg',
  sectionId: ids.frontendNews,
}, {
  id: '18',
  title: 'Node Weekly',
  text: 'A free, once–weekly e-mail round-up of Node.js news and articles.',
  href: 'https://nodeweekly.com/',
  src: '/img/logos/placeholder.svg',
  sectionId: ids.frontendNews,
}, {
  id: '17',
  title: '/r/Frontend',
  text: 'Subreddit for front end web developers who want to move the web forward or want to learn how.',
  href: 'https://www.reddit.com/r/Frontend/',
  src: '/img/logos/frontend-news/r-frontend.svg',
  sectionId: ids.frontendNews,
}, {
  id: '16',
  title: '/r/Javascript',
  text: 'Subreddit with everything about the JavaScript programming language!',
  href: 'https://www.reddit.com/r/javascript/',
  src: '/img/logos/frontend-news/r-javascript.svg',
  sectionId: ids.frontendNews,
}]);

const designSystems: ResourceDict = getDict([{
  id: '15',
  title: 'Ant Design',
  text: 'A design system with values of Nature and Determinacy for better user experience of enterprise applications.',
  href: 'https://ant.design/',
  src: '/img/logos/design-systems/ant.svg',
  tags: [{ text: 'React' }],
  sectionId: ids.designSystems,
}, {
  id: '14',
  title: 'Atlaskit',
  text: 'Atlassian\'s official UI library, built according to the Atlassian Design Guidelines.',
  href: 'https://atlaskit.atlassian.com/',
  src: '/img/logos/design-systems/atlaskit.svg',
  tags: [{ text: 'React' }],
  sectionId: ids.designSystems,
}, {
  id: '13',
  title: 'Material Design',
  text: 'Make beautiful products, faster. Material is a design system – backed by open-source code – that helps teams build digital experiences',
  href: 'https://material.io/',
  src: '/img/logos/design-systems/material.svg',
  tags: [{ text: 'Vanilla' }, { text: 'Flutter' }],
  sectionId: ids.designSystems,
}, {
  id: '12',
  title: 'Polaris',
  text: 'A design system that helps teams work together to build a great experience for all of Shopify’s merchants.',
  href: 'https://polaris.shopify.com/',
  src: '/img/logos/design-systems/polaris.svg',
  tags: [{ text: 'React' }],
  sectionId: ids.designSystems,
}, {
  id: '11',
  title: 'Carbon Design System',
  text: 'Carbon is IBM\'s open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.',
  href: 'https://www.carbondesignsystem.com/',
  src: '/img/logos/design-systems/carbon.svg',
  tags: [{ text: 'Vanilla' }, { text: 'React' }, { text: 'Angular' }],
  sectionId: ids.designSystems,
}, {
  id: '10',
  title: 'Primer',
  text: 'Resources, tooling, and design guidelines for building interfaces with GitHub’s design system',
  href: 'https://primer.style/',
  src: '/img/logos/design-systems/primer.svg',
  tags: [{ text: 'Vanilla' }, { text: 'CSS' }],
  sectionId: ids.designSystems,
}, {
  id: '9',
  title: 'Material Angular',
  text: 'Angular Material comprises a range of components which implement common interaction patterns according to the Material Design specification.',
  href: 'https://material.angular.io/',
  src: '/img/logos/design-systems/material-angular.svg',
  tags: [{ text: 'Angular' }],
  sectionId: ids.designSystems,
}, {
  id: '8',
  title: 'Material React',
  text: 'React components that implement Google\'s Material Design.',
  href: 'https://material-ui.com/',
  src: '/img/logos/design-systems/material-react.svg',
  tags: [{ text: 'React' }],
  sectionId: ids.designSystems,
}, {
  id: '7',
  title: 'Backpack',
  text: 'Backpack is a collection of design resources, reusable components and guidelines for creating Skyscanner products.',
  href: 'https://backpack.github.io/',
  src: '/img/logos/design-systems/backpack.svg',
  tags: [{ text: 'React' }, { text: 'React Native' }],
  sectionId: ids.designSystems,
}, {
  id: '6',
  title: 'Material Vue',
  text: 'Build beautiful apps with Material Design and Vue.js',
  href: 'https://vuematerial.io/',
  src: '/img/logos/design-systems/material-vue.svg',
  tags: [{ text: 'Vue' }],
  sectionId: ids.designSystems,
}, {
  id: '5',
  title: 'Audi UI',
  text: 'Audi user interfaces are as varied as their uses – ranging from inspiring websites to applications for a particular service. They are based on the principles of the Audi look: variety, honesty and balance.',
  href: 'https://www.audi.com/ci/en/guides/user-interface/introduction.html',
  src: '/img/logos/design-systems/audi.png',
  tags: [{ text: 'Vanilla' }],
  sectionId: ids.designSystems,
}, {
  id: '4',
  title: 'The Bolt Design System',
  text: 'The Bolt Design System provides guidelines, reusable UI components, visual styles, tools, and other resources that power Pega’s digital ecosystem; saving time while keeping projects on-brand, and in scope.',
  href: 'https://bolt-design-system.com/',
  src: '/img/logos/design-systems/bolt.svg',
  tags: [{ text: 'Twig' }],
  sectionId: ids.designSystems,
}, {
  id: '3',
  title: 'Mozilla Protocol',
  text: 'Design system for Mozilla branded websites',
  href: 'https://protocol.mozilla.org/',
  src: '/img/logos/design-systems/mozilla.svg',
  tags: [{ text: 'Vanilla' }],
  sectionId: ids.designSystems,
}, {
  id: '2',
  title: 'Cosmos',
  text: 'Design System to build Auth0 products.',
  href: 'https://auth0-cosmos.now.sh',
  src: '/img/logos/design-systems/auth0.svg',
  tags: [{ text: 'React' }],
  sectionId: ids.designSystems,
}, {
  id: '1',
  title: 'Alfa Bank Design',
  text: 'Design system created for developing bank products.',
  href: 'https://design.alfabank.ru/',
  src: '/img/logos/design-systems/alfa.svg',
  tags: [{ text: 'React' }],
  sectionId: ids.designSystems,
}, {
  id: '0',
  title: 'Ratio',
  text: 'Design system of the new Rambler, built for products and interfaces visual language work optimisation.',
  href: 'https://ui-kit.rambler.ru',
  src: '/img/logos/design-systems/ratio.svg',
  tags: [{ text: 'React' }],
  sectionId: ids.designSystems,
}]);

export const dictionary = {
  ...developmentTools,
  ...conferenceTalks,
  ...people,
  ...books,
  ...podcasts,
  ...designFreebies,
  ...frontendNews,
  ...learningCourses,
  ...designSystems,
};

export const response = order.map(id => dictionary[+id]);
