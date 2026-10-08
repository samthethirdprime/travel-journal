import image from '../images/globe.png'
function Header () {
    return(
        <header>
            <img src={image} alt="globe logo" />
            <h1>My Travel Journal</h1>
        </header>
    )
}


export default Header
