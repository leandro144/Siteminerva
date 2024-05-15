import banner from '../assets/banner.jpg'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import { BsBuildingsFill, BsGraphUpArrow  } from "react-icons/bs"
import { FaBuildingColumns, FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiSolidInstitution } from "react-icons/bi";

const Main = () => {
  return (
   <>
        <main>
            <img src={banner} alt="" />
        </main>
        <section className="services" id='sobre'>
           <h2>REFORMAS RECENTES</h2>
           <p>Explore nossas realizações e inspire-se com os projetos excepcionais da Minerva.</p>
           <div className="images">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
           </div>
        </section>
        <section className="about-services" id='servicos'>
            <div className="texts">
                <h1><span>PARA QUEM</span> SÃO OS SERVIÇOS DA MINERVA ?</h1>
            </div>
            <div className="list-items">
                <span><i className='icon'><BsBuildingsFill /></i></span>
                <p>Incorporadoras buscando eficiência e economia</p>
            </div>
            <div className="list-items">
                <span><i className='icon'><FaBuildingColumns /></i></span>
                <p>Construtoras buscando reduzir desperdícios e retrabalhos em obra</p>
            </div>
            <div className="list-items">
                <span><i className='icon'><FaMoneyBillTrendUp /></i></span>
                <p>Empresas planejando escritórios corporativos</p>
            </div>
            <div className="list-items">
                <span><i className='icon'><BiSolidInstitution /></i></span>
                <p>Instituições educacionais modernizando instalações</p>
            </div>
            <div className="list-items">
                <span><i className='icon'><BsGraphUpArrow /></i></span>
                <p>Indústrias buscando inovação e eficiência operacionas</p>
            </div>
        </section>
   </>
  )
}

export default Main