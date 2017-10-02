import React                        from 'react'
import { Link }                     from 'react-router-dom'
import  {Image}                     from 'react-bootstrap'

export default class Sidebar extends React.Component {

    isActive = path => {
        return (path === (window.location.pathname.split('/')[2] === undefined ? 'dashboard' : window.location.pathname.split('/')[2] ) ? true : false)
    }
    
    render() {
        return (
            <nav className="sidebar">
                <ul  >
                    <li className="side-li">
                        <Link to="/dashboard">
                            <div className="side-title"> 
                                <Image className="logo" src="/assets/img/logo.png"></Image>
                            </div>
                        </Link>
                    </li>
                    <li className={"side-li " + (this.isActive('dashboard') ? 'active' : '')}>
                        <Link to="/dashboard">
                            <p className="side-title">داشبورد</p>
                        </Link>
                    </li>
                    <li 
                        className={"side-li " 
                                    + (this.isActive('businesses') ? 'active' : '') 
                                    + (this.isActive('createbusiness') ? 'active' : '')
                                    + (this.isActive('business') ? 'active' : '')}>
                        <Link to="/dashboard/businesses">
                            <p className="side-title">بیزینس</p>
                        </Link>
                    </li>
                    <li className={"side-li " + (this.isActive('comments') ? 'active' : '')}>
                        <Link to="/dashboard/comments">
                            <p className="side-title">نظرات</p>
                        </Link>
                    </li>
                    <li className={"side-li " + (this.isActive('reports') ? 'active' : '')}>
                        <Link to="/dashboard/reports">
                            <p className="side-title">گزارشات</p>
                        </Link>
                    </li>
                    <li className={"side-li " + (this.isActive('users') ? 'active' : '')}>
                        <Link to="/dashboard/users">
                            <p className="side-title">کاربران</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}