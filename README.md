# React-harjoitustyö: Sähköinen hyväksymiskirje ja tarviketilaus Tylypahkaan by Katja Papinniemi & Petra Lievonen (ET21KM)

- käyttäjäkokemuksen kannalta suosittelemme käyttämään selaimena Firefoxia (Chromessa jostain syystä fontit pielessä)
- seuraavat komennot kannattaa laittaa VSCoden konsoliin, jolloin kehitysympäristö ja JSON-serveri käynnistyvät yhtäaikaa:
-  `npm i -D json-server concurrently`
-  `npm run dev`

Harjoitustyön idea lyhyesti:
- Etusivulla on hyväksymiskirje, jonka alla listataan ensimmäisen vuoden opiskelijan tarvitsemat varusteet (koulupuku, kirjat, muut varusteet, mahdollinen mukana tuotava lemmikki)
- Application-sivulla opiskelija täyttää tilauslomakkeen, joka kirjautuu JSON-serverille "Submit your order"-nappia painamalla
- Books and equipments -sivu tarkoitettu tilaustietojen hallintaan, eli siellä ylläpitäjä pystyy muokkaamaan ja poistamaan annettuja tietoja sekä etsimään tietoja wizard-id:llä
- Haku onnistuu pelkästään wizard-id:llä, koska emme nähneet mitään järkeä yksittäiselle sanahaulle. Koska jos pitää päivittää jonkun tietoja, ensin pitää tietää Wizard-id ja sen jälkeen osio mistä haluu mitäkin päivittää.
- Testit on tehty karkeina ja osa ei mene läpi. Yritetty kuitenkin on.



(Harry Potter and Fantastic Beasts characters, names and related indicia are trademarks of and © Warner Bros. Entertainment Inc.
Harry Potter, Fantastic Beasts and Pottermore Publishing and Stage Theatrical Rights © J.K. Rowling. All Rights Reserved.)
