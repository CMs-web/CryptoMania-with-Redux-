import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingle } from "../Providers/Coins/CoinsSlice";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../ui/Loading";

const LernMore = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { singleCoin } = useSelector((state) => state.coins);
  const { isLoading, isError } = useSelector((state) => state.coins);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(fetchSingle(id));
    } else {
      return navigate("/login");
    }
  }, [dispatch, id, navigate, user]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ marginTop: "90px" }}
      >
        Error..
      </Typography>
    );
  }
  return (
    <Card sx={{ marginTop: "90px", marginInline: "8vw" }}>
      <CardMedia
        sx={{ height: 340 }}
        image={singleCoin?.image?.large}
        title={singleCoin.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {singleCoin.name}
        </Typography>
        <Typography variant="h5" color="text.primary">
          Current Price : ${singleCoin.market_data?.current_price.usd}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {singleCoin.description?.en}
        </Typography>
        <Button
          variant="outlined"
          sx={{ marginTop: "20px" }}
          onClick={() => navigate(-1)}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: "20px", marginTop: "20px" }}
        >
          Go to cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default LernMore;
