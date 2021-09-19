const state = {
  grid: {
    x: 10,
    y: 5,
  },
  rover: {
    current: {
      x: 2,
      y: 2,
    },
    direction: 'east',
    log: [
      {
        x: 0,
        y: 1,
      },
      {
        x: 0,
        y: 0,
      },
    ],
  },
};

export default state;
