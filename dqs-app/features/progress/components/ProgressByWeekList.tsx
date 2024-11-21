import {DateString, Servings} from "@/core/types";
import React, {useEffect, useState} from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import {Dimensions, FlatList, RefreshControl} from 'react-native';
import {SQLiteDatabase} from "expo-sqlite";
import database from "@/core/database";
import {useDatabase} from "@/core/hooks";
import {TwText} from "@/core/components/TwText";
import {DaySummary} from "@/features/progress/components/DaySummary";

type ProgressByWeekChartProps = {
    week: DateString[];
}

export function ProgressByWeekList({ week }: ProgressByWeekChartProps) {

    const db = useDatabase();
    const [ days, setDays ] = useState<Servings[]>([]);
    const [refreshing, setRefreshing] = useState(false);
    const { width } = Dimensions.get('window');

    useEffect(() => {
        fetchData(db);
    }, [db]);

    async function fetchData(db: SQLiteDatabase | null) {
        if (!db) return;
        const data = await database.getServingsBetweenDates(db, week[0], week[6]);
        setDays(data);        
    }
    
    function handleRefresh() {
            setRefreshing(true);
            fetchData(db);
            setRefreshing(false);
        }


    return (
        <TwContainer twc={"mb-6"}>
            {days.length > 0 && <TwContainer twc="">
                <FlatList data={days} renderItem={({item}) => <DaySummary data={item} />}
                          keyExtractor={(item) => item.date}
                          refreshControl={
                              <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                          }
                />
            </TwContainer>}
            {days.length === 0 && <TwContainer twc="flex-1 flex-col justify-center items-center">
                <TwText>No data!</TwText>
            </TwContainer>}
        </TwContainer>
    );
}