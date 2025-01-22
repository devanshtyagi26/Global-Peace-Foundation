export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  registrationLink: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'report' | 'paper' | 'guide';
  downloadUrl: string;
  description: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  story: string;
  image: string;
  country: string;
}