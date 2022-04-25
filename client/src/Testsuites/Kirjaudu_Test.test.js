import * as React from 'react';
import Kirjaudu from '../pages/Kirjaudu';
import App from '../App'
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
import authReducer from '../Redux/Reducers/authReducer'

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

describe("Testataan kirjautumissivu ", () => {

    test("Testataan kirjautumisivun renderöityminen", async () => {

        // Kirjautumissivu
        render(<Router><Kirjaudu /></Router>);

        // Inputit ja nappi sivulta
        const inputSähköposti = screen.getByPlaceholderText("Sähköposti");
        const inputSalasana = screen.getByPlaceholderText("Salasana");
        const KirjauduBtn = screen.getByRole("button");

        // Tarkistetaan, että inputit ja nappi ovat renderöityneet oikein
        expect(inputSähköposti).toBeInTheDocument();
        expect(inputSalasana).toBeInTheDocument();
        expect(KirjauduBtn).toBeInTheDocument();

        // Nappi toimii
        fireEvent.click(KirjauduBtn);
    });

    test("Kirjautuminen onnistuu", async () => {
        const mockfn = jest.fn();
        // Kirjautumissivu
        render(<Router><Kirjaudu onSubmit={mockfn} /></Router>);

        const inputSähköposti = screen.getByPlaceholderText("Sähköposti");
        const inputSalasana = screen.getByPlaceholderText("Salasana");
        const KirjauduBtn = screen.getByRole("button");

        fireEvent.change(inputSähköposti, { target: { value: "TestiSahkoposti" } });
        fireEvent.change(inputSalasana, { target: { value: "TestiSalasana" } });
        fireEvent.click(KirjauduBtn);

        // Voidaan todeta, että inputit ja klikki toimii - Tulostetaan alle vielä input kenttien arvot

        console.log("Tulostetaan input - kenttien arvot alle: \n", inputSähköposti.value, inputSalasana.value);
    })
})