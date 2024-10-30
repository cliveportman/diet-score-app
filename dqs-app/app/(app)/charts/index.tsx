import {FlatList} from 'react-native';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"
import {useDatabase} from "@/core/hooks";
import {useEffect, useState} from "react";
import type {Servings} from "@/core/types";
import database from "@/core/database";
import {getTotalScores} from "@/core/helpers";
import {DaySummary} from "@/app/(app)/charts/components/DaySummary";

export default function ProgressPage() 
{
    const db = useDatabase();

    const [days, setDays] = useState<Servings[]>([]);
    useEffect(() => {
        if (db) {
            database.getAllDays(db).then((results) => {
                setDays(results);
            console.log(results);
            });
        }
    }, [db]);
    
    
    return (
        <TwContainer twc="flex-1 bg-slate-950 px-3 pt-12">
            <TwContainer twc={"flex-col justify-end items-start"}>
                <TwText variant="title" twc={""}>Progress</TwText>
                <TwText variant="subtitle" twc={""}>View your scores over time</TwText>
            </TwContainer>
            <TwContainer twc="flex-1 flex-col">
                    {days.length > 0 && <FlatList data={days} renderItem={({item}) => <DaySummary data={item} />} 
                        keyExtractor={(item) => item.date}
                    />}
            </TwContainer>
        </TwContainer>
    );
}