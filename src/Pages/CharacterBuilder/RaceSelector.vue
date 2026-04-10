<script lang="ts">
import races from "../../Data/races.json"
import { type Character } from '../../models';

type StatKey = keyof Character["stats"];

export default {
    props: {
        character: {
            type: Object as () => Character,
            required: true
        }
    },
    data() {
        return {
            races
        }
    },
    methods: {
        applyRacialBonuses() {
            Object.entries(this.character.stats).forEach(([keyName]) => {
                const key = keyName as keyof typeof this.character.stats;
                this.character.stats[key] = 0
            })
            const race = this.character.race;
            const raceData = races.find((r) => r.name == race);
            if (raceData?.ability) {
                raceData.ability.forEach((value) => {
                    Object.entries(value).forEach(([statName, statValue]) => {
                        if (!(statName in this.character.stats)) {
                            return;
                        }
                        if (typeof statValue !== "number") {
                            return;
                        }
                        const stat = statName as StatKey;
                        this.character.stats[stat] = statValue;
                    })
                });
            }
        },
        handleDynamicAbilityChange(payload: Event) {
            const target = payload.target as HTMLSelectElement;
            const selectedAbilityRaw = target.value;
            if (!(selectedAbilityRaw in this.character.stats)) {
                return;
            }
            const selectedAbility = selectedAbilityRaw as StatKey;
            this.character.stats[selectedAbility] += (this.character.stats[selectedAbility] > 0 ? 0 : 1);
        }
    },
    computed: {
        filteredRacialBonuses() {
            return Object.fromEntries(
                Object.entries(this.character.stats).filter(([_, value]) => value !== 0)
            );
        }
    },
    mounted() {
        this.applyRacialBonuses();
    }
}
</script>

<template>
    <div class="flex flex-col gap-1">
        <label for="race" class="text-xl">Race:</label>
        <select v-model="character.race" class="bg-gray-200 p-1 rounded-md w-1/3" required @change="applyRacialBonuses">
            <option v-for="race in races" :value="race.name" :key="race.name">
                {{ race.name }} ({{ race.source }})
            </option>
        </select>
    </div>
</template>