import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Header extends Component {
  
  render() {
    return (
      <div style={{backgroundColor:'orange'}}>
        this is header
       {this.props.Guid.Guid}
         
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    
  ...state
})

const mapDispatchToProps = (dispatch)=>({
   
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Header)
