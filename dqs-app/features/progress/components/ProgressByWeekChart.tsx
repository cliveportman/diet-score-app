import {DateString } from "@/core/types";
import React, {useEffect} from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { format } from 'date-fns';

import { getTotalScoresForMaths } from "@/core/helpers";
import { Bar, type BarData } from "@/features/progress/components/Bar";
import {Dimensions} from "react-native";
import {SQLiteDatabase} from "expo-sqlite";
import database from "@/core/database";
import {useDatabase} from "@/core/hooks";
import {TwText} from "@/core/components/TwText";

type ProgressByWeekChartProps = {
    week: DateString[];
}
type BarChartData = {
    data: BarData[];
    title: string;
}

export function ProgressByWeekChart({ week }: ProgressByWeekChartProps) {

    const db = useDatabase();
    const [ chartData, setChartData ] = React.useState<BarData[]>([]);
    const { width } = Dimensions.get('window');

    useEffect(() => {
        fetchData(db);
    }, [db]);

    async function fetchData(db: SQLiteDatabase | null) {
        if (!db) return;
        const data = await database.getServingsBetweenDates(db, week[0], week[6]);
        setChartData(week.map((date) => {
            const day = data.find((item) => item.date === date);
            return {
                value: day ? getTotalScoresForMaths(day).total : 0,
                label: format(date, 'EEE'),
            };
        }));        
    }

    return (
        <TwContainer style={{ width: width - 24 }}>
            <TwText variant={"subtitle"} twc={"text-left mb-3"}>{format(week[0], 'dd MMM')} - {format(week[6], 'dd MMM')}</TwText>
            <TwContainer twc={"relative mb-6"} style={{ height: 220 }}>
                <TwContainer twc={"absolute left-0 top-0 right-0 bottom-0 mt-6"}>
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 2/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 12/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-900"} style={{ top: 22/42 * 200, height: 1 }} />
                    <TwContainer twc={"absolute w-full bg-slate-700"} style={{ top: 32/42 * 200, height: 1 }} />
                </TwContainer>
                <TwContainer twc={"flex-row justify-center pt-6"} style={{ width: width - 24}}>
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