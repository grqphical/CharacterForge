<script setup lang="ts">
import { computed, reactive } from 'vue' // Import reactive
import { Class, type Character, Alignment } from "../models"
import races from "../Data/races.json"
import { useCharacterStore } from "../storage"
import { useRouter } from 'vue-router'

const router = useRouter()
const charactersStore = useCharacterStore();

const character = reactive<Character>({
    name: '',
    level: 1,
    class: Class.Fighter,
    race: races[0]?.name || '',
    alignment: Alignment.TrueNeutral,
    stats: {
        strength: 8,
        dexterity: 8,
        constitution: 8,
        intelligence: 8,
        charisma: 8,
        wisdom: 8,
    },
    xp: 0,
} as Character)

const handleSubmit = (e: Event) => {
    e.preventDefault()

    charactersStore.addCharacter(character)
    const idx = charactersStore.characters.length - 1;

    router.push(`/character-sheet/${idx}`)
}

let pointBuyPrices: Record<number, number> = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9
}

const totalSpent = computed(() => {
    return Object.values(character.stats).reduce((sum, score) => {
        return sum + (pointBuyPrices[score] || 0);
    }, 0);
});

const handleAbilityChange = (stat: string, e: Event) => {
    const target = e.target as HTMLInputElement;
    const newValue = parseInt(target.value);
    const statKey = stat as keyof typeof character.stats;
    const oldValue = character.stats[statKey];

    const currentCost = pointBuyPrices[oldValue] || 0;
    const newCost = pointBuyPrices[newValue] || 0;
    const costDifference = newCost - currentCost;

    // Check if current total + the increase fits in the 27 point budget
    if (totalSpent.value + costDifference <= 27) {
        character.stats[statKey] = newValue;
    } else {
        // Snap back if over budget
        target.value = oldValue.toString();
    }
}
</script>

<template>
    <div class="w-full rounded-md p-4 bg-white flex flex-col gap-2">
        <h1 class="font-bold text-3xl mb-4">Create New Character</h1>
        <form class="flex flex-col gap-2" @submit="handleSubmit">

            <div class="flex flex-col gap-1">
                <label for="name" class="text-xl">Name:</label>
                <input v-model="character.name" type="text" class="bg-gray-200 p-1 rounded-md w-1/3" required>
            </div>

            <div class="flex flex-col gap-1">
                <label for="class" class="text-xl">Class:</label>
                <select v-model="character.class" class="bg-gray-200 p-1 rounded-md w-1/3" required>
                    <option v-for="charClass in Object.keys(Class)" :value="charClass" :key="charClass">
                        {{ charClass }}
                    </option>
                </select>
            </div>

            <div class="flex flex-col gap-1">
                <label for="race" class="text-xl">Race:</label>
                <select v-model="character.race" class="bg-gray-200 p-1 rounded-md w-1/3" required>
                    <option v-for="race in races" :value="race.name" :key="race.name">
                        {{ race.name }} ({{ race.source }})
                    </option>
                </select>
            </div>

            <div class="flex flex-col gap-1">
                <label for="level" class="text-xl">Level:</label>
                <input v-model.number="character.level" type="number" class="bg-gray-200 p-1 rounded-md w-1/3" max="20"
                    min="1" required>
            </div>
            <div class="flex flex-col gap-1 mt-4">
                <label for="abilities" class="text-xl font-bold">Abilities:</label>
                <div>Point Buy Points Remaining: {{ 27 - totalSpent }} / 27</div>
                <div id="abilities" class="flex flex-row gap-2 w-1/3">
                    <div class="flex flex-col">
                        <input type="number" name="str" id="str" class="bg-gray-200 p-1 rounded-md w-full"
                            @input="handleAbilityChange('strength', $event)" :value="character.stats.strength" min="8"
                            max="15">
                        <label for="str">STR</label>
                    </div>
                    <div class="flex flex-col">
                        <input type="number" name="dex" id="dex" class="bg-gray-200 p-1 rounded-md w-full"
                            @input="handleAbilityChange('dexterity', $event)" :value="character.stats.dexterity" min="8"
                            max="15">
                        <label for="dex">DEX</label>
                    </div>
                    <div class="flex flex-col">
                        <input type="number" name="con" id="con" class="bg-gray-200 p-1 rounded-md w-full"
                            @input="handleAbilityChange('constitution', $event)" :value="character.stats.constitution"
                            min="8" max="15">
                        <label for="con">CON</label>
                    </div>
                    <div class="flex flex-col">
                        <input type="number" name="int" id="int" class="bg-gray-200 p-1 rounded-md w-full"
                            @input="handleAbilityChange('intelligence', $event)" :value="character.stats.intelligence"
                            min="8" max="15">
                        <label for="int">INT</label>
                    </div>
                    <div class="flex flex-col">
                        <input type="number" name="wis" id="wis" class="bg-gray-200 p-1 rounded-md w-full"
                            @input="handleAbilityChange('wisdom', $event)" :value="character.stats.wisdom" min="8"
                            max="15">
                        <label for="wis">WIS</label>
                    </div>
                    <div class="flex flex-col">
                        <input type="number" name="cha" id="cha" class="bg-gray-200 p-1 rounded-md w-full"
                            @input="handleAbilityChange('charisma', $event)" :value="character.stats.charisma" min="8"
                            max="15">
                        <label for="cha">CHA</label>
                    </div>
                </div>

                <button type="submit" class="text-lg px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 w-48">
                    Create
                </button>
            </div>
        </form>
    </div>
</template>