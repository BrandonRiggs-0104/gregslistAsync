export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }
  get HouseTemplate() {
    return `
    <div class="col-10 m-auto mb-3">
        <section class="row bg-light elevation-5 car-border" style="">
          <div class="col-12 col-md-4 p-0">
            <img class="img-fluid" src="${this.imgUrl}" alt="Houses">
          </div>
          <div class="col-12 col-md-8 p-3">
            <h2>${this.bedrooms}BR ${this.bathrooms}Bth Stories: ${this.levels}</h2>
            <h3>$${this.price}</h3>
            <p>${this.description}</p>
            <h4></h4>
            <div class="d-flex align-items-center mb-3">
              <h5 class="me-3">${this.creator.name}</h5>
              <img class="img-fluid creator-picture" src="${this.creator.picture}" alt="${this.creator.name}">
            </div>
          </div>
        </section>
      </div>
      `
  }
}