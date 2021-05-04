let GameManager = {
	setGameStart: function (classType) {
		this.resetPlayer(classType);
		this.setPreFight(classType);
	},

	// Création des personnages et attribution de leurs points
	resetPlayer: function (classType) {
		switch (classType) {
			case 'Thor':
				player = new Player(classType, 12, 10, 0, 0, 0);
				break;
			case 'Black-widow':
				player = new Player(classType, 12, 10, 0, 0, 0);
				break;
		}

		// Choix du personnage et affichage de celui-ci
		let getJeux = document.querySelector('.jeux');
		getJeux.innerHTML =
			'<img src="img/' +
			classType.toLowerCase() +
			'.jpeg" class="img-avatar"><div><h3>' +
			classType +
			'</h3><p class="health-player">Health: ' +
			player.health +
			'</p><p>Skill: ' +
			player.skill +
			'</p><p>Attack: ' +
			player.attack +
			'</p><p>defense: ' +
			player.defense +
			'</p><p>Magik: ' +
			player.magik +
			'</p></div>';
	},

	// changement du header et affichage du bouton action
	setPreFight: function () {
		let getHeader = document.querySelector('.header');
		let getActions = document.querySelector('.actions');
		let getArene = document.querySelector('.arene');
		getHeader.innerHTML = '<p>Commencez votre combat !</p>';
		getActions.innerHTML =
			'<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Trouver votre adversaire !</a>';
		getArene.style.visibility = 'visible';
	},


	setFight: function () {
		let getHeader = document.querySelector('.header');
		let getActions = document.querySelector('.actions');
		let getEnemy = document.querySelector('.enemy');

		// Création de l'adversaire
		let enemy00 = new Enemy('Thanos', 12, 10, 0, 0, 0);
		let enemy01 = new Enemy('Loki', 12, 10, 0, 0, 0);
		let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
		switch (chooseRandomEnemy) {
			case 0:
				enemy = enemy00;
				break;
			case 1:
				enemy = enemy01;
				break;
		}

		// changement du header, affichage du bouton action et des caracteristiques de l'adversaire
		getHeader.innerHTML = '<p>Vous pouvez attaquer !</p>';
		getActions.innerHTML =
			'<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attaquer !</a>';
		getEnemy.innerHTML =
			'<img src="img/' +
			enemy.enemyType.toLowerCase() +
			'.jpeg" class="img-avatar"><div><h3>' +
			enemy.enemyType +
			'</h3><p class="health-enemy">Health: ' +
			enemy.health +
			'</p><p>Skill: ' +
			enemy.skill +
			'</p><p>Attack: ' +
			enemy.attack +
			'</p><p>Defense: ' +
			enemy.defense +
			'</p><p>Magik: ' +
			enemy.magik +
			'</p></div>';
	}
};