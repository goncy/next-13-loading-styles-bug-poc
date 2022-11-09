async function getHeroData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {date: +new Date()};
}

const Hero = async () => {
  const data = await getHeroData();

  return (
    <div>
      Rendered on: {data.date}
    </div>
  );
};

export default Hero;
