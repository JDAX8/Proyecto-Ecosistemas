function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);

  // Crear el botón
  let backButton = createButton('');
  backButton.class('back');
  backButton.mousePressed(cambiarPagina);

  let backImage = createImg('Frame.png', 'back');
  backImage.size(30, 30);
  backButton.child(backImage);

  // Crear el encabezado
  let header = createDiv('');
  header.class('head');
  let corona = createImg('Vector 2.png', '');
  corona.id('corona');
  corona.size(70, 50);
  let title = createElement('h1', 'Score');

  // Crear el elemento de imagen y número
  let imageNumber = createDiv('');
  imageNumber.class('imagen-numero');
  let profileImage = createImg('https://vivolabs.es/wp-content/uploads/2022/03/perfil-hombre-vivo.png', '');
  profileImage.size(100, 100);
  profileImage.style('border-radius', '100px');
  profileImage.style('border', '4px solid #002046bf');
  let number = createElement('h3', 'N0.8');

  // Crear el contenedor de la puntuación
  let scoreboard = createDiv('');
  scoreboard.class('Scoreboard');

  // Crear el jugador 1
  let player1 = createDiv('');
  player1.id('player1');
  player1.size(700, 110);
  player1.child(createElement('h1', '1').style('margin', '0 30px'));
  let player1Img = createImg('https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg', '');
  player1Img.size(100, 100);
  player1Img.style('border-radius', '100px');
  player1.child(player1Img);
  player1.child(createElement('h1', 'Juan David Peñagos'));
  player1.child(createElement('h1', '0:20'));

  // Crear el contenedor para jugadores 2, 3, 4 y 5
  let cuadro = createDiv('');
  cuadro.class('cuadro');
  cuadro.style('display', 'flex');
  cuadro.style('flex-direction', 'column');
  cuadro.style('align-items', 'center');

  // Crear jugadores 2, 3, 4 y 5
  for (let i = 2; i <= 5; i++) {
    let player = createDiv('');
    player.id('player2');
    player.style('margin-top', '5%');
    player.size(600, 90);
    player.child(createElement('h1', i).class('position').style('margin-left', '5%').style('display', 'flex').style('flex', '0.2'));
    let playerImg = createImg('image 38.png', '');
    playerImg.size(70, 70);
    playerImg.style('border-radius', '100px');
    playerImg.style('margin-right', '5%');
    player.child(playerImg);
    player.child(createElement('h1', 'Nombre').class('nombre'));
    player.child(createElement('h1', '0:21').class('timer'));
    cuadro.child(player);
  }

  // Agregar elementos al DOM
  backButton.parent('canvas-container');
  header.parent('canvas-container');
  imageNumber.parent('canvas-container');
  scoreboard.parent('canvas-container');
  scoreboard.child(player1);
  scoreboard.child(cuadro);
}

function draw() {
  // Código de dibujo, si es necesario
}

function cambiarPagina() {
  window.location.href = 'main-menu.html';
}
