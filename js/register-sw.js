
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js')
      .then(reg => {
        console.log("Service worker esta listo!");
      });
}
else {
  console.log("Service worker no soportado.");
}

window.addEventListener('offline', event => {
  document.querySelector('body').classList.add('offline');
  main.innerHTML = "La aplicacion esta offline!"
});

window.addEventListener('online', event => {
  document.querySelector('body').classList.remove('offline');
  openSoccerApi();
});

