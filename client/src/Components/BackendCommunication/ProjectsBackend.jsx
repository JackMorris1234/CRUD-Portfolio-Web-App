import axios from 'axios'
const baseUrl='/projects'

let token=null
let config=null

const setToken=(value)=>{
  token=`Bearer ${value}`
  config={
    headers:{Authorization: token}
  }
}

const getAll = async () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const request = axios.post(baseUrl, newObject, config)
  return request.then(response => response.data)
}

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject, config)
  return request.then(response => response.data)
}

const removeEntry = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`, config)
  return request.then(response => response.data)
}

export default { getAll, create, update, removeEntry, setToken }