import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Modal, Row, Container, Form } from 'react-bootstrap'

function Books_Equipment(props) {
  const [bookList, setBookList] = useState([]);
  const [eqList, setEqList] = useState([]);
  const [petList, setPetList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const [dbBooks, setDbBooks] = useState({ id: '', goshawk: "", bagshot: "", waffling: "", switch: "", spore: "", jigger: "", scamander: "", trimble: "" });
  const [dbEquipment, setDbEquipment] = useState({ wands: "", cauldrons: "", phials: "", telescopes: "", scales: "" });
  const [dbPets, setDbPets] = useState({ name: "", species: "" });

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };

  //Määritellään urli, jota sitten päivitellään aina hakuehtojen yms mukaan
  const url = " http://localhost:5000/wizards?";
  const delay = 2000;

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

  }, [bookList, eqList, petList]);

  async function fetchData() {
    let response = await fetch(url);
    let data = await response.json();
    setBookList(data);
    setEqList(data);
    setPetList(data);
  }


  // muokkaillaan näitä myöhemmin tähän osioon sopivaksi
  const searchDefine = (event) => {
    console.log("Tultiin searchDefinee")
    console.log("Eventid: " + event.target.id)
    if (event.target.value.length > 0) {

      /*    if(event.target.name === "id")
         {
           setSearched(
             "id_like=" + [event.target.value]
           )
           console.log(searched)
         } */

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

    } else {
      console.log("Tultiin elseen")
      setDbBooks((prev) => ({ ...prev, [event.target.name]: '' }));
    }
  };

  // muokkauksen tallennus
  const saveChanges = async (event) => {
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

    /*     await fetch("http://localhost:5000/wizards/" + params.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            equipment: {
              wand: params.wand,
              cauldron: params.cauldron,
              phials: params.phials,
              telescopes: params.telescopes,
              brassscales: params.brassscales
            },
            books: {
              goshawk: params.goshawk,
              bagshot: params.bagshot,
              waffling: params.waffling,
              switch: params.switch,
              spore: params.spore,
              jigger: params.jigger,
              scamander: params.scamander,
              trimble: params.trimble
            },
            pet: {
              name: params.name,
              species: params.species
            },
          } */

    fetch(url + dbBooks.id + "?", {

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
      }
      ),


      //Tietojen päivitys näkyciin
    }).then((response) => {
      
      /*   setLoading({
        loading: false
      })  */
      
      
      setTimeout(()=>{
        fetchData()
        
      })
    });

    alert("You have succesfully updated book information")
    clearInputs();
  }

  const clearInputs = () => {
    document.getElementById("goshawkInput").value = "";
    document.getElementById("bagshotInput").value = "";
    document.getElementById("wafflingInput").value = "";
    document.getElementById("switchInput").value = "";
    document.getElementById("sporeInput").value = "";
    document.getElementById("jiggerInput").value = "";
    document.getElementById("scamanderInput").value = "";
    document.getElementById("trimbleInput").value = "";

  }


  //Poisto
