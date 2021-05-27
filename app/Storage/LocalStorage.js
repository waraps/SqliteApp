import AsyncStorage from "@react-native-async-storage/async-storage";

export const localStorage = {
  async setUser(user) {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  },
  async getUser() {
    try {
      return JSON.parse(await AsyncStorage.getItem("user"));
    } catch (error) {
      console.log(error);
    }
  },
};