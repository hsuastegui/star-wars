import React from 'react'
import { Container, Card, Row, Anchor } from "../styles";

type props = {
    stack: stack
};

function History({ stack }: props) {
    return (
        <Container>
            <Anchor to="/">Play</Anchor>
            {stack.map((item) => {
                return (<Row>
                    <Card winner={item[0].value > item[1].value}>
                        <span>{item[0].name}</span>
                        <span>{item[0].value}</span>
                    </Card>
                    <Card winner={item[1].value > item[0].value}>
                        <span>{item[1].name}</span>
                        <span>{item[1].value}</span>
                    </Card>
                </Row>)
            })}
        </Container>
    )
}


export default History

