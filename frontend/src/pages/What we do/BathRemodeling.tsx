import PageContent from "@/assets/pageContent.json";

import PagesSection from "@/components/PagesSection";

const BathRemodeling = () => {
  return (
    <div>
      <div className="bg-black opacity-50 w-full h-[65px] flex fixed z-[8]"></div>
      <PagesSection content={PageContent.bathroomRemodeling} />
    </div>
  );
};

export default BathRemodeling;
