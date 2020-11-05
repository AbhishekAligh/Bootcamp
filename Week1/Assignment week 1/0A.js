/*
* Author: Abhishek Aligh
* Problem 0 : Part A:
* Playing with JSON object’s Values:
* TASK:
* 1.Add height and weight to Fluffy
* 2.Fluffy name is spelled wrongly. Update it to Fluffyy
* 3.List all the activities of Fluffyy’s catFriends.
* 4.Print the catFriends names.
* 5.Print the total weight of catFriends
* 6.Print the total activities of all cats (op:6)
* 7.Add 2 more activities to bar & foo cats
* 8.Update the fur color of bar
* https://medium.com/@reach2arunprakash/guvi-zen-code-sprint-javascript-practice-problems-in-json-objects-and-list-49ac3356a8a5 */

var cat = {
  name: "Fluffy",
  activities: ["play", "eat cat food"],
  catFriends: [
    {
      name: "bar",
      activities: ["be grumpy", "eat bread omlet"],
      weight: 8,
      furcolor: "white",
    },
    {
      name: "foo",
      activities: ["sleep", "pre-sleep naps"],
      weight: 3,
    },
  ],
};
//My code starts from here
cat.name = "Fluffyy";
cat.height = "25cm";
cat.weight = "4kg";

console.log(
  `CatFriends Activities: ${cat.catFriends[0].activities} , ${cat.catFriends[1].activities}`
);
console.log(
  `CatFriends: ${cat.catFriends[0].name} , ${cat.catFriends[1].name}`
);
console.log(
  `totalWeight: ${cat.catFriends[0].weight + cat.catFriends[1].weight}`
);

console.log(
  `Total Activities of all cats: ${cat.activities.length +
  cat.catFriends[0].activities.length +
  cat.catFriends[1].activities.length
  }`
);

cat.catFriends[0].activities.push("sleep", "play with Dogs");

console.log(`Added Properties for bar : ${cat.catFriends[0].activities}`);

cat.catFriends[0].furcolor = "black";

console.log(`Fur Updated for Bar : ${cat.catFriends[0].furcolor}`);