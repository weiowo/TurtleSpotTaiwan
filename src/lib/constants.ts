interface Story {
  date: string;
  title: string;
  subtitle: string;
  bgColor: string;
}

export const stories: Story[] = [
  {
    date: '2018/05/14',
    title: '最新目擊!!!',
    subtitle: '花瓶岩到美人洞',
    bgColor: 'bg-black',
  },
  {
    date: '2018/05/15',
    title: '今日風景',
    subtitle: '海邊日落美景',
    bgColor: 'bg-black',
  },
  {
    date: '2018/05/16',
    title: '美食分享',
    subtitle: '夜市小吃推薦',
    bgColor: 'bg-black',
  },
  {
    date: '2018/05/14',
    title: '最新目擊!!!',
    subtitle: '花瓶岩到美人洞',
    bgColor: 'bg-black',
  },
  {
    date: '2018/05/15',
    title: '今日風景',
    subtitle: '海邊日落美景',
    bgColor: 'bg-black',
  },
  {
    date: '2018/05/16',
    title: '美食分享',
    subtitle: '夜市小吃推薦',
    bgColor: 'bg-black',
  },
  {
    date: '2018/05/14',
    title: '最新目擊!!!',
    subtitle: '花瓶岩到美人洞',
    bgColor: 'bg-black',
  },
  {
    date: '2018/05/15',
    title: '今日風景',
    subtitle: '海邊日落美景',
    bgColor: 'bg-black',
  },
  {
    date: '2018/05/16',
    title: '美食分享',
    subtitle: '夜市小吃推薦',
    bgColor: 'bg-black',
  },
];

type ImageItem = {
  name: string;
  imageUrl: string;
};

export const defaultImages: ImageItem[] = [
  { name: 'Turtle-1', imageUrl: '/images/turtle1.jpeg' },
  { name: 'Turtle-2', imageUrl: '/images/turtle2.jpeg' },
  { name: 'Turtle-3', imageUrl: '/images/turtle-hero.jpeg' },
  { name: 'Turtle-4', imageUrl: '/images/turtle1-1.jpeg' },
  { name: 'Turtle-5', imageUrl: '/images/turtle2-2.jpeg' },
  { name: 'Turtle-6', imageUrl: '/images/turtle-hero2.jpeg' },
];
