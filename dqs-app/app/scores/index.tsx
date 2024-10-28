import database from "@/core/database";
import { useEffect, useState} from "react";
import {SQLiteDatabase} from "expo-sqlite";

import {TwContainer} from "@/core/components/TwContainer";
import {Day} from "@/app/scores/components/Day";
import { Dimensions, FlatList, View} from "react-native";

export default function Scores() {

    const { width } = Dimensions.get('window');
    const [height, setHeight] = useState(0);
    
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
        <View tw="flex-1 flex-col justify-center bg-slate-950">
            <TwContainer twc={"h-16 bg-slate-800"} />
            <View tw="flex-1"
              onLayout={(event) => {
                  const { height } = event.nativeEvent.layout;
                  setHeight(height);
              }}>
                {(db && days.length) && (
                <FlatList
                    data={days}
                    renderItem={({item}) => <Day db={db} date={item.date} width={width} />}
                    keyExtractor={item => item.date.toISOString()}
                    horizontal
                    inverted
                    snapToInterval={width}
                    decelerationRate="fast"
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.5}
                    extraData={days}
                    getItemLayout={(_, index) => (
                        { length: height, offset: height * index, index}
                    )}
                />
                )}
            </View>
        </View>
    );
    
}