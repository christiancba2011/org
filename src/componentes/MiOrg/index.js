import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{

    //Estado - hooks
    //useState
    //useState()
    console.log(props)
    // const [nombreVariable,funcionActualiza] = useState(valorInicial)
    
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento",!mostrar)
    //     actualizarMostrar(!mostrar)
    // }


    return <section className="orgSection">
        <h3 className="title">Mi Organización </h3>
        <img src="/img/Botão add-01 1.png" alt="Boton add" onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg