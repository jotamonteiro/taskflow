export type CharactersProps = {
  _id: number;
  name: string;
  imageUrl: string;
};

export type CharactersResponse = {
  info: {
    count: number;
    totalPages: number;
    nextPage: string | null;
  };
  data: CharactersProps[];
};
