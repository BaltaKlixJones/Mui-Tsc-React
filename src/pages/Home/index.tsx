import React from "react";
import { Button, Container, Grid } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = React.useState<
    TypeCharacter[] | null
  >(null);

  React.useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((res) => {
        setAllCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Rick and Morty"
        description="Bienvenido a la pagina de Rick and Morty"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
      <div>
        {allCharacters?.length !== 0 ? (
          <Grid container spacing={2} direction="row">
            {allCharacters?.map((character) => (
            <Grid item  xs={3}>
            <CardComponent
              key={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
            />
              </Grid>
          ))}
          </Grid>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};
