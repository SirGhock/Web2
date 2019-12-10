import React, { Component } from 'react';
import api from '../../services/index';

export default class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {
            post: '',
            status: ''
        }
    }
    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        api.post('/postar', {
            post: this.state.post,
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        status: "Post enviado!"
                    });
                    window.location.reload();
                }
                else {
                    this.setState({
                        status: "Erro ao postar!"
                    });
                }
                console.log(response.data);
            })
            .catch(error => {
                this.setState({
                    status: "Erro ao se conectar com a API"
                });
            });
    }

    render() {
        const { status } = this.state;
        return (
            <div className="form">
                <form onSubmit={this.onSubmit}>
                    <h1>Enviar Post</h1>
                    <input
                        type="text"
                        name="post"
                        placeholder="Digite um post"
                        value={this.state.post}
                        onChange={this.handleInputChange}
                        required
                    />
                    <input type="submit" value="Entrar" />
                    <p>{status}</p>
                </form>
            </div>
        )
    }
}