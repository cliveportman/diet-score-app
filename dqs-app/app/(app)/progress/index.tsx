import React from 'react';
import { TwContainer } from "@/core/components/TwContainer";
import { TwText } from "@/core/components/TwText";
import { ProgressByWeek } from "@/features/progress/components/ProgressByWeek";

export default function ProgressPage() 
{
    
    return (
        <TwContainer twc="flex-1 bg-slate-950 px-3 pt-12">
            <TwContainer twc={"flex-col justify-end items-start mb-6"}>
                <TwText variant="title">Progress</TwText>
            </TwContainer>
            <TwContainer twc="flex-col mb-6">
                <ProgressByWeek />
            </TwContainer>
        </TwContainer>
    );
}