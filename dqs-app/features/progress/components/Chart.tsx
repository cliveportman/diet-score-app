import { Servings } from "@/core/types";
import React, {useEffect} from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { BarChart } from "@/features/progress/components/BarChart";
import {Dimensions, FlatList} from "react-native";

type ChartProps = {
    data: Servings[];
}

export function Chart({data}: ChartProps) {
    const { width } = Dimensions.get('window');

    useEffect(() => {
        if (!data) return;     
    }, [data]);

    return (
        <TwContainer twc={"mb-6"}>
            <FlatList
                data={data}
                renderItem={({item, index}) => <BarChart data={data} index={index} period={"week"} />}
                horizontal
                inverted
                snapToInterval={width}
                decelerationRate="fast"
            />
            
        </TwContainer>
    );
}