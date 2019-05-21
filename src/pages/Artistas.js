import React from 'react'
import { Link } from 'react-router-dom'

class Artistas extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.artistas = [
      {
        'name': 'Alcymar Monteiro',
        'id': '0TcVnvKse98awlZxtUKIOk'
      },
      {
        'name': 'Leela',
        'id': '11irmEzISytQwB3G8uhC5E'
      },
      {
        'name': 'Ney Alves',
        'id': '2UhA8yc1DpFfkutXq5lMah'
      }
    ]
  }
  render () {
    return (
      <ul>
        {this.state.artistas.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/detalhes/${item.id}`}>
                {item.name}
              </Link>
            </li>)
        })}
      </ul>
    )
  }
}

export default Artistas
