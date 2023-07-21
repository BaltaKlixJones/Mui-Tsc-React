import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = React.useState<
    TypeCharacter[] | null
  >(null);

  const [loading, setLoading] = React.useState<boolean>(true);
  const [count, setCount] = React.useState<number>(1);
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };

  React.useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((res) => {
        setCount(res.data.info.pages);
        setAllCharacters(res.data.results);
        setTimeout(() => setLoading(false), 500);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

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
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Pagination
                variant="outlined"
                count={count}
                page={page}
                onChange={handleChange}
                sx={{ mt: 3 }}
                size="large"
              />
            </Box>
            {allCharacters?.length !== 0 ? (
              <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                {allCharacters?.map((character) => (
                  <Grid key={character.id} item xs={3}>
                    <CardComponent
                      image={character.image}
                      name={character.name}
                      status={character.status}
                      species={character.species}
                      id={character.id}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              "No hay data"
            )}
          </div>
        </>
      )}
    </Container>
  );
};
