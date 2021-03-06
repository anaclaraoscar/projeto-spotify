import React from 'react'
import CardImage from '../components/CardImage'

class Detalhes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      artista: null,
      id: this.props.match.params.id
    }
  }

  componentDidMount () {
    const token = localStorage.getItem('token')
    let expires = localStorage.getItem('expires')

    if (!token || (expires && new Date().getTime() > new Date(expires).getTime())) {
      // Arrumar uma forma de tornar a redirect_uri dinâmica
      window.location.replace(`https://accounts.spotify.com/authorize?client_id=c2f9f5a873274c43a6eadd0076111423&response_type=token&redirect_uri=http://localhost:3000/callback&state=${this.state.id}`)
    }

    console.log(token)

    fetch(`https://api.spotify.com/v1/artists/${this.state.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        artista: json
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  renderArtista () {
    if (!this.state.artista) {
      return null
    }
    return (
      <div justifyContent="center"
        marginBottom="30"
        className="titleArtist">
        <h1>
          &nbsp;&nbsp;&nbsp;&nbsp;{this.state.artista.name}
        </h1>
        <CardImage url={this.state.artista.images[0].url}></CardImage>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.renderArtista()}
      </div>)
  }
}

export default Detalhes
