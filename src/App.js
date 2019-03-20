import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          })
        });
    }

    handleSubmit = character => {
        this.setState({ chracters: [...this.state.characters, character] })
    }

    render() {
        //Need to put the characters thrugh as data.
        const {characters}  = this.state

        return (
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
            <Form handleSubmit={this.handleSubmit} />
          </div>
        )
      }
}

export default App