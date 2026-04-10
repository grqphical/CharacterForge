<script lang="ts">
import { ClassName, type Character } from '../../models';

export default {
    props: {
        character: {
            type: Object as () => Character,
            required: true
        }
    },
    data() {
        return {
            ClassName
        }
    }
}
</script>

<template>
    <div class="flex flex-col gap-1">
        <label for="class" class="text-xl">Class:</label>
        <select v-model="character.class" class="bg-gray-200 p-1 rounded-md w-1/3" required>
            <option v-for="charClass in Object.keys(ClassName)" :value="charClass" :key="charClass">
                {{ charClass }}
            </option>
        </select>
    </div>
</template>