import React, { useState} from 'react';
import { ProgressByWeekChart } from "@/features/progress/components/ProgressByWeekChart";
import {Dimensions, FlatList} from "react-native";
import {getWeek} from "@/core/helpers";

export function ProgressByWeek() {

    const { width } = Dimensions.get('window');
    const [weeks, setWeeks] = useState([
        getWeek(0),
        getWeek(1),
    ]);

    function handleEndReached() {
        setWeeks([...weeks, getWeek(weeks.length)]);
    }

    return (
        <FlatList
            data={weeks}
            renderItem={({item}) => <ProgressByWeekChart week={item} />}
            horizontal
            inverted
            snapToInterval={width - 24}
            decelerationRate="fast"
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            extraData={weeks}
            getItemLayout={(_, index) => (
                { length: width - 24, offset: (width - 24) * index, index}
            )}
        />
    );
}