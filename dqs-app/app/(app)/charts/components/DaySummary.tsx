import { Servings} from "@/core/types";

import { TwContainer } from "@/core/components/TwContainer"
import { TwText } from "@/core/components/TwText"
import {getTotalScores} from "@/core/helpers";
import {format} from "date-fns";

type DaySummaryProps = {
    data: Servings;
}

export function DaySummary({data}: DaySummaryProps) {
    
    const totals = getTotalScores(data);
    
    // If the total begins with a +, make it green.
    // If the total is "---", make it blue.
    // If the total is negative, make it red.
    let colour: string;
    if (typeof totals.total === "string") {
        if (totals.total === "---") colour = "text-slate-500";
        else colour = 'text-lime-400';
        
    } else  colour = 'text-red-400';
    
    return (
        <TwContainer twc={"flex-col mb-3"}>
            <TwText variant={"subheading"} twc={""}>{format(data.date, 'EEE dd MMM')}</TwText>
            <TwContainer twc={"flex-row justify-start"}>
                    <TwText variant={"subheading"} twc={`text-2xl ${colour} mr-3`}>{totals.total}</TwText>
                    <TwText variant={"small"} twc={`text-base text-lime-400 mr-1.5`}>{totals.healthy}</TwText>
                <TwContainer>
                    <TwText variant={"small"} twc={`text-base text-red-400 mr-3`}>{totals.unhealthy}</TwText>
                </TwContainer>
                <TwContainer>
                    <TwText variant={"small"} twc={`text-base text-slate-100}`}>({totals.portions})</TwText>
                </TwContainer>
            </TwContainer>
        </TwContainer>    
    );
}