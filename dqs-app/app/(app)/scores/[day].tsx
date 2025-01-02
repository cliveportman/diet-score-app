import React, { useState} from "react";
import { useLocalSearchParams } from "expo-router";

import {TwContainer} from "@/core/components/TwContainer";
import { Day } from "@/features/scores/components/Day";
import { Dimensions, FlatList, View} from "react-native";
import {useDatabase} from "@/core/hooks";
import {TwText} from "@/core/components/TwText";

export default function Scores() {

    const db = useDatabase();
    const { day } = useLocalSearchParams<{ day: string }>();

    const { width } = Dimensions.get('window');
    const [days, setDays] = useState([
        {date: new Date(new Date().setDate(new Date(day).getDate() + 1))},
        {date: new Date(day)},
        {date: new Date(new Date().setDate(new Date(day).getDate() - 1))}
    ]);

    function handleStartReached() {
        const firstDate = days[0].date;
        const newDate = new Date(new Date().setDate(firstDate.getDate() + 1));
        setDays([{date: newDate}, ...days]);

    }
    
    function handleEndReached() {
        const lastDate = new Date(days[days.length - 1].date);
        const newDate = new Date(lastDate.setDate(lastDate.getDate() - 1));
        setDays([...days, {date: newDate}]);
    }


        
    return (
        <TwContainer twc="flex-1 flex-col justify-center bg-slate-950">            
            <View tw="flex-1">
                {(db && days.length) && (
                <FlatList
                    data={days}
                    renderItem={({item}) => <Day db={db} date={item.date} width={width} />}
                    keyExtractor={item => item.date.toISOString()}
                    horizontal
                    inverted
                    snapToInterval={width}
                    decelerationRate="fast"
                    initialScrollIndex={1}
                    onEndReached={handleEndReached}
                    onStartReached={handleStartReached}
                    onEndReachedThreshold={0.5}
                    onStartReachedThreshold={0.5}
                    extraData={days}
                    getItemLayout={(_, index) => (
                        { length: width, offset: width * index, index}
                    )}
                />
                )}
            </View>
        </TwContainer>
    );
    
}