// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../api/auth/AuthProvider"; // Stelle sicher, dass du die useAuth-Hook importierst
// import "../../App.css";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const { signIn } = useAuth(); // Verwende die signIn-Funktion aus der useAuth-Hook
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signIn(formData.email, formData.password); // Benutze die signIn-Funktion, um den Benutzer anzumelden
//       navigate("/"); // Leite den Benutzer nach der Anmeldung zur Startseite weiter
//     } catch (error) {
//       console.error("Anmeldung fehlgeschlagen:", error);
//     }
//   };

//   return (
//     <ThemeProvider theme={createTheme()}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Addresse"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Passwort"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               onChange={handleChange}
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Daten merken?"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Passwort vergessen? Pech...
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="/sign-up" variant="body2">
//                   {"Noch keinen Account? Sign Up!"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default SignIn;
