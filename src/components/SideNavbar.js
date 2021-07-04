import React from 'react'

function SideNavbar() {
    return (
        <div className="sideNavbar">
            <ul className="sideNav-list">
                <li>Home</li>
                <li>Files</li>
                <li>Paper</li>
                <li>Showcase</li>
            </ul>
            <div className="sideNav-down">
                <div className="sideNav-img">
                    <img src="/upgrade.jpg" alt="profileImage" />
                </div>
                <div className="sideNav-detail">
                    <div>
                        <h3>Personal</h3>
                        <small style={{ color: 'rgb(129, 129, 218)' }}>Only you</small>
                    </div>
                    <div className="up-down">
                        <i className="fas fa-chevron-up"></i>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar
