<script setup lang="ts">
import { reactive } from 'vue' // Import reactive
import { Class, type Character, Alignment } from "../models"
import races from "../Data/races.json"
import { SaveCharacter } from "../storage"

const character = reactive<Character>({
    name: '',
    level: 1,
    class: Class.Fighter,
    race: races[0]?.name || '',
    alignment: Alignment.TrueNeutral
} as Character)

const handleSubmit = (e: Event) => {
    e.preventDefault()
    // character is now a reactive proxy, SaveCharacter will get the raw values
    SaveCharacter(character);
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

            <button type="submit" class="text-lg px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 w-48">
                Create
            </button>
        </form>
    </div>
</template>