var scene;
var camera; 
var render;

var elements = [];

var parametrosGUI;

var controls;

var solGroup;

var tempo = 0;

//Função para que o usuário possa alterar as  informações
var createGui = function(){
	const gui = new dat.GUI();

	parametrosGUI = {
		skyColor: "#00bfff",
		arvoreColor: "#556B2F",
	}

	//Agrupando os objetos que eu quero mudar de cor
	let cores = gui.addFolder("Cores");
	//Definindo a opção que vai mudar a cor das arvores
	let tronColor = cores.addColor(parametrosGUI, 'arvoreColor').name("Árvores");
	//Altera a cor das árvores conforme o usuário mexe no menu
	tronColor.onChange(function(parametro){
		//console.log(elements["arvore"]);
		elements["arvore"].traverse(
			function (child){
				if (child instanceof THREE.Mesh){
					child.material = new THREE.MeshStandardMaterial({color: new THREE.Color(parametro)});
					console.log("passou aqui");
				}
			}
		);
		elements["arvore2"].traverse(
			function (child){
				if (child instanceof THREE.Mesh){
					child.material = new THREE.MeshStandardMaterial({color: new THREE.Color(parametro)});
					console.log("passou aqui");
				}
			}
		);
		elements["arvore3"].traverse(
			function (child){
				if (child instanceof THREE.Mesh){
					child.material = new THREE.MeshStandardMaterial({color: new THREE.Color(parametro)});
					console.log("passou aqui");
				}
			}
		);
		elements["arvore4"].traverse(
			function (child){
				if (child instanceof THREE.Mesh){
					child.material = new THREE.MeshStandardMaterial({color: new THREE.Color(parametro)});
					console.log("passou aqui");
				}
			}
		);
		elements["arvore5"].traverse(
			function (child){
				if (child instanceof THREE.Mesh){
					child.material = new THREE.MeshStandardMaterial({color: new THREE.Color(parametro)});
					console.log("passou aqui");
				}
			}
		);
	});

	//Função para alterar a cor do céu conforme o usuário quiser
	let skyColor = cores.addColor(parametrosGUI, 'skyColor').name("Céu");
	skyColor.onChange(function(parametro){
		scene.background = new THREE.Color(parametro);
	});
}

