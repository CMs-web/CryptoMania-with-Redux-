import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../Providers/Auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const nevigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogOut = () => {
    nevigate('/')
    dispatch(logOutUser());
  }

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: "1" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            CryptoMania
          </Link>
        </Typography>

        {!user ? (
          <>
            <Link to={"/login"}>
              <Button variant="contained" color="secondary">
                Login
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ margin: "0px 10px" }}
              >
                Register
              </Button>
            </Link>
          </>
        ) : (
          <Button variant="contained" color="secondary" onClick={handleLogOut}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
