import './Botao.css'

const Botao = (props) => {
    return (<button className='botao-card'>
        {props.children}
    </button>
    
)}

export default Botao