import Image from "next/image";

import loadingStyles from "../loading.module.css"

async function getHeroData() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return +new Date();
}

const Hero = async () => {
  const data = await getHeroData();

  return (
    <div className={loadingStyles.spinner}>
      Rendered on: {data}
    </div>
  );
};

export default Hero;
