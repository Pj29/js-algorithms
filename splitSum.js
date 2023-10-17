function splitSum1(tours) {
  const total = tours.reduce((a, c) => a + c, 0);
  let preSum = 0;
  let postSum = total;
  let smallest = Number.POSITIVE_INFINITY;

  for (let i = 0; i < tours.length - 1; i++) {
    preSum = preSum + tours[i];
    postSum = postSum - tours[i];
    const difference = Math.abs(preSum - postSum);

    if (difference < smallest) {
      smallest = difference;
    }
  }
  return smallest;
}

function splitSum2(tours) {
  let smallest = Number.POSITIVE_INFINITY;

  for (let i = 0; i < tours.length - 1; i++) {
    const preSum = tours.slice(0, i + 1).reduce((a, c) => a + c, 0);
    const postSum = tours.slice(i + 1).reduce((a, c) => a + c, 0);
    const difference = Math.abs(preSum - postSum);

    if (difference < smallest) {
      smallest = difference;
    }
  }

  return smallest;
}

module.exports = { splitSum1, splitSum2 };
