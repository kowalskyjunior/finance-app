import React from 'react';
import Chart from 'react-apexcharts';
import './ModalNome'
import './PieChart.css'

const pieChart = ({ aluguel, agua, luz, internet, alimentacao, transporte, salario, reserva, imposto }) => {

    return (
        <>
            <div className='pieChart'>
                <div className="totalDiv">
                    <h2>Renda mensal: R${Number(salario)}</h2>

                    <h2 className='total'>Renda restante: R${Number(salario) - Number(aluguel) - Number(agua) - Number(luz) - Number(internet) - Number(alimentacao) - Number(transporte) - Number(reserva) - Number(imposto)}</h2>

                </div>

                <Chart
                    type='donut'
                    width={500}
                    height={500}
                    display='flex'
                    series={[aluguel * 1, luz * 1, internet * 1, alimentacao * 1, reserva * 1]}

                    total:true
                    background={'#000'}

                    options={{
                        labels: ['Aluguel', 'Luz', 'Internet', 'Alimentação', 'Reserva'],
                        legend: {
                            fontSize: '15px',
                            horizontalAlign: 'center',
                            containerMargin: '10px',
                            position: 'bottom',
                        },
                        responsive: [{
                            breakpoint: 425,
                            options: {
                                chart: {
                                    width: 320
                                }
                            },
                        }],
                    }}
                >
                </Chart>
            </div>
        </>
    )
}

export default pieChart;
