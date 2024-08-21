import StylesItemProps from "@/typescript/interfaces/Styles/StylesItemProps";

interface StylesCategoryData {
    category: string;
    items: StylesItemProps[]
}

const data: StylesCategoryData[] = [
    {
        category: "REALISM",
        items: [
            {
                image: "/styles/fantasy-world-generator-thumb.png",
                heading: "Goldfish",
                href: "/styles/surrealistic-goldfish"
            },
            {
                image: "/styles/fantasy-world-generator-thumb.png",
                heading: "Mars",
                href: "/styles/surrealistic-mars"
            },
            {
                image: "/styles/fantasy-world-generator-thumb.png",
                heading: "Steampunk",
                href: "/styles/surrealistic-steampunk"
            },
            {
                image: "/styles/fantasy-world-generator-thumb.png",
                heading: "Jungle",
                href: "/styles/surrealistic-jungle"
            },
            {
                image: "/styles/fantasy-world-generator-thumb.png",
                heading: "Mushrooms",
                href: "/styles/surrealistic-mushrooms"
            },
        ]
    }
]

export default data;