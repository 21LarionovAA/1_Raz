const money2 = 12000;
const precent = (0.07 / 12);
const savings = Math.floor(money2 * (1 + precent) ** 24);
const housePrice = 13500;
console.log(savings + '$');

if (savings > housePrice) {
    console.log('Можем купить дом');
    console.log(`Остаток после покупки ${savings - housePrice}$`);
} else {
    console.log('Не хватает на дом');
    console.log(`Сколько еще не хватает для покупки ${housePrice - savings}$`)
}