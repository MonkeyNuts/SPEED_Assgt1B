import { render, screen, cleanup, getByAltText, fireEvent, getByPlaceholderText } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../../App";

afterEach(cleanup);

test("Moderator Nav Display", () => {
    const { getByTestId, getByText } = render (<App />);
    
    fireEvent.change(getByTestId('user-state'), {
        target: {
            value: 'moderator'
        }
    })

    expect(getByText('Moderator Article Queue')).toBeInTheDocument();
});

test("Analyst Nav Display", () => {
    const { getByTestId, getByText } = render (<App />);
    
    fireEvent.change(getByTestId('user-state'), {
        target: {
            value: 'analyst'
        }
    })

    expect(getByText('Analyst Article Queue')).toBeInTheDocument();
})