/// <reference types="vite/client" />

export interface INews {
  _id: Types.ObjectId;
  title: string;
  content: string;
  subtitle: string;
  banner: string;
  bannerAlt: string;
  bannerFigcaption: string;
  authorId: IJournalis;
  category: string;
  tags: [string];
  commentCount: number;
  publishedAt: Date;
  edited: Date;
}

export interface IJournalist {
  _id: Types.ObjectId;
  name: string;
  bio: string;
  profilePicture: string;
  active: boolean;
  email: string;
  createdAt: Date;
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
  _id: string;
  publishedAt: Date;
  edited?: Date | null;
  type: "card" | "full";
}

export interface ICardColumn {
  title: string;
  _id: string;
  publishedAt: Date;
  edited?: Date | null;
  type: "card" | "full";
}


export type CategoryType = "Tecnologia" | "Esportes" | "Ciência" | "Política" | "Saúde" | "Arte" | "Outros"

export interface IBackgroundContextType {
  bgImage: string | null
  updateBackground: (image: string | null) => void
}

export interface NewsTimestampsProps {
  publishedAt: Date
  edited?: Date | null
  type: "card" | "full"
}

export interface IColumn {
  _id: Types.ObjectId;
  title: string;
  content: string;
  subtitle: string;
  banner: string;
  bannerAlt: string;
  bannerFigcaption: string;
  authorId: Types.ObjectId;
  tags: [string];
  category: string;
  publishedAt: Date;
  edited: Date;
}