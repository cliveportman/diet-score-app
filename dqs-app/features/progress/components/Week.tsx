import {DateString, Servings} from "@/core/types";
import React, {useEffect} from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { format } from 'date-fns';

import { getTotalScoresForMaths} from "@/core/helpers";
import { Chart } from "@/features/progress/components/Chart";
import { type BarData } from "@/features/progress/components/Bar";
import {Dimensions} from "react-native";
import {SQLiteDatabase} from "expo-sqlite";
import database from "@/core/database";
import {useDatabase} from "@/core/hooks";
import {TwText} from "@/core/components/TwText";
import {List} from "@/features/progress/components/List";

type ProgressByWeekChartProps = {
    dates: DateString[];
}

export function Week({ dates }: ProgressByWeekChartProps) {

    const db = useDatabase();
    const [ chartData, setChartData ] = React.useState<BarData[]>([]);
    const [ listData, setListData ] = React.useState<Servings[]>([]);
    const { width } = Dimensions.get('window');

    useEffect(() => {
        fetchData(db);
    }, [db]);

    async function fetchData(db: SQLiteDatabase | null) {
        if (!db) return;
        const data = await database.getServingsBetweenDates(db, dates[0], dates[6]);
        setChartData(dates.map((date) => {
            const day = data.find((item) => item.date === date);
            return {
                value: day ? getTotalScoresForMaths(day).total : 0,
                label: format(date, 'EEE').charAt(0),
            };
        }));
        setListData(data);
    }

    return (
        <TwContainer style={{ width: width - 24 }}>
            <TwText variant={"subtitle"} twc={"text-left mb-3"}>{format(dates[0], 'dd MMM')} - {format(dates[6], 'dd MMM')}</TwText>
            <Chart data={chartData} height={200} labelHeights={20} maxValue={32} minValue={0} horizontalLines={[30, 20, 10, 0]} />
            <List data={listData} />
        </TwContainer>
    );
}