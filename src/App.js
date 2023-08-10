
import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(false)

  const [colaboradores,actualizarColaboradores] = useState([{
   
    id: uuid(),
    equipo:"Front End",
     foto:"https://github.com/lizrobles20.png",
    nombre:"Liz Robles",
    puesto:"Estudiante",
    fav:false   
    },

    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/christiancba2011.png",
      nombre: "Christian Martinez",
      puesto: "Estudiante Front End",
      fav:true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:false

  }])

  const [equipos,actualizarEquipos] = useState ( [
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    { 
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móbil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])
  //Ternario --> condicion ? seMuestra : NoSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador:", colaborador)

    //Spread Operator
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador",id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    //console.log(nuevosColaboradores)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color de Equipo
  const actualizarColor = (color,id) => {
    console.log("Actualizar:",color,id)
    const equiposActualizados = equipos.map( (equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    console.log("like:",id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id ){
        colaborador.fav =  ! colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }


  return (
    <div>
      {/* {Header()}
      <Header></Header> */}
      <Header/>
      {/* mostrarFormulario === true ? <Formulario/> : <></>*/ }

      {mostrarFormulario && <Formulario
       equipos={equipos.map( (equipo) => equipo.titulo )}
       registrarColaborador={registrarColaborador}
       crearEquipo={crearEquipo}
       />}
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map( (equipo) => {
          // console.log("Equipo:",equipo)
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador =>colaborador.equipo === equipo.titulo)}
          //Esto que está en amarillo, esto que acabo de seleccionar hace referencia a la función,
          // mientras que el primer eliminarColaborador el azul es un nombre de una prop,
          // puede ser cualquiera que a ti se te antoje. Puede ser delete, solamente eliminar, 
          //no hay ningún problema. Pero lo que hay que tener en cuenta es que ahora sí, 
          //ya todos nuestros equipos van a recibir esa prop.
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        }
         )
      }
      <Footer/>
    </div>
  )
}

export default App;
