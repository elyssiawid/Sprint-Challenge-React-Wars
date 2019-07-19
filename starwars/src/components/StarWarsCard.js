import React from "react";
import styled from "styled-components";

function StarWarsCard(props) {
  console.log(props);
  return (
    <Card>
      <h2>Name: {props.character.name}</h2>
      <div>Height: {props.character.height}</div>
      <div>Mass: {props.character.mass}</div>
      <div>Birth Year: {props.character.birth_year}</div>
      <div>Eye Color: {props.character.eye_color}</div>
    </Card>
  );
}

export default StarWarsCard;

const Card = styled.div`
  border-radius: 3px;
  border: 2px solid gray;
  color: darkblue;
  margin-bottom: 20px;
  padding: 20px;
`;
