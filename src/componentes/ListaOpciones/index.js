import "./ListaOpciones.css"
const ListaOpciones = (props) => {
   //Metodo map -> arreglo.map ( (equipo,index) => {
   // return <option></option>
   //})
   

    const manejarCambio = (e) => {
        console.log("cambio",e.target.value)
        {/* Recibe actualizarEquipo del Componente Padre Formulario */}
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        {/* Recibe props.valor de Formulario internamente onChange recibe el evento y lo envia a 
         Formulario para que lo actualice*/}
        <select value={props.valor} onChange={manejarCambio} >
            <option value="" disabled defaultValue="" hidden >Seleccionar Equipo</option>
            { props.equipos.map( (equipo,index) => {
             return <option key={index} value={equipo}>{equipo}</option>
            } ) }                    
            
        </select>
    </div>
}

export default ListaOpciones