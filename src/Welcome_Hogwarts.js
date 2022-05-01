import React, { Component } from 'react';
import Lucinda from './pictures/Lucinda Thomsonicle-Potus_signature-t.png';
import Minerva from './pictures/Minerva_signature-t.png';
import Logo from './pictures/Hogwarts-Logo-rb.png';

class Welcome_Hogwarts extends React.Component {
  render() {
    return (
      <div id="cont-acceptanceletter">
        <img src={Logo} height="250" width="250"  alt="Lucindas signature"/>

        <div id="cont-al-1">
          <h1>HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY</h1>
          <h4>Headmaster: Albus Dumbledore
            (Order of Merlin, First Class, Grand Sorc., Chf. Warlock,
            Supreme Mugwump, International Confed. of Wizards)</h4>

          <p>    Dear Mr/Ms [Surname],<br />
            <br />
            We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment.
            <br />
            <br />
            Term begins on 1 September. We await your owl by no later than 31 July.
            <br />
            <br />
            Yours sincerely,</p>

            <img src={Minerva} height="100" width="200"  alt="Lucindas signature"/>

          <br />

          Minerva McGonagall
          <br />
          <br />
          Deputy Headmistress
        </div>


        <div id="cont-al-2">
        <br/>
<br/>
<br/>
          <h2>HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY</h2>
          <br/>
          <h4>UNIFORM</h4>
          <br/>
          <p>    First-year students will require:</p>

          <ol>
            <li>Three sets of plain work robes (black)</li>
            <li>One plain pointed hat (black) for day wear</li>
            <li>One pair of protective gloves (dragon hide or similar)</li>
            <li> One winter cloak (black, with silver fastenings)</li>
          </ol>
          <p> Please note that all pupil's clothes should carry name tags.</p>
<br/>
          <h4>COURSE BOOKS</h4>
          <br/>
          <p>  All students should have a copy of each of the following:</p>
          <dl>
            <dt id="cb"> The Standard Book of Spells (Grade 1)</dt>
            <dd> by Miranda Goshawk</dd>
            <dt id="cb">A History of Magic</dt>
            <dd>by Bathilda Bagshot</dd>
            <dt id="cb">Magical Theory</dt>
            <dd> by Adalbert Waffling</dd>
            <dt id="cb">A Beginner's Guide to Transfiguration</dt>
            <dd>by Emeric Switch</dd>
            <dt id="cb"> One Thousand Magical Herbs and Fungi</dt>
            <dd>by Phyllida Spore</dd>
            <dt id="cb">Magical Drafts and Potions</dt>
            <dd> by Arsenius Jigger</dd>
            <dt id="cb"> Fantastic Beasts and Where to Find Them</dt>
            <dd>by Newt Scamander</dd>
            <dt id="cb">The Dark Forces: A Guide to Self-Protection</dt>
            <dd> by Quentin Trimble</dd>
          </dl>
<br/>
          <h4>OTHER EQUIPMENT</h4>
          <br/>
          <dl>
            <dt>1 wand</dt>
            <dt>1 cauldron (pewter, standard size 2)</dt>
            <dt>1 set glass or crystal phials</dt>
            <dt>1 telescope</dt>
            <dt>1 set brass scales</dt>
          </dl>
              <br/>
          <p> Students may also bring, if they desire, an owl OR a cat OR a toad.</p>
          <p>PARENTS ARE REMINDED THAT FIRST YEARS ARE NOT ALLOWED THEIR OWN BROOMSTICK</p>

<p>Yours sincerely,</p>

<img src={Lucinda} height="100" width="200"  alt="Lucindas signature"/>

        </div>

        <div><a href="http://localhost:3000/asiakkaat">Click here to start the book and equipment preorder now</a></div>
      </div>

    );
  }
}

export default Welcome_Hogwarts;