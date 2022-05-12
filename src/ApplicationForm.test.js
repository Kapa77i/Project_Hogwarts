import { render, screen } from '@testing-library/react';
import ApplicationForm from './ApplicationForm';

describe("Testit datalle", () => {
    test("Haetaan REST-APIsta tiedot ja tarkistetaan, että ne näkyvät oikein", async ()=>{
        render(<ApplicationForm />);

        const items = await screen.findAllByTestId('trAsiakasID');
        expect(items).toHaveLength(2);
    })
})