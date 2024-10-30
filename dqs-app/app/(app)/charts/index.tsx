import React from 'react';
import {FlatList} from 'react-native';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"
import {useDatabase} from "@/core/hooks";
import {useEffect, useState} from "react";
import type {Servings} from "@/core/types";
import database from "@/core/database";
import {DaySummary} from "@/app/(app)/charts/components/DaySummary";

export default function ProgressPage() 
{
    const db = useDatabase();

    const [days, setDays] = useState<Servings[]>([]);
    useEffect(() => {
        if (db) {
            // Remove any empty days from the database.
            // We've taken steps to prevent it but a user could still end up with an empty day in the database,
            // if they add data to a day and then remove that data again.
            database.deleteEmptyDays(db).then(() =>
                // Then get all the days
                database.getAllDays(db).then((results) => {
                    setDays(results);
                })
            );                
        }
    }, [db]);
    
    
    return (
        <TwContainer twc="flex-1 bg-slate-950 px-3 pt-6">
            <TwContainer twc={"flex-col justify-end items-start mb-6"}>
                <TwText variant="title">Progress</TwText>
                <TwText variant="subtitle">View your scores over time</TwText>
            </TwContainer>
            <TwContainer twc="flex-1 flex-col">
                    {days.length > 0 && <FlatList data={days} renderItem={({item}) => <DaySummary data={item} />} 
                        keyExtractor={(item) => item.date}
                    />}
            </TwContainer>
        </TwContainer>
    );
}