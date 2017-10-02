import React                from 'react'
import { Link }             from 'react-router-dom'
import {Row, Col}           from 'react-bootstrap'
import { Redirect } from 'react-router-dom';

export default class Header extends React.Component {
    state = {
        shouldRedirectToLogin: false,
    }

    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage['user']).user
        });
    }

    handleLogout = e => {
        localStorage.removeItem('user');
        localStorage.removeItem('api_token');
        this.setState({shouldRedirectToLogin: true});
    }

    render() {
        const { user = {} } = this.state;
        const currentPath = window.location.pathname
        return this.state.shouldRedirectToLogin
            ? (
                <Redirect to="/" />
            )
            : (
            <div className="header"  >
                <div className="inside-wrap">
                    {
                        !currentPath.includes('business/') &&
                        <div
                            style={{cursor: 'pointer'}}
                            className="logout-link"
                            onClick={this.handleLogout}
                        >
                            خروج
                        </div>
                    }
                    <Row>
                        <Col xs={12} className="admin-link-wrap">
                            <p className="admin-link">
                                {`${user.first_name} ${user.last_name}`}
                            </p>
                        </Col>
                        <Col xs={12}>
                            {/* <Link to="" className="admin-link">admin number 1</Link> */}
                        </Col>
                    </Row>
                    {
                        currentPath.includes('business/','/createbusiness') && 
                        <div className="back-link">
                            <Link to="/dashboard/businesses" className="admin-link">
                                بازگشت
                            </Link>
                        </div>
                    }
                </div>
            </div>      
        )
    }
}