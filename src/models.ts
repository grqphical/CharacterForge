enum Class {
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

export interface Character {
    name: string
    class: Class
    subclass: string | null
    race: string
    background: string
    level: number
    xp: number | null
    proficiency_bonus: number
    armor_class: number
    max_hp: number
    current_hp: number
    temporary_hp: number
    max_hit_dice: number
    current_hit_dict: number
    death_saving_throws: Array<boolean>
    inspiration: boolean
}