export interface Brand {
  name: string;
  logo: string;
}
export interface Feed {
  ad_1_image: string;
  ad_2_image: string;
  banner_image: string;
  banner_text: string;
  brand: Brand;
  briefref: string;
  description: string;
  feed_title: string;
  name: string;
  starts_on: string;
}
export interface User {
  avatar: string;
  userref: string;
  name: string;
}

export interface FeedComment {
  bcommentref: string;
  briefref: string;
  comment: string;
  submitted_on: string;
  user: User;
}
