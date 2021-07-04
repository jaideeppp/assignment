import React from 'react'
import Searchbar from './Searchbar'

function TopNavbar() {
    return (
        <div className="TopNavbar">
            {/* Logo */}
            <div className="logo">
                <i class="fab fa-asymmetrik"></i>
            </div>

            {/* SearchBar */}
            <Searchbar />

            <div className="navProfile">
                <i class="far fa-bell"></i>
                <img src="/img.png" alt="profileImage" />
            </div>
        </div>
    )
}

export default TopNavbar;
