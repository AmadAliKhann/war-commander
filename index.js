
var chalk = require('chalk');
var readlineSync = require('readline-sync');
console.log(chalk.blue('Welcome to War Commander ver 1.0'))

var userName = readlineSync.question('May I have your name? ');
console.log('Welcome Commander '+ userName + '!')
console.log('Please select your hero for attacking or defending from the list below')
function Heros(name,health,attack,defense){
this.name = name;
  this.health=health;
  this.attack=attack;
  this.defense=defense;
  this.skills = [];
}
let kratos = new Heros('Kratos',32,15,12);
let dumbledore = new Heros('Dumbledore', 28,13,14);
let dejan = new Heros('Dejan',22,17,11);
let jack = new Heros('Jack',38,12,16);
let chunli = new Heros('Chunli',19,18,17);
let pickedHero = [kratos,dumbledore,dejan,jack,chunli];
let heroNames = pickedHero.map(hero => hero.name)

let  heroName = readlineSync.keyInSelect(heroNames, 'Which hero?');
let selectedHero = pickedHero[heroName]
console.log(`Good choice Commander ${userName}! You have selected ${chalk.greenBright(selectedHero.name)}` );

console.log('Commander '+ userName + '!...' + 'We have to get ready for our first ATTACK! ');
console.log('But before this we have to learn one skill to attack. Please select one skill to attack.');
function skillSelection(){
let skills = [{name: 'Lightining', defense: 1, attack: 2 }, {name: 'Earthquake', defense: 2, attack: 2 }, {name: 'Hurricane', defense: 3, attack: 1 }, {name: 'Lava', defense: 1, attack: 1 }, {name: 'Blackhole', defense: 3, attack: 3 }];
let skillNames = skills.map(skill => skill.name)
let index2 = readlineSync.keyInSelect(skillNames, 'Which skill you want to select for the attack?');

let selected = skills[index2];
console.log(`${selected.name} requires Defense: ${selected.defense} & Attack: ${selected.attack} points to generate.`)
return selected;
}


Heros.prototype.skillCalculation = function(skill){
this.attack = this.attack - skill.attack;
this.defense = this.defense - skill.defense;
this.skillPower= (skill.attack + skill.defense) *2;
this.skills.push(skill)
}
let newSelect = skillSelection();
selectedHero.skillCalculation(newSelect)
console.log(selectedHero);


console.log(`Now Commander ${userName}! Choose your opponent.` );
let  defender = readlineSync.keyInSelect(heroNames, 'Which opponent you want to face?');
let selecteddefender = pickedHero[defender];
console.log(`Commander ${userName}!  ${chalk.redBright(selecteddefender.name)} is selected as your opponent.` );
let defSkillSelect = skillSelection();
selecteddefender.skillCalculation(defSkillSelect)
console.log(selecteddefender);

function attack(attacker,opponent){
  
  opponent.health = opponent.health - attacker.skillPower;
  console.log(`Commander ${userName}! Your attack damaged ${chalk.redBright(opponent.name)} health by ${chalk.magentaBright(attacker.skillPower)} `);
  console.log(`${chalk.redBright(opponent.name)} has remaining ${chalk.blueBright(opponent.health)} health. `);
  attacker.skills.pop();
  attacker.skillPower = 0;


}

let attacker = selectedHero;
let opponent = selecteddefender;
while (selecteddefender.health >= 0 && selectedHero.health >=0){
if(attacker.skills.length === 0){
  if (!readlineSync.keyInYN('Do you wish to attack again ?')) {
   console.log(`Commander ${chalk.greenBright(userName)}... Thanks for playing.`)
    process.exit();
  }else{
    let finalSelect = skillSelection();
  attacker.skillCalculation(finalSelect)
  
  }
} 
  attack(attacker,opponent);


  let current = attacker;
attacker = opponent;
opponent = current;


  
}
console.log(selectedHero);
console.log(selecteddefender);

if(selectedHero.health <= 0 ){
  console.log(`${chalk.greenBright(selecteddefender.name)} is Winner and ${chalk.redBright(selectedHero.name)} is Dead. `);
}else{
  console.log(`${chalk.greenBright(selectedHero.name)} is Winner and ${chalk.redBright(selecteddefender.name)} is Dead. `);
}













