import { page_data } from "@/constants/index";

import PagesSection from "@/components/PagesSection";

const Carpentry = () => {
  return (
    <div>
      <PagesSection content={page_data.customCarpentry} />
    </div>
  );
};

export default Carpentry;
