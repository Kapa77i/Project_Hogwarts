import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Modal, Row, Container, Form } from 'react-bootstrap'

function Uniform(props) {
  const [uniformlist, setUniformlist] = useState([]);
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [params, setParams] = useState({ id: "", name: "", address: "", coat: "", gloves: "", robes: "", hat: "", nametags: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };

  //Määritellään urli, jota sitten päivitellään aina hakuehtojen yms mukaan
  const url = "http://localhost:5000/wizards";
  const delay = 2000;

  //Datan haku
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url);
      let data = await response.json();
      setUniformlist(data);
    }

    fetchData();
  }, []);


  const searchDefine = (event) => {
    console.log("Tultiin seacrhDefinee")
    console.log("Eventid: " + event.target.id)
    if (event.target.value.length > 0) {
      if (event.target.name === "name") {
        console.log("Tultiin name: " + event.target.value)
        setParams({
          address: params.address,
          name:
            [
              event.target.value.charAt(0).toUpperCase() +
              event.target.value.slice(1),
            ],
          coat: params.coat,
          gloves: params.gloves,
          robes: params.robes,
          hat: params.hat,
          nametags: params.nametags
        });
      }

      if (event.target.name === "address") {
        console.log("Tultiin address: " + event.target.value)
        setParams({
          nimi: params.nimi,
          osoite: [event.target.value],
          coat: params.coat,
          gloves: params.gloves,
          robes: params.robes,
          hat: params.hat,
          nametags: params.nametags
        });
        
      }

      if (event.target.name === "address") {
        console.log("Tultiin address: " + event.target.value)
        setParams({
          nimi: params.nimi,
          osoite: [event.target.value],
          coat: params.coat,
          gloves: params.gloves,
          robes: params.robes,
          hat: params.hat,
          nametags: params.nametags
        });
      }
      if (event.target.name === "coat") {
        console.log("Tultiin coat: " + event.target.value)
        setParams({
          coat: [event.target.value],
          gloves: params.gloves,
          robes: params.robes,
          hat: params.hat,
          nametags: params.nametags
        });
        
      }
      if (event.target.name === "gloves") {
        console.log("Tultiin gloves: " + event.target.value)
        setParams({
          nimi: params.nimi,
          osoite: params.address,
          coat: params.coat,
          gloves: [event.target.value],
          robes: params.robes,
          hat: params.hat,
          nametags: params.nametags
        });
      }
      if (event.target.name === "robes") {
        console.log("Tultiin robes: " + event.target.value)
        setParams({
          coat: params.coat,
          gloves: params.gloves,
          robes: [event.target.value],
          hat: params.hat,
          nametags: params.nametags
        });
      }
      if (event.target.name === "hat") {
        console.log("Tultiin hat: " + event.target.value)
        setParams({
          coat: params.coat,
          gloves: params.gloves,
          robes: params.robes,
          hat: [event.target.value],
          nametags: params.nametags
        });
      }
      if (event.target.name === "nametags") {
        console.log("Tultiin nametags: " + event.target.value)
        setParams({
          coat: params.coat,
          gloves: params.gloves,
          robes: params.robes,
          hat: params.hat,
          nametags: [event.target.value]
        });
      }

    } else {
      console.log("Tultiin elseen")
      setParams((prev) => ({ ...prev, [event.target.name]: "" }));
    }
  };

  const saveChanges = async () => {
    console.log("Tultiin saveen: ")
    console.log("Paramsid: " + params.id)

    await fetch("http://localhost:5000/wizards/" + params.id, {

      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uniform: {
          hat: params.hat,
          gloves: params.gloves,
          coat: params.coat,
          robes: params.robes,
          nametags: params.nametags
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
  /*     //Poisto
      const delete = async (wizards.id) => {
        try{
          await api.delet(`/wizards/${id}`);
          const 
        }
  
        catch{
  
        }
  
  
      }; */

  //Päivitetään button-clickillä url
  /*   const getData = async () => {
      setLoading(true);
      setTimeout(() => {
        async function fetchData() {
          let response = await fetch(url + "?" + params.name + params.address + params.coat + params.gloves + params.robes + params.hat + params.nametags);
          console.log(url + "?" + params.name + params.address + params.coat + params.gloves + params.robes + params.hat + params.nametags);
          let data = await response.json();
          setUniformlist(data);
          setLoading(false);
        }
  
        fetchData();
      }, delay);
  
  
    }; */

  const handleUpdate = (oldData) => {

    console.log(oldData)
    document.getElementById("wizardsId").value = oldData.id;
    console.log(oldData.id)
    setParams({
      id: oldData.id
    });
    console.log(params.id)
    document.getElementById("robesInput").value = oldData.uniform.robes;
    document.getElementById("hatInput").value = oldData.uniform.hat;
    document.getElementById("glovesInput").value = oldData.uniform.gloves;
    document.getElementById("coatInput").value = oldData.uniform.coat;
    document.getElementById("nametagsInput").value = oldData.uniform.nametags;
    /*  handleShow() */
    /*  document.getElementById("robesModal") = oldData.robes; */

  }



  return (

    <div>
      <div id="cont-2">
        <Container id="searchInput" margin="3em">
          <input
            name="id"
            type="text"
            placeholder="Wizard id"
            onChange={searchDefine}
          />

          <button /* onClick={getData} */ >Search</button>
        </Container>

        <Container id="EditInputs">

          <input id="wizardsId"
            name="id"
            type="text"
            placeholder="id"
            hidden
          /* onChange={searchDefine} */
          />
          <input
            id="robesInput"
            name="robes"
            type="text"
            placeholder="Robes"
            onChange={searchDefine}
          />
          <input
            id="hatInput"
            name="hat"
            type="text"
            placeholder="Hat..."
            onChange={searchDefine}
          />
          <input
            id="glovesInput"
            name="gloves"
            type="text"
            placeholder="Gloves..."
            onChange={searchDefine}
          />
          <input
            id="coatInput"
            name="coat"
            type="text"
            placeholder="Coat..."
            onChange={searchDefine}
          />

          <input
            id="nametagsInput"
            name="nametags"
            type="text"
            placeholder="Nametags..."
            onChange={searchDefine}
          />

          <Button onClick={saveChanges}>Save changes</Button>
        </Container>

        <div id="taulukko">
          {loading ? (
            <div id="loading">Loading...</div>

          ) : uniformlist.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Wizard ID</th>
                  <th>Robes</th>
                  <th>Hat</th>
                  <th>Gloves</th>
                  <th>Coat</th>
                  <th>Nametags</th>
                  <th>-</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>{uniformlist.map((wizards) => {
                return (
                  <tr data-testid="trAsiakasID" key={wizards.id} >
                    <td>{wizards.id}</td>
                    <td>{wizards.uniform.robes}</td>
                    <td>{wizards.uniform.hat}</td>
                    <td>{wizards.uniform.gloves}</td>
                    <td>{wizards.uniform.coat}</td>
                    <td>{wizards.uniform.nametags}</td>
                    <td><Button /* onClick={delete} */ id={wizards.id}>Delete</Button></td>
                    <th><Button color="primary" onClick={() => handleUpdate(wizards)}>Edit</Button></th>
                  </tr>
                );
              })}</tbody></table>
          ) : error === true ? (
            <div id="loading">VIRHE! Ethän syötä erikoismerkkejä</div>
          ) : (
            <div id="loading">Annetuilla hakuehdoilla ei löytynyt dataa</div>
          )}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Control id="robesModal" placeholder="First name" />
              </Col>
              <Col>
                <Form.Control id="hatModal" placeholder="Last name" />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control id="glovesModal" placeholder="First name" />
              </Col>
              <Col>
                <Form.Control id="coatModal" placeholder="Last name" />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control id="nametagsModal" placeholder="First name" />
              </Col>
              <Col>

              </Col>
            </Row>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Uniform;
