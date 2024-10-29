import {FoodCat} from "@/core/enums";
import TailwindColors from "tailwindcss/colors";
import Toast from 'react-native-root-toast';

export function foodCatToText(cat: FoodCat) {
    switch (cat) {
        case FoodCat.veg:
            return "Vegetables";
        case FoodCat.fruit:
            return "Fruit";
        case FoodCat.nuts:
            return "Nuts + seeds";
        case FoodCat.wholegrains:
            return "Whole grains";
        case FoodCat.dairy:
            return "Dairy";
        case FoodCat.leanproteins:
            return "Lean meats";
        case FoodCat.beverages:
            return "Beverages";
        case FoodCat.refinedgrains:
            return "Refined grains";
        case FoodCat.sweets:
            return "Sweets";
        case FoodCat.fattyproteins:
            return "Fatty meats";
        case FoodCat.friedfoods:
            return "Fried foods";
        case FoodCat.alcohol:
            return "Alcohol";
        case FoodCat.other:
            return "Other";
    }
}

export function shortToast(message: string, status: "success" | "info" | "error" = "info") {
    Toast.show(message, {
        duration: Toast.durations.SHORT,
        position: 90,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: status === "success" ? TailwindColors.lime[600] : status === "error" ? TailwindColors.red[800] : TailwindColors.slate[600]
    });
}