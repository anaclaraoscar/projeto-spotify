import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    color: 'black',
    marginTop: '250px'
  }
})

class SimpleList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props)
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <List component="nav" className="list">
          <ListItem>
            <ListItemText primary={this.props.name} className="itemText"/>
          </ListItem>
        </List>
      </div>
    )
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(SimpleList)
