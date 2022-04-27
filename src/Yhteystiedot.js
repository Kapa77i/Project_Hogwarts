import React, { Component } from 'react';
var para = "";
var url = "http://localhost:5000/asiakkaat/";


class Yhteystiedot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };

        this.fetchData = this.fetchData.bind(this);

    }

    //Haetaan data
    async fetchData() {
        //fetch = voidaan tehdä http pyyntöjä. Jos ei erikseen määritellä, oletusmetodi on GET
        //Asynkroninen kutsu = koodi ylhäältä alaspäin, ellei anneta await -komentoa. Async -komento pitää lisätä myös funktion alkuun
        this.timeOut = setTimeout(async () => {
            //Ilman hookseja iha jäätävä säätö, mutta sain toimimaan kun sain apua
            let response = await fetch( "http://localhost:5000/asiakkaat/" +
            para.replace("http://localhost:3000/asiakas/", ""));
            //Käsitellään vastaus erikseen
            let data = await response.json();
            //Saatavan datan haltuunotto, eka data viittaa tilamuuttujaan tässä sivussa, vika data palvelimelta tulevaan dataan
            this.setState({
                data: data,
            }) });
    }

    //Jos halutaan heti luonnin jälkeen hakea data, ajetaan heti sen jälkeen kun dokumenttipuu on luotu tämän dokun osalta
    componentDidMount() {
        para = window.location.href;
        this.fetchData();
    }

    /* RENDERÖINTI JA RETURNIT */
    render() {
        const { data } = this.state;
        return (
            
            <div id="cont-2">
                <h3>Yhteystiedot</h3>
                <table>
                    <thead>
                        <tr>
                            <th>AsiakasID</th>
                            <th>Nimi</th>
                            <th>Osoite</th>
                            <th>Puhelinnro</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.address}</td>
                        <td>{data.phonenumber}</td>
                    </tr>
                    </tbody>

                </table>

            </div >
        )

    }

}


export default Yhteystiedot;