import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRoute } from "../Providers/Auth/authSlice";


// eslint-disable-next-line react/prop-types
const CoinsCard = ({ coins }) => {
  // eslint-disable-next-line react/prop-types
  const { name, large, id } = coins.item;
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const isUser = user ? `/auth/coin/${id}` : `/login`;
  return (
    <Grid item>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ height: 140 }} image={large} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link to={`${isUser}`}>
            <Button
              size="small"
              onClick={() => dispatch(getRoute(`/auth/coin/${id}`))}
            >
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CoinsCard;
