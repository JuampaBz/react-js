import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h1>Bienvenidos</h1>
            <div>
                <button>Mouse</button>
                <button>Teclado</button>
                <button>Monitores</button>
            </div>
        < CartWidget />
        </nav>
    )
}

export default NavBar

