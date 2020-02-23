import axios from 'axios';
import { parseItem, parseList } from './action-utils';
import API from './config';

const captains = console;

export async function getHeroesAction() {
  try {
    const response = await axios.get(`${API}/heroes`);
    const heroes = parseList(response);
    return heroes;
  } catch (error) {
    return captains.log(error);
  }
}

export async function deleteHeroAction(hero) {
  try {
    const response = await axios.delete(`${API}/heroes/${hero.id}`);
    parseItem(response, 200);
    return null;
  } catch (error) {
    captains.error(error);
  }
}
export async function updateHeroAction(hero) {
  try {
    const response = await axios.put(`${API}/heroes/${hero.id}`, hero);
    const updatedHero = parseItem(response, 200);
    return updatedHero;
  } catch (error) {
    captains.error(error);
  }
}
export async function addHeroAction(hero) {
  try {
    const response = await axios.post(`${API}/heroes`, hero);
    const addedHero = parseItem(response, 201);
    return addedHero;
  } catch (error) {
    captains.error(error);
  }
}
