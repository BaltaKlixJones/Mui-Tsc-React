import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Divider
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type CardProps = {
    image: string;
    name: string;
    status: string
    species: string;
  id: number ;
}

export const CardComponent: React.FC<CardProps> = ({id, image, name, status, species}) => {

  const navigate = useNavigate();

  return (
    <Card >
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h4"  sx={{mb:1.5}}>{name}</Typography>
        <Divider/>
        <Typography sx={{mt:1.5}}>Especie: {species}</Typography>
        <Typography sx={{mt:1.5}}>Estado: {status}</Typography>
      </CardContent>
      <CardActions>
      
        <Button fullWidth variant="contained" size="small" onClick={()=> (navigate(`character/${id}`))}>Learn More</Button>
     
      </CardActions>
    </Card>
  );
};
