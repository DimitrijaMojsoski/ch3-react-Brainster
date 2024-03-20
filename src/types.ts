export type Album = {
  albumId: string;
  title: string;
  year: number;
  cover: string;
  price: number;
};

export type Artist = {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: Album[];
};
