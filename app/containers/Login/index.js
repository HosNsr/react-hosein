import React, { Component } from 'react';
import {
    Form,
    FormControl,
    Button,
    Col
} from 'react-bootstrap';

const allNumbers = [1,2,3,4]

function Numberlist(props){
    return(
        <li>{props.num}</li>
    )
}

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'HsR',
            password: '',
            robot : true,
            selectvalue : 'on'
        };
        this.handelchange = this.handelchange.bind(this)
        this.handelsubmit = this.handelsubmit.bind(this)
        this.handerobot = this.handerobot.bind(this)
        this.handelSelect = this.handelSelect.bind(this)
    }

    handelchange(event){
        this.setState({username : event.target.value})
    }

    handelsubmit(event){
        console.log(this.state.username)
        event.preventDefault()
    }

    handerobot(event){
        const target = event.target.checked;
        console.log(target)
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState = ({
            [name] : value
        })
    }

    handelSelect(event){
        this.setState({selectvalue : event.target.value})
    }

    render() {
        return (
            <div className="login">
                <form onSubmit={this.handelsubmit}>
                    <input type="text" value={this.state.username} onChange={this.handelchange} />
                    <input type="submit" value="submit" />
                    <input type="checkbox" name="imNotRobot" checked={this.state.robot} onChange={this.handerobot} />
                    <select value={this.state.selectvalue} onChange={this.handelSelect}>
                        <option value="on">on</option>
                        <option value="off">off</option>
                        <option value="unknown">unknown</option>
                    </select>
                </form>
                <ul>
                    {
                        allNumbers.map((item, i) => <li key={i}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}