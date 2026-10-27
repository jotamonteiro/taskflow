import "./home.css";
import { useEffect, useState } from "react";
import type {
  CharactersProps,
  CharactersResponse,
} from "../../types/character";
import axios from "axios";
import Card from "../../components/Card/card";

const Home = () => {
  const [character, setCharacter] = useState<CharactersProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function carregarDados() {
      try {
        const resposta = await axios.get<CharactersResponse>(
          "https://api.disneyapi.dev/character",
        );
        // data.data é o array :)
        setCharacter(resposta.data.data);
      } catch (err) {
        console.error("Erro ao buscar dados", err);
        setError("Não foi possível carregar os personagens.");
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="cardsContainer">
      <h1>Personagens Disney</h1>
      <div className="cardsGrid">
        {character.map((personagem) => (
          <Card
            key={personagem._id}
            name={personagem.name}
            _id={personagem._id}
            imageUrl={personagem.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
