import React from 'react';
import {Card, Col, Row, Icon,Input, Button } from 'react-materialize';

/**
 * barcodeform component
 *
 *
 *  Reference: composee de deux inputs, premier 6 chiffres et deuxieme 3lettres majuscules
 *  Nombre d'etiquettes: On doit pouvoir choisir le nombre d'etiquettes a imprimer, par defaut setter a 4 ce qui lqncerq quatres impressions identiques.
 *  Ce nombre doit pouvoir etre modifie. drop down de 1 a 10 pqr exemple.
 *  https://facebook.github.io/react/docs/forms.html
*/

class BarCodeForm extends React.Component {
    constructor(props) {
        super(props);
        this.prenomState = {value: ''};
        this.nomState = {value: ''};
        this.dateNaissanceState = {value: ''};
        this.nbEtiquettesState = {value: '4'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.prenomState.value);
        event.preventDefault();
    }



    render() {
        return(

                <section>

                    <form onSubmit={this.handleSubmit}>
                        <Row>
                            <label>
                                Prenom:
                                <input type="text" value={this.prenomState.value} onChange={this.handleChange} />
                            </label>
                        </Row>

                        <Row>
                        <label>
                                Nom:
                                <input type="text" value={this.nomState.value} onChange={this.handleChange} />
                            </label>
                        </Row>

                        <Row>
                            <label>
                                Date de naissance:
                                <input type="text" value={this.dateNaissanceState.value} onChange={this.handleChange}  />
                            </label>
                        </Row>

                        <Row>
                            <label>
                                Reference:
                                <input type="text" value="123456"  onChange={this.handleChange}/>
                                <input type="text" value="XXX" onChange={this.handleChange} />
                            </label>
                        </Row>

                        <Row>
                            <label>
                                Nombre d'étiquettes:
                                    <select value={this.nbEtiquettesState.value} onChange={this.handleChange} >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                            </label>

                        </Row>

                        <Row>
                            <input type="submit" value="Imprimer" />
                        </Row>
                    </form>


                </section>

        );
    }
};

export default BarCodeForm;