type TitleNews = 'Учеба' | 'Наука' | 'Абитуриент' | 'Новости'  | 'Новости группы' | 'РФ ПГУ'  | 'И-новости' | 'Обявления'

export type FieldsCollectionNews = { [P: string]: OneTubInterface }

export interface OneTubInterface {
    title: TitleNews
    news: New[]
}

export interface New {
    title: string,
    description: string,
    data: Date
}