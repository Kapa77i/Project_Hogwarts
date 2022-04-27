
import { render, screen } from '@testing-library/react';

import Asiakkaat from './Asiakkaat';

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue([{ id: 1, name: "Jessamyn", address: "7 Bayside Pass", phonenumber: "705-759-1117" }, 
        {id: 2, name: "Lesya", address: "549 Forest Dale Crossing", phonenumber: "705-759-1117" }])
    })
})

afterEach(() => {
    jest.restoreAllMocks();
})

describe("Testit datalle", () => {
    test("Haetaan REST-APIsta tiedot ja tarkistetaan, että ne näkyvät oikein", async ()=>{
        render(<Asiakkaat />);

        const items = await screen.findAllByTestId('trAsiakasID');
        expect(items).toHaveLength(2);
    })
})