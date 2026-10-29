
import "./StudentCard.css"



function StudentCard(props) {
    return (
        <div class='StudentCard'>

            <img src={props.image} alt="Student" />
            <h1>{props.prenom} {props.nom}</h1>
            <p>Key: {props.id}</p>
            <p>Email:{props.email}</p>
            <p>Tel: {props.tel}</p>
            <p>Filière: {props.filiere}</p>
            <p>Groupe: {props.groupe}</p>
            <p>Ville: {props.ville}</p>
            <p>Année: {props.annee}</p>
            <button >Contacter</button>
        </div>

    );

}



export default StudentCard;