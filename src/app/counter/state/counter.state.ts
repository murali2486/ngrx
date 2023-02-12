export interface counterState{
    counter: number;
    title: string;
}
export const initialState: counterState = {
    counter: 0,
    title: 'ngrx learning'
};