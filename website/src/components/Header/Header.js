import React from 'react';
import logo from '../../images/WITfivicon.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default function Header() {
    return (
        <div>
            <nav
                className='navbar fixed-top navbar-expand-lg navbar-light'
                style={{ backgroundColor: ' #FFCC66 ' }}
            >
                <a className='navbar-brand' href='/'>
                    <img
                        src={logo}
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                        alt=''
                        loading='lazy'
                    />{' '}
                    Women in Technology
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>

                <div
                    className='collapse navbar-collapse my-2 my-lg-0'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='/'>
                                Home
                            </a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a
                                className='nav-link dropdown-toggle'
                                href='#'
                                id='navbarDropdown'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-haspopup='true'
                                aria-expanded='false'
                                color='black'
                            >
                                Resources
                            </a>
                            <div
                                className='dropdown-menu'
                                aria-labelledby='navbarDropdown'
                            >
                                <a
                                    className='dropdown-item'
                                    href='/organisation'
                                >
                                    Organizations
                                </a>
                                <a
                                    className='dropdown-item'
                                    href='/scholarship'
                                >
                                    Scholarships
                                </a>
                                <a
                                    className='dropdown-item'
                                    href='/infographics'
                                >
                                    Infographics
                                </a>
                                <a className='dropdown-item' href='/resources'>
                                    Other Resources
                                </a>
                            </div>
                        </li>
                        <li className='nav-item dropdown'>
                            <a
                                className='nav-link dropdown-toggle'
                                href='#'
                                id='navbarDropdown'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-haspopup='true'
                                aria-expanded='false'
                            >
                                Community
                            </a>
                            <div
                                className='dropdown-menu'
                                aria-labelledby='navbarDropdown'
                            >
                                <a className='dropdown-item' href='/community'>
                                    About Community
                                </a>
                                <a
                                    className='dropdown-item'
                                    href='/inspirations'
                                >
                                    Inspirations
                                </a>
                                <a
                                    className='dropdown-item'
                                    href='https://discord.com/invite/xvzbAXk'
                                >
                                    Join Discord
                                </a>
                                {/* <a className="dropdown-item" href="/contributors">
                  Contributers
                </a>
                <a className="dropdown-item" href="/founder">
                  Founder
                </a> */}
                            </div>
                        </li>
                        <li className='nav-item dropdown'>
                            <a
                                className='nav-link dropdown-toggle'
                                href='#'
                                id='navbarDropdown'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-haspopup='true'
                                aria-expanded='false'
                            >
                                Contribute
                            </a>
                            <div
                                className='dropdown-menu'
                                aria-labelledby='navbarDropdown'
                            >
                                <a className='dropdown-item' href='/beginners'>
                                    Beginners
                                </a>
                                <a
                                    className='dropdown-item'
                                    href='/contributing'
                                >
                                    Guidelines
                                </a>
                                <a
                                    className='dropdown-item'
                                    target='_blank'
                                    href='https://github.com/shikha-16/Women-in-Technology'
                                >
                                    Github Repo
                                </a>
                            </div>
                        </li>
                        {/* Some dummy code below to create space around Contribute Dropdown */}
                        {/* <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li>
            <li className="nav-item active">
              <a className="nav-link" />
            </li> */}
                        {/* Dummy code ends */}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
