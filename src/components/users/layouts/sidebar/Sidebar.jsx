import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LogoutCurve, ArrowCircleLeft } from 'iconsax-react';
import Logo from '../../../../assets/dasboard-admin/Logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { actionType } from '../../../../redux/reducer/globalActionType';
import UserSidebarLink from '../../../../assets/UserSidebarLink';

class Sidebar extends Component {
    render() {
        return (
            <ul id='sidebar' className={`nav flex-column border-end sidebar 
            ${(this.props.showSidebarProps && `show-sidebar`)}`}>
                <div className="d-flex align-items-center mt-3 text-decoration-none d-flex justify-content-between items-center sidebar-logo pb-4">

                    <Link to={"/"}>
                        <img src={Logo} alt="FlyPass" className={`logo-large 
                    ${(this.props.showSidebarProps && `show-logo-large`)}`} />
                    </Link>

                    <ArrowCircleLeft
                        size={33}
                        className={`shadow bg-light rounded-circle border text-secondary arrow-left-circle ${(this.props.showSidebarProps && `show-arrow-left-circle`)}`}
                        onClick={this.props.hideSidebarDispatch} />

                </div>
                {UserSidebarLink.map((item, index) => (
                    <li className={`nav-item list-sidebar ${(this.props.showSidebarProps && `show-nav-item`)}`} key={index}>
                        <NavLink to={item.path} className={(navClass) => navClass.isActive ? "active nav-link" : "nav-link"}>
                            <i className={item.icon}></i>
                            <span>{item.display}</span>
                        </NavLink>
                    </li>
                ))}
                <li className="nav-item list-sidebar mt-auto pb-3 bd-highlight">
                    <a className="nav-link link-sidebar" href="#">
                        <LogoutCurve size={20} />
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showSidebarProps: state.showSidebar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showSidebarDispatch: () => dispatch({
            type: actionType.SHOW_SIDEBAR
        }),
        hideSidebarDispatch: () => dispatch({
            type: actionType.HIDE_SIDEBAR
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
