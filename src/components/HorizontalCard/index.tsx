import { Card, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { removeToCart } from "../../redux/slices/cart.slice";
import { CloseRounded } from "@mui/icons-material";


interface CardHorizontalComponentProps {
    name: string;
    info: string;
    image: string;
    id: string | number;
}

export const HorizontalCardComponent: React.FC<CardHorizontalComponentProps> = ({image, name, info, id}) => {
    const dispacth = useAppDispatch()

    const handleRemoveToCart = () => {
        dispacth(removeToCart({id}))
    }
    return (
        <Card sx={{ display: "flex", my: 2 }}>
        <CardMedia component="img" sx={{ width: 151 }} image={image} alt="Rick and Morty" />
        <Grid item xs={9}>
          <CardContent>
            <Typography variant="h4"> {name}</Typography>
            <Divider />
            <Typography variant="h6"> {info}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
            <IconButton onClick={handleRemoveToCart}>
              <CloseRounded />
            </IconButton>
          </CardActions>
        </Grid>
      </Card>
        )
}