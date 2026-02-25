<script setup lang="ts">
import { characters } from "../storage"
</script>

<template>
    <div class="w-140 h-140 m-auto p-4 mt-24 rounded-md shadow-xl bg-white">
        <h1 class="text-4xl mb-4 font-bold">5e Character Creator</h1>
        <h2 class="text-3xl">Characters:</h2>
        <div class="min-h-16 py-4">
            <div v-if="characters.length === 0">Hmm no characters have been created...</div>
            <div v-for="character in characters">{{ character.name }}</div>
        </div>
        <div class="flex flex-row gap-2">
            <button class="text-lg px-3 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">New
                Character</button>
            <button class="text-lg px-3 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">Import
                Character</button>
        </div>
    </div>


</template>

<style scoped></style>