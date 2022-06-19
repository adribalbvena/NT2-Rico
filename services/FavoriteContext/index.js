import { createContext } from "react";

const favoriteObject = {};

const FavoriteContext = createContext(favoriteObject);

export { favoriteObject };

export default FavoriteContext;