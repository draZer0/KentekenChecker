window.onload = () => {
  const input = document.getElementById('js--input');
  const button = document.getElementById('js--button');
  const kentekenContainer = document.getElementById('js--kenteken-container');

  // ALL DATA from API
  const textKenteken = document.getElementById('js--kenteken');
  const textVoertuigsoort = document.getElementById('js--voertuigsoort');
  const textMerk = document.getElementById('js--merk');
  const textHandelsbenaming = document.getElementById('js--handelsbenaming');
  const textVervaldatumApk = document.getElementById('js--vervaldatum_apk');
  const textDatumTenaamstelling = document.getElementById('js--datum_tenaamstelling');


  const textCatalogusprijs = document.getElementById('js--catalogusprijs');

  const getKenteken = (kenteken) => {
    let request = fetch("https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=" + kenteken + "&$$app_token=iGI52UvtT9HJ2ojfwD03tkjgX")
      .then( (data) => {
          return data.json();
      })
      .then( (response) => {
        textKenteken.innerHTML = response[0].kenteken;
        textVoertuigsoort.innerHTML = response[0].voertuigsoort;
        textMerk.innerHTML = response[0].merk;
        textHandelsbenaming.innerHTML = response[0].handelsbenaming;
        textVervaldatumApk.innerHTML = response[0].vervaldatum_apk;
        textDatumTenaamstelling.innerHTML = response[0].datum_tenaamstelling;

        textCatalogusprijs.innerHTML = response[0].catalogusprijs;
      });
  }

  button.onclick = (event) => {
    let kenteken = input.value.toUpperCase();
    getKenteken(kenteken);
    kentekenContainer.style.display = 'block';
  }

  input.onkeyup = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
    }
  }
}
