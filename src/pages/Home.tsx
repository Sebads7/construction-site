import Container from "@/components/Container";
import WhatWeDo from "./WhatWeDo";
import ButtonUp from "@/components/ButtonUp";

const Home = () => {
  return (
    <>
      <Container>
        <div className="bg-black opacity-50 w-full h-[65px] flex fixed "></div>
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
