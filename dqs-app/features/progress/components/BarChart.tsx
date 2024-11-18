import {DateString, Servings} from "@/core/types";
import React, {useEffect} from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { format, startOfWeek, endOfWeek, addDays, subWeeks } from 'date-fns';

import { getTotalScoresForMaths } from "@/core/helpers";
import { Bar, type BarData } from "@/features/progress/components/Bar";
import {Dimensions} from "react-native";

type ChartProps = {
    data: Servings[];
    index: number; // used for pagination
    period: 'week' | 'month';
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
                label: format(date, 'EEE'),
            };
        }),
        title: `${format(dates[0], 'EEE dd MMM')} to ${format(dates[dates.length - 1], 'EEE dd MMM')}`,
    }
}

export function BarChart({data, index = 0, period = 'week'}: ChartProps) {

    const { width } = Dimensions.get('window');
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
        <TwContainer twc={"mb-6"} style={{ width: width }}>
            <TwContainer twc={"relative"} style={{ height: 220 }}>
                <TwContainer twc={"absolute left-0 top-0 right-0 bottom-0 mt-6 bg-slate-950"}>
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 2/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 12/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 22/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-700"} style={{ top: 32/42 * 200, height: 1 }} />
                </TwContainer>
                <TwContainer twc={"flex-row justify-center pt-6 bg-lime-700"}>
                    {chartData.map((data) => {
                        return (
                            <Bar key={data.label} data={data} width={32} maxHeight={200} />
                        )
                    })}                    
                </TwContainer>                
            </TwContainer>
        </TwContainer>
    );
}