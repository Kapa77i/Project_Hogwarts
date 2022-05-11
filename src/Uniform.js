import React, { useState, useEffect, useRef, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Table, Form, Row, Col } from 'react-bootstrap';
import './index.css';

function Uniform(props) {
  const [uniformlist, setUniformlist] = useState([]);
  const [dbitem, setDbitems] = useState({ id: '', coat: '', gloves: '', robes: '', hat: '', nametags: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const inputEl = useRef("")

  //const [searched, setSearched] = useState();

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };

  //Määritellään urli, jota sitten päivitellään aina hakuehtojen yms mukaan
  const url = "http://localhost:5000/wizards";
  const delay = 1000;

  //Datan haku
  useEffect(() => {
    setTimeout(() => {
      fetchData().then(data => {
        setLoading(false)
      });
    }, delay)

  }, []);

  async function fetchData() {
    let response = await fetch(url);
    let data = await response.json();
    setUniformlist(data);
  }

  //Otetaan eventeillä haltuun muutokset
  const searchDefine = (event) => {
    console.log("Tultiin seacrhDefinee")
    console.log("Eventid: " + event.target.id)
    if (event.target.value.length > 0) {

      if (event.target.name === "id") {
        setDbitems({
          ...dbitem, id: [event.target.value]
        })

      }

      if (event.target.name === "coat") {
        console.log("Tultiin coat: " + event.target.value)
        console.log("dbitem coat: " + dbitem.coat)
        setDbitems({
          ...dbitem, coat: [event.target.value],
        })

      }
      if (event.target.name === "gloves") {
        console.log("Tultiin gloves: " + event.target.value)
        setDbitems({
          ...dbitem,
          gloves: [event.target.value],
        })
      }
      if (event.target.name === "robes") {
        console.log("Tultiin robes: " + event.target.value)
        setDbitems({
          ...dbitem,
          robes: [event.target.value],
        })
      }
      if (event.target.name === "hat") {
        console.log("Tultiin hat: " + event.target.value)
        setDbitems({
          ...dbitem,
          hat: [event.target.value],

        })
      }
      if (event.target.name === "nametags") {
        console.log("Tultiin nametags: " + event.target.value)
        setDbitems({
          ...dbitem,
          nametags: [event.target.value]
        })
      }

    } else {
      console.log("Tultiin elseen")
      setDbitems((prev) => ({ ...prev, [event.target.name]: '' }));
    }
  };


  /* EDITOIDUN JUTUN SAVETUS */
  const saveChanges = async (event) => {
    event.preventDefault();

    console.log("Tultiin saveen")
    console.log("dbitemid: " + dbitem.id)
    console.log("hat: " + dbitem.hat)
    console.log("gloves: " + dbitem.gloves)
    console.log("robes: " + dbitem.robes)


    fetch(url + "/" + dbitem.id + "?", {

      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uniform: {
          ...dbitem,
          hat: dbitem.hat,
          gloves: dbitem.gloves,
          coat: dbitem.coat,
          robes: dbitem.robes,
          nametags: dbitem.nametags
        }
      }
      ),
      //Tietojen päivitys näkyciin
    }).then((response) => {

      /*   setLoading({
        loading: false
      })  */


      setTimeout(() => {
        fetchData()

      })
    });

    alert("You have succesfully updated uniform information")
    clearInputs();

  }

  //Input kenttien clear-editoinnin jälkeen
  const clearInputs = () => {
    document.getElementById("robesInput").value = "";
    document.getElementById("hatInput").value = "";
    document.getElementById("glovesInput").value = "";
    document.getElementById("coatInput").value = "";
    document.getElementById("nametagsInput").value = "";
  }

  //HAE NAPPULAN TOIMINTO
  const getData = async () => {

    const searched = document.getElementById("idSeacrhUniform").value;
    setLoading(true);

    console.log(searched)
    setTimeout(() => {
      async function fetchData() {
        let response = await fetch(url + "?id_like=" + searched);
        console.log(url);
        let data = await response.json();
        setUniformlist(data);
        setLoading(false);
      }

      fetchData();
    }, delay)
  };


  /* EDIT NAPPULAN TOIMINTO */
  const handleUpdate = (oldData) => {

    console.log(oldData)
    document.getElementById("wizardsIdUni").value = oldData.id;
    console.log(oldData.id)
    setDbitems({
      ...dbitem,
      id: oldData.id
    });

    document.getElementById("wizardsIdUni").value = oldData.id;
    document.getElementById("robesInput").value = oldData.uniform.robes;
    document.getElementById("hatInput").value = oldData.uniform.hat;
    document.getElementById("glovesInput").value = oldData.uniform.gloves;
    document.getElementById("coatInput").value = oldData.uniform.coat;
    document.getElementById("nametagsInput").value = oldData.uniform.nametags;

    setDbitems({
      ...dbitem,
      id: [oldData.id],
      robes: [oldData.uniform.robes],
      hat: [oldData.uniform.hat],
      gloves: [oldData.uniform.gloves],
      coat: [oldData.uniform.coat],
      nametags: [oldData.uniform.nametags]
    });

  }

  return (

    <div>
      {/*  {loading && <div>Loading.... </div>} */}
      <div id="cont-2">

        {/* HAKUKENTTÄ */}
        <Container id="searchInput" className="bsContaineri" margin="3em">
          <h2 id="uniformLink">Uniform</h2>

          <Table striped bordered hover size="sm">
            <tbody><tr><td><input
              id="idSeacrhUniform"
              name="idSeacrhUniform"
              type="text"
              placeholder="Wizard id"
            /></td>
              <td><Button variant="light" onClick={() => getData()} >Search</Button></td>
            </tr>
            </tbody>
          </Table>
        </Container>


        {/* EDITOINTI KENTTÄ  */}

        <Container >
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
              <Form.Label >Wizard id</Form.Label><br/>
              <input size="sm" className="uniformInput" width="2em" id="wizardsIdUni"
                  name="id"
                  type="text"
                  placeholder="id"
                  readOnly
                /* onChange={searchDefine} */
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Robes</Form.Label> <br/>
                <input padding="3em" className="uniformInput"
                  id="robesInput"
                  name="robes"
                  type="text"
                  placeholder="Robes"
                  onChange={searchDefine}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
                <Form.Label>Hat     </Form.Label><br/>
                <input size="sm" className="uniformInput"
                  id="hatInput"
                  name="hat"
                  type="text"
                  placeholder="Hat..."
                  onChange={searchDefine}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Gloves     </Form.Label><br/>
                <input size="lg"
                  id="glovesInput"
                  name="gloves"
                  type="text"
                  placeholder="Gloves..."
                  onChange={searchDefine}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
                <Form.Label>Cloak     </Form.Label><br/>
                <input className="uniformInput"
                  id="coatInput"
                  name="coat"
                  type="text"
                  placeholder="Coat..."
                  onChange={searchDefine}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Nametags     </Form.Label><br/>
                <input
                    id="nametagsInput"
                    name="nametags"
                    type="text"
                    placeholder="Nametags..."
                    onChange={searchDefine}
                  />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
              <Form.Label> </Form.Label><br/>
              <Button variant="light" onClick={saveChanges}>Save changes</Button>
              </Form.Group></Row>
              
          </Form>
        </Container>


       {/*  <Container id="EditInputs" padding="50em" justify-content="center" className="bsContaineri">
          <Table striped bordered hover size="sm" variant="light">
            <thead >
              <tr variant="light">
                <th></th>
                <th>Robes</th>
                <th>Hat</th>
                <th>Gloves</th>
                <th>Coat</th>
                <th>Nametags</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="uniformInput">
                <td ><input size="sm" className="uniformInput" width="2em" id="wizardsIdUni"
                  name="id"
                  type="text"
                  placeholder="id"
                  hidden
                
                /></td>
                <td> <input size="sm" className="uniformInput"
                  id="robesInput"
                  name="robes"
                  type="text"
                  placeholder="Robes"
                  onChange={searchDefine}
                /></td>
                <td><input size="sm" className="uniformInput"
                  id="hatInput"
                  name="hat"
                  type="text"
                  placeholder="Hat..."
                  onChange={searchDefine}
                /></td>
                <td> <input size="lg"
                  id="glovesInput"
                  name="gloves"
                  type="text"
                  placeholder="Gloves..."
                  onChange={searchDefine}
                /></td>

                <td className="uniformInput"><input className="uniformInput"
                  id="coatInput"
                  name="coat"
                  type="text"
                  placeholder="Coat..."
                  onChange={searchDefine}
                /></td>
                <td>
                  <input
                    id="nametagsInput"
                    name="nametags"
                    type="text"
                    placeholder="Nametags..."
                    onChange={searchDefine}
                  /></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <Button variant="light" onClick={saveChanges}>Save changes</Button>
          <div>~</div>
        </Container> */}

        <div id="taulukko" className="bsContaineri">
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
                </tr>
              </thead>
              <tbody>{uniformlist.map((wizards) => {
                return (
                  <tr data-testid="trAsiakasID" key={wizards.id}>
                    <td>{wizards.id}</td>
                    <td>{wizards.uniform.robes}</td>
                    <td>{wizards.uniform.hat}</td>
                    <td>{wizards.uniform.gloves}</td>
                    <td>{wizards.uniform.coat}</td>
                    <td>{wizards.uniform.nametags}</td>
                    <td><Button variant="outline-dark" onClick={() => handleUpdate(wizards)}>Edit</Button></td>
                  </tr>
                );
              })}</tbody></table>
          ) : error === true ? (
            <div id="loading">ERROR</div>
          ) : (
            <div id="loading">Your search didn't made anything...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Uniform;
