export interface AboutList {
    abouts: {
        items: [
            {
                description_az: string,
                description_en: string,
                description_ru: string,
                aboutTypeId: number,
                aboutType: {
                    name_az: string,
                    name_en: string,
                    name_ru: string,
                    id: number
                },
                id: number
            },
        ],
        pageIndex: number,
        totalPages: number,
        totalCount: number,
        hasPreviousPage: false,
        hasNextPage: false
    }
}