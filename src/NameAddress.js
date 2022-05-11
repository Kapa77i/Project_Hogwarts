import React, { useState, useEffect, useRef, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Modal, Row, Container, Form, Table, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './index.css';
import Logo from './pictures/Hogwarts-Logo-rb.png';

function NameAddress(props) {
  const [wizardlist, setWizardlist] = useState([]);
  const [dbitem, setDbitems] = useState({ id:"", name:"", address:"" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);


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
    setWizardlist(data);
  }

  //Otetaan eventeillä haltuun muutokset
  const searchDefine = (event) => {
    console.log("Tultiin seacrhDefinee")
    console.log("Eventid: " + event.target.id)
    if (event.target.value.length > 0) {
        if (event.target.name === "id") {
            setDbitems({
              ...dbitem, id: [event.target.value],
            })
          }
      if (event.target.name === "name") {
        console.log("Tultiin name: " + event.target.value)
        console.log("dbitem name: " + dbitem.name)
        setDbitems({
          ...dbitem, name: [event.target.value],
        })
      }
      if (event.target.name === "address") {
        console.log("Tultiin address: " + event.target.value)
        setDbitems({
          ...dbitem,
          address: [event.target.value],
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
    console.log("hat: " + dbitem.name)
    console.log("gloves: " + dbitem.address)

    fetch(url + "/" + dbitem.id + "?", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name: dbitem.name,
          address: dbitem.address
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

    alert("You have succesfully updated basic information")
    clearInputs();

  }

  //Input kenttien clear-editoinnin jälkeen
  const clearInputs = () => {
    document.getElementById("wizardsId").value = "";
    document.getElementById("nameInput").value = "";
    document.getElementById("addressInput").value = "";
  }

  //POISTO NAMISKA
  const deleteAll = (wizards) => {
    try {  
      fetch(url + "/" + wizards.id, {
        method: 'DELETE',
      }).then(() => {
        fetchData();
       
      })
    }

    catch {

    }


  };


  //HAE NAPPULAN TOIMINTO
  const getData = async () => {
    console.log(document.getElementById("idSearch").value)
    const searched = document.getElementById("idSearch").value;
    setLoading(true);

    setTimeout(() => {
      async function fetchData() {
        let response = await fetch(url + "?id_like=" + searched);
        console.log(url);
        let data = await response.json();
        setWizardlist(data);
        setLoading(false);
      }

      fetchData();
    }, delay)
  };


  /* EDIT NAPPULAN TOIMINTO */
  const handleUpdate = (oldData) => {
    document.getElementById('wizardsId').setAttribute('readOnly', true);
    console.log(oldData)
    document.getElementById("wizardsId").value = oldData.id;
    document.getElementById("nameInput").value = oldData.name;
    document.getElementById("addressInput").value = oldData.address;
    console.log(oldData.id);

    setDbitems({
      ...dbitem,
      id: [oldData.id],
      name: [oldData.name],
      address: [oldData.address]
    });

    console.log("Name: " + dbitem.name)
    console.log("address: " + dbitem.address)
    console.log("id: " + dbitem.id)

  }

  return (

    <div>
      {/*  {loading && <div>Loading.... </div>} */}
      <div id="cont-2">
      <p>
      <img src={Logo} height="200" width="200"  alt="Hogwarts"/><br/>
      <br/><br/>On this page, the administrator can view, search, edit and delete orders placed by wizards. <br/><br/>
Click on the "Edit" button to edit the data in selected row. <br/>This will move the data to the edit boxes above each section. <br/>Click on the "Save changes" button to save the changes to the database.<br/><br/>
Click on the "Delete" button in the Basic information section to delete the selected wizard data. <br/>NOTE! This will delete ALL information related to the wizard from the database.<br/><br/>
<br/>
<h6>Jump to section:</h6> 
<a href="#basicInformationLink">Basic Information</a> | <a href="#uniformLink">Uniform</a> | <a href="#coursebooksLink">Course books</a> |
<a href="#eqLink">Other equipment</a> | <a href="#petsLink">Pets</a>
<br/><br/><br/>
</p>
<br/><br/>
        {/* HAKUKENTTÄ */}
        <Container id="searchInput" className="bsContaineri" margin="3em">
          <h2 id="basicInformationLink">Basic information</h2>

          <Table striped bordered hover size="sm">
            <tbody><tr><td><input
              id="idSearch"
              name="idSearch"
              type="text"
              placeholder="Wizard id"
            /></td>
              <td><Button variant="light" onClick={() => getData()} >Search</Button></td>
            </tr>
            </tbody>
          </Table>
        </Container>



        {/* EDITOINTI KENTTÄ  */}
        <Container id="EditInputs" className="bsContaineri">
          <Table striped bordered hover size="sm" variant="light">
            <thead >
              <tr>
                <th>Wizard ID</th>
                <th>Wizards fullname</th>
                <th>Wizards address</th>
                <th>-</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td readOnly><input id="wizardsId"
                  name="id"
                  type="text"
                  placeholder="id"
                  readOnly
                /></td>
                <td> <input
                  id="nameInput"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={searchDefine}
                /></td>
                <td><input
                  id="addressInput"
                  name="address"
                  type="text"
                  placeholder="Address"
                  onChange={searchDefine}
                /></td>
                <td><Button variant="light" onClick={saveChanges}>Save changes</Button></td>

              </tr>
            </tbody>
          </Table>
        </Container>

        <div id="taulukko" className="bsContaineri">
          {loading ? (
            <div id="loading">Loading...</div>

          ) : wizardlist.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Wizard ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>-</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>{wizardlist.map((wizards) => {
                return (
                  <tr data-testid="trAsiakasID" key={wizards.id}>
                    <td>{wizards.id}</td>
                    <td>{wizards.name}</td>
                    <td>{wizards.address}</td>
                    <td><Button variant="outline-dark" onClick={() => handleUpdate(wizards)}>Edit</Button></td>
                    <td><Button variant="dark" onClick={() => deleteAll(wizards)} id={wizards.id}>Delete</Button></td>
                    <td><Link to={`/wizards/${wizards.id}`} id={wizards.id}>
                <button>All info</button>
              </Link></td>

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

export default NameAddress;
