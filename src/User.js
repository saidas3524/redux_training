import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class User extends Component {
  
  render() {
    return (
      <div style={{backgroundColor:'white'}}>
        this is sai<br/>
        this is my id {this.props.Guid.Guid}
         
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch)=>({
  
}) 

export default connect(mapStateToProps, mapDispatchToProps)(User)
