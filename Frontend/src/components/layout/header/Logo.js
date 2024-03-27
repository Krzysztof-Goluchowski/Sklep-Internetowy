import logo from "../../../assets/images/logo.png"

function Logo() {
    return (
        <>
            <div className="navLogo">
                {/*<p>TU BĘDZIE NASZE LOGO!</p>*/}
                <img className="logoImage" src={logo}/>
            </div>
        </>
    );
}

export default Logo;