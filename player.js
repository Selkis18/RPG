let player;

// Fonction qui regroupe les points de chaque personnage
function Player(classType, health, skill, attack, defense, magik) {
	this.classType = classType;
	this.health = health;
	this.skill = skill;
	this.attack = attack;
	this.defense = defense;
	this.magik = magik;
}

let PlayerMoves = {
	calcAttack: function() {
		// Qui attaque en premier
		let getPlayermagik = player.magik;
		let getEnemymagik = enemy.magik;

		//le joueur attaque
		let playerAttack = function() {
			let calcBaseDamage;
			if (player.skill > 0) {
				calcBaseDamage = (player.attack * player.skill) / 1000;
			} else {
				calcBaseDamage = (player.attack * player.defense) / 1000;
			}
			let offsetDamage = Math.floor(Math.random() * Math.floor(10));
			let calcOutputDamage = calcBaseDamage + offsetDamage;

			//Nombre de tours
			let numberOfHits = Math.floor(
				(Math.random() * Math.floor(player.defense / 10)) / 2 + 1
			);
			let attackValues = [calcOutputDamage, numberOfHits];
			return attackValues;
		};

		//l'adversaire attaque
		let enemyAttack = function() {
			let calcBaseDamage;
			if (enemy.skill > 0) {
				calcBaseDamage = (enemy.attack * enemy.skill) / 1000;
			} else {
				calcBaseDamage = (enemy.attack * enemy.defense) / 1000;
			}
			let offsetDamage = Math.floor(Math.random() * Math.floor(10));
			let calcOutputDamage = calcBaseDamage + offsetDamage;
			//nombre de tour
			let numberOfHits = Math.floor(
				(Math.random() * Math.floor(enemy.defense / 10)) / 2 + 1
			);
			let attackValues = [calcOutputDamage, numberOfHits];
			return attackValues;
		};


		let getPlayerHealth = document.querySelector('.health-player');
		let getEnemyHealth = document.querySelector('.health-enemy');

		//lancer l'attaque
		if (getPlayermagik >= getEnemymagik) {
			let playerAttackValues = playerAttack();
			let totalDamage = playerAttackValues[0] * playerAttackValues[1];
			enemy.health = enemy.health - totalDamage;
			alert(
				'Vous causez' + ' ' +
					playerAttackValues[0] + ' ' +
					'dégats' + ' ' +
					playerAttackValues[1] + ' ' +
					'fois.'
			);
			if (enemy.health <= 0) {
				alert('Vous avez gagné, raffraichissez votre navigateur pour commecer une nouvelle partie !');
				getPlayerHealth.innerHTML = 'Health:' + player.health;
				getEnemyHealth.innerHTML = 'Health: 0';
			} else {
				getEnemyHealth.innerHTML = 'Health:' + enemy.health;
				//L'adversaire attaque
				let enemyAttackValues = enemyAttack();
				let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
				player.health = player.health - totalDamage;
				alert(
					'L\'adversaire vous cause' + ' ' +
						enemyAttackValues[0] + ' ' +
						'dégats' + ' ' +
						enemyAttackValues[1] + ' ' +
						'fois.'
				);
				if (player.health <= 0) {
					alert('vous avez perdu, raffraichissez votre navigateur pour commecer une nouvelle partie !');
					getPlayerHealth.innerHTML = 'Health: 0';
					getEnemyHealth.innerHTML = 'Health:' + enemy.health;
				} else {
					getPlayerHealth.innerHTML = 'Health:' + player.health;
				}
			}
		} else if (getPlayermagik < getEnemymagik) {
			let enemyAttackValues = enemyAttack();
			let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
			player.health = player.health - totalDamage;
			alert(
				'L\'adversaire vous cause' + ' ' +
				enemyAttackValues[0] + ' ' +
				'dégats' + ' ' +
				enemyAttackValues[1] + ' ' +
				'fois.'
			);

			if (player.health <= 0) {
				alert('vous avez perdu, raffraichissez votre navigateur pour commecer une nouvelle partie !');
				getEnemyHealth.innerHTML = 'Health:' + enemy.health;
				getPlayerHealth.innerHTML = 'Health: 0';
			} else {
				getPlayerHealth.innerHTML = 'Health:' + player.health;
				//Le joueur attaque
				let playerAttackValues = playerAttack();
				let totalDamage = playerAttackValues[0] * playerAttackValues[1];
				enemy.health = enemy.health - totalDamage;
				alert(
					'Vous causez' + ' ' +
					playerAttackValues[0] + ' ' +
					'dégats' + ' ' +
					playerAttackValues[1] + ' ' +
					'fois.'
				);

				if (enemy.health <= 0) {
					alert('Vous avez gagné, raffraichissez votre navigateur pour commecer une nouvelle partie !');
					getEnemyHealth.innerHTML = 'Health: 0';
					getPlayerHealth.innerHTML = 'Health:' + player.health;
				} else {
					getEnemyHealth.innerHTML = 'Health:' + enemy.health;
				}
			}
		}
	}
};
