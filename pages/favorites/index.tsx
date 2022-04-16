import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import {useState, useEffect} from 'react';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {
  const [favoritetPokemons, setFavoritetPokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritetPokemons(localFavorites.pokemons());
  }, []);
  
  return (
    <Layout title="favorites">
      {
          favoritetPokemons.length === 0 
            ? ( <NoFavorites /> )
            : ( <FavoritePokemons pokemons={favoritetPokemons} /> )
              }
    </Layout>
  )
}


export default FavoritesPage;
