const calculaMedia = function (p1, p2, p3) {
  media = (p1 + p2 + p3) / 3;
  if (media >= 6) {
    console.log(`a media eh: ${media}`);
  }
  return media;
};

const calculaMediaFinal = function (p1, p2, p3, pf) {
  media_antes_da_pf = calculaMedia(p1, p2, p3);
  media_final = (media_antes_da_pf + pf) / 2;
  console.log(`a media final do aluno eh ${media_final}`);
};

calculaMedia(7, 9, 5);
calculaMedia(5, 4, 3);
calculaMediaFinal(4, 6, 4, 9);
