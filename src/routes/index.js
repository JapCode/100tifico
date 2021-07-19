import Header from '../templates/Header.js'
import Home from '../pages/Home.js'
import Character from '../pages/Character.js'
import Error404 from '../pages/error404.js'
import getHash from '../utils/getHash.js'
import resolveRoutes from '../utils/resolveRoutes.js'

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'contact'
}
const router = async () => {
  const header = null || document.querySelector('#header')
  const content = null || document.querySelector('#content')
  header.innerHTML =  Header()
  let hash = getHash()
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404
  content.innerHTML = await render()
}
export default router