import { Servings} from "@/core/types";
import React, {useEffect} from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { TwText } from "@/core/components/TwText";
import {format} from "date-fns";

import type { DataSet, lineDataItem } from "gifted-charts-core";
import { LineChart } from "react-native-gifted-charts";
import { getTotalScoresForMaths } from "@/core/helpers";
import {type ColorValue, Dimensions, Text} from "react-native";

type ChartProps = {
    data: Servings[];
}

export function Chart({data}: ChartProps) {

    const { width } = Dimensions.get('window');
    const [dataSet, setDataSet] = React.useState<DataSet[]>([]);

    useEffect(() => {
        const tempDataSet: DataSet[] = [];
        const totalScoresData = data.map((item) => ({ value: getTotalScoresForMaths(item).total, label: item.date, } as lineDataItem));
        const totalScoresDataSet: DataSet = {
            data: totalScoresData,
            color: '#ff0000',
            dataPointsColor: '#ff0000',
            thickness: 2,
            curved: true,            
        };
        tempDataSet.push(totalScoresDataSet);
        console.log(totalScoresDataSet)
        setDataSet(tempDataSet);
        
    }, [data]);

    return (
        <TwContainer twc={"mb-6 bg-white"}>
            {dataSet.length > 0 && <LineChart 
                dataSet={dataSet} 
                width={width - 64}
                initialSpacing={0}
                endSpacing={0}
                adjustToWidth={true}
                hideRules={true}
                yAxisColor={'#94a3b8'}
                xAxisColor={'#94a3b8'}
                yAxisLabelContainerStyle={{backgroundColor: '#fff00f', color: '#ffffff', borderColor: '#ff00ff', borderWidth: 1}}
                axi
            />}
        </TwContainer>
    );
}