import { Carrousel } from "@/components/Carrousel";

const gallery = [
  "src/assets/carpentry/Carpentry.JPG",
  "src/assets/carpentry/Carpentry2.JPG",
  "src/assets/carpentry/Carpentry3.JPG",
];

const Painting = () => {
  return (
    <div>
      <Carrousel images={gallery} imageSize="400px" />
    </div>
  );
};

export default Painting;
