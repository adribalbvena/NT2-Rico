import { createContext } from "react";

const restaurantsObject = {};

const RestaurantsContext = createContext(restaurantsObject);

export { restaurantsObject };

export default RestaurantsContext;