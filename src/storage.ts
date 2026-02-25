import type { Character } from "./models";

export let characters = [] as Array<Character>;

function saveCharacters() {
    localStorage.setItem("characters", JSON.stringify(characters))
}

export function SaveCharacter(character: Character) {
    if (character === null) {
        return;
    }
    characters.push(character);
    saveCharacters();
}

export function LoadCharacters() {
    let savedCharacters = localStorage.getItem("characters")
    if (savedCharacters !== null) {
        characters = JSON.parse(savedCharacters);
        console.log("Loaded characters from storage")
    } else {
        console.log("No characters in local storage")
    }
}