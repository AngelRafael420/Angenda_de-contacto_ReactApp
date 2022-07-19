import React, { Component } from 'react'

import Contacto from './contacto'

export default class Contactos extends Component {
    render() {
        
        return this.props.contactos.map(elementos =>
            <Contacto
            contacto = {elementos}
            key = {elementos.id}
            deleteContacto = {this.props.deleteContacto}
            />)
    }
}
