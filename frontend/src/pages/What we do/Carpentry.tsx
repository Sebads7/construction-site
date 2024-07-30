import PageContent from "@/assets/pageContent.json";

import PagesSection from "@/components/PagesSection";

const Carpentry = () => {
  return (
    <div>
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed z-[8]"></div>
      <PagesSection content={PageContent.customCarpentry} />
    </div>
  );
};

export default Carpentry;
