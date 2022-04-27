import React, { Component } from "react";
import { Link } from "react-router-dom";
var url = "http://localhost:5000/asiakkaat";
const viive = 3000;

class Asiakkaat extends React.Component {
  constructor(props) {
    super();

    this.lisaaPoistettava = this.lisaaPoistettava.bind(this);
    this.poista = this.poista.bind(this);
    this.haeAsiakasnimet = this.haeAsiakasnimet.bind(this);
    this.haeOsoite = this.haeOsoite.bind(this);
    this.haeAsiakasjaOsoite = this.haeAsiakasjaOsoite.bind(this);

    //Datan käsittely tilamuuttujassa
    this.state = {
      data: null,
      name: "",
      address: "",
      haetaan: false,
    };
  }

  //Jos halutaan heti luonnin jälkeen hakea data, ajetaan heti sen jälkeen kun dokumenttipuu on luotu tämän dokun osalta
  componentDidMount() {
    this.fetchData();
    this.haeAsiakasjaOsoite();
  }
  

  async fetchData() {
    //fetch = voidaan tehdä http pyyntöjä. Jos ei erikseen määritellä, oletusmetodi on GET
    //Asynkroninen kutsu = koodi ylhäältä alaspäin, ellei anneta await -komentoa. Async -komento pitää lisätä myös funktion alkuun
    this.timeOut = setTimeout(async () => {
      let response = await fetch(url + "?" + this.name + "&" + this.address);
      //Käsitellään vastaus erikseen
      let data = await response.json();
      //Saatavan datan haltuunotto, eka data viittaa tilamuuttujaan tässä sivussa, vika data palvelimelta tulevaan dataan
      this.setState({
        data: data,
      });
    }, viive);
  }

  //Syötetään dataa jsonille, DELETE metodi toimii myös samalla idealla (kohdistuu ID:hen)
  //Ei toimi jstn syystä, mutta jätin tähän, koska jos jatkojalostan löytyy koodinpätkä
  async lisaaPoistettava() {
    await fetch("http://localhost:5000/asiakkaat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Juha", address: "USA" }),
      //Tietojen päivitys näkyciin
    }).then((response) => {
      this.fetchData();
    });
  }

  //Tapahtuma parametri, kun ei ole erikseen mitään mistä saataisiin tieto poistosta
  async poista(event) {
    console.log(event.target.id);
    //Kutsutaan fetchiä delete-metodilla
    await fetch(url + "/" + event.target.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({ id: saatuID })
      //Tietojen päivitys näkyciin
    }).then((response) => {
      this.fetchData();
    });
  }

  //hae napin funktio joka jalostaa pitkälti onChange juttuja
  async haeAsiakasjaOsoite() {

    //Tällä saadaan hakuun loading screen
    this.setState({data:null});

    this.timeOut = setTimeout(async () => {
      let response = await fetch(url + "?" + this.name + this.address);
      //Käsitellään vastaus erikseen
      let data = await response.json();
      //Saatavan datan haltuunotto, eka data viittaa tilamuuttujaan tässä sivussa, vika data palvelimelta tulevaan dataan
      this.setState({
        data: data,
       haetaan: false,
      });

      console.log("Tässä on nimi: " + this.name);
      console.log("Tässä on osoite: " + this.address);
      this.timeOut = null;

      //Nollataan haku, jos input tyhjä
      this.name = "";
      this.address = "";
    }, viive);
  }

  //Asiakas inputin rajaus
  //Simo antoi miulle tähän hyvää idisti ja lähdin siitä jatkojalostaa tuon hae
  //namikat toiminnot. Eli ensin hain kummankin inputin tiedot omiin muuttujiinsa:
  async haeAsiakasnimet(event) {
    this.setState({ name: event.target.value });
    console.log("Tässä on nimi event: " + event);

    //Tässä vaiheessa naulasin jo tuon stringin lopullisen muodon
    //jota sitten kutsun tuolla siinä clikkaus funktiossa
    if (event.target.value.length > 0) {
      this.name =
        "name_like=" +
        [
          event.target.value.charAt(0).toUpperCase() +
            event.target.value.slice(1),
        ] +
        "&";
      console.log(this.name);
    } else this.name = "";

  }

  //Osoite inputin rajaus
  //Simo antoi miulle tähän hyvää idisti ja lähdin siitä jatkojalostaa tuon hae
  //namikat toiminnot. Eli ensin hain kummankin inputin tiedot omiin muuttujiinsa:
  async haeOsoite(event) {
    this.setState({ address: event.target.value });

    //Tässä vaiheessa naulasin jo tuon stringin lopullisen muodon
    //jota sitten kutsun tuolla siinä clikkaus funktiossa
    if (event.target.value.length > 0) {
      this.address = "address_like=" + [event.target.value] + "&";
      console.log(this.address);
      this.fetchData();
    } else this.address = "";

  }

  /* RENDERÖINTI JA RETURNIT */
  render() {
    const { error, haetaan } = this.state;
    //Tarkistellaan data
    if (this.state.data == null) {
      return (
        <div id="loading">
          <p>Ladataan asiakkaita...</p>
        </div>
      );
    } else if (this.state.data != null) {
      //Haetaan data
      let dataObjektit = this.state.data.map((asiakkaat) => {
        return (
          <tr key={asiakkaat.id}>
            <td >{asiakkaat.id}</td>
            <td>{asiakkaat.name}</td>
            <td>{asiakkaat.address}</td>
            <td>{asiakkaat.phonenumber}</td>
            <td>
              <Link to={`/asiakas/${asiakkaat.id}`} id={asiakkaat.id}>
                <button>Tiedot</button>
              </Link>
            </td>
            <td>
              <button onClick={this.poista} id={asiakkaat.id}>
                Poista
              </button>
            </td>
          </tr>
        );
      }
      );

     
      return (
        <div id="cont-2">
          <div id="btnHaeLisää">
            <input
              name="name"
              type="text"
              placeholder="Hae asiakasnimellä"
              //value={this.state.asiakasInput}
              onChange={this.haeAsiakasnimet}
            />

            <input
              name="address"
              type="text"
              placeholder="Hae osoitteella"
              //value={this.state.osoiteInput}
              onChange={this.haeOsoite}
            />

            <button onClick={this.haeAsiakasjaOsoite}>Hae</button>
          </div>

          <table>
            <thead>
              <tr data-testid="trAsiakasID">
                <th>AsiakasID</th>
                <th>Nimi</th>
                <th>Osoite</th>
                <th>Puhelinnro</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>{dataObjektit}</tbody>
            {error ? (
              <tbody>
                <tr>
                  <td>{error}</td>
                </tr>
              </tbody>
            ) : dataObjektit.length > 0 ? (
              <tbody>
                <tr></tr>
              </tbody>
            ) : (
              <p>Hakusi ei osunut oikeaan, kokeile uudelleen!</p>
            )}
          </table>
        </div>
      );
    }
  }
}

export default Asiakkaat;
