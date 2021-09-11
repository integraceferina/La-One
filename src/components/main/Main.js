import React, {Component} from 'react';
import Opciones from "../opciones/Opciones";
import Recordatorio from "../recordatorio/Recordatorio";
import datos from '../../data/data.json';
import Swal from 'sweetalert2';


export default class Main extends Component{
    

    constructor(props){
        super(props);
        this.state = {
            identificador: 1,
            id: "1",
            arrayOpciones: [],
           
        }
    }
    


    componentDidUpdate = (prevProps, prevState ) => {


        const {identificador, id, arrayOpciones} = this.state;

        if (prevState.identificador !== identificador && identificador <= 5) {
            arrayOpciones.push(id.substring(1).toUpperCase());
            
        }  

    }


    handleOpcionA = () => {
        const {identificador} = this.state;

        if (identificador < 5) {

            this.setState(
                {
                    identificador: identificador + 1,
                    id: identificador + 1 + 'a',
        
                }
            )

            
        }
    };

    handleOpcionB = () => {
        const {identificador} = this.state;

        if (identificador < 5) {

            this.setState(
                {
                    identificador: identificador + 1,
                    id: identificador + 1 + 'b',
        
                }
            )


            
        }
    };
         componentDidMount(){
           Swal.fire({
            background:'#FEC260',
            titleText:'¿Estas Listo?',
            confirmButtonColor:'#2A0944',
           
         });
        }

    render(){

        const { id,  arrayOpciones} = this.state;
        const buscarHistoria = datos.find((objeto) => objeto.id.includes(id))
        console.log({buscarHistoria});
        let handles = {
            funcionA: this.handleOpcionA,
            funcionB: this.handleOpcionB,
        }
    
        return (
            <div className="layout">
                <h1 className="historia">{buscarHistoria.historia}</h1>

                <Opciones handles={handles} opciones={buscarHistoria.opciones} id={this.state.identificador} />
                <Recordatorio opcionesPasadas={id.substring(1).toUpperCase()} 
                arrayOpciones={arrayOpciones} />
              
            </div>
        )
    }

}

