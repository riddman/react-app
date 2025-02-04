export type categoryType = {
    id: number;
    name: string;
};

export type expenceType = {
    id?: number,
    description: string,
    amount: number,
    categoryId: number
};
