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

 const CharacterPage: React.FC = () => {
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

  const statusColor = character?.status === "Alive" ? "success" : "error";

  return (
    <Box sx={{ width: "100%" }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center",alignItems:"center", mt: 20 }}>
            <CircularProgress />
          </Box>
        ) : (
            <Container maxWidth="xl">
          <Grid sx={{ mt: 10 }} container columnSpacing={10} alignItems="center" >
            <Grid item xs={6} >
              <Typography variant="h2" textAlign="center" >{character!.name}</Typography>
              <Divider />
              <Box marginTop={7} > 
              <Typography variant="h5" >Specie: {character!.species}</Typography>
              <Divider />
              <Typography variant="h5"> Origin name: {character!.origin.name}</Typography>
              <Divider />
              <Typography variant="h5">Gender: {character!.gender}</Typography>
              <Divider />
              </Box>

              <Box sx={{ mt: 7 }} justifyContent="center" display="flex" >
                <Chip
                  label={character?.status}
                  color={statusColor}
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
      </Container>
        )}
    </Box>
  );
};

export default CharacterPage;