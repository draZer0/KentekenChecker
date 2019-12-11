window.onload = () => {
  const box = document.getElementById('js--box');
  const text = document.getElementById('js--placeholder');
  const input = document.getElementById('js--input');
  const button = document.getElementById('js--button');

  const getKenteken = (kenteken) => {
    let merk = fetch("https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=" + kenteken + "&$$app_token=iGI52UvtT9HJ2ojfwD03tkjgX")
      .then( (data) => {
          return data.json();
      })
      .then( (response) => {
        // console.log(response[0].merk);
        text.innerHTML = response[0].merk;
      });
  }

  button.onclick = (event) => {
    // console.log(input.value);
    let kenteken = input.value;
    getKenteken(kenteken);
  }

  box.onclick = (event) => {
    let kenteken = "XX999X";
    getKenteken(kenteken);
  }
}
