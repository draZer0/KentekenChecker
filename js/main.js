window.onload = () => {

  new WOW().init();

  const image = document.getElementById('js--image');
  const imagebutton = document.getElementById('js--imagebutton');
  const imagetext = document.getElementById('js--imagetext');

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
  const textDatumEersteToelating = document.getElementById('js--datum_eerste_toelating');
  const textDatumEersteAfgifte = document.getElementById('js--datum_eerste_afgifte_nederland');


  const textCatalogusprijs = document.getElementById('js--catalogusprijs');

  const getKenteken = (kenteken) => {
    let request = fetch("https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=" + kenteken + "&$$app_token=iGI52UvtT9HJ2ojfwD03tkjgX")
      .then( (data) => {
          return data.json();
      })
      .then( (response) => {

        let checkObj = (response) => {
            if(response != null || response != undefined) {
                return response;
            } else {
                return "Niet beschikbaar";
            }
        };

        textVoertuigsoort.innerHTML = checkObj(response[0].voertuigsoort);
        textInrichting.innerHTML = checkObj(response[0].inrichting);

        textKenteken.innerHTML = checkObj(response[0].kenteken);
        textMerk.innerHTML = checkObj(response[0].merk);
        textHandelsbenaming.innerHTML = checkObj(response[0].handelsbenaming);

        let test = checkObj(response[0].vervaldatum_apk);
        let test2 = test[6] + test[7] + "-" + test[4] + test[5] + "-" + test[0] + test[1] + test[2] + test[3];
        textVervaldatumApk.innerHTML = test2;

        let test3 = checkObj(response[0].datum_tenaamstelling);
        let test4 = test3[6] + test3[7] + "-" + test3[4] + test3[5] + "-" + test3[0] + test3[1] + test3[2] + test3[3];
        textDatumTenaamstelling.innerHTML = test4;
        document.getElementById('js--bruto_bpm').innerHTML = checkObj(response[0].bruto_bpm);
        document.getElementById('js--aantal_zitplaatsen').innerHTML = checkObj(response[0].aantal_zitplaatsen);
        document.getElementById('js--eerste_kleur').innerHTML = checkObj(response[0].eerste_kleur);
        document.getElementById('js--aantal_cilinders').innerHTML = checkObj(response[0].aantal_cilinders);
        document.getElementById('js--cilinderinhoud').innerHTML = checkObj(response[0].cilinderinhoud);
        document.getElementById('js--massa_ledig_voertuig').innerHTML = checkObj(response[0].massa_ledig_voertuig);
        document.getElementById('js--toegestane_maximum_massa_voertuig').innerHTML = checkObj(response[0].toegestane_maximum_massa_voertuig);
        document.getElementById('js--massa_rijklaar').innerHTML = checkObj(response[0].massa_rijklaar);
        document.getElementById('js--maximum_massa_trekken_ongeremd').innerHTML = checkObj(response[0].maximum_massa_trekken_ongeremd);
        document.getElementById('js--maximum_trekken_massa_geremd').innerHTML = checkObj(response[0].maximum_trekken_massa_geremd);

        let datumEersteToelating = checkObj(response[0].datum_eerste_toelating);
        let datumEersteToelatingResult = datumEersteToelating[6] + datumEersteToelating[7] + "-" + datumEersteToelating[4] + datumEersteToelating[5] + "-" + datumEersteToelating[0] + datumEersteToelating[1] + datumEersteToelating[2] + datumEersteToelating[3];
        textDatumEersteToelating.innerHTML = datumEersteToelatingResult;

        let jaar = checkObj(response[0].datum_eerste_toelating);
        let jaarResult = jaar[0] + jaar[1] + jaar[2] + jaar[3];
        document.getElementById('js--jaar').innerHTML = jaarResult;

        let datumEersteAfgifte = checkObj(response[0].datum_eerste_afgifte_nederland);
        let datumEersteAfgifteResult = datumEersteAfgifte[6] + datumEersteAfgifte[7] + "-" + datumEersteAfgifte[4] + datumEersteAfgifte[5] + "-" + datumEersteAfgifte[0] + datumEersteAfgifte[1] + datumEersteAfgifte[2] + datumEersteAfgifte[3];
        textDatumEersteAfgifte.innerHTML = datumEersteAfgifteResult;
        document.getElementById('js--wacht_op_keuren').innerHTML = checkObj(response[0].wacht_op_keuren);
        textCatalogusprijs.innerHTML = checkObj(response[0].catalogusprijs);
        document.getElementById('js--wam_verzekerd').innerHTML = checkObj(response[0].wam_verzekerd);

        document.getElementById('js--aantal_deuren').innerHTML = checkObj(response[0].aantal_deuren);
        document.getElementById('js--aantal_wielen').innerHTML = checkObj(response[0].aantal_wielen);


        document.getElementById('js--lengte').innerHTML = checkObj(response[0].lengte);

        document.getElementById('js--technische_max_massa_voertuig').innerHTML = checkObj(response[0].technische_max_massa_voertuig);

        document.getElementById('js--vermogen_massarijklaar').innerHTML = checkObj(response[0].vermogen_massarijklaar);
        document.getElementById('js--wielbasis').innerHTML = checkObj(response[0].wielbasis);
        document.getElementById('js--export_indicator').innerHTML = checkObj(response[0].export_indicator);
        document.getElementById('js--openstaande_terugroepactie_indicator').innerHTML = checkObj(response[0].openstaande_terugroepactie_indicator);
        document.getElementById('js--taxi_indicator').innerHTML = checkObj(response[0].taxi_indicator);
        document.getElementById('js--maximum_massa_samenstelling').innerHTML = checkObj(response[0].maximum_massa_samenstelling);
      });
  }

  const getImage = (image) => {
    let request = fetch("https://pixabay.com/api/?key=14824179-6d967f7c754b5fe0ea11afd63&q=" + image + "&image_type=photo&pretty=true")
      .then( (data) => {
          return data.json();
      })
      .then( (response) => {
        // imagetext.innerHTML = response[0].totalHits;
        image.src = response.hits[0].largeImageURL[0];
        imagetext.innerHTML = response.hits[0].likes;
        // image.src = response.hits[0].largeImageURL;
      });
  }

  button.onclick = (event) => {
    let kenteken = input.value.toUpperCase();
    getKenteken(kenteken);
    kentekenContainer.style.display = 'block';
  }

  imagebutton.onclick = (event) => {
    let image = "yellow";
    // console.log("klik");
    getImage(image);
  }

  input.onkeyup = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      button.click();
    }
  }
}
