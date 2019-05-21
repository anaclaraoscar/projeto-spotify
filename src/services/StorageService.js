
export function setToken (token, expires) {
  if (!token || (expires && new Date().getTime() > new Date(expires).getTime())) {
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=c2f9f5a873274c43a6eadd0076111423&response_type=token&redirect_uri=http://localhost:3000/callback&state=${this.state.id}`)
  }
}

export function validarToken () {

}
