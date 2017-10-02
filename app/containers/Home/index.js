import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        console.log(props)
    }

    render(){
        return(
            <div>
                <div className="mainbar">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

