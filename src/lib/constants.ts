type ImageItem = {
  name: string;
  imageUrl: string;
};

export const defaultImages: ImageItem[] = [
  { name: 'Turtle-1', imageUrl: '/images/turtle1.jpeg' },
  { name: 'Turtle-2', imageUrl: '/images/turtle2.jpeg' },
  { name: 'Turtle-3', imageUrl: '/images/turtle-hero.jpeg' },
  { name: 'Turtle-4', imageUrl: '/images/turtle1.jpeg' },
  { name: 'Turtle-5', imageUrl: '/images/turtle2.jpeg' },
  { name: 'Turtle-6', imageUrl: '/images/turtle-hero.jpeg' },
];

export type Activity = {
  date: string;
  title: string;
  description: string;
  post_link: string;
  bgColor?: string;
};

export const defaultStories: Activity[] = [
  {
    date: '2018/05/14',
    title: '最新目擊!!!',
    description: '花瓶岩到美人洞',
    post_link: '/',
  },
  {
    date: '2018/05/15',
    title: '最新目擊!!!',
    description: '海邊日落美景',
    post_link: '/',
  },
  {
    date: '2018/05/16',
    title: '最新目擊!!!',
    description: '發現超可愛海龜！',
    post_link: '/',
  },
];
