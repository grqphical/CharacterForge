export enum ClassName {
    Artificer = "Artificer",
    Barbarian = "Barbarian",
    Bard = "Bard",
    Cleric = "Cleric",
    Druid = "Druid",
    Fighter = "Fighter",
    Monk = "Monk",
    Paladin = "Paladin",
    Ranger = "Ranger",
    Rogue = "Rogue",
    Sorcerer = "Sorcerer",
    Warlock = "Warlock",
    Wizard = "Wizard"
}

export enum Alignment {
    LawfulGood = "Lawful Good",
    NeutralGood = "Neutral Good",
    ChaoticGood = "Chaotic Good",
    LawfulNeutral = "Lawful Neutral",
    TrueNeutral = "True Neutral",
    ChaoticNeutral = "Chaotic Neutral",
    LawfulEvil = "Lawful Evil",
    NeutralEvil = "Neutral Evil",
    ChaoticEvil = "Chaotic Evil"
}

enum Ability {
    STR = "STR",
    DEX = "DEX",
    CON = "CON",
    INT = "INT",
    WIS = "WIS",
    CHA = "CHA"
}

enum Dice {
    D4 = "D4",
    D6 = "D6",
    D8 = "D8",
    D10 = "D10",
    D12 = "D12",
    D20 = "D20",
    D100 = "D100"
}

interface Attack {
    name: string
    attack_bonus: number
    damage: string
}

interface Spell {
    name: string
    level: number
    casting_time: string
    range_area: string
    verbal: boolean
    somatic: boolean
    material: boolean
    duration: string
    school: string
    attack_save: string
    description: string
}

interface Spellcasting {
    class: ClassName
    spellcasting_ability: Ability
    save_dc: number
    spell_attack_bonus: number
    spell_slots: Array<number>
    used_spell_slots: Array<number>
    spells: Spell
}

export interface Character {
    name: string
    class: ClassName
    subclass: string | null
    race: string
    background: string
    level: number
    xp: number | null
    alignment: Alignment

    age: number
    height: string
    weight: string
    eyes: string
    skin: string
    hair: string

    proficiency_bonus: number
    max_hp: number
    current_hp: number
    temporary_hp: number
    hit_dice: Dice
    max_hit_dice: number
    current_hit_dice: number
    death_saving_throws: Array<boolean>
    inspiration: boolean

    initiative: number
    speed: number
    armor_class: number


    stats: {
        str: number
        dex: number
        con: number
        int: number
        wis: number
        cha: number
    }

    passive_perception: number

    strength_saving_throw: number
    dexterity_saving_throw: number
    constitution_saving_throw: number
    intelligence_saving_throw: number
    wisdom_saving_throw: number
    charisma_saving_throw: number

    acrobatics: number
    animal_handling: number
    arcana: number
    athletics: number
    deception: number
    history: number
    insight: number
    intimidation: number
    investigation: number
    medicine: number
    nature: number
    perception: number
    performance: number
    persuasion: number
    religion: number
    sleight_of_hand: number
    stealth: number
    survival: number

    copper: number
    electrum: number
    platinum: number
    gold: number
    silver: number

    personality_traits: string
    ideals: string
    bonds: string
    flaws: string

    attacks: Map<string, Attack>
    languages: Array<string>
    proficiencies: Array<string>
    features_traits: Array<string>
    allies_organizations: Array<string>
    backstory: string
    treasure: Array<string>

    spellcasting: Spellcasting | null
}