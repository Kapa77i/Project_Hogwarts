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
        this.addApplication = this.addApplication.bind(this);
        this.poista = this.poista.bind(this);

        //Datan käsittely tilamuuttujassa
        this.state = {
            data: null,

            //welho
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

            //kirjat
            
                goshawk: "",
                bagshot: "",
                waffling: "",
                switch: "",
                spore: "",
                jigger: "",
                scamander: "",
                trimble: "",



            searchLoading: false,
            handleShow: false,
            handleClose: false,



        };
    }

    // lemmikinvalinta-radiobuttonit/nimiloota
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

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


            //Kirjat
            if (event.target.name === "goshawkInput") {
                this.setState({ nametags: event.target.value });
                this.goshawkInput = [event.target.value];
            }
            if (event.target.name === "bagshotInput") {
                this.setState({ nametags: event.target.value });
                this.bagshotInput = [event.target.value];
            }
            if (event.target.name === "wafllingInput") {
                this.setState({ nametags: event.target.value });
                this.wafflingInput = [event.target.value];
            }
            if (event.target.name === "switchInput") {
                this.setState({ nametags: event.target.value });
                this.switchInput = [event.target.value];
            }
            if (event.target.name === "sporeInput") {
                this.setState({ nametags: event.target.value });
                this.sporeInput = [event.target.value];
            }
            if (event.target.name === "jiggerInput") {
                this.setState({ nametags: event.target.value });
                this.jiggerInput = [event.target.value];
            }
            if (event.target.name === "scamanderInput") {
                this.setState({ nametags: event.target.value });
                this.scamanderInput = [event.target.value];
            }
            if (event.target.name === "trimbleInput") {
                this.setState({ nametags: event.target.value });
                this.trimbleInput = [event.target.value];
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



    async addApplication() {
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
                books: {
                    goshawk: this.goshawk,
                    bagshot: this.bagshot,
                    waffling: this.waffling,
                    switch: this.switch,
                    spore: this.spore,
                    jigger: this.jigger,
                    scamander: this.scamander,
                    trimble: this.trimble
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
                },
                
        }),

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
            


            return (

                <div id="cont-application">
                    <img src={Logo} height="250" width="250" alt="Lucindas signature" />

                    {/* henkilötiedot */}
                    <div id="WizardNameInputFields"><br /><br />
                        <h2>Your book and equipment preorder</h2><br /><br />
                        <h6>Give us your full name: </h6>
                        <input
                            name="nameInput"
                            type="text"
                            placeholder="Your full name..."
                            //value={this.state.asiakasInput}
                            onChange={this.addParameters}
                        />
                        <br />
                        <br />
                        <h6>Give us your full address: </h6>
                        <input
                            name="addressInput"
                            type="text"
                            placeholder="Your full address..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />
                    </div>


                    {/* vaatetus */}
                    <div id="UniformInputFields"><br /><br />~<br /><br />
                        <h3>Uniform</h3>
                        <h6>Next give us your uniforms information:</h6><br />
                        <label for="robesInput">Plain work robes (black):</label><br />
                        <input
                            name="robesInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.asiakasInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="hatInput">Plain pointed hat (black) for day wear:</label><br />
                        <input
                            name="hatInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="glovesInput">Pair of protective gloves:</label><br />
          
                            <input name="glovesInput" type="radio" value="From dragon hide" checked={this.state.speciesInput === "From dragon hide"}
                                //value={this.state.osoiteInput}
                                onChange={this.handleChange} /> <label for="From dragon hide">From dragon hides</label><br />
                            

                            <input name="glovesInput" type="radio" value="From erumpet hide" checked={this.state.speciesInput === "From erumpet hide"}
                                //value={this.state.osoiteInput}
                                onChange={this.handleChange} /> <label for="From erumpet hide">From erumpet hide</label><br />
                            
                            <br /><br />


                        <label for="coatInput">Winter cloak (black, with silver fastenings):</label><br />
                        <input
                            name="coatInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="nametagsInput">Do you need any nametags?</label><br />
                        <input
                            name="nametagsInput"
                            type="text"
                            placeholder="need of nametags"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />
                    </div>

                    {/* oppikirjat */}
                    <div id="books"><br /><br />~<br /><br />
                        <h3>Books</h3>
                        <h6>Please select your course books:</h6><br />
                        <label for="goshawkInput"><b>The Standard Book of Spells (Grade 1)</b> <br />by Miranda Goshawk</label><br />
                        <input
                            name="goshawkInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="bagshotInput"><b>A History of Magic</b><br />by Bathilda Bagshot</label><br />
                        <input
                            name="bagshotInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="wafflingInput"><b>Magical Theory</b> <br />by Adalbert Waffling</label><br />
                        <input
                            name="wafflingInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="switchInput"><b>A Beginner's Guide to Transfiguration</b> <br />by Emeric Switch</label><br />
                        <input name="switchInput" type="text" placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="sporeInput"><b>One Thousand Magical Herbs and Fungi </b><br />by Phyllida Spore</label><br />
                        <input
                            name="sporeInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="jiggerInput"><b>Magical Drafts and Potions</b> <br />by Arsenius Jigger</label><br />
                        <input
                            name="jiggerInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="scamanderInput"><b>Fantastic Beasts and Where to Find Them</b> <br />by Newt Scamander</label><br />
                        <input
                            name="scamanderInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="trimbleInput"><b>The Dark Forces: A Guide to Self-Protection </b><br />by Quentin Trimble</label><br />
                        <input
                            name="trimbleInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br />
                    </div>

                    {/* muut tarvikkeet */}
                    <div id="otherEquipment"><br /><br />~<br /><br />
                        <h3>Other equipment</h3>
                        <h6>Next inform us about other equipment needed:</h6><br />

                        <label for="wandInput">Wand:</label><br />
                        <input
                            name="wandInput"
                            type="text"
                            placeholder="Your wand is..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br />

                        <label for="cauldronInput">Cauldrons:</label><br />
                        <input
                            name="cauldronInput"
                            type="text"
                            placeholder="Cauldron..."
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><br /><br /><br />

                        <h5>Phials</h5>
                        <label for="phialsInput">Choose one (if needed): </label><br />
                        <input
                            name="speciesInput"
                            type="radio"
                            value="glassPhials"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><label for="glassPhials">Glass phials</label><br />
                        <input
                            name="speciesInput"
                            type="radio"
                            value="crystalPhials"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        /><label for="crystalPhials">Crystal phials</label><br /><br /><br />

                        <label for="brassscalesInput">Brass scales:</label><br />
                        <input
                            name="brassscalesInput"
                            type="text"
                            placeholder="(quantity)"
                            //value={this.state.osoiteInput}
                            onChange={this.addParameters}
                        />

                        {/* lemmikki */}
                        <div id="pet"><br /><br />~<br /><br />
                            <h3>Pet</h3>
                            <br />

                            <label for="speciesInput">Your pet's species:</label><br />

                            <input name="speciesInput" type="radio" value="Owl" checked={this.state.speciesInput === "Owl"}
                                onChange={this.handleChange} />
                                
                            <label for="Owl">Owl</label><br />

                            <input name="speciesInput" type="radio" value="Cat" checked={this.state.speciesInput=== "Cat"}
                                //value={this.state.osoiteInput}
                                onChange={this.handleChange} />
                            <label for="Cat">Cat</label><br />

                            <input name="speciesInput" type="radio" value="Toad" checked={this.state.speciesInput === "Toad"}
                                //value={this.state.osoiteInput}
                                onChange={this.handleChange} />
                            <label for="Toad">Toad</label><br />

                            <input name="speciesInput" type="radio" value="none" checked={this.state.speciesInput === "none"}
                                //value={this.state.osoiteInput}
                                onChange={this.handleChange} />
                            <label for="none">I'm not bringing a pet</label><br /><br /><br />

                            <input name="petsnameInput" type="text" placeholder="Your pet's name" disabled={this.state.speciesInput == "none"}
                                value={this.state.petsnameInput}
                                onChange={this.handleChange} />

                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>

 {/* <Button as={Col} variant="secondary" onClick={this.addApplication}>Submit your order</Button> */}


                    {/* <AppModaali tiedot={this.addApplication}/> */}




                    {/* <AppModaali /> */}

                    {/*   <!-- Modaalinavausnappi --> */}
                    {/*                     <Row className="mx-0"> */}
                    {/* <Button as={Col} variant="secondary" onClick={<AppModaali/>}>Submit your order</Button> */}
                    {/*                     </Row> */}
                    


                    



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
