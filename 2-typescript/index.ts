// tsc --watch --project ./tsconfig.json

export const heroCategories = [
  {
    name: "human",
    heroes: [
      { name: "Hawk Eye", strength: 136, gender: "m" },
      { name: "Black Widow", strength: 136, gender: "f" },
      { name: "Scarlet Witch", strength: 60, gender: "f" },
      { name: "Mystique", strength: 120, gender: "m" }
    ]
  },
  {
    name: "superHuman",
    heroes: [
      { name: "Hulk", strength: 90000, gender: "m" },
      { name: "Spider-Man", strength: 25000, gender: "m" },
      { name: "Vision", strength: 5000, gender: "m" },
      { name: "Namora", strength: 75000, gender: "f" }
    ]
  },
  {
    name: "god",
    heroes: [{ name: "Thor", strength: 100000, gender: "m" }]
  }
];

/**
 * Returns e.g. ['human - Hawk Eye', 'human - Black Widow', 'superHuman - Hulk']
 */
export const getHeroNames = categories => {};

console.log(getHeroNames(heroCategories));
