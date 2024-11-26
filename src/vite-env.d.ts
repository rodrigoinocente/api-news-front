/// <reference types="vite/client" />

export interface INews {
  _id: Types.ObjectId;
  title: string;
  content: string;
  subtitle: string;
  banner: string;
  authorId: IUser;
  category: string;
  tags: [string];
  commentCount: number;
  publishedAt: Date;
}

export interface IUser {
  name: string;
  username: string;
}

export interface ITextLimitProps {
  text: string;
  limit: number;
}

export interface ISearchNews {
  title: string;
}

export interface AuthData {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface UserContextProps {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export interface UserProviderProps {
  children: ReactNode;
}

export interface ICardNews {
  title: string;
  subtitle: string;
  banner: string;
  category: string;
  _id: string;
}