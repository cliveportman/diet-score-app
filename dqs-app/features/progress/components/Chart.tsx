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

export type Metric = Omit<Servings, 'id' | 'date'>

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

const gridlines = [-10, 0, 10, 20, 30]

export function Chart({data, index = 0, period = 'week'}: ChartProps) {

    const { width } = Dimensions.get('window');
    const height = 200;
    const [ dates, setDates ] = React.useState<DateString[]>(getDates(period, index));
    const [ chartData, setChartData ] = React.useState<BarData[]>([]);

    useEffect(() => {
        if (!data) return;
        const rawDates = getDates(period, index);
        setDates(rawDates);
        setChartData(mapDataToDates(data, rawDates).data);
        console.log('chartData', mapDataToDates(data, rawDates).data);        
    }, [data]);

    return (
        <TwContainer twc={"mb-6"}>
            <TwContainer twc={"relative"} style={{ height: 200 }}>
                <TwContainer twc={"absolute left-0 top-0 right-0 bottom-0 bg-slate-950"}>
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 2/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 12/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 22/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-700"} style={{ top: 32/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 42/42 * 200, height: 1 }} />
                </TwContainer>
                <TwContainer twc={"flex-row justify-center px-6"}>
                    {chartData.map((bar, index) => {
                        return (
                            <TwContainer key={bar.date} twc={"relative flex-col w-8 mx-1.5"} style={{ height: 200 }}>
                                <TwContainer key={bar.date} twc={"flex-col w-full bg-slate-800"} style={{ height: 200 }}></TwContainer>
                                <TwContainer twc={"absolute -top-6 w-full"}><TwText variant={"small"} twc={"text-center"}>+2</TwText></TwContainer>
                            {/*<TwContainer */}
                            {/*    key={bar.date} twc={"px-1.5"} style={{height: bar.value * 10, width: `${100 / chartData.length}%`, backgroundColor: 'red'}}>*/}
                            {/*</TwContainer>*/}
                        </TwContainer>
                        )
                    })}
                    
                </TwContainer>
                
            </TwContainer>
            
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