import { Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Providers/Auth/authSlice";
import Loading from '../ui/Loading'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {isLoading,user,route} = useSelector(state=>state.auth)
  const dispatch = useDispatch();
  const nevigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(login(formData));
  };
 
  useEffect(() => {
    if (user) {
        return nevigate(route?route:"/");
    }
  },[nevigate, route, user])

  if (isLoading) {
    return <Loading />
  }

  return (

        <Container sx={{ marginBlock: "100px", width: "600px" }}>
          <Typography variant="h4" align="center" margin={"30px"}>
            Welcome Back
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              label="Email"
              fullWidth
              name="email"
              required
              onChange={handleChange}
            />
            <TextField
              type="password"
              label="password"
              fullWidth
              name="password"
              sx={{ margin: "10px 0px" }}
              required
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="success"
              type="submit"
              fullWidth
              sx={{ marginTop: "10px" }}
            >
              Login
            </Button>
          </form>
        </Container>
  );
};

export default Login;
