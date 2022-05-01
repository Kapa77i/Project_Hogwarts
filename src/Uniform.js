import React, { Component } from "react";
import { Link } from "react-router-dom";
var url = "http://localhost:5000/wizards";
const delay = 3000;

class Uniform extends React.Component {
  constructor(props) {
    super();

    this.addParameters = this.addParameters.bind(this);
    this.addUniform = this.addUniform.bind(this);
    this.poista = this.poista.bind(this);

    //Datan käsittely tilamuuttujassa
    this.state = {
      data: null,
      id:"",
      name: "",
      address: "",
      coat: "",
      gloves: "",
      robes: "",
      hat: "",
      nametags: "",
      searchLoading: false,
    };
  }

  //Jos halutaan heti luonnin jälkeen hakea data, ajetaan heti sen jälkeen kun dokumenttipuu on luotu tämän dokun osalta
  componentDidMount() {
    this.fetchData();
  }


  async fetchData() {
    //fetch = voidaan tehdä http pyyntöjä. Jos ei erikseen määritellä, oletusmetodi on GET
    //Asynkroninen kutsu = koodi ylhäältä alaspäin, ellei anneta await -komentoa. Async -komento pitää lisätä myös funktion alkuun
    this.timeOut = setTimeout(async () => {
      let response = await fetch(url);
      //Käsitellään vastaus erikseen
      let data = await response.json();
      //Saatavan datan haltuunotto, eka data viittaa tilamuuttujaan tässä sivussa, vika data palvelimelta tulevaan dataan
      this.setState({
        data: data,
        searchLoading: false
      });
    }, delay);
  }

  //Syötetään dataa jsonille, DELETE metodi toimii myös samalla idealla (kohdistuu ID:hen)
  //Ei toimi jstn syystä, mutta jätin tähän, koska jos jatkojalostan löytyy koodinpätkä
  async addParameters(event) {
 console.log("Eventin nimi: "+event.target.name)
    if (event.target.value.length > 0) {
      if (event.target.name === "robesInput") {
        this.setState({ robes: event.target.value });
        this.robes = [event.target.value];
        
      }
      if (event.target.name === "hatInput") {
        this.setState({ hat: [event.target.value] });
        this.hat = [event.target.value];
        console.log("Hat: " + this.hat);
      }
      if (event.target.name === "glovesInput") {
        this.setState({ gloves: event.target.value });
        this.gloves = [event.target.value];
      }
      if (event.target.name === "coatInput") {
        this.setState({ coat: event.target.value });
        this.coat = [event.target.value];
      }
      if (event.target.name === "nametagsInput") {
        this.setState({ nametags: event.target.value });
        this.nametags = [event.target.value];
      };
      

    }
  }

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
      this.setState({
        searchLoading: true
      });
    });
  }

  async addUniform(){
    await fetch("http://localhost:5000/wizards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uniform:{
          hat: this.hat, gloves: this.gloves, coat: this.coat, robes: this.robes, nametags: this.nametags }}),
        
        //Tietojen päivitys näkyciin
      }).then((response) => {
        this.fetchData();
        this.setState({
          searchLoading: true
        });
      });
      
  }


  /* RENDERÖINTI JA RETURNIT */
  render() {


    const { error, searchLoading } = this.state;
    //Tarkistellaan data
    if (this.state.data == null || searchLoading == true) {
      return (
        <div id="loading">
          <p>Loading the format...</p>
        </div>
      );
    } else if (this.state.data != null) {
      //searchLoading data
      let dataObjects = this.state.data.map((wizards) => {
        //console.log("Tässä on wizard juttuja:")
        //console.log("wizards.uniform: ",)
        return (
          <tr key={wizards.id}>
            <td>{wizards.uniform.robes}</td>
            <td>{wizards.uniform.hat}</td>
            <td>{wizards.uniform.gloves}</td>
            <td>{wizards.uniform.coat}</td>
            <td>{wizards.uniform.nametags}</td>
            <td><button onClick={this.poista} id={wizards.id}>Delete</button></td>
          </tr>
        );
      }
      );


      return (
        <div id="cont-2">
          <div id="btnHaeLisää">
            <input
              name="robesInput"
              type="text"
              placeholder="robes..."
              //value={this.state.asiakasInput}
              onChange={this.addParameters}
            />

            <input
              name="hatInput"
              type="text"
              placeholder="hats..."
              //value={this.state.osoiteInput}
              onChange={this.addParameters}
            />
            <input
              name="glovesInput"
              type="text"
              placeholder="gloves..."
              //value={this.state.osoiteInput}
              onChange={this.addParameters}
            />
            <input
              name="coatInput"
              type="text"
              placeholder="coat..."
              //value={this.state.osoiteInput}
              onChange={this.addParameters}
            />
            <input
              name="nametagsInput"
              type="text"
              placeholder="need of nametags"
              //value={this.state.osoiteInput}
              onChange={this.addParameters}
            />

            <button onClick={this.addUniform}>Add</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Robes</th>
                <th>Hat</th>
                <th>Gloves</th>
                <th>Coat</th>
                <th>Name tags</th>
              </tr>
            </thead>
            <tbody>{dataObjects}</tbody>
            {error ? (
              <tbody>
                <tr>
                  <td>{error}</td>
                </tr>
              </tbody>
            ) : dataObjects.length > 0 ? (
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

export default Uniform;
