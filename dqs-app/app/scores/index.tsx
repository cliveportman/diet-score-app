import database from "@/core/database";
import type {Servings} from "@/core/types";
import {FoodCat} from "@/core/enums";
import {useEffect, useState} from "react";
import {SQLiteDatabase} from "expo-sqlite";

import {TwContainer} from "@/core/components/TwContainer"
import {TwText} from "@/core/components/TwText"
import {ScoreLabel} from "@/app/scores/components/ScoreLabel";
import {ScoreServing} from "@/app/scores/components/ScoreServing";
import {Pressable} from "react-native";
import {Score} from "@/app/scores/components/Score";
import { maxScores} from "@/app/scores/constants";

const servings: Servings = {
    date: '2021-09-23',
    veg: 6,
    fruit: 2,
    nuts: 3,
    wholegrains: 4,
    dairy: 5,
    leanproteins: 6,
    beverages: 3,
    refinedgrains: 8,
    sweets: 9,
    fattyproteins: 10,
    friedfoods: 11,
    alcohol: 1,
    other: 12,
};

export default function App() {
    const [db, setDb] = useState<SQLiteDatabase | null>(null);
    useEffect(() => {
        setDb(database.openDatabase());
    }, []);
    
    const [scores, setScores] = useState<Servings[]>([]);
    useEffect(() => {
        if (db) {
            database.getAllServings(db).then((results) => setScores(results));
        }
    }, [db]);
    
    function handlePress(cat: FoodCat) {
        console.log('serving press:', cat);
    }

    function handleLongPress(cat: FoodCat) {
        console.log('serving longpress:', cat);
    }
        
    return (
        <TwContainer twc="flex-1 flex-col justify-center px-3 bg-slate-950">
            
            <TwContainer twc={"mb-3"}><TwText variant="title" twc={"text-center"}>Today</TwText></TwContainer>
            
            <Score text={"Vegetables"} cat={FoodCat.veg} maxScores={maxScores.veg} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Fruit"} cat={FoodCat.fruit} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Nuts + seeds"} cat={FoodCat.nuts} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Whole grains"} cat={FoodCat.wholegrains} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Dairy"} cat={FoodCat.dairy} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Lean meats"} cat={FoodCat.leanproteins} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Coffee + tea"} cat={FoodCat.beverages} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Refined grains"} cat={FoodCat.refinedgrains} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Sweets"} cat={FoodCat.sweets} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Fatty meats"} cat={FoodCat.fattyproteins} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Friend foods"} cat={FoodCat.friedfoods} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Alcohol"} cat={FoodCat.alcohol} onPress={handlePress} onLongPress={handleLongPress} />
            <Score text={"Other"} cat={FoodCat.other} onPress={handlePress} onLongPress={handleLongPress} />   
      
            <TwContainer twc={"flex-row justify-between"}>
                <TwContainer twc={"w-1/4"}/>
                <TwContainer twc={"w-1/2 pt-3"}>
                    <TwText variant="title" twc={"text-center text-5xl mb-0"}>---</TwText>
                    <TwText variant="copy" twc={"text-center"}>(0 portions)</TwText>
                </TwContainer>
                <TwContainer twc={"w-1/4"}>
                    <TwText variant="subheading" twc={"text-right text-green-400 mb-0"}>---</TwText>
                    <TwText variant="subheading" twc={"text-right text-red-400"}>---</TwText>
                </TwContainer>
            </TwContainer>
            
        </TwContainer>
    );
}