import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Modal, Row, Container, Form, Table, Alert } from 'react-bootstrap';
import './index.css';

function Books_Equipment(props) {
  const [bookList, setBookList] = useState([]);
  const [eqList, setEqList] = useState([]);
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const [dbBooks, setDbBooks] = useState({ id: '', goshawk: "", bagshot: "", waffling: "", switch: "", spore: "", jigger: "", scamander: "", trimble: "" });
  const [dbEquipment, setDbEquipment] = useState({ id: '', wands: "", cauldrons: "", phials: "", telescopes: "", scales: "" });
  const [dbPets, setDbPets] = useState({ id: '', name: "", species: "" });

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };

  //Määritellään urli, jota sitten päivitellään aina hakuehtojen yms mukaan
  const url = " http://localhost:5000/wizards";
  const delay = 1000;

  /* const [params, setParams] = useState({
    goshawk: "", bagshot: "", waffling: "", switch: "", spore: "", jigger: "", scamander: "", trimble: "", // kirjat
    wands: "", cauldrons: "", phials: "", telescopes: "", scales: "", // tarvikkeet
    name: "", species: "" //lemmikit
  }); */

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
    setBookList(data);
    setEqList(data);
    setPetList(data);
  }


  const searchDefine = (event) => {
    console.log("Tultiin searchDefinee")
    console.log("Eventid: " + event.target.id)

    if (event.target.value.length > 0) {

      //Books
      if (event.target.name === "goshawk") {
        console.log("Tultiin goshawk: " + event.target.value)
        console.log("dbBooks goshawk: " + dbBooks.goshawk)
        setDbBooks({
          ...dbBooks, goshawk: [event.target.value],
        })

      }
      if (event.target.name === "bagshot") {
        console.log("Tultiin bagshot: " + event.target.value)
        setDbBooks({
          ...dbBooks,
          bagshot: [event.target.value],
        })
      }
      if (event.target.name === "waffling") {
        console.log("Tultiin waffling: " + event.target.value)
        setDbBooks({
          ...dbBooks,
          waffling: [event.target.value],
        })
      }
      if (event.target.name === "switch") {
        console.log("Tultiin switch: " + event.target.value)
        setDbBooks({
          ...dbBooks,
          switch: [event.target.value],
        })
      }
      if (event.target.name === "spore") {
        console.log("Tultiin spore: " + event.target.value)
        setDbBooks({
          ...dbBooks,
          spore: [event.target.value]
        })
      }
      if (event.target.name === "jigger") {
        console.log("Tultiin jigger: " + event.target.value)
        setDbBooks({
          ...dbBooks,
          jigger: [event.target.value]
        })
      }
      if (event.target.name === "scamander") {
        console.log("Tultiin scamander: " + event.target.value)
        setDbBooks({
          ...dbBooks,
          scamander: [event.target.value]
        })
      }
      if (event.target.name === "trimble") {
        console.log("Tultiin trimble: " + event.target.value)
        setDbBooks({
          ...dbBooks,
          trimble: [event.target.value]
        })
      }


      //Other Equipment
      if (event.target.name === "id") {
        console.log("Tultiin id: " + event.target.value)
        setDbEquipment({
          ...dbEquipment,
          id: [event.target.value]
        })
      }
      if (event.target.name === "wands") {
        console.log("Tultiin wandInput: " + event.target.value)
        setDbEquipment({
          ...dbEquipment,
          wands: [event.target.value]
        })
      }
      if (event.target.name === "cauldrons") {
        console.log("Tultiin cauldronInput: " + event.target.value)
        setDbEquipment({
          ...dbEquipment,
          cauldrons: [event.target.value]
        })
      }
      if (event.target.name === "phialsInput") {
        console.log("Tultiin phialsInput: " + event.target.value)
        setDbEquipment({
          ...dbEquipment,
          phials: [event.target.value]
        })
      }

      if (event.target.name === "telescopes") {
        console.log("Tultiin telescopesInput: " + event.target.value)
        setDbEquipment({
          ...dbEquipment,
          telescopes: [event.target.value]
        })
      }
      if (event.target.name === "brassscales") {
        console.log("Tultiin brassscalesInput: " + event.target.value)
        setDbEquipment({
          ...dbEquipment,
          brassscales: [event.target.value]
        })
      }

      //Pets
      if (event.target.name === "wizardsIdpet") {
        console.log("Tultiin wizardsId: " + event.target.value)
        setDbPets({
          ...dbPets,
          id: [event.target.value]
        })
      }

      if (event.target.name === "petsnameInput") {
        console.log("Tultiin petsnameInput: " + event.target.value)
        setDbPets({
          ...dbPets,
          name: [event.target.value]
        })
      }
      if (event.target.name === "speciesInput") {
        console.log("Tultiin speciesInput: " + event.target.value)
        setDbPets({
          ...dbPets,
          species: [event.target.value]
        })
      }


    } else {
      console.log("Tultiin elseen")
      setDbEquipment((prev) => ({ ...prev, [event.target.name]: '' }));
    }
  };


  // Book muokkauksen tallennus
  const saveChangesBooks = async (event) => {
    event.preventDefault();

    console.log("Tultiin saveen")
    console.log("dbbookid: " + dbBooks.id)
    console.log("goshawk: " + dbBooks.bagshot)
    console.log("bagshot: " + dbBooks.bagshot)
    console.log("waffling: " + dbBooks.waffling)
    console.log("switch: " + dbBooks.switch)
    console.log("spore: " + dbBooks.spore)
    console.log("jigger: " + dbBooks.jigger)
    console.log("scamander: " + dbBooks.scamander)
    console.log("trimble: " + dbBooks.trimble)


    fetch(url + "/" + dbBooks.id + "?", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        books: {
          ...dbBooks,
          goshawk: dbBooks.goshawk,
          bagshot: dbBooks.bagshot,
          waffling: dbBooks.waffling,
          switch: dbBooks.switch,
          spore: dbBooks.spore,
          jigger: dbBooks.jigger,
          scamander: dbBooks.scamander,
          trimble: dbBooks.trimble,
        }
      }),


      //Tietojen päivitys näkyviin
    }).then((response) => {

      /*   setLoading({
        loading: false
      })  */
      setTimeout(() => {
        fetchData()

      })
    });
    if (document.getElementById("wizardsIdBo").value != "") {
      alert("You have succesfully updated book information!");
    }
    clearInputsBooks();
  }

  const clearInputsBooks = () => {
    document.getElementById("wizardsIdBo").value = "";
    document.getElementById("goshawkInput").value = "";
    document.getElementById("bagshotInput").value = "";
    document.getElementById("wafflingInput").value = "";
    document.getElementById("switchInput").value = "";
    document.getElementById("sporeInput").value = "";
    document.getElementById("jiggerInput").value = "";
    document.getElementById("scamanderInput").value = "";
    document.getElementById("trimbleInput").value = "";

    document.getElementById("goshawkInput").disabled = true;
    document.getElementById("bagshotInput").disabled = true;
    document.getElementById("wafflingInput").disabled = true;
    document.getElementById("switchInput").disabled = true;
    document.getElementById("sporeInput").disabled = true;
    document.getElementById("jiggerInput").disabled = true;
    document.getElementById("scamanderInput").disabled = true;
    document.getElementById("trimbleInput").disabled = true;
  }


  // kirjojen muokkaus
  const handleBookUpdate = (oldData) => {
    console.log(oldData)

    console.log(oldData.id)
    setDbBooks({
      ...dbBooks,
      id: oldData.id
    });
    console.log(dbBooks.id)
    document.getElementById("wizardsIdBo").value = oldData.id;
    document.getElementById("goshawkInput").value = oldData.books.goshawk;
    document.getElementById("bagshotInput").value = oldData.books.bagshot;
    document.getElementById("wafflingInput").value = oldData.books.waffling;
    document.getElementById("switchInput").value = oldData.books.switch;
    document.getElementById("sporeInput").value = oldData.books.spore;
    document.getElementById("jiggerInput").value = oldData.books.jigger;
    document.getElementById("scamanderInput").value = oldData.books.scamander;
    document.getElementById("trimbleInput").value = oldData.books.trimble;

    document.getElementById("goshawkInput").disabled = false;
    document.getElementById("bagshotInput").disabled = false;
    document.getElementById("wafflingInput").disabled = false;
    document.getElementById("switchInput").disabled = false;
    document.getElementById("sporeInput").disabled = false;
    document.getElementById("jiggerInput").disabled = false;
    document.getElementById("scamanderInput").disabled = false;
    document.getElementById("trimbleInput").disabled = false;

    setDbBooks({
      ...dbBooks,
      id: oldData.id,
      goshawk: oldData.books.goshawk,
      bagshot: oldData.books.bagshot,
      waffling: oldData.books.waffling,
      switch: oldData.books.switch,
      spore: oldData.books.spore,
      jigger: oldData.books.jigger,
      scamander: oldData.books.scamander,
      trimble: oldData.books.trimble
    });

  }



  // tarvikkeiden muokkaus
  const handleEqUpdate = (oldData) => {
    console.log(oldData)
    console.log(oldData.id)

    setDbEquipment({
      ...dbEquipment,
      id: oldData.id,
    });

    document.getElementById("wizardsIdEq").value = oldData.id;
    document.getElementById("wandInput").value = oldData.equipment.wand;
    document.getElementById("cauldronInput").value = oldData.equipment.cauldron;
    document.getElementById("phialsInput").value = oldData.equipment.phials;
    document.getElementById("telescopesInput").value = oldData.equipment.telescopes;
    document.getElementById("brassscalesInput").value = oldData.equipment.brassscales;

    document.getElementById("wandInput").disabled = false;
    document.getElementById("cauldronInput").disabled = false;
    document.getElementById("phialsInput").disabled = false;
    document.getElementById("telescopesInput").disabled = false;
    document.getElementById("brassscalesInput").disabled = false;

    console.log("Old data wand: " + oldData.equipment.wand)
    setDbEquipment({
      ...dbEquipment,
      id: oldData.id,
      wands: oldData.equipment.wand,
      cauldrons: oldData.equipment.cauldron,
      phials: oldData.equipment.phials,
      telescopes: oldData.equipment.telescopes,
      brassscales: oldData.equipment.brassscales
    });

    console.log("db wand: " + dbEquipment.wands)

  }

  // Equipment muokkauksen tallennus
  const saveChangesEq = async (event) => {
    event.preventDefault();

    fetch(url + "/" + dbEquipment.id + "?", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        equipment: {
          ...dbEquipment,
          wand: dbEquipment.wands,
          cauldron: dbEquipment.cauldrons,
          phials: dbEquipment.phials,
          telescopes: dbEquipment.telescopes,
          brassscales: dbEquipment.brassscales
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
    if (document.getElementById("wizardsIdEq").value != "") {
      alert("You have succesfully updated equipment information!")
    }
    clearInputsEq();
  }

  const clearInputsEq = () => {
    document.getElementById("wizardsIdEq").value = "";
    document.getElementById("wandInput").value = "";
    document.getElementById("cauldronInput").value = "";
    document.getElementById("phialsInput").value = "";
    document.getElementById("telescopesInput").value = "";
    document.getElementById("brassscalesInput").value = "";

    document.getElementById("wandInput").disabled = true;
    document.getElementById("cauldronInput").disabled = true;
    document.getElementById("phialsInput").disabled = true;
    document.getElementById("telescopesInput").disabled = true;
    document.getElementById("brassscalesInput").disabled = true;
  }

  // funktio lemmikkitietojen muokkaamiseen
  const handlePetUpdate = (oldData) => {
    console.log(oldData)
    //document.getElementById("wizardsIdPet").value = oldData.id;
    console.log(oldData.id)
    setDbPets({
      ...dbPets,
      id: oldData.id
    });
    console.log(dbPets.id)

    document.getElementById("petsnameInput").disabled = false;
    document.getElementById("speciesInput").disabled = false;

    document.getElementById("wizardspetId").value = oldData.id;
    document.getElementById("petsnameInput").value = oldData.pet.name;
    document.getElementById("speciesInput").value = oldData.pet.species;

    setDbPets({
      ...dbPets,
      id: oldData.id,
      name: oldData.pet.name,
      species: oldData.pet.species
    });
    console.log("Petid: " + dbPets.id)
  }


  // Petsin muokkauksen tallennus
  const saveChangesPet = async (event) => {
    event.preventDefault();

    console.log("Tultiin saveen: ")
    console.log("dbpetsid: " + dbPets.id)
    console.log("dbpetsname: " + dbPets.name)
    console.log("dbpetsspes: " + dbPets.species)

    setLoading(true)
    setTimeout(() => {
      fetch(url + "/" + dbPets.id + "?", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pet: {
            ...dbPets,
            name: dbPets.name,
            species: dbPets.species
          }
        }
        ),
        //Tietojen päivitys näkyciin
      }).then((response) => {

        /*   setLoading({
          loading: false
        })  */
        setLoading(false);
        fetchData()
      });
    }, delay)
    if (document.getElementById("wizardspetId").value != "") {
      alert("You have succesfully updated pet information!")
    }
    clearInputsPets();
  }

  const clearInputsPets = () => {
    document.getElementById("wizardspetId").value = "";
    document.getElementById("petsnameInput").value = "";
    document.getElementById("speciesInput").value = "";
    document.getElementById("petsnameInput").disabled = true;
    document.getElementById("speciesInput").disabled = true;
  }



  /* BOOKS, QUIPMENT ja PETS haku */
  const getData = async () => {

    console.log(document.getElementById("idSearchBEP").value)
    const searched = document.getElementById("idSearchBEP").value;
    const newUrl = url + "?id_like=" + searched;
    console.log(searched)
    console.log(newUrl)
    setLoading(true);

    setTimeout(() => {
      async function fetchData() {
        let response = await fetch(newUrl);
        console.log(url);
        let data = await response.json();
        setBookList(data);
        setEqList(data);
        setPetList(data);
        setLoading(false);
      }
      fetchData();
    }, delay)
  };

  /* RETURNIT JA TAULUT */

  return (
    <div id="cont-2" className="bsContaineri">

      <div><br /><br />~<br /><br /><br /><br /></div>

      {/* HAKUKENTTÄ */}
      <Container id="searchInput" className="bsContaineri" margin="3em">
        <h3>Search bar for books, equipments and pets</h3>

        <Table striped bordered hover size="sm">
          <tbody><tr><td><input
            id="idSearchBEP"
            name="idSearch"
            type="text"
            placeholder="Search with wizard id"
          /></td>
            <td><Button variant="light" onClick={() => getData()} >Search</Button></td>
          </tr>
          </tbody>
        </Table>
      </Container>

      <div><br /><br /><br /><br /><br /><br /></div>
      <h2 id="coursebooksLink">Course books</h2>
      <div>~<br /><br /><br /></div>

      {/* EDITOINTI KENTTÄ  */}

      <Container >
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
              <Form.Label >Wizard <br />id</Form.Label><br />
              <input size="sm" className="uniformInput" width="2em" id="wizardsIdBo"
                name="id"
                type="text"
                placeholder="id"
                readOnly disabled
              /* onChange={searchDefine} */
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>The Standard Book of Spells (Grade 1)</Form.Label> <br />
              <input padding="3em" className="uniformInput"
                id="goshawkInput" name="goshawk" type="number" placeholder="(quantity)" onChange={searchDefine} disabled
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
              <Form.Label>A History <br />of Magic</Form.Label><br />
              <input size="sm" className="uniformInput"
                id="bagshotInput" name="bagshot" type="number" placeholder="(quantity)" onChange={searchDefine} disabled
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Magical <br />Theory</Form.Label><br />
              <input size="lg"
                id="wafflingInput" name="waffling" type="number" placeholder="(quantity)" onChange={searchDefine} disabled
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
              <Form.Label>A Beginner's Guide to Transfiguration</Form.Label><br />
              <input className="uniformInput"
                id="switchInput" name="switch" type="number" placeholder="(quantity)" onChange={searchDefine} disabled
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="mb-3">
              <Form.Label>One Thousand Magical Herbs and Fungi</Form.Label><br />
              <input
                id="sporeInput" name="spore" type="number" min="0" placeholder="(quantity)" onChange={searchDefine} disabled
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Magical Drafts and Potions</Form.Label> <br />
              <input padding="3em" className="uniformInput"
                id="jiggerInput" name="jigger" type="number" min="0" placeholder="(quantity)" onChange={searchDefine} disabled
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Fantastic Beasts and Where to Find Them</Form.Label> <br />
              <input padding="3em" className="uniformInput"
                id="scamanderInput" name="scamander" type="number" min="0" placeholder="(quantity)" onChange={searchDefine} disabled
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label><small>The Dark Forces: A Guide to Self-Protection</small></Form.Label> <br />
              <input padding="3em" className="uniformInput"
                id="trimbleInput" name="trimble" type="number" min="0" placeholder="(quantity)" onChange={searchDefine} disabled
              />
            </Form.Group>
            <td><Button variant="light" onClick={saveChangesBooks}>Save changes</Button></td>
          </Row>
        </Form>
      </Container>



      {/*       <Container id="EditBookInputs" className="bsContaineri">
        <Table striped bordered hover size="sm" variant="light">
          <thead >
            <tr>
              <th>Wizard ID</th>
              <th>The Standard Book of Spells (Grade 1)</th>
              <th>A History of Magic</th>
              <th>Magical Theory</th>
              <th>A Beginner's Guide to Transfiguration</th>
              <th>One Thousand Magical Herbs and Fungi</th>
              <th>Magical Drafts and Potions</th>
              <th>Fantastic Beasts and Where to Find Thems</th>
              <th>The Dark Forces: A Guide to Self-Protection</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td readOnly><input id="wizardsIdBo" name="id" type="text" placeholder="id" readOnly
              /></td>
              <td> <input id="goshawkInput" name="goshawk" type="text" placeholder="(quantity)" onChange={searchDefine}
              /></td>
              <td><input id="bagshotInput" name="bagshot" type="text" placeholder="(quantity)" onChange={searchDefine}
              /></td>
              <td><input id="wafflingInput" name="waffling" type="text" placeholder="(quantity)" onChange={searchDefine}
              /></td>
              <td><input id="switchInput" name="switch" type="text" placeholder="(quantity)" onChange={searchDefine}
              /></td>
              <td><input id="sporeInput" name="spore" type="text" placeholder="(quantity)" onChange={searchDefine}
              /></td>
              <td><input id="jiggerInput" name="jigger" type="text" placeholder="(quantity)" onChange={searchDefine}
              /></td>
              <td><input id="scamanderInput" name="scamander" type="text" placeholder="(quantity)" onChange={searchDefine}
              /></td>
              <td><input id="trimbleInput" name="trimble" type="text" placeholder="(quantity)" onChange={searchDefine}
              /></td>
              <td><Button variant="light" onClick={saveChangesBooks}>Save changes</Button></td>

            </tr>
          </tbody>
        </Table>
      </Container> */}

      <div id="bookTable" className="bsContaineri"><br />
        {loading ? (
          <div id="loading">Loading...</div>
        ) : bookList.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Wizard ID</th>
                <th>The Standard Book of Spells (Grade 1)</th>
                <th>A History of Magic</th>
                <th>Magical Theory</th>
                <th>A Beginner's Guide to Transfiguration</th>
                <th>One Thousand Magical Herbs and Fungi</th>
                <th>Magical Drafts and Potions</th>
                <th>Fantastic Beasts and Where to Find Them</th>
                <th>The Dark Forces: A Guide to Self-Protection</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{bookList.map((wizards) => {
              return (
                <tr data-testid="trAsiakasID" key={wizards.id} >
                  <td>{wizards.id}</td>
                  <td>{wizards.books.goshawk}</td>
                  <td>{wizards.books.bagshot}</td>
                  <td>{wizards.books.waffling}</td>
                  <td>{wizards.books.switch}</td>
                  <td>{wizards.books.spore}</td>
                  <td>{wizards.books.jigger}</td>
                  <td>{wizards.books.scamander}</td>
                  <td>{wizards.books.trimble}</td>
                  <td><Button variant="outline-dark" onClick={() => handleBookUpdate(wizards)}>Edit</Button></td>
                </tr>
              );
            })}</tbody></table>
        ) : error === true ? (
          <div id="loading">ERROR</div>
        ) : (
          <div id="loading">Your search didn't match anything...</div>
        )}
      </div>




      {/* muut tarvikkeet */}

      <div id="cont-3" className="bsContaineri">
        <div><br /><br /><br /><br /><br /></div>
        <h2 id="eqLink">Other equipment</h2>
        <div>~<br /><br /><br /></div>

        {/* EDITOINTI KENTTÄ  */}

        <Container >
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
                <Form.Label >Wizard id</Form.Label><br />
                <input size="sm" className="uniformInput" width="2em" id="wizardsIdEq"
                  name="id"
                  type="text"
                  placeholder="id"
                  readOnly disabled
                /* onChange={searchDefine} */
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Wand</Form.Label> <br />
                <input padding="3em" className="uniformInput"
                  id="wandInput" name="wands" type="text" placeholder="(description)" onChange={searchDefine} disabled
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
                <Form.Label>Cauldrons</Form.Label><br />
                <input size="sm" className="uniformInput"
                  id="cauldronInput" name="cauldrons" type="number" min="0" placeholder="(quantity)" onChange={searchDefine} disabled
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Phials</Form.Label><br />
                <input size="lg"
                  id="phialsInput" name="phialsInput" type="text" placeholder="(glass or crystal)" onChange={searchDefine} disabled
                /></Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Telescopes</Form.Label><br />
                <input size="lg"
                  id="telescopesInput" name="telescopes" type="number" min="0" placeholder="(quantity)" onChange={searchDefine} disabled
                /></Form.Group>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Brass scales</Form.Label><br />
                <input size="lg"
                  id="brassscalesInput" name="brassscales" type="number" min="0" placeholder="(quantity)" onChange={searchDefine} disabled
                /></Form.Group>
              <td><Button variant="light" onClick={saveChangesEq}>Save changes</Button></td>
            </Row>
          </Form>
        </Container>


        {/*        <Container id="EditEqInputs" className="bsContaineri">
          <Table striped bordered hover size="sm" variant="light">
            <thead >
              <tr>
                <th>Wizard ID</th>
                <th>Wands</th>
                <th>Cauldrons</th>
                <th>Phials</th>
                <th>Telescopes</th>
                <th>Brass scales</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td readOnly><input id="wizardsIdEq" name="id" type="text" placeholder="id" readOnly
                /></td>
                <td>  <input id="wandInput" name="wands" type="text" placeholder="(quantity)" onChange={searchDefine}
                /></td>
                <td><input id="cauldronInput" name="cauldrons" type="text" placeholder="(quantity)" onChange={searchDefine}
                /></td>
                <td><input id="phialsInput" name="phialsInput" type="text" placeholder="(glass or crystal)" onChange={searchDefine}
                  /><br /><br /></td>
                <td><input id="telescopesInput" name="telescopes" type="text" placeholder="(quantity)" onChange={searchDefine}
                /></td>
                <td><input id="brassscalesInput" name="brassscales" type="text" placeholder="(quantity)" onChange={searchDefine}
                /></td>

                <td><Button variant="light" onClick={saveChangesEq}>Save changes</Button></td>

              </tr>
            </tbody>
          </Table>
        </Container> */}

        <div id="eqTable" className="bsContaineri"><br />
          {loading ? (
            <div id="loading">Loading...</div>
          ) : eqList.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Wizard ID</th>
                  <th>Wands</th>
                  <th>Cauldrons</th>
                  <th>Phials</th>
                  <th>Telescopes</th>
                  <th>Brass scales</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{eqList.map((wizards) => {
                return (
                  <tr data-testid="trAsiakasID" key={wizards.id} >
                    <td>{wizards.id}</td>
                    <td>{wizards.equipment.wand}</td>
                    <td>{wizards.equipment.cauldron}</td>
                    <td>{wizards.equipment.phials}</td>
                    <td>{wizards.equipment.telescopes}</td>
                    <td>{wizards.equipment.brassscales}</td>
                    <td><Button variant="outline-dark" onClick={() => handleEqUpdate(wizards)}>Edit</Button></td>
                  </tr>
                );
              })}</tbody></table>
          ) : error === true ? (
            <div id="loading">Error</div>
          ) : (
            <div id="loading">Your search didn't match anything...</div>
          )}
        </div><br /><br />




        {/* lemmikit */}

        <div id="cont-2" className="bsContaineri">
          <div><br /><br /><br /></div>
          <h2 id="petsLink">Pets</h2>
          <div>~<br /><br /><br /></div>
          <Container >
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
                  <Form.Label >Wizard id</Form.Label><br />
                  <input size="sm" className="uniformInput" width="2em" id="wizardspetId"
                    name="id"
                    type="text"
                    placeholder="id"
                    readOnly disabled
                  /* onChange={searchDefine} */
                  />
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Name</Form.Label> <br />
                  <input padding="3em" className="uniformInput"
                    id="petsnameInput" name="petsnameInput" type="text" placeholder="(name)" onChange={searchDefine} disabled
                  />
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formGroupWizardsIdUni">
                  <Form.Label>Species</Form.Label><br />
                  <input size="sm" className="uniformInput"
                    id="speciesInput" name="speciesInput" type="text" placeholder="(owl/cat/toad/none)" onChange={searchDefine} disabled
                  />

                </Form.Group>
                <td><Button variant="light" onClick={saveChangesPet}>Save changes</Button></td>
              </Row>
            </Form>
          </Container>



          {/* editointikenttä  */}
          {/*         <Container id="EditPetInputs" className="bsContaineri">
          <Table striped bordered hover size="sm" variant="light">
            <thead >
              <tr>
                <th>Wizard ID</th>
                <th>Name</th>
                <th>Species</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td readOnly><input id="wizardspetId" name="wizardsIdpet" type="text" placeholder="id" readOnly /></td>
                <td><input id="petsnameInput" name="petsnameInput" type="text" placeholder="(name)" onChange={searchDefine} /></td>
                <td><input id="speciesInput" name="speciesInput" type="text" placeholder="(owl/cat/toad/none)" onChange={searchDefine}
                /><br /><br /></td>
                <td><Button variant="light" onClick={saveChangesPet}>Save changes</Button></td>

              </tr>
            </tbody>
          </Table>
        </Container> */}
          <br />
          <div id="petTable" className="bsContaineri"><br />
            {loading ? (
              <div id="loading">Loading...</div>
            ) : petList.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Wizard ID</th>
                    <th>Name</th>
                    <th>Species</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{petList.map((wizards) => {
                  return (
                    <tr data-testid="trAsiakasID" key={wizards.id} >
                      <td>{wizards.id}</td>
                      <td>{wizards.pet.name}</td>
                      <td>{wizards.pet.species}</td>
                      <td><Button variant="outline-dark" onClick={() => handlePetUpdate(wizards)}>Edit</Button></td>
                    </tr>
                  );
                })}</tbody></table>
            ) : error === true ? (
              <div id="loading">ERROR</div>
            ) : (
              <div id="loading">Your search didn't match anything...</div>
            )}
          </div>
        </div>
      </div>
    </div >
  );
}
export default Books_Equipment;
