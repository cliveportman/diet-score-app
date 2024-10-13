import {Button, StyleSheet, Text, View} from "react-native";
import database from "@/core/database";
import type { Score } from "@/core/types";
import {useEffect, useState} from "react";
import {SQLiteDatabase} from "expo-sqlite";

import { TwButton } from "@/core/components/TwButton"

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
        <View tw="flex-1 justify-center items-center bg-white">
            <Text tw="mb-3 font-regular" >Open up App.js to start working on your app!</Text>
            
            {db && (<View tw="mb-1.5"><Button title={'Get scores'} onPress={async () => db ? await database.getAllScores(db): null} /></View>)}
            {db && (<View tw="mb-3"><Button title={'Add score'} onPress={async () => db ? await database.insertScore(db, score): null} /></View>)}
            
            <TwButton title="Primary" onPress={() => console.log("Update")} twc="mb-1.5" />
            <TwButton title="Secondary" onPress={() => console.log("Update")} variant="secondary" twc="mb-1.5" />
            <TwButton title="Soft" onPress={() => console.log("Update")} variant="soft" />
            
        </View>
    );
}