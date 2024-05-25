import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Providers/Auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { message } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (ev) => {
    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value,
    });
  };

  const handlSubmit = (ev) => {
    ev.preventDefault();
    dispatch(register(formData));
  };

  const { name, email, password, password2 } = formData;

  return (
    <Container sx={{ marginBlock: "100px", width: "600px" }}>
      <Typography variant="h4" align="center" margin={"30px"}>
        Register here
      </Typography>
      <form onSubmit={handlSubmit}>
        <TextField
          type="text"
          label="Name"
          fullWidth
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
        <TextField
          type="email"
          label="Email"
          fullWidth
          name="email"
          value={email}
          onChange={handleChange}
          required
          sx={{ margin: "10px 0px" }}
        />
        <TextField
          type="password"
          label="password"
          fullWidth
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <TextField
          type="password"
          label="Confirm Password"
          fullWidth
          name="password2"
          value={password2}
          onChange={handleChange}
          sx={{ margin: "10px 0px" }}
          required
        />
        <Button
          variant="contained"
          color="success"
          type="submit"
          fullWidth
          sx={{ marginTop: "10px" }}
        >
          Register
        </Button>
      </form>
      {message && (
        <Typography
          variant="h6"
          sx={{ marginTop: "20px" }}
          color={"red"}
          textAlign={"center"}
        >
          {message} click to: <Link to={'/login'}>login here</Link>
        </Typography>
      )}
      {message && (
        <Button
          variant="outlined"
          sx={{ marginTop: "20px" }}
          onClick={() => navigate(-1)}
          startIcon={<KeyboardBackspaceIcon />}
        >
          Back
        </Button>
      )}
    </Container>
  );
};

export default Register;
