import React from 'react';
import {Card, Col, Row, Icon,Input, Button } from 'react-materialize';

/**
 * barcodeform component
 */
let BarCodeForm = React.createClass({
    getInitialState: function(){
        return {
            salut:"salut"
        }
    },
    render() {
        return(
            <Col s={12} m={6} l={4}>
                <Card>
                    <Row className={"text-blue"} >
                        <Input className={"text-blue"} s={12} label="Prenom" validate><Icon>account_circle</Icon></Input>
                        <Input className={"text-blue"} s={12} label="Nom" validate><Icon>account_circle</Icon></Input>
                        <Input className={"text-blue"} s={12} label="Date de Naissance" validate type='tel'><Icon>date</Icon></Input>
                        <Input className={"text-blue"} s={12} label="Reference" validate type='email'><Icon>barcode</Icon></Input>
                        <Button className={"text-blue"} type='submit'>Imprimer</Button>

                    </Row>
                </Card>
            </Col>
        );
    }
});

export default BarCodeForm;