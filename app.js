const presidents = [
  { name: 'Donald Trump', terms: 1, party: 'R' },
  { name: 'Barack Obama', terms: 2, party: 'D' },
  { name: 'George W. Bush', terms: 2, party: 'R' },
  { name: 'Bill Clinton', terms: 2, party: 'D' },
  { name: 'George H.W. Bush', terms: 1, party: 'R' },
  { name: 'Ronald Reagan', terms: 2, party: 'R' },
  { name: 'Jimmy Carter', terms: 1, party: 'D' },
  { name: 'Gerlad Ford', terms: 1, party: 'R' },
  { name: 'Richard Nixon', terms: 2, party: 'R' },
  { name: 'John F. Kennedy', terms: 1, party: 'D' },
  { name: 'Lyndon Johnson', terms: 2, party: 'D' },
  { name: 'Dwight Eisenhower', terms: 2, party: 'R' },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
const demP = presidents.filter((president) => president.party === 'D'); //putting only one '=' sets all variables to one thing so need the three equal signs

console.table(demP);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const oneTerm = presidents.filter(
  (president) => president.party === 'R' && president.terms === 1
);

console.table(oneTerm);

const repP = presidents.filter(function (president) {
  if (president.party === 'R' && president.terms <= 1) {
    return true;
  }
});

console.table(repP);

//3) return only the last three presidents
//const lastThree =
const lastThree = presidents.slice(0, 3); //just 3 takes out first 3, (0,3) gives top three, -3 gives 3 at the bottom only

console.table(lastThree);

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const demTwoTerm = presidents.filter((presidents) => {
  if (presidents.party === 'D' && presidents.terms > 1) {
    return true;
  }
});

console.table(demTwoTerm);

//chain filtering (easier to read)
const twoTermsDem = presidents
  .filter((president) => president.terms === 2)
  .filter((president) => president.party === 'D')
  .slice(0);

console.table(twoTermsDem);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
//Fancy Wilson Way
//Use findIndex to establish which the index of an object and then chain filter it

//The Whalen Way
const dems2 = presidents
  .filter((el) => el.party === 'D')
  .filter((el) => el.terms === 2);

if (dems2.some((person) => person.name === 'Lyndon Johnson')) {
  alert('LBJ served two terms');
} else {
  alert('LBJ was one and done');
}
