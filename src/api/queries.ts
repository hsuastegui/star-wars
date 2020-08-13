export const getPeopleQuery = `
  {
    allPeople {
      people {
        name
        height
      }
    }
  }
`;

export const getStarshipsQuery = `
  {
    allStarships {
      starships {
        name
        hyperdriveRating
      }
    }
  }
`;
