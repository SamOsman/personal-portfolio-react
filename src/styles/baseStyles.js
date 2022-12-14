import tw from "twin.macro"


export const layoutPadding = () => {
    return (
        tw` p-4 md:(px-[100px] py-10) xl:(px-[200px] py-10)`
    )
} 

export const h1 = () => {
    return (
        tw` text-5xl md:(text-4xl) `
    )
} 

export const h2 = () => {
    return (
        tw` text-3xl md:(text-3xl)`
    )
} 

export const h3 = () => {
    return (
        tw`uppercase text-xl md:(text-2xl) `
    )
}

export const sectionTitleStyles = tw`font-semibold mt-8 mb-8 md:(mt-0 mb-6)`
