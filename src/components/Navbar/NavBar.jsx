import './NavBar.scss'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tienda Lorem®</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a to='buscar' className="nav-link"> Lorem artículos</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>
    )
}
