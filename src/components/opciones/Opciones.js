import React, {Component} from 'react';
import Swal from 'sweetalert2';

function refresh (){
    window.location.reload()
};
function alert() {
    Swal.fire({
        imageUrl:'./img/LaOne.jpg',
        imageWidth:'75%',
        imageAlt:'Moria',
        background:'#2A0944',
        confirmButtonColor:'#2A0944',
    });
}
 

export default class Opciones extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }
 
    
    render(){

        const {handles, opciones, id} = this.props;
       let opcionA, opcionB;
       if(id<=4){
           opcionA=(
           <div className="opcion">
           <button id="A" className="botones" onClick={handles.funcionA}><h2>{opciones.a}</h2></button>
           </div>);
           opcionB=(
           <div className="opcion">
           <button id="B" className="botones" onClick={handles.funcionB}><h2>{opciones.b}</h2></button>
           </div>);
       } else{
           console.log({id});
           opcionA=(
            <div className="opcion">
            <button id="A" className="botones" onClick={refresh}><h2>¿Otra vez?</h2></button>
            </div>);
            opcionB=(
            <div className="opcion">
            <button id="B" className="botones" onClick={alert}><h2>Mejor No!!!</h2></button>
            </div>);
           
       }

    return (
        <div className="opciones">
             {opcionA}
             {opcionB}
        </div>
        )
    }

}