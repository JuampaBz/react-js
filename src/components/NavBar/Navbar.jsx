import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {
    return (
        <div>
            <h6>Restart Gaming Logo</h6>
            <ul>
                <li>
                    <button>Teclados</button>
                </li>
                <li>
                    <button>Mouses</button>
                </li>
                <li>
                    <button>Monitores</button>
                </li>
            </ul>
            <CartWidget />
            </div>
    )
}