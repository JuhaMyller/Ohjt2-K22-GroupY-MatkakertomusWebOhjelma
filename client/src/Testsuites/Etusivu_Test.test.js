import * as React from 'react';
import { Etusivu } from '../pages';
import {
    fireEvent,
    render,
    screen,
    within,
    waitFor
} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import { bg } from '../assets/pagehero1.png'

describe("Testataan etusivu ", () => {
    test("Renderöidään etusivu ja testataan, että taustakuva ja teksti löytyy", async () => {
        // Etusivu renderöityy
        render(<Etusivu />)
        // Sivun teksti löytyy
        expect(screen.getByText("Katso parhaat matkakohteet ja tarinat")).toBeInTheDocument();
        // Taustakuva renderöityy oikein
        const background = screen.getByTestId("bg");
        // Kuva täysikokoinen ja peittää kokonaan ruudun
        expect(background).toHaveStyle("width: 100vw; background-size: cover; height: calc(100vh - 70px);");
    })
});