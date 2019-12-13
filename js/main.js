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
        document.getElementById('js--bruto_bpm').innerHTML = response[0].bruto_bpm;
        document.getElementById('js--inrichting').innerHTML = response[0].inrichting;
        document.getElementById('js--aantal_zitplaatsen').innerHTML = response[0].aantal_zitplaatsen;
        document.getElementById('js--eerste_kleur').innerHTML = response[0].eerste_kleur;
        document.getElementById('js--tweede_kleur').innerHTML = response[0].tweede_kleur;
        document.getElementById('js--aantal_cilinders').innerHTML = response[0].aantal_cilinders;
        document.getElementById('js--cilinderinhoud').innerHTML = response[0].cilinderinhoud;
        document.getElementById('js--massa_ledig_voertuig').innerHTML = response[0].massa_ledig_voertuig;
        document.getElementById('js--toegestane_maximum_massa_voertuig').innerHTML = response[0].toegestane_maximum_massa_voertuig;
        document.getElementById('js--massa_rijklaar').innerHTML = response[0].massa_rijklaar;
        document.getElementById('js--maximum_massa_trekken_ongeremd').innerHTML = response[0].maximum_massa_trekken_ongeremd;
        document.getElementById('js--maximum_trekken_massa_geremd').innerHTML = response[0].maximum_trekken_massa_geremd;
        document.getElementById('js--retrofit_roetfilter').innerHTML = response[0].retrofit_roetfilter;
        document.getElementById('js--zuinigheidslabel').innerHTML = response[0].zuinigheidslabel;
        document.getElementById('js--datum_eerste_toelating').innerHTML = response[0].datum_eerste_toelating;
        document.getElementById('js--datum_eerste_afgifte_nederland').innerHTML = response[0].datum_eerste_afgifte_nederland;
        document.getElementById('js--wacht_op_keuren').innerHTML = response[0].wacht_op_keuren;
        textCatalogusprijs.innerHTML = response[0].catalogusprijs;
        document.getElementById('js--wam_verzekerd').innerHTML = response[0].wam_verzekerd;
        document.getElementById('js--maximale_constructiesnelheid_brom_snorfiets').innerHTML = response[0].maximale_constructiesnelheid_brom_snorfiets;
        document.getElementById('js--laadvermogen').innerHTML = response[0].laadvermogen;

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
