export interface Race {
    name: string;
    description: string;
    properties: {
        Category: string;
        Expansion: number;
        Size?: undefined;
        Speed?: undefined;
        "data-List"?: undefined;
        "data-builderImage"?: undefined;
        "data-Ability Score Increase"?: undefined;
        "data-Ability Score Choice"?: undefined;
    };
    publisher: string;
    book: string;
}