const monsterContainer = document.getElementById("monster-container");

const initialMonsters = [
  { id: 1, name: "Maurice", priceInCents: 7999, age: 823, inCart: false },
  { id: 2, name: "Jorrild", priceInCents: 1950, age: 220, inCart: false },
  { id: 3, name: "Frankie", priceInCents: 10890, age: 171, inCart: false },
  { id: 4, name: "Kristy", priceInCents: 8799, age: 142, inCart: false }
];

const formatDollars = cents => {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};

initialMonsters.forEach(monster => {
  console.log("HELLO MONSTERS");
  const monsterBox = document.createElement("DIV");
  monsterBox.classList.add("monster-box");
  if (monster.inCart) {
    monsterBox.classList.add("in-cart");
  }
  monsterBox.innerHTML = `
    <h2>${monster.name}</h2>
    <img src="https://robohash.org/${monster.name}?set=set2">
    <div>${formatDollars(monster.priceInCents)} / hour</div>
  `;
  monsterContainer.appendChild(monsterBox);
});
