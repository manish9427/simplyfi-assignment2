const tickets = {
  Kiev: ["Prague"],
  Prague: ["Zurich"],
  Zurich: ["Amsterdam"],
  Amsterdam: ["Barcelona"],
  Barcelona: ["Berlin"],
  Berlin: ["Kiev", "Amsterdam"],
};

function findRoute(city, visitedCities) {
  if (visitedCities.includes(city)) {
    return null;
  }

  visitedCities.push(city);

  if (visitedCities.length === Object.keys(tickets).length) {
    return visitedCities;
  }

  for (const destination of tickets[city]) {
    const route = findRoute(destination, [...visitedCities]);
    if (route) {
      return route;
    }
  }

  return null;
}

const startingCity = "Kiev";
const route = findRoute(startingCity, []);

if (route) {
  console.log(`Your son's route: ${route.join(" -> ")}`);
} else {
  console.log("No valid route found.");
}
