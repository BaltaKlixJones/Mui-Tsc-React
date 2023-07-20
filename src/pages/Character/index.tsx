import React from "react";
import { useParams } from "react-router-dom";
import { characters } from "../../api/characters";
import { ICharacter } from "./interface/character.interface";
import {
  Box,
  Container,
  Grid,
  CircularProgress,
  Typography,
  Divider,
  Chip,
} from "@mui/material";

export const CharacterPage: React.FC = () => {
  const { id } = useParams();

  const [loading, setLoading] = React.useState<boolean>(true);
  const [character, setCharacter] = React.useState<ICharacter | null>(null);

  React.useEffect(() => {
    characters
      .getById({ id })
      .then((r) => {
        setCharacter(r.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid item xs={6}>
              <Typography variant="h2">{character!.name}</Typography>
              <Divider />

              <Typography variant="h5">{character!.species}</Typography>
              <Typography variant="h5">{character!.origin.name}</Typography>
              <Typography variant="h5">{character!.gender}</Typography>

              <Box sx={{ mt: 2 }}>
                <Chip
                  label={character?.status}
                  color="success"
                  variant="outlined"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img
                src={character!.image}
                style={{ width: "100%", borderRadius: ".5em" }}
                alt=""
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};
