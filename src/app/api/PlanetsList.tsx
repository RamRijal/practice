const getPlanets = async () => {
  const response = await fetch("https://swapi.dev/api/planets");
  if (!response.ok) {
    throw new Error("Data not retrieved");
  }
  return response.json();
};
const PlanetsList = async () => {
  const planets = await getPlanets();
  console.log(planets);

  return (
    <ul className="text-white">
      {planets.results.map(
        (
          planet: {
            name:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | Promise<React.AwaitedReactNode>
              | null
              | undefined;
          },
          index: React.Key | null | undefined
        ) => {
          return <li key={index}>{planet.name}</li>;
        }
      )}
    </ul>
  );
};
export default PlanetsList;
