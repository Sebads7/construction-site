import Container from "@/components/Container";
import WhatWeDo from "./WhatWeDo";
import ButtonUp from "@/components/ButtonUp";

const Home = () => {
  return (
    <>
      <Container>
        <img
          src="src/assets/fronthouse.jpeg"
          alt="background"
          className="w-full h-screen object-cover"
        />
      </Container>
      <WhatWeDo />
      <ButtonUp />
    </>
  );
};

export default Home;
