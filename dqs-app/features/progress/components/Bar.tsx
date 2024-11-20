import React from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { TwText } from "@/core/components/TwText";

type BarProps = {
    data: BarData;
    width: number;
    maxHeight: number;
}
export type BarData = {
    value: number;
    label: string;
}

function zeroValueBar(data: BarData, maxHeight: number) {
    return (
        <TwContainer twc={"relative flex-col"} style={{ height: maxHeight }}>
            <TwContainer twc={"absolute flex-col w-8 bg-green-300"} style={{ top: 32/42 * maxHeight, height: 1 }} />
            <TwContainer twc={"absolute w-full"} style={{ top: maxHeight }}><TwText variant={"small"} twc={"text-center text-slate-100"}>{data.label}</TwText></TwContainer>
        </TwContainer>
    )
}

function negativeValueBar(data: BarData, maxHeight: number) {
    return (
        <TwContainer twc={"relative flex-col"} style={{ height: maxHeight }}>
            <TwContainer twc={"absolute flex-col w-8 bg-red-400"} style={{ top: 32/42 * maxHeight,  height: -data.value/42 * maxHeight }} />
            <TwContainer twc={"absolute w-full"} style={{ top: maxHeight }}><TwText variant={"small"} twc={"text-center text-slate-100"}>{data.label}</TwText></TwContainer>
        </TwContainer>
    )
}

function positiveValueBar(data: BarData, maxHeight: number) {
    return (
        <TwContainer twc={"relative flex-col"} style={{ height: maxHeight }}>
            <TwContainer twc={"absolute flex-col w-8 bg-lime-400"} style={{ top: (32-data.value)/42 * maxHeight,  height: data.value/42 * maxHeight }} />
            <TwContainer twc={"absolute w-full"} style={{ top: ((32-data.value)/42 * maxHeight) -24 }}><TwText variant={"small"} twc={"text-center text-lime-400"}>+{data.value}</TwText></TwContainer>
            <TwContainer twc={"absolute w-full"} style={{ top: maxHeight }}><TwText variant={"small"} twc={"text-center text-slate-100"}>{data.label}</TwText></TwContainer>
        </TwContainer>
    )
}

function getBar(data: BarData, maxHeight: number) {
    if (data.value === 0) return zeroValueBar(data, maxHeight);
    if (data.value < 0) return negativeValueBar(data, maxHeight);
    if (data.value > 0) return positiveValueBar(data, maxHeight);
}

export function Bar({data, width = 16, maxHeight}: BarProps) {
    return (
        <TwContainer twc={"relative flex-col bg-red-500"} style={{ height: maxHeight, width: width }}>            
            {getBar(data, maxHeight)}
        </TwContainer>
    );
}