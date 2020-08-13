import React from 'react'
import { Container, Button, Card, Row, Anchor } from "../styles";
import { getRandomCard } from "../utils";

type props = {
    people: person[];
    starships: starship[];
    setStack: any;
    stack: stack;
};

function Play({ people, starships, setStack, stack }: props) {
    const handlePeople = () => {
        const card1 = getRandomCard(people);
        const card2 = getRandomCard(people);
        setStack([[{ name: card1.name, value: card1.height }, { name: card2.name, value: card2.height }], ...stack,])
    };

    const handleStarships = () => {
        const card1 = getRandomCard(starships);
        const card2 = getRandomCard(starships);
        setStack([[{ name: card1.name, value: card1.hyperdriveRating }, { name: card2.name, value: card2.hyperdriveRating }], ...stack,])

    };

    return (
        <Container>
            <Anchor to="/history">History</Anchor>
            <Row>
                <Button onClick={handlePeople}>People</Button>
                <Button onClick={handleStarships}>Starships</Button>
            </Row>
            {stack.length > 0 && (<Row>
                <Card winner={stack[0][0].value > stack[0][1].value}>
                    <span>{stack[0][0].name}</span>
                    <span>{stack[0][0].value}</span>
                </Card>
                <Card winner={stack[0][1].value > stack[0][0].value}>
                    <span>{stack[0][1].name}</span>
                    <span>{stack[0][1].value}</span>
                </Card>
            </Row>)}
        </Container>
    )
}

export default Play
