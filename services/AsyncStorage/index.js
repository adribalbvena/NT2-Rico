import AsyncStorage from "@react-native-async-storage/async-storage";

//chequeo si es objeto
const isObject = (value) => typeof value === "object";

const storeData = async (key, value) => {
  try {
    if (isObject(value)) {
      //si es objeto lo seteo como objeto sino como valor
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } else {
      await AsyncStorage.setItem(key, value);
    }
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};


const getIsFavorite = async (key) => {
  const result = {statusRespone: true, error: null, isFavorite: false};
  try {
      const res = await getData(key);
      result.isFavorite = res != null;
  } catch (e) {
      result.statusRespone = false;
      result.error = e;
  }
  return result;
}

//Se utilizara para importar la data de favs guardados
const importData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    const resultWithoutUser = result.filter(res => res[0] !== "authData");
    return resultWithoutUser != null ? resultWithoutUser.map(req => JSON.parse(req[1])) : null;
  } catch (error) {
  }
}

const  removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
  } 
}

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
};

export { storeData,
         getData,
         getIsFavorite,
         importData,
         removeValue,
         clearAll };
