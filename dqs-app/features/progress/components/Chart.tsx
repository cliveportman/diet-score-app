import { Servings} from "@/core/types";
import React, {useEffect} from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { TwText } from "@/core/components/TwText";
import {format} from "date-fns";

import type { DataSet, lineDataItem } from "gifted-charts-core";
import { LineChart } from "react-native-gifted-charts";
import { getTotalScoresForMaths } from "@/core/helpers";

type ChartProps = {
    data: Servings[];
}

export function Chart({data}: ChartProps) {
    
    const [dataSet, setDataSet] = React.useState<DataSet[]>([]);

    useEffect(() => {
        const tempDataSet: DataSet[] = [];
        const totalScoresData = data.map((item) => ({ value: getTotalScoresForMaths(item).total } as lineDataItem));
        const totalScoresDataSet: DataSet = {
            data: totalScoresData,
            color: '#ff0000',
            thickness: 2,
        };
        tempDataSet.push(totalScoresDataSet);
        console.log(totalScoresDataSet)
        setDataSet(tempDataSet);
        
    }, [data]);

    return (
        <TwContainer twc={"mb-6 bg-teal-900"}>
            {dataSet.length > 0 && <LineChart dataSet={dataSet} />}
        </TwContainer>
    );
}