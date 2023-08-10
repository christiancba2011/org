import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo =(props) => {
    //Destructuracion
    //const colorPrimario= props.datos.colorPrimario
    //const colorSecundario=props.datos.colorSecundario
    //const titulo=props.datos.titulo
    //Estas tres Lineas de arriba son lo mismo que la Linea sola de abajo

    const {colorPrimario,colorSecundario,titulo, id } = props.datos

    const {colaboradores, eliminarColaborador,actualizarColor,like} = props

    const obj = {
    backgroundColor:hexToRgba(colorPrimario,0.6)
    }
     
    //console.log(colaboradores.length > 0)

    const estiloTitulo = { borderColor: colorPrimario}

    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento) =>{
                    //console.log(evento.target.value)
                    actualizarColor(evento.target.value, id)
                }}
                />
            <h3 style={estiloTitulo}>{titulo} </h3>
            <div className="colaboradores">
            
            {
                colaboradores.map( (colaborador,index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario} 
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            }
           
            </div>

            </section>
        }
    </>
}

export default Equipo