export interface IBook {
  title: string;
  author: string;
  details: string;
  genre?: string;
}

export interface IBookProviderProps {
  children: React.ReactNode;
}

export interface IBookForm {
  title: string;
  author: string;
  genre: string;
  details: string;
}
