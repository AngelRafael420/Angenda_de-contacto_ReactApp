import React, { Component } from 'react'
import ContactoNoFoto from './Img/ContactoNoFoto3.jpg';

import '../App.css'

export default class contacto extends Component {

    state = {
        nombre: this.props.contacto.nombre,
        numero: this.props.contacto.numero,
        email: this.props.contacto.email,
        disabled: true
    }

    handleGameClik() {
    this.setState( {disabled: !this.state.disabled} )
  } 

  EstiloEditanto() {
    return {  
        color: this.state.disabled ? 'white' : '#c2c2c2',
        fontSize: this.state.disabled ? '0.9rem' : '1rem',
        border: "none",
        padding: "15px",
        align: "center",
        textDecoration: "none",
        background: "#008CBA"
    }
}
    
    onSubmit = (e) => {
        e.preventDefault();
    }
    
    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {       
        const {contacto} = this.props;
        
        return (
            <div className="container" style={TarjetaContacto}>

                <div className="card" >
                    <img src={ContactoNoFoto} className="card-img-top" alt="ImagemContacto"/>
                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>
                            <h5 className="card-title">Nombre del contacto</h5>
                            <div className="form-group row">
                            <input type="text"
                            id="nombre" 
                            onChange={this.onChange} 
                            name ="nombre" 
                            value={this.state.nombre}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title">Numero de telefono</h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="numero" 
                            value={this.state.numero}
                            disabled={(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title">Correo Electronico</h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="email" 
                            value={this.state.email}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <button type="submit" className="btn btn-secundary"
                                style={this.EstiloEditanto()}
                                onClick = {this.handleGameClik.bind(this)}>
                                Editar este contacto
                            </button>
                            {"  "}
                            <button className="btn btn-primary"
                                style={btnEliminar}
                                onClick = {this.props.deleteContacto.bind(this, contacto.id)}>
                                Eliminar
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const TarjetaContacto = {
    width: "22rem",
    margin: "2% 3% 1% 4%",
    display: "inline-block",
    align: "center"
}

const btnEliminar = {
    border: "none",
    color: "white",
    padding: "15px",
    align: "center",
    textDecoration: "none",
    background: "#f44336"
}
