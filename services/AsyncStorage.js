import AsyncStorage from '@react-native-async-storage/async-storage';

const isObject = (value) => typeof value === 'object'


const storeData = async (key, value) => {
    try {

        if (isObject(value)){
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        }else {
            await AsyncStorage.setItem(key, value)
        }        
    } catch (e) {
        // saving error
    }
}

const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}


const importData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      return result != null ? result.map(req => JSON.parse(req[1])) : null;
    } catch (error) {
      console.error(error)
    }
  }

const  removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      console.log(e);
    } 
  }

const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  }

export {
    storeData,
    getData,
    importData,
    removeValue,
    clearAll
}