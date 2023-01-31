function getGeneration(ahnenDab) {
  return Math.floor(Math.log2(ahnenDab)) + 1;
}

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].forEach(
  (ahnenDab) => {
    const generation = getGeneration(ahnenDab);

    console.log(`AhnenDab: ${ahnenDab} Generation: ${generation}`);
  },
);
