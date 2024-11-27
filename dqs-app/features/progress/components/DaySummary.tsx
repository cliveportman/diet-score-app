import { Servings} from "@/core/types";
import React from 'react';
import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"
import { getTotalScoresForDisplay } from "@/core/helpers";
import {format} from "date-fns";

type DaySummaryProps = {
    data: Servings;
}

export function DaySummary({data}: DaySummaryProps) {
    
    const totals = getTotalScoresForDisplay(data);
    
    // If the total begins with a +, make it green.
    // If the total is "---", make it blue.
    // If the total is negative, make it red.
    let colour: string;
    if (typeof totals.total === "string") {
        if (totals.total === "---") colour = "text-slate-500";
        else colour = 'text-slate-300';
        
    } else  colour = 'text-slate-300';
    
    return (
        <TwContainer twc={"flex-row justify-between items-start bg-slate-900 px-3 pt-1.5 mb-1.5"}>
            <TwText twc={"w-28 leading-none h-5 text-slate-300"}>{format(data.date, 'EEE dd MMM')}</TwText>
            <TwText twc={`w-16 leading-none h-5 text-slate-300 text-center`}>{totals.portions}</TwText>
            <TwText twc={`w-10 leading-none h-5 text-slate-300 text-right`}>{totals.healthy}</TwText>
            <TwText twc={`w-16 leading-none h-5 text-slate-300 text-right`}>{totals.unhealthy}</TwText>
            <TwText twc={`w-10 leading-none h-5 ${colour} text-right`}>{totals.total}</TwText>
        </TwContainer>
    );
}