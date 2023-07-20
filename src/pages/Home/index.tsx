import React from "react";
import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {


  React.useEffect(() => {
    characters.getById({id: 1}).then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <Container maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Hola mundo bienvenido"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
    </Container>
  );
};
