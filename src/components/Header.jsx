
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#servicos">Serviços</a>
                        <a href="contato">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header