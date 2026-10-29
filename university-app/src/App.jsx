import './App.css';
import Header from "./composants/header.jsx";
import Footer from './composants/footer.jsx';
import StudentCard from "./composants/studentcard.jsx";
import studentImage from './assets/hero.png'
import { useState } from 'react';
function App() {
  function ajouterEtudiant() {
    const nouvelEtudiant = {
      id: "1",
      nom: 'aberrahmen',
      prenom: 'ben slama',

      email: 'abouda20062018@gmail.com',
      tel: '+216 56 444 199',
      filiere: 'GLSI',
      groupe: 'GLSI 1A',
      ville: 'mahdia',
      annee: '2ème année',
      image: studentImage,

    }
    setEtudiants([...etudiants, nouvelEtudiant]);
  }
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "slim",
      nom: "boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
    },

    {

      id: "1",
      nom: 'aberrahmen',
      prenom: 'ben slama',

      email: 'abouda20062018@gmail.com',
      tel: '+216 56 444 199',
      filiere: 'GLSI',
      groupe: 'GLSI 1A',
      ville: 'Mahdia',
      annee: '2ème année',
      image: studentImage,
    },
    {
      id: "2",
      nom: 'saleh',
      prenom: 'wartani',
      email: 'salou7@gmail.com',
      tel: '+216 56 444 199',
      filiere: 'GLSI',
      groupe: 'GLSI 2B',
      ville: 'Mahdia',
      annee: '2ème année',
      image: studentImage,
    },
    {
      id: "3",
      nom: 'lazher',
      prenom: 'arrouche',
      email: 'lazher@gmail.com',
      tel: '+216 87459625',
      filiere: 'GLSI',
      groupe: 'GLSI 3B',
      ville: 'Mahdia',
      annee: '2ème année',
      image: studentImage,
    },
  ]);

  return (
    <><header className="App-header">
      <Header />
    </header>
      <div><button onclick={ajouterEtudiant}></button></div>


      <div className='container'>
        {student.map((student) => (
          <StudentCard

            prenom={student.prenom}
            nom={student.nom}
            key={student.id}
            email={student.email}
            tel={student.tel}
            filiere={student.filiere}
            groupe={student.groupe}
            ville={student.ville}
            annee={student.annee}
            image={student.image} />
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );

}




export default App;