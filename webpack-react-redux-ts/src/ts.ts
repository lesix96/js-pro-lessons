export enum Seasons {
    winter = "Winter",
    summer = "Summer",
    autumn = "Autumn",
    spring = "Spring"
}

export interface IProps {
    title: string;
    counter: number;
}

const add = (a: number, b: number) => a + b;

console.log(add(1, 2));
