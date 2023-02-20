
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister ({id, name, occupation, weapon, cartoon}) {
    return axios.post(`${this.BASE_URL}/characters`, {id, name, occupation, weapon, cartoon})
  }

  updateOneRegister (id) {
    return axios.post(`${this.BASE_URL}/characters/${id}`)
  }

  deleteOneRegister (id) {
    return axios.post(`${this.BASE_URL}/characters/${id}`)
  }
}
