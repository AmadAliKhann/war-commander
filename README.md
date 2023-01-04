# WAR COMMANDER
> ### Introduction:
 - War commander is an interactive JavaScript console based game in which the user will be able to select the attacker and the opponent.

 - The user will be able to select the SKILL for the attacker and opponent as well.

 - The user will defend him/herself as well.
 - The battle between attacker and defender will be continue until one of them be out of health.
 - Only one skill can be learn for the attack by both attacker and defender.
 - The user will get a chance to select different skill to learn for the attack.
 - Learning a skill costs something and that is attack and defense points.
 - Each skill costs different points of attack and defense.

 > ### NPM Packages used:
 - readlineSync (for interactivity)
 - chalk        (for Text color)

 > ### Functionality
 - Created one constructor function named Heros to create attacker and defender.
 - Used readlineSync method for the selection of attacker and defender.
 - Created one function to allow user to select the desired skill. This function is used several times.
 - Created one prototype function for the constructor to learn skill named as skillCalculation.
 - Created one function named attack. This function not only attack but also deletes the used skill which is used for attack.This function is used several times.
 - Used while loop for attacking and defending until one of the selected hero's health reached to zero or less than zero.
- Inside while loop, used readlineSync if statement to ask the user for the next attack.
- Whenever the health of one hero decreases to zero or less than zero, the final result if statement will be executed to declare the winner.
