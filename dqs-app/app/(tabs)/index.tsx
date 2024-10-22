import database from "@/core/database";
import type { Score } from "@/core/types";
import {useEffect, useState} from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {SQLiteDatabase} from "expo-sqlite";

import { TwContainer } from "@/core/components/TwContainer"
import { TwButton } from "@/core/components/TwButton"
import { TwText } from "@/core/components/TwText"

import { format } from "date-fns";

const score: Score = {
    date: '2021-09-23',
    veg: 6,
    fruit: 2,
    nuts: 3,
    wholegrains: 4,
    dairy: 5,
    leanproteins: 6,
    beverages: 3,
    refinedgrains: 8,
    sweets: 9,
    fattyproteins: 10,
    friedfoods: 11,
    other: 12,
};

export default function App() {
    const [db, setDb] = useState<SQLiteDatabase | null>(null);
    useEffect(() => {
        setDb(database.openDatabase());
    }, []);
    
    const [scores, setScores] = useState<Score[]>([]);
    useEffect(() => {
        if (db) {
            database.getAllScores(db).then((results) => setScores(results));
        }
    }, [db]);
        
    return (
        <SafeAreaView tw="flex-1 flex-col justify-center px-6 bg-slate-900">
            <TwText variant="title">Racing Weight - Unofficial</TwText>
            <TwText variant="subtitle">Based on the book by Mark Fitzgerald</TwText>
            {/*<TwText variant="heading">Open up App.js to start working on your app!</TwText>*/}
            {/*<TwText variant="subheading">Subheading</TwText>*/}
            {/*<TwText>Open up App.js to start working on your app!</TwText>*/}
            
            {/*{db && (*/}
            {/*    <TwContainer twc="flex-col">*/}
            {/*        <TwButton title="Get scores" onPress={async () => db ? await database.getAllScores(db): null} twc="mb-3" />*/}
            {/*        <TwButton title="Add score" onPress={async () => db ? await database.insertScore(db, score): null} variant="secondary" twc="mb-3" />*/}
            {/*        <TwButton title="Update score" onPress={async () => db ? await database.updateScore(db, 1, score): null} variant="soft" twc="mb-3" />                */}
            {/*    </TwContainer>*/}
            {/*)}*/}
            
            {/*<TwContainer twc="flex-col">*/}
            {/*    <TwText variant="heading">Scores ({scores.length})</TwText>*/}
            {/*    {scores.length > 0 ?*/}
            {/*        scores.map( (s, i) => (<TwText key={i}>{format(new Date(s.date), 'L MMM yyyy')}</TwText>))*/}
            {/*        : <TwText>No scores</TwText>*/}
            {/*    }*/}
            {/*</TwContainer>*/}
            {/*<TwText variant={"small"}>* Some minor caveat</TwText>*/}
            
        
        </SafeAreaView>
    );
}