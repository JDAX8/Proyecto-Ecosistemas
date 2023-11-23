function setup() {
  noCanvas();
  createElements();
}

function draw() {}

function backMain() {
  window.location.href = "../main-menu/main-menu.html";
}

function movePlay() {
  window.location.href = "../maze/maze.html";
}

function createElements() {
  let backButton = createButton("");
  backButton.class("back");
  backButton.mousePressed(backMain);

  let backImage = createImg("../imgs/Frame.png", "back");
  backImage.size(30, 30);
  backButton.child(backImage);

  // Crear elementos del encabezado
  let header = createDiv("");
  header.class("head");
  let title = createElement("h1", "Photo");
  let number = createElement(
    "p",
    "Take a photo to identify your self in the competition."
  );

  // Crear elemento de imagen
  let imageNumber = createDiv("");
  imageNumber.class("photo");
  let profileImage = createImg(
    "https://vivolabs.es/wp-content/uploads/2022/03/perfil-hombre-vivo.png",
    ""
  );

  // Agregar elementos al DOM
  document.body.appendChild(backButton.elt);
  document.body.appendChild(header.elt);
  header.child(title);
  header.child(number);
  document.body.appendChild(imageNumber.elt);
  imageNumber.child(profileImage);

  let menuDiv = createDiv("");
  menuDiv.class("menu-buttons");

  let startButton = createButton("Take a Photo");
  startButton.mousePressed(movePlay);
  startButton.class("buttonPhoto");

  let playersScoreButton = createButton("Select from Gallery");
  playersScoreButton.mousePressed(movePlay);
  playersScoreButton.class("buttonPhoto");

  //menuDiv.parent("body");
  startButton.parent(menuDiv);
  playersScoreButton.parent(menuDiv);

  let logoDiv = createDiv("");
  logoDiv.class("logo-div");

  let logo = createImg("../imgs/rappi-logo-2.png", "Rappi Logo");
  logo.style("max-width", "100%");
  logo.style("height", "auto");
  logo.style("margin-bottom", "20px");

  logo.parent(logoDiv);
}
