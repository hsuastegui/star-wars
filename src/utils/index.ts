import _random from 'lodash/random';
import { getPeople, getStarships } from "../api";

type cb = any;


export const loadPeople = async (cb: cb) => {
  try {
    const response = await getPeople();
    cb(response.allPeople.people);
  } catch (e) {
    console.log(e);
  }
};

export const loadStarships = async (cb: cb) => {
  try {
    const response = await getStarships();
    cb(response.allStarships.starships);
  } catch (e) {
    console.log(e);
  }
};

export const getRandomCard = (cards: person[] | starship[]): any => cards[_random(cards.length - 1)]