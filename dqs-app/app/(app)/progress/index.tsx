import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"
import {useDatabase} from "@/core/hooks";
import {useEffect, useState} from "react";
import type {Servings} from "@/core/types";
import database from "@/core/database";
import {DaySummary} from "@/features/progress/components/DaySummary";
import {SQLiteDatabase} from "expo-sqlite";

export default function ProgressPage() 
{
    const db = useDatabase();

    const [days, setDays] = useState<Servings[]>([]);
    const [refreshing, setRefreshing] = useState(false);
    
    useEffect(() => {
        fetchData(db);
    }, [db]);
    
    function fetchData(db: SQLiteDatabase | null) {
        if (!db) return;
        database.deleteEmptyDays(db).then(() => {
            database.getAllDays(db).then((results) => {
                setDays(results);
            })
        });  
    }
    
    function handleRefresh() {
        setRefreshing(true);
        fetchData(db);
        setRefreshing(false);
    }
    
    return (
        <TwContainer twc="flex-1 bg-slate-950 px-3 pt-12">
            <TwContainer twc={"flex-col justify-end items-start mb-6"}>
                <TwText variant="title">Progress</TwText>
                <TwText variant="subtitle">View your scores over time</TwText>
            </TwContainer>
            {days.length > 0 && <TwContainer twc="flex-1 flex-col">
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