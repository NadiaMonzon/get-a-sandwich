export interface SandwichModel {
    sandwichID: string,
    ingredients: SandwichIngredients,
    difficulty: RecipeDifficulty,
    specialDiet?: string[],
    isHot: boolean,
    instructions: string[],
    rating?: number,
}

interface SandwichIngredients {
    proteinSource: string[],
    crunchyTouch?: string[],
    vegetable: string[],
    breadType: BreadCharacteristics,
    sauce?: string[]
}

interface BreadCharacteristics {
    breadType: string,
    layers: number
}

enum RecipeDifficulty {
    "Easy",
    "Medium",
    "Hard"
}

// enum DietTypes{
//     "Vegan",
//     "Vegetarian",
//     "Gluten free",
//     "High protein"
// }