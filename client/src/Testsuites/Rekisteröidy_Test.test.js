import * as React from 'react';
import {
    fireEvent,
    render as rtlRender,
    screen,
    within,
    waitFor
} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Rekisteröidy } from '../pages';

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)


describe("Testataan rekisteröitymissivu ", () => {

    

    test("Testataan rekisteröitymissivun renderöityminen", async () => {
        // Rekisteröitymissivu
        render(<Router><Rekisteröidy /></Router>);
        
        // Sivun komponentit
        const inputEtunimi = screen.getByPlaceholderText("Etunimi");
        const inputSukunimi = screen.getByPlaceholderText("Sukunimi");
        const inputNimimerkki = screen.getByPlaceholderText("Nimimerkki");
        const inputSähköposti = screen.getByPlaceholderText("Sähköposti");
        const inputSalasana = screen.getByPlaceholderText("Salasana");
        const RekisteröidyBtn = screen.getByRole("button");

        // Löytyvät sivulta
        expect(inputEtunimi).toBeInTheDocument();
        expect(inputSukunimi).toBeInTheDocument();
        expect(inputNimimerkki).toBeInTheDocument();
        expect(inputSähköposti).toBeInTheDocument();
        expect(inputSalasana).toBeInTheDocument();
        expect(RekisteröidyBtn).toBeInTheDocument();
    });

    test("Testataan rekisteröitymissivun tietojen täyttäminen", async () => {
        render(<Router><Rekisteröidy /></Router>);
        
        const inputEtunimi = screen.getByPlaceholderText("Etunimi");
        const inputSukunimi = screen.getByPlaceholderText("Sukunimi");
        const inputNimimerkki = screen.getByPlaceholderText("Nimimerkki");
        const inputSähköposti = screen.getByPlaceholderText("Sähköposti");
        const inputSalasana = screen.getByPlaceholderText("Salasana");
        const RekisteröidyBtn = screen.getByRole("button");

        // Syötetään arvot input - kenttiin

        fireEvent.change(inputEtunimi, {target: {value: "TestiEtunimi"}});
        fireEvent.change(inputSukunimi, {target: {value: "TestiSukunimi"}});
        fireEvent.change(inputNimimerkki, {target: {value: "TestiNimimerkki"}});
        fireEvent.change(inputSähköposti, {target: {value: "TestiSahkoposti"}});
        fireEvent.change(inputSalasana, {target: {value: "TestiSalasana"}});

        // Rekisteöidy nappi toimii
        
        fireEvent.click(RekisteröidyBtn);

        // Tulostetaan vielä arvot input kentistä, ottavat vastaan arvoja yllä

        console.log("Tulostetaan input - kenttien arvot alle: \n" , inputEtunimi.value , inputSukunimi.value , inputNimimerkki.value , inputSähköposti.value , inputSalasana.value);

    });



   
})