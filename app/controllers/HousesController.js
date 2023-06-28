import { AppState } from "../AppState.js";
import { houseService } from "../services/HouseService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { HouseView } from "../views/HouseView.js";


function _drawHouses() {
  const house = AppState.houses
  let template = ''

  house.forEach(h => template += h.HouseTemplate)
  setHTML('houseList', template)
}

export class HousesController {
  constructor() {
    console.log('House Controller connected');
    this.getHouses()
    AppState.on('houses', _drawHouses)
  }

  async getHouses() {
    try {
      await houseService.getHouses()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  async createHouse(event) {
    try {
      event.preventDefault()
      const form = event.target
      const houseData = getFormData(form)
      console.log('house data', houseData)
      await houseService.createHouse(houseData)

    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

}