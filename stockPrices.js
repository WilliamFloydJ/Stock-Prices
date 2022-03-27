const best = (ary) => {
  let Highest = Math.max(...ary);
  let Lowest;
  let MaxProfit = 0;
  let SellPrice = 0;
  let BuyPrice = 0;
  ary.forEach(
    (element = (val, ind) => {
      if (val === undefined || val === null) {
        return "Sorry please provide a valid numerical array.";
      }
      if (val < Lowest || Lowest === undefined) {
        Lowest = val;
      }
      profit = val - Lowest;

      if (profit > MaxProfit) {
        MaxProfit = profit;
        SellPrice = ind;
        BuyPrice = Lowest;
      }
    })
  );

  if (ary[0] === Highest) {
    return 0;
  } else {
    return `${MaxProfit} , Buy at ${BuyPrice} , Sell at ${ary[SellPrice]}`;
  }
};
console.log(best([40, 10, 5, 1, 4, 1000, 5, 4, 6, 8, 0.5, 78]));
console.log(best([5000, 10, 5, 1, 4, 1000, 5, 4, 6, 8, 0.5, 78]));
console.log(best([40, 75, 5, 99, 45, 10, 5, 4, 1, 8, 20, 200]));
