import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <a href="https://open.spotify.com/artist/7KWo5lhqXiYmR8klsOGCOl?si=TyPP23UQRta3BC8-pJeCpQ" className="icon fa-spotify"><span className="label">Spotify</span></a>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Christina Xin Li</h1>
                <p>I am a decisive, team-oriented worker with experience in capital markets and programming. </p><p>I enjoy writing music and volunteering with community organizations.</p>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('music')}}>Music</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('social')}}>Social</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
