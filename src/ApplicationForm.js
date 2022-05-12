import React, { Component } from "react";
import { Button } from 'react-bootstrap'
import Logo from './pictures/Hogwarts-Logo-rb.png';
import 'bootstrap/dist/css/bootstrap.min.css';


var url = "http://localhost:5000/wizards";

const delay = 3000;

<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

class Application extends React.Component {
    constructor(props) {
        super();

        this.addParameters = this.addParameters.bind(this);
        this.addApplication = this.addApplication.bind(this);

        //Datan käsittely tilamuuttujassa
        this.state = {
            data: null,

            //welho
            id: "",
            name: "",
            address: "",

            //tarvikkeet
            coat: "",
            gloves: "",
            robes: "",
            hat: "",
            nametags: "",
            wand: "",
            cauldron: "",
            phials: "",
            telescopes: "",
            brassscales: "",

            //kirjat
            goshawk: "",
            bagshot: "",
            waffling: "",
            switch: "",
            spore: "",
            jigger: "",
            scamander: "",
            trimble: "",

            // lemmikit
            petname: "",
            petspecies: "",

            searchLoading: false,
            handleShow: false,
            handleClose: false,
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

            // henkilötiedot
            if (event.target.name === "nameInput") {
                this.setState({ name: event.target.value });
                this.name = [event.target.value];

            }
            if (event.target.name === "addressInput") {
                this.setState({ address: [event.target.value] });
                this.address = [event.target.value];
            }

            // kouluasu
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


            // kirjat
            if (event.target.name === "goshawkInput") {
                this.setState({ goshawk: event.target.value });
                this.goshawk = [event.target.value];
            }
            if (event.target.name === "bagshotInput") {
                this.setState({ bagshot: event.target.value });
                this.bagshot = [event.target.value];
            }
            if (event.target.name === "wafflingInput") {
                this.setState({ waffling: event.target.value });
                this.waffling = [event.target.value];
            }
            if (event.target.name === "switchInput") {
                this.setState({ switch: event.target.value });
                this.switch = [event.target.value];
            }
            if (event.target.name === "sporeInput") {
                this.setState({ spore: event.target.value });
                this.spore = [event.target.value];
            }
            if (event.target.name === "jiggerInput") {
                this.setState({ jigger: event.target.value });
                this.jigger = [event.target.value];
            }
            if (event.target.name === "scamanderInput") {
                this.setState({ scamander: event.target.value });
                this.scamander = [event.target.value];
            }
            if (event.target.name === "trimbleInput") {
                this.setState({ trimble: event.target.value });
                this.trimble = [event.target.value];
            }


            // tarvikkeet
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

            if (event.target.name === "telescopesInput") {
                this.setState({ telescopes: event.target.value });
                this.telescopes = [event.target.value];
            }

            if (event.target.name === "brassscalesInput") {
                this.setState({ brassscales: event.target.value });
                this.brassscales = [event.target.value];
            }


            // lemmikit 
            if (event.target.name === "speciesInput") { // 
                this.setState({ petspecies: event.target.value });

                if (event.target.value !== "none") {
                    document.getElementById("petsnameInput").disabled = false; // enabloidaan nimikenttä kun laji valittu
                    this.petspecies = [event.target.value];
                }
                else {
                    document.getElementById("petsnameInput").disabled = true; // disabloidaan jos lajia ei valittu
                    this.petspecies = "";
                }
            }
            if (event.target.name === "petsnameInput") {
                this.setState({ petname: event.target.value });
                this.petname = [event.target.value];
            };
        }
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
                    telescopes: this.telescopes,
                    brassscales: this.brassscales
                },
                pet: {
                    name: this.petname,
                    species: this.petspecies
                },

            }),

            //Tietojen päivitys näkyciin
        }).then((response) => {
            this.fetchData();
            this.setState({
                searchLoading: true
            });

        });
        alert("Thank you for your order! \nWe look forward to seeing you on 1 September.");
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
                        <h2>Your book and equipment preorder</h2><br /><br /><br />
                        <h4>Basic Information</h4>
                        <div>~<br /><br /><br /></div>
                        <h6>Give us your full name: </h6>
                        <input
                            name="nameInput"
                            type="text"
                            placeholder="Your full name..."
                            onChange={this.addParameters}
                        />
                        <br />
                        <br />
                        <h6>Give us your full address: </h6>
                        <input
                            name="addressInput"
                            type="text"
                            placeholder="Your full address..."
                            onChange={this.addParameters}
                        />
                    </div>


                    {/* koulupuku */}
                    <div id="UniformInputFields"><br /><br /><br /><br />
                        <h3>Uniform</h3>
                        <div>~<br /><br /></div>
                        <h6>Next give us your uniforms information:</h6><br />
                        <label htmlFor="robesInput">Plain work robes (black):</label><br />
                        <input
                            name="robesInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="hatInput">Plain pointed hat (black) for day wear:</label><br />
                        <input
                            name="hatInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="glovesInput">Pair of protective gloves:</label><br />
                        <input name="glovesInput" type="radio" value="From dragon hide"
                            onChange={this.addParameters} /> <label htmlFor="From dragon hide">From dragon hides</label><br />

                        <input name="glovesInput" type="radio" value="From erumpet hide"
                            onChange={this.addParameters} /> <label htmlFor="From erumpet hide">From erumpet hide</label><br />

                        <br /><br />

                        <label htmlFor="coatInput">Winter cloak (black, with silver fastenings):</label><br />
                        <input
                            name="coatInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="nametagsInput">Do you need any nametags?</label><br />
                        <input
                            name="nametagsInput"
                            type="number" min="0"
                            placeholder="need of nametags"
                            onChange={this.addParameters}
                        />
                    </div>

                    {/* oppikirjat */}
                    <div id="books"><br /><br /><br /><br />
                        <h3>Books</h3>
                        <div>~<br /><br /></div>
                        <h6>Please select your course books:</h6><br />
                        <label htmlFor="goshawkInput"><b>The Standard Book of Spells (Grade 1)</b> <br />by Miranda Goshawk</label><br />
                        <input
                            name="goshawkInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="bagshotInput"><b>A History of Magic</b><br />by Bathilda Bagshot</label><br />
                        <input
                            name="bagshotInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="wafflingInput"><b>Magical Theory</b> <br />by Adalbert Waffling</label><br />
                        <input
                            name="wafflingInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="switchInput"><b>A Beginner's Guide to Transfiguration</b> <br />by Emeric Switch</label><br />
                        <input name="switchInput" type="number" min="0" placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="sporeInput"><b>One Thousand Magical Herbs and Fungi </b><br />by Phyllida Spore</label><br />
                        <input
                            name="sporeInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="jiggerInput"><b>Magical Drafts and Potions</b> <br />by Arsenius Jigger</label><br />
                        <input
                            name="jiggerInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="scamanderInput"><b>Fantastic Beasts and Where to Find Them</b> <br />by Newt Scamander</label><br />
                        <input
                            name="scamanderInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="trimbleInput"><b>The Dark Forces: A Guide to Self-Protection </b><br />by Quentin Trimble</label><br />
                        <input
                            name="trimbleInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br />
                    </div>

                    {/* muut tarvikkeet */}
                    <div id="otherEquipment"><br /><br /><br /><br />
                        <h3>Other equipment</h3>
                        <div>~<br /><br /></div>
                        <h6>Next inform us about other equipment needed:</h6><br />

                        <label htmlFor="wandInput">Wand:</label><br />
                        <small>Describe your wand</small><br />
                        <input
                            name="wandInput"
                            type="text"
                            placeholder="(description)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="cauldronInput">Cauldrons (pewter, standard size 2):</label><br />
                        <input
                            name="cauldronInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br /><br />

                        <h5>Phials:</h5>
                        <input
                            name="phialsInput"
                            type="radio"
                            value="Glass phials"
                            onChange={this.addParameters}
                        /><label htmlFor="Glass phials">Glass phials</label><br />
                        <input
                            name="phialsInput"
                            type="radio"
                            value="Crystal phials"
                            onChange={this.addParameters}
                        /><label htmlFor="Crystal Phials">Crystal phials</label><br /><br /><br />


                        <label htmlFor="telescopesInput">Telescopes:</label><br />
                        <input
                            name="telescopesInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        /><br /><br />

                        <label htmlFor="brassscalesInput">Brass scales:</label><br />
                        <input
                            name="brassscalesInput"
                            type="number" min="0"
                            placeholder="(quantity)"
                            onChange={this.addParameters}
                        />

                        {/* lemmikki */}
                        <div id="pet"><br /><br /><br /><br />
                            <h3>Pet</h3>
                            <div>~<br /><br /></div>
                            <label htmlFor="speciesInput">Your pet's species:</label><br /><br />
                            <input name="speciesInput" id="speciecInput" type="radio" value="Owl"
                                onChange={this.addParameters} /><label htmlFor="Owl">Owl</label><br />
                            <input name="speciesInput" id="speciecInput" type="radio" value="Cat"
                                onChange={this.addParameters} /><label htmlFor="Cat">Cat</label><br />
                            <input name="speciesInput" id="speciecInput" type="radio" value="Toad"
                                onChange={this.addParameters} /><label htmlFor="Toad">Toad</label><br /><br />
                            <input name="petsnameInput" type="text" id="petsnameInput" placeholder="Your pet's name" value={this.state.petsnameInput}
                                onChange={this.addParameters} disabled /><br /><br />
                            <input name="speciesInput" id="speciecInput" type="radio" value="none"
                                onChange={this.addParameters} /><label htmlFor="none">I'm not bringing a pet</label><br />
                            <br /><br /><br />
                        </div>
                    </div>
                    <Button variant="btn btn-dark btn-lg" onClick={this.addApplication}>Submit your order</Button>
                </div>
            );
        }

    }
}

export default Application;
