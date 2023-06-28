import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HouseService {
  async getHouses() {
    const response = await api.get('api/houses')
    console.log('houses', response.data);
    AppState.houses = response.data.map(h => new House(h))
  }

  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    console.log('created a house?', response.data);
  }
}

export const houseService = new HouseService()