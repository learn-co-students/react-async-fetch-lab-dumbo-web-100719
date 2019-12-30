// create your App component here
import React from 'react'

export default class App extends React.Component {
    state = {
        people: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json())
        .then((peopleObj) => {
            this.setState({ people: peopleObj })
        }
        )
    }

    render() {
        return (
          <div>
            {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1>)}
          </div>
        )
      }
    
}