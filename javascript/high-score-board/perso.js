const normalizeScore = (params) => {
  const { normalizeFunction, score } = params
  const normalizeScore = normalizeFunction(score)

  params.score = normalizeScore

  return params.score
}


function normalize(score) {
  return 2 * score + 10;
}

const params = { score: 400, normalizeFunction: normalize };


console.log(normalizeScore(params));
