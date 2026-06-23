
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {


    const [nome, setNome] = useState("") // aqui estamos guardando o dado
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")

    const aoSalvar = (evento) => {
        evento.preventDefault();
       props.aoColaboradorCadastrado({
        nome, 
        cargo,
        imagem,
        time
       })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha com os dados para criar o seu card colaborador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Insira aqui seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Insira aqui seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto     
                    obrigatorio={true}
                    label="Imagem " 
                    placeholder="Insira aqui sua imagem"   
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                 />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}

            ></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )

}

export default Formulario