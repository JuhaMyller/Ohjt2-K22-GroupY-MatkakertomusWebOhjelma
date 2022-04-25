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
import Navbar1 from '../components/NavBar/DesktopNav';
import Navbar from '../components/NavBar/Navbar';

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)


describe("Testataan Navbarin perustoiminta ja renderöityminen ", () => {

    test("Testataan navbarin renderöityminen ja linkit", async () => {
        // Navbar
        render(<Router><Navbar1 /></Router>);
        
      // Linkit
      const etusivuLinkki = screen.getByText("Etusivu");
      const matkakohteetLinkki = screen.getByText("Matkakohteet");
      
      // On renderöitynyt oikein

      expect(etusivuLinkki).toBeInTheDocument();
      expect(matkakohteetLinkki).toBeInTheDocument();

      // Linkkien painaminen onnistuu

      fireEvent.click(etusivuLinkki);
      fireEvent.click(matkakohteetLinkki);
    });

    test("Navbar on oikean tyylinen ja kuva löytyy", async () => {
        // Navbar
        render(<Router><Navbar /></Router>);

        const navbarLogo = screen.getByTestId("navlogo");
        // Kuva on oikea logo
        expect(navbarLogo.src).toBe('http://localhost/navlogo.png');
        
        // Navbarin tyylit oikeat
        // Käytetty taustaväri punainen #fa7171q
        // Navbarin korkeus staattinen 70px - Leveys 100%

        const navContainer = screen.getByTestId("NavContainer");

        expect(navContainer).toBeInTheDocument();
        expect(navContainer).toHaveStyle('background: #fa7171');
        expect(navContainer).toHaveStyle('height: 70px');
        expect(navContainer).toHaveStyle('width: 100%');
        
    })

   
})