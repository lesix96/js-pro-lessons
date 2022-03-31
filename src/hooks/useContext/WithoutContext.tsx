import React, { Component } from 'react';

interface ILevelProps {
    title: string;
}

interface IWithoutContextProps {}

interface IWithoutContextState {}

// props drilling
const LevelThree = ({ title }: ILevelProps) => <h1>{title}</h1> /*3-ий уровень вложенности*/
const LevelTwo = ({ title }: ILevelProps) => <LevelThree title={title} /> /*2-ый уровень вложенности*/
const LevelOne = ({ title }: ILevelProps) => <LevelTwo title={title} /> /*1-ый уровень вложенности*/

export class WithoutContext extends Component<IWithoutContextProps, IWithoutContextState> {
  render() {
    return (
      <LevelOne title="simple title" /> /*1-ый уровень вложенности*/
    );
  }
}

