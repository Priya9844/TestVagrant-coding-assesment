const input = [
  {
    name_of_news_paper: "TOI",
    budget: 26,
  },
  {
    name_of_news_paper: "Hindu",
    budget: 20.5,
  },
  {
    name_of_news_paper: "ET",
    budget: 34,
  },
  {
    name_of_news_paper: "BM",
    budget: 10.5,
  },
  {
    name_of_news_paper: "HT",
    budget: 18,
  },
];


const combinationofpaper = (tar_bud) => {
  const res = new Array();

  for (let m = 0; m <= input.length - 1; m++) {
    for (let n= 0; n<= input.length - 1; n++) {
      if (input[m].budget + input[n].budget <= tar_bud) {
        const unique = [
          ...new Set([
            input[m].name_of_news_paper,
            input[n].name_of_news_paper,
          ]),
        ];
        if (unique.length !== 1) {
          const fil = res.filter(
            (x) => x.join(",") === unique.sort().join(",")
          );
          if (!fil.length) res.push(unique.sort());
        }
      }
    }
  }

  return res;
};

console.log(combinationofpaper(40));