/*   const deleteAll = (wizards) => {
    try{
      fetch(url + wizards.id, {
        method:'DELETE',
      }).then(() => {
        fetchData();
        setLoading({
          loading: false
        })
      })
    }
    catch{
    }
  };  */

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

  // funktio kkirjatietojen muokkaamiseen
  const handleBookUpdate = (oldData) => {
    console.log(oldData)
    document.getElementById("wizardsId").value = oldData.id;
    console.log(oldData.id)
    setDbBooks({...dbBooks,
      id: oldData.id
    });
    console.log(dbBooks.id)
    document.getElementById("goshawkInput").value = oldData.books.goshawk;
    document.getElementById("bagshotInput").value = oldData.books.bagshot;
    document.getElementById("wafflingInput").value = oldData.books.waffling;
    document.getElementById("switchInput").value = oldData.books.switch;
    document.getElementById("sporeInput").value = oldData.books.spore;
    document.getElementById("jiggerInput").value = oldData.books.jigger;
    document.getElementById("scamanderInput").value = oldData.books.scamander;
    document.getElementById("trimbleInput").value = oldData.books.trimble;
    
    setDbBooks({...dbBooks,
      id: [oldData.id],
      goshawk: [oldData.books.goshawk],
      bagshot: [oldData.books.bagshot],
      waffling: [oldData.books.waffling],
      switch: [oldData.books.switch],
      spore:[oldData.books.spore],
      jigger: [oldData.books.jigger],
      scamander: [oldData.books.scamander],
      trimble: [oldData.books.trimble] 
    });

  }

  // funktio equipment-tietojen muokkaamiseen
 /*  const handleEqUpdate = (oldData) => {
    console.log(oldData)
    document.getElementById("wizardsId").value = oldData.id;
    console.log(oldData.id)
    setParams({
      id: oldData.id
    });
    console.log(params.id)
    document.getElementById("wandInput").value = oldData.wands;
    document.getElementById("cauldronInput").value = oldData.cauldrons;
    document.getElementById("phialsInput").value = oldData.phials; // tänne erilaiset phials-vaihtoehdot?
    document.getElementById("telescopesInput").value = oldData.telescopes;
    document.getElementById("brassscalesInput").value = oldData.brassscales;
    /*  handleShow() */
    /*  document.getElementById("robesModal") = oldData.robes; */
  

  // funktio lemmikkitietojen muokkaamiseen
  /* const handlePetUpdate = (oldData) => {
    console.log(oldData)
    document.getElementById("wizardsId").value = oldData.id;
    console.log(oldData.id)
    setParams({
      id: oldData.id
    });
    console.log(params.id)
    document.getElementById("petsnameInput").value = oldData.pet.name;
    document.getElementById("speciesInput").value = oldData.pet.species;
    /*  handleShow() */
    /*  document.getElementById("robesModal") = oldData.robes; */
  

  return (

    //kurssikirjataulukko:
    <div id="cont-2">
      <h2>Course books</h2>
      <Container id="searchBooksInput" margin="3em" className="bsContaineri">
        <input name="id" type="text" placeholder="Wizard id" onChange={searchDefine} />
        <button /* onClick={getData} */ >Search</button>
      </Container>
      <Container id="EditBookInputs" className="bsContaineri">
        <input id="wizardsId" name="id" type="text" placeholder="id" hidden /* onChange={searchDefine} */ />
        <input id="goshawkInput" name="goshawk" type="text" placeholder="The Standard Book of Spells (Grade 1)" onChange={searchDefine} />
        <input id="bagshotInput" name="bagshot" type="text" placeholder="A History of Magic" onChange={searchDefine} />
        <input id="wafflingInput" name="waffling" type="text" placeholder="Magical Theory" onChange={searchDefine} />
        <input id="switchInput" name="switch" type="text" placeholder="A Beginner's Guide to Transfiguration" onChange={searchDefine} /><br />
        <input id="sporeInput" name="spore" type="text" placeholder="One Thousand Magical Herbs and Fungi" onChange={searchDefine} />
        <input id="jiggerInput" name="jigger" type="text" placeholder="Magical Drafts and Potions" onChange={searchDefine} />
        <input id="scamanderInput" name="scamander" type="text" placeholder="Fantastic Beasts and Where to Find Them" onChange={searchDefine} />
        <input id="trimbleInput" name="trimble" type="text" placeholder="The Dark Forces: A Guide to Self-Protection" onChange={searchDefine} />
        <Button onClick={saveChanges}>Save changes</Button>
      </Container>

      <div id="bookTable">
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
                  <th><Button color="primary" onClick={() => handleBookUpdate(wizards)}>Edit</Button></th>
                  <td><Button /* onClick={delete} */ id={wizards.id}>Delete</Button></td>
                </tr>
              );
            })}</tbody></table>
        ) : error === true ? (
          <div id="loading">VIRHE! Ethän syötä erikoismerkkejä</div>
        ) : (
          <div id="loading">Annetuilla hakuehdoilla ei löytynyt dataa</div>
        )}
      </div>




      {/* muut tarvikkeet */}

      <div id="cont-3">
        <br /><br />
        <h2>Other equipment</h2>
        <Container id="searchEqInput" margin="3em" className="bsContaineri">
          <input name="id" type="text" placeholder="Wizard id" onChange={searchDefine} />
          <button /* onClick={getData} */ >Search</button>
        </Container>
        <Container id="EditEqInputs" className="bsContaineri">
          <input id="wizardsId" name="id" type="text" placeholder="id" hidden /* onChange={searchDefine} */ />
          <input id="wandInput" name="wands" type="text" placeholder="wands" onChange={searchDefine} /><br />
          <input id="cauldronInput" name="cauldrons" type="text" placeholder="cauldrons" onChange={searchDefine} /><br />

          {/* phials radio buttonit */}
          <input id="phialsInput" name="phialsInput" type="radio" value="glassPhials" onChange={searchDefine} />
          <label for="glassPhials">Glass phials</label><br />
          <input name="phialsInput" type="radio" value="crystalPhials" onChange={searchDefine} />
          <label for="crystalPhials">Crystal phials</label><br />
          <input id="telescopesInput" name="telescopes" type="text" placeholder="telescopes" onChange={searchDefine} /><br />
          <input id="brassscalesInput" name="brasscales" type="text" placeholder="brass scales" onChange={searchDefine} /><br />
          <Button onClick={saveChanges}>Save changes</Button>
        </Container>

        <div id="eqTable">
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
                    <th><Button color="primary" /* onClick={() => handleEqUpdate(wizards)} */>Edit</Button></th>
                    <td><Button /* onClick={delete} */ id={wizards.id}>Delete</Button></td>
                  </tr>
                );
              })}</tbody></table>
          ) : error === true ? (
            <div id="loading">VIRHE! Ethän syötä erikoismerkkejä</div>
          ) : (
            <div id="loading">Annetuilla hakuehdoilla ei löytynyt dataa</div>
          )}
        </div><br /><br />




        {/* lemmikit */}

        <div id="cont-4">
          <h2>Pets</h2>
          <Container id="searchPetInput" margin="3em" className="bsContaineri">
            <input name="id" type="text" placeholder="Wizard id" onChange={searchDefine} />
            <button /* onClick={getData} */ >Search</button>
          </Container>
          <Container id="EditPetInputs" className="bsContaineri">
            <input id="wizardsId" name="id" type="text" placeholder="id" hidden /* onChange={searchDefine} */ />

            <input id="petsnameInput" name="name" type="text" placeholder="name" onChange={searchDefine} /><br />


            {/* species radio buttonit */}

            {/* phials radio buttonit */}
            {/* tutki/mieti miten saat tiedon tietokannasta tähän */}
            <input id="speciesInput" name="phialsInput" type="radio" value="Owl" onChange={searchDefine} />
            <label for="glassPhials">Owl</label><br />
            <input name="speciesInput" type="radio" value="Cat" onChange={searchDefine} />
            <label for="crystalPhials">Cat</label><br />
            <input name="speciesInput" type="radio" value="Toad" onChange={searchDefine} />
            <label for="crystalPhials">Toad</label><br />
            <input name="speciesInput" type="radio" value="none" onChange={searchDefine} />
            <label for="none">Not bringing any pets</label><br /><br />
            <Button onClick={saveChanges}>Save changes</Button><br />
          </Container>
          <br />
          <div id="petTable">
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
                    <th></th>
                  </tr>
                </thead>



                <tbody>{petList.map((wizards) => {
                  return (
                    <tr data-testid="trAsiakasID" key={wizards.id} >
                      <td>{wizards.id}</td>
                      <td>{wizards.pet.name}</td>
                      <td>{wizards.pet.species}</td>
                      <th><Button color="primary" /* onClick={() => handlePetUpdate(wizards)} */>Edit</Button></th>
                      <td><Button /* onClick={delete} */ id={wizards.id}>Delete</Button></td>

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
export default Books_Equipment
