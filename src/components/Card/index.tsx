import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cart.slice";
import { setItem } from "../../utils/localStorage";

type CardProps = {
  image: string;
  name: string;
  status: string;
  species: string;
  id: number;
};

export const CardComponent: React.FC<CardProps> = ({
  id,
  image,
  name,
  status,
  species,
}) => {
  const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const itemExits = useAppSelector((state) => state.cartReducer);

  React.useEffect(() => {
    setDisabledBtn(itemExits.some((item) => item.id === id));
    setItem("cart", itemExits);
  }, [itemExits, id]);

  const handlerAddToCart = () => {
    dispatch(
      addToCart({
        id,
        image,
        name,
        info: status,
      })
    );
  };
  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h4" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Divider />
        <Typography sx={{ mt: 1.5 }}>Especie: {species}</Typography>
        <Typography sx={{ mt: 1.5 }}>Estado: {status}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`character/${id}`)}
        >
          Learn More
        </Button>
        <Button
          fullWidth
          variant="outlined"
          size="small"
          disabled={disabledBtn}
          onClick={handlerAddToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};
