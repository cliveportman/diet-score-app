import React, { useState} from "react";

import {TwContainer} from "@/core/components/TwContainer";
import { Day } from "@/app/(app)/scores/components/Day";
import { Dimensions, FlatList, View} from "react-native";
import {useDatabase} from "@/core/hooks";

export default function Scores() {

    const db = useDatabase();

    const { width } = Dimensions.get('window');
    const [height, setHeight] = useState(0);

    const [days, setDays] = useState([
        {date: new Date()},
        {date: new Date(new Date().setDate(new Date().getDate() - 1))}
    ]);
    
    function handleEndReached() {
        const lastDate = new Date(days[days.length - 1].date);
        const newDate = new Date(lastDate.setDate(lastDate.getDate() - 1));
        setDays([...days, {date: newDate}]);
    }
        
    return (
        <TwContainer twc="flex-1 flex-col justify-center bg-slate-950">            
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
        </TwContainer>
    );
    
}