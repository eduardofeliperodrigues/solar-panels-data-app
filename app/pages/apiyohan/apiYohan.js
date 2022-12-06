import { React, useEffect, useState } from 'react';
import { post } from '../../service/service.axios'
import BarChart from '../../components/BarChart';
import { Chart } from '../../components/BarChart/styles';
import Header from '../../components/Header';

export default function ApiYohan({ navigation }) {
    const [chart, setChart] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        handleEndpoint()
    }, [])

    const handleEndpoint = async () => {
        const payload = {
            inversores: ['inversor1', 'inversor2']
        }
        const data = await post('previsao_energia/', payload)
        const link = formatarLink(data)

        setChart(link)
    }

    useEffect(() => {
        if (!chart) return
        setLoading(false)
    }, [chart])

    const formatarLink = (data) => {
        let dia = data.Dia;
        let Energia = data.Energia_Diaria_Gerada;
        let Inversor = data.Inversor;


        let dia_formatado = Object.values(dia);
        let energia_formatada = Object.values(Energia);
        let Inversor_formatado = Object.values(Inversor);
        let dia_formatado_inv1 = [];
        let dia_formatado_inv2 = [];
        let energia_formatada_inv1 = [];
        let energia_formatada_inv2 = [];
        let aux_string = "";

        for (let index = 0; index < dia_formatado.length; index++) {
            dia_formatado[index] = aux_string.concat(
                "'",
                dia_formatado[index].substr(0, 4),
                "/",
                dia_formatado[index].substr(5, 2),
                "/",
                dia_formatado[index].substr(8, 2),
                "'"
            );
            dia_formatado[index] = dia_formatado[index].toString();
            if (index < 10) {
                dia_formatado_inv1[index] = dia_formatado[index];
                energia_formatada_inv1[index] = energia_formatada[index];
            } else {
                dia_formatado_inv2[index - 10] = dia_formatado[index];
                energia_formatada_inv2[index - 10] = energia_formatada[index];
            }
        }

        let string = "https://quickchart.io/chart?c={type:'bar',";
        string = string.concat(
            "data:{labels:[",
            dia_formatado_inv1.toString(),
            "], datasets:[{label:'Inversor 1104F0191290005', data:[",
            energia_formatada_inv1.toString(),
            "]},{label:'Inversor 01047018A150017', data:[",
            energia_formatada_inv2.toString(),
            "]}]}}"
        );

        return string;
    }

    return (
        <>
            <Header title="API" goback={true} navigation={navigation}>
                {loading ? (<h3>Carregando...</h3>) : (
                    <>
                        <h1>Gráfico Energia Gerada (API)</h1>
                        {chart && <Chart alt='Grafico' src={chart} />}
                    </>
                )}
            </Header>
        </>
    )


}
