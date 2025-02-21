export type AccordionData = {
    id: number,
    question: string,
    answer: string
}


export type selectedAccordion = {
    [index:number] : boolean
}


export type Accordion = AccordionData[];