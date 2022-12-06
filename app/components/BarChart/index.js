import React, { useEffect } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { Chart } from './styles';
// {label: String;
// chart: string[]}

const BarChart = ({ data }) => {
    return (<View style={{ width: '100%' }}>
        <h2>{data.label}</h2>
        {data?.chart?.map((element, index) => (
            <View key={index} style={{ border: '1px solid gray', maxWidth: '1000px', marginTop: '10px', width: '100%' }}>
                <h3>{element.tipo_de_grafico}</h3>
                <Chart alt='Grafico' src={element.grafico} />
            </View>))}
    </View>
    );

}

export default BarChart;