import React, { Component } from 'react';
import {Container, Table } from 'react-bootstrap';
var para = "";
var url = "http://localhost:5000/wizards/";



class Yhteystiedot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],

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
        };

        this.fetchData = this.fetchData.bind(this);

    }

    //Haetaan data
    async fetchData() {
        //fetch = voidaan tehdä http pyyntöjä. Jos ei erikseen määritellä, oletusmetodi on GET
        //Asynkroninen kutsu = koodi ylhäältä alaspäin, ellei anneta await -komentoa. Async -komento pitää lisätä myös funktion alkuun
        this.timeOut = setTimeout(async () => {
            //Ilman hookseja iha jäätävä säätö, mutta sain toimimaan kun sain apua
            let response = await fetch( "http://localhost:5000/wizards/" +
            para.replace("http://localhost:3000/wizards/", ""));
            //Käsitellään vastaus erikseen
            let data = await response.json();
            console.log(data)
            //Saatavan datan haltuunotto, eka data viittaa tilamuuttujaan tässä sivussa, vika data palvelimelta tulevaan dataan
            this.setState({
                data: data,
                

                /*  coat: data.uniform.coat,
            gloves: data.uniform.gloves,
            robes: data.uniform.robes,
            hat: data.uniform.hat,
            nametags: data.uniform.nametags  */
            }) });
    }

    //Jos halutaan heti luonnin jälkeen hakea data, ajetaan heti sen jälkeen kun dokumenttipuu on luotu tämän dokun osalta
    componentDidMount() {
        para = window.location.href;
        this.fetchData();
    }

    /* RENDERÖINTI JA RETURNIT */
    render() {

  /*       let dataObjektit = this.state.data.map((wizards) => {
            return (
              <tr key={wizards.id}>
                <td >{wizards.id}</td>
                <td>{wizards.name}</td>
                <td>{wizards.address}</td>
                <td>{wizards.uniform.coat}</td>

              </tr>
            );
          }
          ); */
        const { data } = this.state;
        console.log("Data: " + data)
        console.log("data.uniform: " + this.uniform);
        console.log("data.name: " + data.name);
        console.log("data.coat: " + data.coat);
        return (

            
           
            
            <div id="cont-2">
                <h3>All the information</h3>
                <Container>
                    <Table> <thead>
                        <tr>
                            <th>Wizard ID</th>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.address}</td>
                    </tr>
                    </tbody></Table>
                </Container>


                <Container>
                <h3>Uniform</h3>
                    <Table> 
                    <thead>
                        <tr>
                            <th>Set of robes</th>
                            <th>Set of pointed hats</th>
                            <th>Pair of protective gloves</th>
                            <th>Winter cloak</th>
                            <th>Does the pupil need nametags</th>
                        </tr>
                    </thead>
                     <tbody>
                    <tr key={data.id}>
                    {/* <td>{data.uniform.robes}</td>
                        <td>{data.uniform.hat}</td>
                        <td>{data.uniform.gloves}</td>
                        <td>{data.uniform.coat}</td>
                        <td>{data.uniform.nametags}</td>  */}
                    </tr>
                    </tbody> </Table></Container>
                <Container></Container>
                <Container></Container>
                <Container></Container>
                
                <table>
                    <thead>
                        <tr>
                            <th>Wizard ID</th>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.address}</td>
                        <td></td>
                    </tr>
                    </tbody>

                </table>

            </div >
        )

    }

}


export default Yhteystiedot;