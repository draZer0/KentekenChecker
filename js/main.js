window.onload = () => {
  const input = document.getElementById('js--input');
  const button = document.getElementById('js--button');
  const kentekenContainer = document.getElementById('js--kenteken-container');

  // ALL DATA from API
  const textVoertuigsoort = document.getElementById('js--voertuigsoort');
  const textInrichting = document.getElementById('js--inrichting');
  const textKenteken = document.getElementById('js--kenteken');
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
        textVoertuigsoort.innerHTML = response[0].voertuigsoort;
        textInrichting.innerHTML = response[0].inrichting;

        textKenteken.innerHTML = response[0].kenteken;
        textMerk.innerHTML = response[0].merk;
        textHandelsbenaming.innerHTML = response[0].handelsbenaming;

        let test = response[0].vervaldatum_apk;
        let test2 = test[6] + test[7] + "-" + test[4] + test[5] + "-" + test[0] + test[1] + test[2] + test[3];
        textVervaldatumApk.innerHTML = test2;

        let test3 = response[0].datum_tenaamstelling;
        let test4 = test3[6] + test3[7] + "-" + test3[4] + test3[5] + "-" + test3[0] + test3[1] + test3[2] + test3[3];
        textDatumTenaamstelling.innerHTML = test4;
        document.getElementById('js--bruto_bpm').innerHTML = response[0].bruto_bpm;
        document.getElementById('js--aantal_zitplaatsen').innerHTML = response[0].aantal_zitplaatsen;
        document.getElementById('js--eerste_kleur').innerHTML = response[0].eerste_kleur;
        document.getElementById('js--aantal_cilinders').innerHTML = response[0].aantal_cilinders;
        document.getElementById('js--cilinderinhoud').innerHTML = response[0].cilinderinhoud;
        document.getElementById('js--massa_ledig_voertuig').innerHTML = response[0].massa_ledig_voertuig;
        document.getElementById('js--toegestane_maximum_massa_voertuig').innerHTML = response[0].toegestane_maximum_massa_voertuig;
        document.getElementById('js--massa_rijklaar').innerHTML = response[0].massa_rijklaar;
        document.getElementById('js--maximum_massa_trekken_ongeremd').innerHTML = response[0].maximum_massa_trekken_ongeremd;
        document.getElementById('js--maximum_trekken_massa_geremd').innerHTML = response[0].maximum_trekken_massa_geremd;

        document.getElementById('js--datum_eerste_toelating').innerHTML = response[0].datum_eerste_toelating;

        let jaar = response[0].datum_eerste_toelating;
        let jaarResult = jaar[0] + jaar[1] + jaar[2] + jaar[3];
        document.getElementById('js--jaar').innerHTML = jaarResult;
        document.getElementById('js--datum_eerste_afgifte_nederland').innerHTML = response[0].datum_eerste_afgifte_nederland;
        document.getElementById('js--wacht_op_keuren').innerHTML = response[0].wacht_op_keuren;
        textCatalogusprijs.innerHTML = response[0].catalogusprijs;
        document.getElementById('js--wam_verzekerd').innerHTML = response[0].wam_verzekerd;

        document.getElementById('js--aantal_deuren').innerHTML = response[0].aantal_deuren;
        document.getElementById('js--aantal_wielen').innerHTML = response[0].aantal_wielen;


        document.getElementById('js--lengte').innerHTML = response[0].lengte;

        document.getElementById('js--technische_max_massa_voertuig').innerHTML = response[0].technische_max_massa_voertuig;

        document.getElementById('js--vermogen_massarijklaar').innerHTML = response[0].vermogen_massarijklaar;
        document.getElementById('js--wielbasis').innerHTML = response[0].wielbasis;
        document.getElementById('js--export_indicator').innerHTML = response[0].export_indicator;
        document.getElementById('js--openstaande_terugroepactie_indicator').innerHTML = response[0].openstaande_terugroepactie_indicator;
        document.getElementById('js--taxi_indicator').innerHTML = response[0].taxi_indicator;
        document.getElementById('js--maximum_massa_samenstelling').innerHTML = response[0].maximum_massa_samenstelling;
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
