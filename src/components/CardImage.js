/* eslint-disable no-useless-constructor */
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import React from 'react'

class CardImage extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { classes } = this.props
    return (
      <Card className={classes && classes.card}>
        <CardActionArea>
          <CardMedia
            id="artistImage"
            component="img"
            alt="Artista"
            className={classes && classes.media}
            maxHeight="100"
            maxWidth="120"
            width="auto"
            height="auto"
            image={this.props.url}
            title="Artista"
          />
          <CardContent>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

CardImage.propTypes = {
  classes: PropTypes.object,
  url: PropTypes.string.isRequired
}

export default CardImage
