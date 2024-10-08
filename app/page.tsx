import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import PricingPlans from "./plans";
import ResponsiveAppBar from "@/components/navbar";

// Define the metadata type if required
interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Homepage",
  description: "Your Lecture summarized under minutes",
};

const Home: React.FC = () => {
  return (
    <Box>
      {/* Header and navigation */}
      <ResponsiveAppBar userPresent={true} />

      {/* Headline and call to action buttons */}
      <Box sx={{ textAlign: "center", my: 4, paddingTop: "27vh" }}>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Amanuensis Mach
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Easy way to speed through lectures.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, mr: 2, backgroundColor: "#3C6E71", '&:hover': { backgroundColor: "#3C6E71" } }}
            href="/upload"
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            sx={{ mt: 2, borderColor: "#3C6E71", color: "#3C6E71", '&:hover': { borderColor: "#3C6E71", color: "#3C6E71" } }}
          >
            Learn More
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
