import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { SetGUID } from './actions/simpleAction'

export class Footer extends Component {
  
    generateGuid = ()=>{
        this.props.generateGuid(this.guid())
    }

    guid=()=> {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

  render() {
    return (
      <div style={{backgroundColor:'gray'}}>

        <button onClick = {this.generateGuid}>Generate UserGUID</button>
         
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch)=>({
    generateGuid(guid){
        dispatch(SetGUID(guid))
    }
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
