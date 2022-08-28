import React from 'react'; 
import { render, cleanup } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'; 
import About from '..'; 


afterEach(cleanup); 

describe('About component', () => {
    // First Test, baseline to verify the component renders
    // string declares what is being tested, callback function runs the test 
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        // matcher
        expect(asFragment()).toMatchSnapshot(); 
    })
})