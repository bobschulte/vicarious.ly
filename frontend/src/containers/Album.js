import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'



class Album extends React.Component {


    render() {
        return <div>
            Stays Album
        </div>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Album)