import React from 'react';
import { Dimensions } from 'react-native'
import { BarChart as MUIBarChart } from 'react-native-chart-kit';

const BarChart = () => {
    const data = {
        labels: ["January", "February", "March", "April"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };
    return (
        <BarChart
            data={chartData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            showBarTops={false}
        />
        // <MUIBarChart
        //     data={data}
        //     chartConfig={{
        //         backgroundColor: "#e26a00",
        //         backgroundGradientFrom: "#fb8c00",
        //         backgroundGradientTo: "#ffa726",
        //         decimalPlaces: 2, // optional, defaults to 2dp
        //         color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //         labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //         style: {
        //             borderRadius: 16
        //         },
        //         propsForDots: {
        //             r: "6",
        //             strokeWidth: "2",
        //             stroke: "#ffa726"
        //         }
        //     }}
        //     width={Dimensions.get("window").width}
        //     height={Dimensions.get("window").height}
        //     yAxisLabel="$"
        //     style={{
        //         marginVertical: 8,
        //         borderRadius: 16,
        //         padding: 10
        //     }}
        //     verticalLabelRotation={30}
        // />
    );
}

export default BarChart;