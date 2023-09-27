const studentHogwarts = ()=>{
    let privateScore = 0;
    let name = null;
    const changeScoreBy = function(points){
        privateScore += points;
    }
    return {
        setName(newName) {
          name = newName;
        },
        rewardStudent() {
          changeScoreBy(1);
        },
        penalizeStudent() {
          changeScoreBy(-1);
        },
        getScore() {
          return `${name}: ${privateScore}`;
        },
      };
};

let harry = Object.create(studentHogwarts);
harry.setName('Harry');
// Reward Harry four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

const draco = Object.create(studentHogwarts);
draco.setName("Draco");

// Reward Draco once and penalize him three times
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log Draco's name and score
console.log(draco.getScore());