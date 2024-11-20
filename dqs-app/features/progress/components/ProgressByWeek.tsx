import {DateString, Servings} from "@/core/types";
import React, {useEffect, useState} from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { ProgressByWeekChart } from "@/features/progress/components/ProgressByWeekChart";
import {Dimensions, FlatList} from "react-native";
import {getWeek} from "@/core/helpers";
import {addDays, endOfWeek, format, startOfWeek, subWeeks} from "date-fns";



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
        <TwContainer twc={"mb-6"}>
            <FlatList
                data={weeks}
                renderItem={({item, index}) => <ProgressByWeekChart week={item} />}
                horizontal
                inverted
                snapToInterval={width}
                decelerationRate="fast"
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
                extraData={weeks}
                getItemLayout={(_, index) => (
                    { length: width, offset: width * index, index}
                )}
            />
            
        </TwContainer>
    );
}