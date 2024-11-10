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
        else colour = 'text-lime-400';
        
    } else  colour = 'text-red-400';
    
    return (
        <TwContainer twc={"flex-col mb-6"}>
            <TwText variant={"subheading"} twc={""}>{format(data.date, 'EEE dd MMM')}</TwText>
            <TwContainer twc={"flex-row justify-between items-start"}>
                <TwContainer twc={"flex-row justify-start items-start"}>
                    <TwContainer twc={"flex-col mr-3"}>
                        <TwText variant={"small"} twc={``}>Score</TwText>
                        <TwText variant={"subheading"} twc={`text-2xl ${colour} mr-3`}>{totals.total}</TwText>
                    </TwContainer>
                    <TwContainer twc={"flex-col items-end mr-3"}>
                        <TwText variant={"small"} twc={``}>High-quality</TwText>
                        <TwText variant={"small"} twc={`text-base text-lime-400`}>{totals.healthy}</TwText>
                    </TwContainer>
                    <TwContainer twc={"flex-col items-end"}>
                        <TwText variant={"small"} twc={``}>Low-quality</TwText>
                        <TwText variant={"small"} twc={`text-base text-red-400`}>{totals.unhealthy}</TwText>
                    </TwContainer>
                </TwContainer>
                <TwContainer twc={"flex-col items-end mr-3"}>
                    <TwText variant={"small"} twc={``}>Portions</TwText>
                    <TwText variant={"small"} twc={`text-base text-slate-100}`}>{totals.portions}</TwText>
                </TwContainer>  
            </TwContainer>
        </TwContainer>    
    );
}