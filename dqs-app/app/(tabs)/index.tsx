import {Button, StyleSheet, Text, View} from "react-native";
import database from "@/core/database";
import type { Score } from "@/core/types";
import {useEffect, useState} from "react";
import {SQLiteDatabase} from "expo-sqlite";

const score: Score = {
    date: '2021-09-23',
    veg: 1,
    fruit: 2,
    nuts: 3,
    wholegrains: 4,
    dairy: 5,
    leanproteins: 6,
    beverages: 7,
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
        
    return (
        <View tw="flex-1 justify-center items-center bg-red-300">
            <Text tw="mb-3">Open up App.js to start working on your app!</Text>
            {db && (<Button title={'Get scores'} onPress={async () => db ? await database.getAllScores(db): null} />)}
            {db && (<Button title={'Add score'} onPress={async () => db ? await database.insertScore(db, score): null} />)}
        </View>
    );
}