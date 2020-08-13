import { GraphQLClient } from "graphql-request";
import { getPeopleQuery, getStarshipsQuery } from "./queries";

const API_URL = "https://swapi-graphql.netlify.app/.netlify/functions/index";

const client = new GraphQLClient(API_URL);

export const getPeople = () => client.request(getPeopleQuery);

export const getStarships = () => client.request(getStarshipsQuery);
