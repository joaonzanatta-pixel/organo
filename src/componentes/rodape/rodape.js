import insta from './ig.png'
import tw from './tw.png'
import fb from './fb.png'
import logo from './logo.png'
import './rodape.css'


const Rodape = () => {

    return (

        <footer className='footer'>
            <div className='container'>
                <div className='redes'>
                    <img src={fb} className='fb' alt='Facebook'></img>
                    <img src={tw} className='tw' alt='Twitter'></img>
                    <img src={insta} className='insta' alt='Insta'></img>
                </div>

                <img src={logo} alt='Logo'  ></img>
                <p className='texto'>Desenvolvido por Joao Zanatta</p>
            </div>
        </footer>






    )
}

export default Rodape