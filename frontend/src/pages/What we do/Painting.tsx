import PageContent from "@/assets/pageContent.json";

import PagesSection from "@/components/PagesSection";

const Painting = () => {
  return (
    <div>
      <PagesSection content={PageContent.interiorExterior} />
    </div>
  );
};

export default Painting;
