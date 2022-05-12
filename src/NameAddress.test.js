import { render, screen } from '@testing-library/react';

import NameAddress from './NameAddress';

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue([{ id: 1, name: "Harry Potter", address: "Likusteritie 4, komero portaiden alla"}, 
        {id: 5, name: "Draco Malfoy", address: "Malfoy Road"}])
    })
})

afterEach(() => {
    jest.restoreAllMocks();
})

describe("Testit datalle", () => {
    test("Haetaan REST-APIsta tiedot ja tarkistetaan, että ne näkyvät oikein", async ()=>{
        render(<NameAddress />);

        expect(screen.getByText("Harry")).toBeInTheDocument();
        const items = await screen.findAllByTestId('trWizardID');
        expect(items[0].innerHTML).toBe("Hermoonini Granger");
        expect(items[1].innerHTML).toBe("Harry Potter");
    })
})