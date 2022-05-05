import React, { Component } from "react";
import { Button, Col, Modal, Row, Container } from 'react-bootstrap'
import Logo from './pictures/Hogwarts-Logo-rb.png';
import AppModaali from './AppModaali';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
var url = "http://localhost:5000/wizards";

const delay = 3000;

<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>


class Application extends React.Component {
    constructor(props) {
        super();

        this.addParameters = this.addParameters.bind(this);
        this.addUniform = this.addUniform.bind(this);
        this.poista = this.poista.bind(this);

        //Datan käsittely tilamuuttujassa
        this.state = {
            data: null,
            id: "",
            name: "",
            address: "",
            coat: "",
            gloves: "",
            robes: "",
            hat: "",
            nametags: "",
            wand: "",
            cauldron: "",
            phials: "",
            brassscales: "",
            petname: "",
            petspecies: "",
            searchLoading: false,
            handleShow: false,
            handleClose: false
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
        console.log("Eventin nimi: " + event.target.name)
        if (event.target.value.length > 0) {

            if (event.target.name === "nameInput") {
                this.setState({ name: event.target.value });
                this.name = [event.target.value];

            }
            if (event.target.name === "addressInput") {
                this.setState({ address: [event.target.value] });
                this.address = [event.target.value];
            }

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
            }

            if (event.target.name === "wandInput") {
                this.setState({ wand: event.target.value });
                this.wand = [event.target.value];
            }

            if (event.target.name === "cauldronInput") {
                this.setState({ cauldron: event.target.value });
                this.cauldron = [event.target.value];
            }
            if (event.target.name === "phialsInput") {
                this.setState({ phials: event.target.value });
                this.phials = [event.target.value];
            }
            if (event.target.name === "brassscalesInput") {
                this.setState({ brassscalesInput: event.target.value });
                this.brassscalesInput = [event.target.value];
            }
            if (event.target.name === "petsnameInput") {
                this.setState({ petname: event.target.value });
                this.petname = [event.target.value];
            }

            if (event.target.name === "speciesInput") {
                this.setState({ species: event.target.value });
                this.species = [event.target.value];
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


    /* "wizards": [
      {
        "id": 1,
        "name": "Harry Potter",
        "address": "4 Privet Drive",
        "uniform": {
          "robes": "3 black robes",
          "hat": "one black hat",
          "gloves": "one dragonscale gloves",
          "coat": "one black wintercoat",
          "nametags": "Need a nametags"
        },
        "equipment": {
          "eq.1": "Wand",
          "eq.2": "Cauldron",
          "eq.3": "Glass phials",
          "eq.4": "brass scales"
        },
        "pet": {
          "name": "Wand",
          "species": "Cauldron"
        }
      }
    ] */

    async addUniform() {
        await fetch("http://localhost:5000/wizards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: this.id,
                name: this.name,
                address: this.address,
                uniform: {
                    hat: this.hat,
                    gloves: this.gloves,
                    coat: this.coat,
                    robes: this.robes,
                    nametags: this.nametags
                },
                equipment: {
                    wand: this.wand,
                    cauldron: this.cauldron,
                    phials: this.phials,
                    brassscales: this.brassscales
                },
                pet: {
                    name: this.petname,
                    species: this.species
                }
            }
            ),

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

                <div id="cont-application">
                     <img src={Logo} height="250" width="250"  alt="Lucindas signature"/>
                    <div id="WizardNameInputFields">
                    <br />
                        <br />
                        <h3>Your Hogwarts application</h3>
                        <p>Give your fullname: </p>
                        <input
                            name="nameInput"
                            type="text"
                            placeholder="Your full name..."
                            //value={this.state.asiakasInput}
                            onChange={this.addParameters}
                        />
                        <br />
                        <br />
                        <p>Give your full address: </p>
                        <input
                            name="addressInput"
                            type="text"
                            placeholder="Your full address..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />
                    </div>



                    <div id="UniformInputFields">
                        <br />
                        <br />
                        <br />
                        <p>Next give your uniforms information</p>
                        <p>Robes:</p>
                        <input
                            name="robesInput"
                            type="text"
                            placeholder="robes..."
                            //value={this.state.asiakasInput}
                            onChange={this.addParameters}
                        />

                        <p>Hat:</p>
                        <input
                            name="hatInput"
                            type="text"
                            placeholder="hats..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />

                        <p>Gloves:</p>
                        <input
                            name="glovesInput"
                            type="text"
                            placeholder="gloves..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />

                        <p>Coat:</p>
                        <input
                            name="coatInput"
                            type="text"
                            placeholder="coat..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />

                        <p>Do you need nametags:</p>
                        <input
                            name="nametagsInput"
                            type="text"
                            placeholder="need of nametags"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />
                    </div>
                    <div>
                        <br />
                        <br />
                        <br />
                        <p>Next inform us about your equipment</p>

                        <p>Wand:</p>
                        <input
                            name="wandInput"
                            type="text"
                            placeholder="Your wand is..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />

                        <p>Cauldron:</p>

                        <input
                            name="cauldronInput"
                            type="text"
                            placeholder="Cauldron..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />

                        <br />
                        <br />
                        <br />
                        <br />
                        <p>Phials:</p>

                        <input
                            name="phialsInput"
                            type="radio"
                            value="Glass Phials"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><p>Glass phials</p>

                        <input
                            name="phialsInput"
                            type="radio"
                            value="Crystal Phials"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><p>Crystal phials</p>
                        <br />
                        <br />
                        <br />

                        <p>Brass scales:</p>
                        <input
                            name="brassscalesInput"
                            type="text"
                            placeholder="Brass scales..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />

                        <p>Pets:</p>
                        <input
                            name="petsnameInput"
                            type="text"
                            placeholder="Your pet's name is"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />
                        <br />
                        <br />
                        <br />
                        <p>Your pets species:</p>
                        <input
                            name="speciesInput"
                            type="radio"
                            value="Frog"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><p>Frog</p>
                        <input
                            name="speciesInput"
                            type="radio"
                            value="Owl"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><p>Owl</p>
                        <input
                            name="speciesInput"
                            type="radio"
                            value="Cat"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><p>Cat</p>


                        <br />
                        <br />

                    </div>
                    {/*  <AppModaali /> */}

                    {/*   <!-- Modaalinavausnappi --> */}
                    <Row className="mx-0">
                        <Button as={Col} variant="secondary" onClick={this.addUniform}>Send your application to school</Button>
                    </Row>
                    {/*  <button type="button" class="btn btn-info btn-lg"
                        data-bs-toggle="modal" data-bs-target="#myModal">Open
                        Modal</button>

                    <>
                        <Button variant="primary" onClick={this.handleShow} >
                            Launch demo modal
                        </Button>

                        <Modal show={this.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={this.handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </> */}

                    {/*      <table>
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
          </table> */}
                </div>
            );
        }
    }
}

export default Application;
