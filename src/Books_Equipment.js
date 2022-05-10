import React, { useState, useEffect, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Modal, Row, Container, Form } from 'react-bootstrap';
import './index.css';

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
  const url = " http://localhost:5000/wizards";
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

  }, []);

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

/* 
          <Container id="EditEqInputs" className="bsContaineri">
            <input id="wizardsId" name="id" type="text" placeholder="id" hidden /* onChange={searchDefine} *//*  />
            <input id="wandInput" name="wands" type="text" placeholder="wands" onChange={searchDefine} /><br />
            <input id="cauldronInput" name="cauldrons" type="text" placeholder="cauldrons" onChange={searchDefine} /><br /> */
  
            /* phials radio buttonit */
            /* <input id="phialsInput" name="phialsInput" type="radio" value="glassPhials" onChange={searchDefine} />
            <label htmlFor="glassPhials">Glass phials</label><br />
            <input name="phialsInput" type="radio" value="crystalPhials" onChange={searchDefine} />
            <label htmlFor="crystalPhials">Crystal phials</label><br />
            <input id="telescopesInput" name="telescopes" type="text" placeholder="telescopes" onChange={searchDefine} /><br />
            <input id="brassscalesInput" name="brasscales" type="text" placeholder="brass scales" onChange={searchDefine} /><br />
            <Button onClick={saveChanges}>Save changes</Button>
          </Container>*/ 

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


    fetch(url +"/" + dbBooks.id + "?", {

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
    clearInputsBooks();
  }

  const clearInputsBooks = () => {
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
  const deleteAll = (wizards) => {
    try{
      fetch(url +"/" + wizards.id, {
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


  }; 


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
   const handleEqUpdate = (oldData) => {
    console.log(oldData)
    document.getElementById("wizardsId").value = oldData.id;
    console.log(oldData.id)

    setDbEquipment({...dbEquipment,
      id: oldData.id,
    });
    
    document.getElementById("wandInput").value = oldData.equipment.wand;
    document.getElementById("cauldronInput").value = oldData.equipment.cauldron;
    document.getElementById("phialsInput1").value = oldData.equipment.phials; 
    document.getElementById("phialsInput2").value = oldData.equipment.phials;// tänne erilaiset phials-vaihtoehdot?
    document.getElementById("telescopesInput").value = oldData.equipment.telescopes;
    document.getElementById("brassscalesInput").value = oldData.equipment.brassscales;

    console.log("Old data wand: " + oldData.equipment.wand)
    setDbEquipment({...dbEquipment,
      id: [oldData.id],
      wands: [oldData.equipment.wand], 
      cauldrons: [oldData.equipment.cauldron], 
      phials: [oldData.equipment.phials], 
      telescopes: [oldData.equipment.telescopes], 
      scales: [oldData.equipment.brassscales]
    });

    console.log("db wand: " + dbEquipment.wands)
    
  }

  // Equipment muokkauksen tallennus
  const saveChangesEq = async (event) => {
    event.preventDefault();

    fetch(url +"/" + dbEquipment.id + "?", {


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
      
      
      setTimeout(()=>{
        fetchData()
        
      })
    });

    alert("You have succesfully updated book information")
    clearInputsEq();
  }

  const clearInputsEq = () => {
    document.getElementById("wandInput").value = "";
    document.getElementById("cauldronInput").value = "";
    document.getElementById("phialsInput1").value = ""; 
    document.getElementById("phialsInput2").value = "";// tänne erilaiset phials-vaihtoehdot?
    document.getElementById("telescopesInput").value = "";
    document.getElementById("brassscalesInput").value = "";


  }

  // funktio lemmikkitietojen muokkaamiseen
   const handlePetUpdate = (oldData) => {
    console.log(oldData)
    document.getElementById("wizardsId").value = oldData.id;
    console.log(oldData.id)
    setDbPets({...dbPets,
      id: oldData.id
    });
    console.log(dbPets.id)
    document.getElementById("wizardsIdpet").value = oldData.id;
    document.getElementById("petsnameInput").value = oldData.pet.name;
    document.getElementById("speciesInput").value = oldData.pet.species; }
    /*  handleShow() */
    /*  document.getElementById("robesModal") = oldData.robes; */
  
// Petsin muokkauksen tallennus
const saveChangesPet = async (event) => {
  event.preventDefault();

  fetch(url +"/" + dbPets.id + "?", {


    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pet: {
        ...dbPets,
        id: dbEquipment.id,
        name: dbEquipment.wands,
        species: dbEquipment.cauldrons,
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
  clearInputsPets();
}

const clearInputsPets = () => {
  document.getElementById("wizardsIdpet").value = "";
  document.getElementById("petname").value = "";
  document.getElementById("species").value = ""; 


}

  return (

    //kurssikirjataulukko:
    <div id="cont-2" className="bsContaineri">
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
        <Button variant="outline-dark" onClick={saveChangesBooks}>Save changes</Button>
      </Container>

      <div id="bookTable" className="bsContaineri">
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
                  <td><Button variant="outline-dark" onClick={() => handleBookUpdate(wizards)}>Edit</Button></td>
                  <td><Button variant="dark" onClick={() => deleteAll(wizards)}  id={wizards.id}>Delete</Button></td>
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

      <div id="cont-3" className="bsContaineri">
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
          <input id="phialsInput1" name="phialsInput1" type="radio" value="glassPhials" onChange={searchDefine} />
          <label htmlFor="glassPhials">Glass phials</label><br />

          <input id="phialsInput2" name="phialsInput2" type="radio" value="crystalPhials" onChange={searchDefine} />
          <label htmlFor="crystalPhials">Crystal phials</label><br />

          <input id="telescopesInput" name="telescopes" type="text" placeholder="telescopes" onChange={searchDefine} /><br />
          <input id="brassscalesInput" name="brasscales" type="text" placeholder="brass scales" onChange={searchDefine} /><br />
          <Button variant="light" onClick={saveChangesEq}>Save changes</Button>
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
                    <td><Button variant="outline-dark"  onClick={() => handleEqUpdate(wizards)}>Edit</Button></td>
                    <td><Button variant="dark"  onClick={() => deleteAll(wizards)}  id={wizards.id}>Delete</Button></td>
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

        <div id="cont-2" className="bsContaineri">
          <h2>Pets</h2>
          <Container id="searchPetInput" margin="3em" className="bsContaineri">
            <input name="id" type="text" placeholder="Wizard id" onChange={searchDefine} />
            <button /*  onClick={getData} */ >Search</button>
          </Container>



          <Container id="cont-2" className="bsContaineri">
            <input readOnly id="wizardsIdpet" name="id" type="text" placeholder="id" hidden  onChange={searchDefine} />
            <input id="petsnameInput" name="name" type="text" placeholder="name" onChange={searchDefine} /><br />
            {/* species radio buttonit */}

            {/* phials radio buttonit */}
            {/* tutki/mieti miten saat tiedon tietokannasta tähän */}
            <input id="speciesInput" name="phialsInput" type="radio" value="Owl" onChange={searchDefine} />
            <label htmlFor="speciesInput">Owl</label><br />
            <input name="speciesInput" type="radio" value="Cat" onChange={searchDefine} />
            <label htmlFor="speciesInput">Cat</label><br />
            <input name="speciesInput" type="radio" value="Toad" onChange={searchDefine} />
            <label htmlFor="speciesInput">Toad</label><br />
            <input name="speciesInput" type="radio" value="none" onChange={searchDefine} />
            <label htmlFor="none">Not bringing any pets</label><br /><br />
            <Button variant="light"  onClick={saveChangesPet} >Save changes</Button><br />
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
                      <td><Button variant="outline-dark" onClick={() => handlePetUpdate(wizards)} >Edit</Button></td>
                      <td><Button variant="dark"  onClick={() => deleteAll(wizards)}  id={wizards.id}>Delete</Button></td>

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
     
    </div>
  );
}
export default Books_Equipment
