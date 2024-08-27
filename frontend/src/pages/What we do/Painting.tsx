import { page_data } from "@/constants/index";

import PagesSection from "@/components/PagesSection";

const Painting = () => {
  return (
    <div>
      <PagesSection content={page_data.interiorExterior} />
    </div>
  );
};

export default Painting;
