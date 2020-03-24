import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Login from './Login';
import App from '../App';

test('renders Login without crashing', () => {
    render(<App><Login /></App>);
})

test('correct login correctly authenticates', async () => {
    const { getByText, getByLabelText, queryByText } = render(<App><Login /></App>)
    const username = getByLabelText(/username/i);
    const password = getByLabelText(/password/i);
    const submit = getByText(/login/i);
    fireEvent.change(username, { target: { value: 'Lambda School'}});
    fireEvent.change(password, { target: { value: 'i<3Lambd4'}});
    fireEvent.click(submit);
    await wait(() => {
        expect(queryByText(/incorrect/i)).toBeNull();
    })
})

test('incorrect login correctly displays error', async () => {
    const { getByText, getByLabelText, queryByText } = render(<App><Login /></App>)
    const username = getByLabelText(/username/i);
    const password = getByLabelText(/password/i);
    const submit = getByText(/login/i);
    fireEvent.change(username, { target: { value: 'incorrect login'}});
    fireEvent.change(password, { target: { value: 'incorrect password'}});
    fireEvent.click(submit);
    await wait(() => {
        expect(queryByText(/incorrect/i)).toBeTruthy();
    })
})