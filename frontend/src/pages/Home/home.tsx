import { useState } from "react";
import type { CharactersProps } from "../../types/character";

const Home = () => {
  const [character, setCharacter] = useState<CharactersProps>();

  return <div>Pagina de Home</div>;
};

export default Home;
