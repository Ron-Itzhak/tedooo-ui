export interface Post {
  id: string;
  avatar: string;
  username: string;
  shopName: string;
  text: string;
  images?: [string?, string?];
  likes: number;
  comments: number;
  date?: string;
}
