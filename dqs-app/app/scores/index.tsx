import database from "@/core/database";
import {useEffect, useState} from "react";
import {SQLiteDatabase} from "expo-sqlite";

import {TwContainer} from "@/core/components/TwContainer";
import {Day} from "@/app/scores/components/Day";
import { Dimensions, FlatList} from "react-native";

export default function Scores() {

    const { width } = Dimensions.get('window');
    
    const [db, setDb] = useState<SQLiteDatabase | null>(null);
    useEffect(() => {
        setDb(database.openDatabase());
    }, []);

    const [days, setDays] = useState([
        {date: new Date()},
        {date: new Date(new Date().setDate(new Date().getDate() - 1))},
        {date: new Date(new Date().setDate(new Date().getDate() - 2))},
        {date: new Date(new Date().setDate(new Date().getDate() - 3))}
    ]);
    
    function handleEndReached() {
        const lastDate = new Date(days[days.length - 1].date);
        const newDate = new Date(lastDate.setDate(lastDate.getDate() - 1));
        setDays([...days, {date: newDate}]);
    }
        
    return (
        <TwContainer twc="flex-1 flex-col justify-center bg-slate-950">
            {(db && days.length) && (
            <FlatList
                data={days}
                renderItem={({item}) => <Day db={db} date={item.date} width={width} />}
                keyExtractor={item => item.date.toISOString()}
                horizontal
                snapToInterval={width}
                decelerationRate="fast"
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
                extraData={days}
            />
            )}
        </TwContainer>
    );
    
}