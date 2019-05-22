import React from 'react'
import querystring from 'query-string'
import { Redirect } from 'react-router-dom'

class Callback extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: null
    }
  }
  componentDidMount () {
    const parsed = querystring.parse(this.props.location.hash)

    console.log(this.props, parsed)

    localStorage.setItem('token', parsed.access_token)
    localStorage.setItem('expires', new Date())
    // pegar a data atual, adicionar o valor de expires_in (segundos) e transformar em uma string
    this.setState({
      id: parsed.state || null
    })
  }

  render () {
    console.log(this.state.id)
    return (this.state.id && <Redirect to={`/detalhes/${this.state.id}`}/>)
  }
}

export default Callback
