import { useState } from 'react';
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
      //console.log(result);
      let res = [];
      result.map(req => {
        req.forEach(element => {
          //console.log(element);
          if (element != null) {
            res.push(JSON.parse(element));
          }
        });
        //console.log(res[1]);
        return res[1];
      });
      //return result != null ? result.map(req => JSON.parse(req[1])) : null;
    } catch (error) {
      console.error(error)
    }
  }

const removeItemData = async (favorite) => {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    result.map(req => {
      req.forEach(element => {
        if (element === JSON.stringify(favorite)) {
          return removeValue(element)
          .then(result => {
            console.log(result);
          });
        }
      })
    })

    // try {
    //   await AsyncStorage.removeItem(key);
    // } catch(e) {
    //   // remove error
    //   console.log(e);
    // }  
  }

  removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    } 
    console.log('Done.')
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
    removeItemData,
    clearAll
}