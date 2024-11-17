import {DateString, Servings} from "@/core/types";
import React, {useEffect} from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { TwText } from "@/core/components/TwText";
import { format, startOfWeek, endOfWeek, addDays, subWeeks } from 'date-fns';

import { getTotalScoresForMaths } from "@/core/helpers";
import {type ColorValue, Dimensions, Text} from "react-native";

type ChartProps = {
    data: Servings[];
    index: number; // used for pagination
    period: 'week' | 'month';
}

type BarData = {
    value: number;
    date: string;
}
type BarChartData = {
    data: BarData[];
    title: string;
}

function getDates(period: 'week' | 'month', index: number): DateString[] {
    if (period === 'month') return [];
    // If period is week, return the dates for the week
    if (period === 'week') {
        // index is the number of weeks ago
        const date = subWeeks(new Date(), index);
        const start = startOfWeek(date, { weekStartsOn: 1 });
        const end = endOfWeek(date, { weekStartsOn: 1 });
        const dates: DateString[] = [];        
        for (let d = start; d <= end; d = addDays(d, 1)) {
            dates.push(format(d, 'yyyy-MM-dd') as DateString);
        }
        return dates;
    }
    return [];
}

function mapDataToDates(data: Servings[], dates: DateString[]): BarChartData {
    return {
        data: dates.map((date) => {
            const day = data.find((item) => item.date === date);
            return {
                value: day ? getTotalScoresForMaths(day).total : 0,
                date: date,
            };
        }),
        title: `${format(dates[0], 'EEE dd MMM')} to ${format(dates[dates.length - 1], 'EEE dd MMM')}`,
    }
}

export function Chart({data, index = 0, period = 'week'}: ChartProps) {

    const { width } = Dimensions.get('window');
    const [ dates, setDates ] = React.useState<DateString[]>(getDates(period, index));
    const [ chartData, setChartData ] = React.useState<BarData[]>([]);

    useEffect(() => {
        if (!data) return;
        setDates(getDates(period, index));
        console.log('dates', dates);
        
        
        // const tempDataSet: DataSet[] = [];
        // const totalScoresData = data.map((item) => ({ value: getTotalScoresForMaths(item).total, label: item.date, } as lineDataItem));
        // const totalScoresDataSet: DataSet = {
        //     data: totalScoresData,
        //     color: '#ff0000',
        //     dataPointsColor: '#ff0000',
        //     thickness: 2,
        //     curved: true,            
        // };
        // tempDataSet.push(totalScoresDataSet);
        // console.log(totalScoresDataSet)
        // setDataSet(tempDataSet);
        
    }, [data, index]);

    return (
        <TwContainer twc={"mb-6 bg-white"}>
            {/*{dataSet.length > 0 && <LineChart */}
            {/*    dataSet={dataSet} */}
            {/*    width={width - 64}*/}
            {/*    initialSpacing={0}*/}
            {/*    endSpacing={0}*/}
            {/*    adjustToWidth={true}*/}
            {/*    hideRules={true}*/}
            {/*    yAxisColor={'#94a3b8'}*/}
            {/*    xAxisColor={'#94a3b8'}*/}
            {/*    yAxisLabelContainerStyle={{backgroundColor: '#fff00f', color: '#ffffff', borderColor: '#ff00ff', borderWidth: 1}}*/}
            {/*    axi*/}
            {/*/>}*/}
        </TwContainer>
    );
}