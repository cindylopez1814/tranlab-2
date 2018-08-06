// funcionalidad del side Menú
function toggleMenu() { // añadir función onclick="toggleMenu()" al botón del nav bar y al botón cerrar.
  if (sideMenu.className.indexOf('menu_closed') >= 0) { // primero revisamos si la clase d-none esta
    openMenu(); // si esta la clase quiere decir que el menú esta cerrado, asi que llamamos la funcion para abrirlo
  } else {
    closeMenu(); // si no esta la clase, le indicamos que cierre el menu
  }
}

function openMenu() {
  sideMenu.classList.remove('menu_closed'); // quitando clase display-none
  sideMenu.classList.add('menu_open');
}

function closeMenu() {
  sideMenu.classList.add('menu_closed'); // añadimos la clase display-none
  sideMenu.classList.remove('menu_open');
}

home.addEventListener('click', () => {
  secondScreen.classList.remove('d-none');
  sideMenu.classList.add('menu_closed');
  sideMenu.classList.remove('menu_open');
  containerProfile.classList.add('d-none');
});

screenSaldo.addEventListener('click', () => {
  secondScreen.classList.add('d-none');
  sideMenu.classList.add('menu_closed');
  sideMenu.classList.remove('menu_open');
  containerProfile.classList.add('d-none');
  containerSaldo.classList.remove('d-none');
});

saldoBip.addEventListener('click', () => {
  secondScreen.classList.add('d-none');
  sideMenu.classList.add('menu_closed');
  sideMenu.classList.remove('menu_open');
  containerProfile.classList.add('d-none');
  containerSaldo.classList.remove('d-none');
});

screenCalculate.addEventListener('click', () => {

});

screenProfile.addEventListener('click', () => {
  secondScreen.classList.add('d-none');
  sideMenu.classList.add('menu_closed');
  sideMenu.classList.remove('menu_open');
  containerProfile.classList.remove('d-none');
  containerSaldo.classList.add('d-none');
  showInfoUser();
});

profileUser.addEventListener('click', () => {
  secondScreen.classList.add('d-none');
  sideMenu.classList.add('menu_closed');
  sideMenu.classList.remove('menu_open');
  containerProfile.classList.remove('d-none');
  showInfoUser();
});

screenQuestions.addEventListener('click', () => {

});