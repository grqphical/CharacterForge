<script setup lang="ts">
import { Class, type Character } from "../models"
import races from "../Data/races.json"

let character = {} as Character
</script>

<template>
    <div class="w-full rounded-md p-4 bg-white flex flex-col gap-2">
        <h1 class="font-bold text-3xl mb-4">Create New Character</h1>
        <form class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
                <label for="name" class="text-xl">Name:</label>
                <input type="text" name="name" class="bg-gray-200 p-1 rounded-md w-1/3" placeholder="Character Name"
                    required :value="character.name">
            </div>
            <div class="flex flex-col gap-1">
                <label for="class" class="text-xl">Class:</label>
                <select name="class" class="bg-gray-200 p-1 rounded-md w-1/3" required>
                    <option v-for="charClass in Object.keys(Class)" value="{{ charClass }}" key="{{ charClass }}">{{
                        charClass }}</option>
                </select>
            </div>
            <div class="flex flex-col gap-1">
                <label for="race" class="text-xl">Race:</label>
                <select name="race" class="bg-gray-200 p-1 rounded-md w-1/3" required>
                    <option v-for="race in races" value="{{ race.name }}">{{ race.name }}</option>
                </select>
            </div>
            <button type="submit"
                class="text-lg px-3 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 self-start w-48">Create</button>
        </form>
    </div>
</template>