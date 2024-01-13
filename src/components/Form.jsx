import { useEffect, useState } from 'react';
import Chart from './PieChart';
import './Form.css'

const Form = ({ modalNome, modalSalario }) => {

    const [aluguel, setAluguel] = useState('')
    const [agua, setAgua] = useState('')
    const [luz, setLuz] = useState('')
    const [internet, setInternet] = useState('')
    const [alimentacao, setAlimentacao] = useState('')
    const [transporte, setTransporte] = useState('')
    const [reserva, setReserva] = useState('')
    const [salario, setSalario] = useState('')
    const [imposto, setImposto] = useState('')
    const getAluguel = (e) => {
        setAluguel(e.target.value)
        console.log(essenciais)
    }

    const getAgua = (e) => {
        setAgua(e.target.value)
        console.log(lazer)
    }

    const getLuz = (e) => {
        setLuz(e.target.value)
        console.log(lazer)
    }

    const getInternet = (e) => {
        setInternet(e.target.value)
        console.log(lazer)
    }

    const getAlimentacao = (e) => {
        setAlimentacao(e.target.value)
        console.log(lazer)
    }

    const getTransporte = (e) => {
        setTransporte(e.target.value)
        console.log(lazer)
    }

    const getReserva = (e) => {
        setReserva(e.target.value)
    }

    const getImposto = (e) => {
        setImposto(e.target.value)
    }

    useEffect(() => {
        setSalario(modalSalario)
    }, [modalSalario])

    return <>
        <div className='form-wraper'>
            <div className='container'>
                <div className="form-wraper">
                    <form >
                        <div className="username-space">
                            <h2 className='username'>Olá, {modalNome}!</h2>
                            <p className='username-text'>
                                Insira os gastos mensais de acordo com o que é pedido.
                            </p>
                        </div>
                        <div className="input-space">
                            <input type="number" placeholder="Aluguel" onChange={getAluguel} />
                        </div>

                        <div className="input-space">
                            <input type="number" placeholder="Conta de luz" onChange={getLuz} />
                        </div>


                        <div className="input-space">
                            <input type="number" placeholder="Conta de internet" onChange={getInternet} />
                        </div>


                        <div className="input-space">
                            <input type="number" placeholder="Alimentação" onChange={getAlimentacao} />
                        </div>

                        <div className="input-space">
                            <input type="number" placeholder="Reserva" onChange={getReserva} />
                        </div>
                    </form>
                </div>
            </div>

            <Chart aluguel={aluguel} agua={agua} luz={luz} internet={internet} alimentacao={alimentacao} transporte={transporte} imposto={imposto} salario={salario} reserva={reserva} />
        </div>

    </>
}

export default Form;