//Carregando os objetos e texturas
var loadObjects = function(){
	let objLoader = new THREE.OBJLoader();
	let fbxLoader = new THREE.FBXLoader();
	let textLoader = new THREE.TextureLoader();

	fbxLoader.load(
		'assets/huge_tree.fbx',//o que carregar
		function(obj){ //função executada após o loadingz
			
			obj.traverse(
				function (child) {
					if (child instanceof THREE.Mesh) {
						child.material = new THREE.MeshStandardMaterial({ color: 0x556B2F });
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);

			obj.scale.x = 0.04;
			obj.scale.y = 0.08;
			obj.scale.z = 0.04;

			obj.position.x = 25;
			obj.position.y = -5.4;
			obj.position.z = -20;

			scene.add(obj);
			elements['arvore'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

	fbxLoader.load(
		'assets/huge_tree.fbx',//o que carregar
		function(obj){ //função executada após o loadingz
			
			obj.traverse(
				function (child) {
					if (child instanceof THREE.Mesh) {
						child.material = new THREE.MeshStandardMaterial({ color: 0x556B2F });
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);

			obj.scale.x = 0.04;
			obj.scale.y = 0.08;
			obj.scale.z = 0.04;

			obj.position.x = -59;
			obj.position.y = -5.4;
			obj.position.z = -146;

			scene.add(obj);
			elements['arvore2'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

	fbxLoader.load(
		'assets/huge_tree.fbx',//o que carregar
		function(obj){ //função executada após o loadingz
			
			obj.traverse(
				function (child) {
					if (child instanceof THREE.Mesh) {
						child.material = new THREE.MeshStandardMaterial({ color: 0x556B2F });
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);

			obj.scale.x = 0.04;
			obj.scale.y = 0.08;
			obj.scale.z = 0.04;

			obj.position.x = 150;
			obj.position.y = -5.4;
			obj.position.z = -250;

			scene.add(obj);
			elements['arvore3'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

	fbxLoader.load(
		'assets/huge_tree.fbx',//o que carregar
		function(obj){ //função executada após o loadingz
			
			obj.traverse(
				function (child) {
					if (child instanceof THREE.Mesh) {
						child.material = new THREE.MeshStandardMaterial({ color: 0x556B2F });
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);

			obj.scale.x = 0.04;
			obj.scale.y = 0.08;
			obj.scale.z = 0.04;

			obj.position.x = -180;
			obj.position.y = -5.4;
			obj.position.z = -80;

			scene.add(obj);
			elements['arvore4'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

	fbxLoader.load(
		'assets/huge_tree.fbx',//o que carregar
		function(obj){ //função executada após o loadingz
			
			obj.traverse(
				function (child) {
					if (child instanceof THREE.Mesh) {
						child.material = new THREE.MeshStandardMaterial({ color: 0x556B2F });
						child.castShadow = true;
						child.receiveShadow = true;
					}
				}
			);

			obj.scale.x = 0.04;
			obj.scale.y = 0.08;
			obj.scale.z = 0.04;

			obj.position.x = 150;
			obj.position.y = -5.4;
			obj.position.z = 120;

			scene.add(obj);
			elements['arvore5'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

	fbxLoader.load(
		'assets/casa.fbx',//o que carregar
		function(obj){ //função executada após o loading
			
			 obj.traverse(
			 	function (child){
			 		if (child instanceof THREE.Mesh){
			 			let texture = textLoader.load('assets/casa.png');
			 			child.material = new THREE.MeshStandardMaterial({map: texture});
			 			child.castShadow = true;
						child.receiveShadow = true;
						console.log("passou aqui");
			 		}
			 	}
			 );

			obj.scale.x = 0.05;
			obj.scale.y = 0.05;
			obj.scale.z = 0.05;

			obj.position.x = 90;
			obj.position.z = -450;
			obj.position.y = -5.9;
			
			obj.rotation.y = -200;
			
			scene.add(obj);
			elements['casa'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

	fbxLoader.load(
		'assets/Cow.fbx',//o que carregar
		function(obj){ //função executada após o loading
			
			 obj.traverse(
			 	function (child){
			 		if (child instanceof THREE.Mesh){
			 			let texture = textLoader.load('assets/UV Cow.png');
			 			child.material = new THREE.MeshStandardMaterial({map: texture});
			 			child.castShadow = true;
						child.receiveShadow = true;
						console.log("passou aqui");
			 		}
			 	}
			 );

			obj.scale.x = 0.08;
			obj.scale.y = 0.08;
			obj.scale.z = 0.08;

			obj.position.x = 100;
			obj.position.z = -100;
			obj.position.y = -5.9;
			
			
			scene.add(obj);
			elements['vaca'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

	fbxLoader.load(
		'assets/Deer.fbx',//o que carregar
		function(obj){ //função executada após o loading
			
			 obj.traverse(
			 	function (child){
			 		if (child instanceof THREE.Mesh){
			 			let texture = textLoader.load('assets/UV Deer.png');
			 			child.material = new THREE.MeshStandardMaterial({map: texture});
			 			child.castShadow = true;
						child.receiveShadow = true;
						console.log("passou aqui");
			 		}
			 	}
			 );

			obj.scale.x = 0.04;
			obj.scale.y = 0.04;
			obj.scale.z = 0.04;

			obj.position.x = 58;
			obj.position.z = 56;
			obj.position.y = -5.9;
			
			
			scene.add(obj);
			elements['viado'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

	fbxLoader.load(
		'assets/Sheep.fbx',//o que carregar
		function(obj){ //função executada após o loading
			
			 obj.traverse(
			 	function (child){
			 		if (child instanceof THREE.Mesh){
			 			let texture = textLoader.load('assets/UVSheep.png');
			 			child.material = new THREE.MeshStandardMaterial({map: texture});
			 			child.castShadow = true;
						child.receiveShadow = true;
						console.log("passou aqui");
			 		}
			 	}
			 );

			obj.scale.x = 0.03;
			obj.scale.y = 0.03;
			obj.scale.z = 0.03;

			obj.position.x = -58;
			obj.position.z = 56;
			obj.position.y = -5.9;
			
			
			scene.add(obj);
			elements['ovelha'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);

	fbxLoader.load(
		'assets/Horse.fbx',//o que carregar
		function(obj){ //função executada após o loading
			
			 obj.traverse(
			 	function (child){
			 		if (child instanceof THREE.Mesh){
			 			let texture = textLoader.load('assets/Horse.png');
			 			child.material = new THREE.MeshStandardMaterial({map: texture});
			 			child.castShadow = true;
						child.receiveShadow = true;
						console.log("passou aqui");
			 		}
			 	}
			 );

			obj.scale.x = 0.06;
			obj.scale.y = 0.06;
			obj.scale.z = 0.06;

			obj.position.x = -58;
			obj.position.z = -56;
			obj.position.y = -5.9;
			
			
			scene.add(obj);
			elements['cavalo'] = obj;
			console.log("Carregou!");
		},
		function (andamento){ //função executada durante o loading
			console.log(andamento.loaded/andamento.total*100 + "%");
		},
		function(error){//função executada se deu problema
			console.log("Deu erro: "+error);
		}
	);
}

//Função para criar o boneco
var criaBoneco = function(){
	//Textura que o professor mandou: https://polycount.com/discussion/189855/3d-head-texture-help

	let textLoader = new THREE.TextureLoader();

	//Criando o trondo do boneco
	//Criando a geometria de um cubo
	//com largura 5, profundidade 3 e altura 8
	var geoBox = new THREE.BoxGeometry (5, 8, 3);
	//Definindo a "textura"/cor do cubo
	var matBox = new THREE.MeshStandardMaterial({color: 0xf6b26b});
	//Realmente criando o cubo
	var tronco = new THREE.Mesh(geoBox, matBox);
	//Adiciona o tronco na lista de elementos, 
	//depois ele poderá ser chamado por esse nome
	elements["tronco"] = tronco;
	//Posicionando o tronco no eixo y, 
	//para que as pernas aparecam em cima da grama
	tronco.position.y+=8;
	
	//Criando uma esfera para ser a cabeça do boneco
	//Geometria da esfera, tendo 2.1 de raio
	var geoEsfera = new THREE.SphereGeometry(2.1, 32, 32);
	//Definindo a "textura"/cor da esfera
	//var matEsfera = new THREE.MeshStandardMaterial({color: 0xfff0c2});
	let texture = textLoader.load('assets/rosto5.jpg');
	var material = new THREE.MeshStandardMaterial({map: texture});
	//Criando a esfera
	var cabeca = new THREE.Mesh(geoEsfera, material);
	//Adicionando a esfera como filho do tronco
	//se o tronco se mover a cabeça vai junto com ele
	tronco.add(cabeca);
	//Adiciona o tronco na lista de elementos, 
	//depois ele poderá ser chamado por esse nome
	elements["cabeca"] = cabeca;
	//Definindo a posição da cabeça em relação ao tronco
	cabeca.position.y = 6.1;
	cabeca.rotation.y = 249.8;

	//Definindo os ombros do boneco

	//Criando uma esfera para ser um dos ombros do boneco
	//Geometria da esfera, tendo 1 de raio
	var geoEsferaOmbro = new THREE.SphereGeometry(1.1, 9, 9);
	//Definindo a "textura"/cor da esfera
	var matEsferaOmbro = new THREE.MeshStandardMaterial({color: 0xfff2cc});
	//Criando a esfera
	var ombroEsquerdo = new THREE.Mesh(geoEsferaOmbro, matEsferaOmbro); 
	//Definindo a posição do ombro esquerdo
	ombroEsquerdo.position.x = -3;
	ombroEsquerdo.position.y = 3.1;
	//Adicionando a esfera como filho do tronco
	//se o tronco se mover o ombro vai junto vai junto com ele
	tronco.add(ombroEsquerdo);
	//Criando um grupo para o ombro esquerdo
	var PivoOmbroEsquerdo = new THREE.Group();
	//Adicionando o ombro no grupo
	ombroEsquerdo.add(PivoOmbroEsquerdo);
	//Adiciona o pivo na lista de elementos, 
	//depois ele poderá ser chamado por esse nome
	elements["PivoOmbroEsquerdo"] = PivoOmbroEsquerdo;

	//Criando o ombro direito
	//Criando a esfera
	var ombroDireito = new THREE.Mesh(geoEsferaOmbro, matEsferaOmbro);
	//Definindo a posição do ombro esquerdo
	ombroDireito.position.x = 3;
	ombroDireito.position.y = 3.08;
	//Adicionando a esfera como filho do tronco
	//se o tronco se mover o ombro vai junto vai junto com ele
	tronco.add(ombroDireito);
	//Criando um grupo para o ombro esquerdo
	var PivoOmbroDireito = new THREE.Group();
	//Adicionando o ombro no grupo
	ombroDireito.add(PivoOmbroDireito);
	//Adiciona o tronco na lista de elementos, 
	//depois ele poderá ser chamado por esse nome
	elements["PivoOmbroDireito"] = PivoOmbroDireito;

	//Definindo os braços do boneco

	//Criando a parte de cima do braço do boneco
	//Criando a geometria do braço
	var geoBoxBraco = new THREE.BoxGeometry(1.2, 3, 1);
	//Criando a "textura"/cor do braço
	var matBoxBraco = new THREE.MeshStandardMaterial({color: 0xfff2cc});
	//Criando o braço esquerdo
	var bracoEsquerdo = new THREE.Mesh(geoBoxBraco, matBoxBraco);
	//Definindo a posição do braço esquerdo,
	//em relação ao ombro
	bracoEsquerdo.position.x -= 0.4;
	bracoEsquerdo.position.y = -1.6;
	//Adiciona o braço no grupo
	PivoOmbroEsquerdo.add(bracoEsquerdo);

	//Criando o braço direito
	var bracoDireito = new THREE.Mesh(geoBoxBraco, matBoxBraco);
	//Definindo a posição do braço direito,
	//em relação ao ombro
	bracoDireito.position.x += 0.3;
	bracoDireito.position.y = -1.6;
	//Adicionando o braço no grupo
	PivoOmbroDireito.add(bracoDireito);

	//Definindo os cotovelos do boneco

	//Criando uma esfera para ser um dos cotovelos do boneco
	//Geometria da esfera, tendo 1 de raio
	var geoEsferaCotovelo = new THREE.SphereGeometry(0.8, 9, 9);
	//Definindo a "textura"/cor da esfera
	var matEsferaCotovelo = new THREE.MeshStandardMaterial({color: 0xfff0c2});
	//Criando a esfera
	var cotoveloEsquerdo = new THREE.Mesh(geoEsferaCotovelo, matEsferaCotovelo);
	//Definindo a posição do cotovelo esquerdo
	cotoveloEsquerdo.position.x = -0.04;
	cotoveloEsquerdo.position.y = -2.1;
	//Adicionando a esfera como filho do braço
	//se o braço se mover o cotovelo vai junto com ele
	bracoEsquerdo.add(cotoveloEsquerdo);
	//Adicionando o cotovelo na lista de elementos, 
	//depois ele poderá ser chamado por esse nome
	elements["cotoveloEsquerdo"] = cotoveloEsquerdo;

	//Criando o cotovelo direito
	var cotoveloDireito = new THREE.Mesh(geoEsferaCotovelo, matEsferaCotovelo);
	//Definindo a posição do cotovelo direito
	cotoveloDireito.position.x = +0.04;
	cotoveloDireito.position.y = -2.1;
	//Adicionando a esfera como filho do braço
	//se o braço se mover o cotovelo vai junto com ele
	bracoDireito.add(cotoveloDireito);
	//Adicionando o cotovelo na lista de elementos, 
	//depois ele poderá ser chamado por esse nome
	elements["cotoveloDireito"] = cotoveloDireito;

	//Definindo o antebraço do boneco

	//Criando a parte de baixo do braço do boneco
	//Criando a geometria do antebraço
	var geoBoxAnteBraco = new THREE.BoxGeometry(1, 3.5, 1);
	//Criando a "textura"/cor do antebraço
	var matBoxAnteBraco = new THREE.MeshStandardMaterial({color: 0xfff0c2});
	//Criando o antebraço esquerdo
	var anteBracoEsquerdo = new THREE.Mesh(geoBoxAnteBraco, matBoxAnteBraco);
	//Definindo a posição do antebraço esquerdo,
	//em relação ao cotovelo
	anteBracoEsquerdo.position.y = -2.2;
	//Adiciona o antebraço no grupo
	cotoveloEsquerdo.add(anteBracoEsquerdo);

	//Criando o antebraço direito
	var anteBracoDireito = new THREE.Mesh(geoBoxAnteBraco, matBoxAnteBraco);
	//Definindo a posição do antebraço direito,
	//em relação ao cotovelo
	anteBracoDireito.position.y = -2.2;
	//Adicionando o antebraço no grupo
	cotoveloDireito.add(anteBracoDireito);

	//Definindo as bacia do boneco

	//Criando uma esfera para ser uma das bacia do boneco
	//Geometria da esfera, tendo 1.5 de raio
	var geoEsferaBacia = new THREE.SphereGeometry(1, 9, 9);
	//Definindo a "textura"/cor da esfera
	var matEsferaBacia = new THREE.MeshStandardMaterial({color: 0xfff2cc});
	//Criando a esfera
	var baciaEsquerda = new THREE.Mesh(geoEsferaBacia, matEsferaBacia);
	//Definindo a posição da bacia
	baciaEsquerda.position.x = -1.4;
	baciaEsquerda.position.y = -4.6;
	//Adicionando a esfera como filha do tronco
	//se o tronco se mover a bacia vai junto com ele
	tronco.add(baciaEsquerda);
	//Adiciona a bacia na lista de elementos, 
	//depois ela poderá ser chamada por esse nome
	elements["baciaEsquerda"] = baciaEsquerda;

	//Criando a bacia direita
	//Criando a esfera
	var baciaDireita = new THREE.Mesh(geoEsferaBacia, matEsferaBacia);
	//Definindo a posição do ombro esquerdo
	baciaDireita.position.x = 1.4;
	baciaDireita.position.y = -4.6;
	//Adicionando a esfera como filha do tronco
	//se o tronco se mover a bacia vai junto com ele
	tronco.add(baciaDireita);
	//Criando um grupo para a bacia esquerda
	//Adiciona a bacia na lista de elementos, 
	//depois ela poderá ser chamado por esse nome
	elements["baciaDireita"] = baciaDireita;

	//Criando as coxas do boneco

	//Criando a coxa do boneco
	//Criando a geometria da coxa
	var geoBoxCoxa = new THREE.BoxGeometry(1.5, 5, 1);
	//Criando a "textura"/cor da coxa
	var matBoxCoxa = new THREE.MeshStandardMaterial({color: 0xfff2cc});
	//Criando a coxa
	var coxaEsquerda = new THREE.Mesh(geoBoxCoxa, matBoxCoxa);
	//Definindo a posição da coxa esquerda,
	//em relação a bacia
	coxaEsquerda.position.y = -2;
	//Adiciona o braço no grupo
	baciaEsquerda.add(coxaEsquerda);

	//Criando a coxa direita
	var coxaDireita = new THREE.Mesh(geoBoxCoxa, matBoxCoxa);
	//Definindo a posição da coxa direita,
	//em relação a bacia
	coxaDireita.position.y = -2;
	//Adicionando a coxa no grupo
	baciaDireita.add(coxaDireita);

	//Criando os joelhos do boneco

	//Criando uma esfera para ser um dos joelhos do boneco
	//Geometria da esfera, tendo 0.8 de raio
	var geoEsferaJoelho = new THREE.SphereGeometry(0.87, 9, 9);
	//Definindo a "textura"/cor da esfera
	var matEsferaJoelho = new THREE.MeshStandardMaterial({color: 0xfff0c2});
	//Criando a esfera
	var joelhoEsquerdo = new THREE.Mesh(geoEsferaJoelho, matEsferaJoelho); 
	//Definindo a posição da bacia
	joelhoEsquerdo.position.y = -3;
	//Adicionando a esfera como filha do tronco
	//se o tronco se mover a bacia vai junto com ele
	coxaEsquerda.add(joelhoEsquerdo);
	//Adiciona a bacia na lista de elementos, 
	//depois ela poderá ser chamada por esse nome
	elements["joelhoEsquerdo"] = joelhoEsquerdo;

	//Criando o joelho direito
	//Criando a esfera
	var joelhoDireito = new THREE.Mesh(geoEsferaJoelho, matEsferaJoelho);
	//Definindo a posição do ombro esquerdo
	joelhoDireito.position.y = -3;
	//Adicionando a esfera como filha do tronco
	//se o tronco se mover a bacia vai junto com ele
	coxaDireita.add(joelhoDireito);
	//Adiciona a bacia na lista de elementos, 
	//depois ela poderá ser chamado por esse nome
	elements["joelhoDireito"] = joelhoDireito;

	//Criando as canela do boneco

	//Criando a canela do boneco
	//Criando a geometria da canela
	var geoBoxCanela = new THREE.BoxGeometry(1.2, 4, 1);
	//Criando a "textura"/cor da coxa
	var matBoxCanela = new THREE.MeshStandardMaterial({color: 0xfff0c2});
	//Criando a coxa
	var canelaEsquerda = new THREE.Mesh(geoBoxCanela, matBoxCanela);
	//Definindo a posição da coxa esquerda,
	//em relação a bacia
	canelaEsquerda.position.y = -2.5;
	//Adiciona o braço no grupo
	joelhoEsquerdo.add(canelaEsquerda);

	//Criando a coxa direita
	var canelaDireita = new THREE.Mesh(geoBoxCanela, matBoxCanela);
	//Definindo a posição da coxa direita,
	//em relação a bacia
	canelaDireita.position.y = -2.5;
	//Adicionando a coxa no grupo
	joelhoDireito.add(canelaDireita);

	tronco.receiveShadow = true
	tronco.castShadow = true;

	scene.add(tronco);
}

//Função do sol
var animation = function (){
	requestAnimationFrame(animation); //loop da animação
	if (solGroup){
		tempo++;

		//Fazendo com que o sol gire no eixo z ao longo do tempo
		solGroup.rotation.z+=0.001;

		//Dependendo do tempo a cor do céu é alterada
		if (tempo > 3000){
			if (elements['sol'].visible)
				scene.background = new THREE.Color(0x071021);
			else
				scene.background = new THREE.Color(0xcce0ff);
			elements['sol'].visible = !elements['sol'].visible;
			tempo = 0;
		}
	}

	render.render(scene,camera); //quem, e como será vista a cena
}

//Criando a luz ambiente para a cena
var luzAmbiente = function(){
	scene.add(new THREE.AmbientLight(0x666666, 0.6));
}

//Criando o sol
var directionalLight = function (){
	//Define a cor, intensidade da luz e distancia maxima até a luz
	let sol = new THREE.DirectionalLight(0xffffff, 1, 1000);
	//Habilita o sombreamento
	sol.castShadow = true;

	sol.shadow.mapSize.width = 4096;
	sol.shadow.mapSize.height = 4096;
	sol.shadow.camera.left = 1000;
	sol.shadow.camera.bottom = 1000;
	sol.shadow.camera.right = -1000
	sol.shadow.camera.top = -1000;

	//Altura do sol
	sol.position.y = 100;
	//Para aonde vai apontar
	sol.target = elements['ground'];

	scene.add(sol);

	solGroup = new THREE.Group();
	solGroup.add(sol);
	solGroup.rotation.z = -1.5;

	scene.add(solGroup);

	elements['sol'] = sol;

}

//Função para criar a iluminação da cena
var criaIluminacao = function (){
	luzAmbiente();
	directionalLight();
}

//Criando a cena
var init = function (){
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xcce0ff);

	//Definindo a camera
	camera = new THREE.PerspectiveCamera(
					40, //angulo de visualização
					window.innerWidth/window.innerHeight, //aspect ratio
					0.1, //distancia do near
					500 //far
				);


	render = new THREE.WebGLRenderer( {antialias: true});
	render.shadowMap.enabled = true;
	render.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(render.domElement);

	//Definindo as posições da camera
	camera.position.z = 70;
	camera.position.y = 6;
	camera.position.x = 4;

	//Chamando a função para que o usuário possa alterar as cores
	createGui();

	//Função que carrega os objetos na cena
	loadObjects();

	//Função que cria o boneco
	criaBoneco();
	
	//Função do sol
	animation();	
	
	//Para mover a camera
	controls = new THREE.OrbitControls(camera, render.domElement);
	
	//Criando o chão e definindo algumas regras
	var textLoader = new THREE.TextureLoader();
	let textureGround = textLoader.load('assets/grasslight-big.jpg');
	//Como vai ser a repetição da textura
	textureGround.wrapS = textureGround.wrapT = THREE.RepeatWrapping;
	textureGround.repeat.set(250,250);
	textureGround.anisotropy = 16;
	textureGround.encoding = THREE.sRGBEncoding;
	let materialGround = new THREE.MeshStandardMaterial({map: textureGround,transparent: false});
	
	let ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(10000,10000),
	materialGround);
	elements['ground'] = ground;
	ground.rotation.x = -Math.PI/2;
	ground.position.y-=6;
	ground.receiveShadow = true;
	scene.add(ground);
	
	//Chamando a função que cria a iluminação
	criaIluminacao();

	document.addEventListener('keydown', onKeyDown); //pegar um evento do teclado. Aperta tecla.
	document.addEventListener('keyup', onKeyUp); //pegar um evento do teclado. Solta tecla.

}

//Variaveis para fazer as movimentações
var rotCotoveloEsquerdo = 0.1;
var rotCotoveloDireito = 0.1;
var rotPivoOmbroEsquerdo = 0.1;
var rotPivoOmbroDireito = 0.1;
var rotCanelaEsquerda = 0.1;
var rotCanelaDireita = 0.1;
var rotCoxaEsquerda = 0.1;
var rotCoxaDireita = 0.1;
var movimentaCamera = 0.1;

var onKeyDown = function (e){
	console.log(e.keyCode);
	
	//Movimentando a camera

	//Vai para a frente
	if (e.keyCode == 38){
		camera.position.z-=0.5;
		console.log("Camera z:", camera.position.z)
	}
	//Vai para trás
	if (e.keyCode == 40){
		camera.position.z+=0.5;
		console.log("Camera z:", camera.position.z)
	}
	//Vai para a esquerda
	if (e.keyCode == 37){
		camera.position.x-=0.5;
		console.log("Camera x:", camera.position.x)
	}
	//Vai para a direita
	if (e.keyCode == 39){
		camera.position.x+=0.5;
		console.log("Camera x:", camera.position.x)
	}

	//Movimento de rotação
	//Usa o espaço
	if (e.keyCode == 32){
		elements["tronco"].rotation.y-=0.1;
	}

	//Se a tecla é pressionada e a rotação do elemento está fora de um intervalo específico, 
	//a direção da rotação é invertida e a rotação do elemento é ajustada de acordo
	
	//MOVIMENTOS DOS ANTEBRAÇOS

	//Mexendo o Antebraço esquerdo para cima e baixo
	//Usa a tecla "A"
	if (e.keyCode == 65){
		if (elements["cotoveloEsquerdo"].rotation.x < -2.8 || elements["cotoveloEsquerdo"].rotation.x > 0.3){
			rotCotoveloEsquerdo*=-1;
		}
		elements["cotoveloEsquerdo"].rotation.x-=rotCotoveloEsquerdo;
	}
	//Mexendo para o lado o Antebraço Esquerdo
	//Usa a tecla "B"
	if (e.keyCode == 66){
		if (elements["cotoveloEsquerdo"].rotation.z < -0.4 || elements["cotoveloEsquerdo"].rotation.z > 3.2){
			rotCotoveloEsquerdo*=-1;
		}
		elements["cotoveloEsquerdo"].rotation.z-=rotCotoveloEsquerdo;
	}

	//Mexendo o Antebraço direito para cima e baixo
	//Usa a tecla "C"
	if (e.keyCode == 67){
		if (elements["cotoveloDireito"].rotation.x < -2.8 || elements["cotoveloDireito"].rotation.x > 0.3){
			rotCotoveloDireito*=-1;
		}
		elements["cotoveloDireito"].rotation.x-=rotCotoveloDireito;
	}
	//Mexendo para o lado o Antebraço Direito
	//Usa a tecla "D"
	if (e.keyCode == 68){
		if (elements["cotoveloDireito"].rotation.z < -3.2 || elements["cotoveloDireito"].rotation.z > 0.5){
			rotCotoveloDireito*=-1;
		}
		elements["cotoveloDireito"].rotation.z-=rotCotoveloDireito;
	}

	//MOVIMENTOS DOS BRAÇOS

	//Mexendo o braço inteiro para cima e baixo
	//Usa a tecla "E"
	if (e.keyCode == 69){
		if (elements["PivoOmbroEsquerdo"].rotation.x < -3.4 || elements["PivoOmbroEsquerdo"].rotation.x > 0.5){
			rotPivoOmbroEsquerdo*=-1;
		}
		elements["PivoOmbroEsquerdo"].rotation.x-=rotPivoOmbroEsquerdo;
	}
	//Mexendo o braço esquerdo inteiro para lado
	//Usa a tecla "F"
	if (e.keyCode == 70){
		if (elements["PivoOmbroEsquerdo"].rotation.z < -2 || elements["PivoOmbroEsquerdo"].rotation.z > 0.5){
			rotPivoOmbroEsquerdo*=-1;
		}
		elements["PivoOmbroEsquerdo"].rotation.z-=rotPivoOmbroEsquerdo;
	}
	
	//Mexendo o braço inteiro para cima e baixo
	//Usa a tecla "G"
	if (e.keyCode == 71){
		if (elements["PivoOmbroDireito"].rotation.x < -3.4 || elements["PivoOmbroDireito"].rotation.x > 0.5){
			rotPivoOmbroDireito*=-1;
		}
		elements["PivoOmbroDireito"].rotation.x-=rotPivoOmbroDireito;
	}
	//Mexendo o braço direito inteiro para lado
	//Usa a tecla "Q"
	if (e.keyCode == 81){
		if (elements["PivoOmbroDireito"].rotation.z < -0.8 || elements["PivoOmbroDireito"].rotation.z > 2){
			rotPivoOmbroDireito*=-1;
		}
		elements["PivoOmbroDireito"].rotation.z-=rotPivoOmbroDireito;
	}

	//MOVIMENTOS DAS CANELAS
	
	//Mexendo a canela esquerda para cima e baixo
	//Usa a tecla "I"
	if (e.keyCode == 73){
		if (elements["joelhoEsquerdo"].rotation.x < -0.0 || elements["joelhoEsquerdo"].rotation.x > 2.7){
			rotCanelaEsquerda*=-1;
		}
		elements["joelhoEsquerdo"].rotation.x-=rotCanelaEsquerda;
	}
	//Mexendo a canela esquerda para os lados
	//Usa a tecla "J"
	if (e.keyCode == 74){
		if (elements["joelhoEsquerdo"].rotation.z < -0 || elements["joelhoEsquerdo"].rotation.z > 0.3){
			rotCanelaEsquerda*=-1;
		}
		elements["joelhoEsquerdo"].rotation.z-=rotCanelaEsquerda;	
	}

	//Mexendo a canela direita para cima e baixo
	//Usa a tecla "K"
	if (e.keyCode == 75){
		if (elements["joelhoDireito"].rotation.x < -0.0 || elements["joelhoDireito"].rotation.x > 2.7){
			rotCanelaDireita*=-1;
		}
		elements["joelhoDireito"].rotation.x-=rotCanelaDireita;
	}
	//Mexendo a canela direita para os lados
	//Usa a tecla "L"
	if (e.keyCode == 76){
		if (elements["joelhoDireito"].rotation.z < -0 || elements["joelhoDireito"].rotation.z > 0.3){
			rotCanelaDireita*=-1;
		}
		elements["joelhoDireito"].rotation.z-=rotCanelaDireita;	
	}

	//MOVIMENTOS DAS COXAS
	
	//Mexendo perna esquerda para cima e baixo
	//Usa a tecla "M"
	if (e.keyCode == 77){
		if (elements["baciaEsquerda"].rotation.x < -2.4 || elements["baciaEsquerda"].rotation.x > 1.6){
			rotCoxaEsquerda*=-1;
		}
		console.log("Coxa:",elements["baciaEsquerda"].rotation.x)
		elements["baciaEsquerda"].rotation.x-=rotCoxaEsquerda;
	}
	//Mexendo a perna esquerda para os lados
	//Usa a tecla "N"
	if (e.keyCode == 78){
		if (elements["baciaEsquerda"].rotation.z < -0.8 || elements["baciaEsquerda"].rotation.z > 0.35){
			rotCoxaEsquerda*=-1;
		}
		elements["baciaEsquerda"].rotation.z-=rotCoxaEsquerda;	
	}

	//Mexendo a perna direita para cima e baixo
	//Usa a tecla "O"
	if (e.keyCode == 79){
		if (elements["baciaDireita"].rotation.x < -2.4 || elements["baciaDireita"].rotation.x > 1.6){
			rotCoxaDireita*=-1;
		}
		elements["baciaDireita"].rotation.x-=rotCoxaDireita;
	}
	//Mexendo a perna direita para os lados
	//Usa a tecla "P"
	if (e.keyCode == 80){
		if (elements["baciaDireita"].rotation.z < -0.8 || elements["baciaDireita"].rotation.z > 0.35){
			rotCoxaDireita*=-1;
		}
		elements["baciaDireita"].rotation.z-=rotCoxaDireita;	
	}
	
}

window.onload = this.init;