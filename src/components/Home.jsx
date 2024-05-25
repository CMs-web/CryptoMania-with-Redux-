import CoinsCard from "./CoinsCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { trendingCoins } from "../Providers/Coins/CoinsSlice";
import Loading from "../ui/Loading";
import { Grid, Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trendingCoins());
  }, [dispatch]);
  const { coins, isLoading } = useSelector((state) => state.coins);

  if (isLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <>
      <Typography variant="h3" margin={"90px 0px 30px 0px"} align="center">
        Top Trending Coins
      </Typography>
      <Grid container spacing={2} alignItems={"center"} padding={"0px 30px"}>
        {coins.map((coin) => (
          <CoinsCard key={coin.item.id} coins={coin} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
