import React from 'react'
import { render, screen, fireEvent } from '../utils/index.jsx'
import { act } from 'react-test-renderer'
import AddMovie from '../components/AddMovie/AddMovie.jsx'

describe('TEST <AddMovie /> component', () => {

    it('render correctly', () => {
        
        act(() => {
            render(<AddMovie/>)
        })

        fireEvent.click(screen.getByRole('button', {name: /submit/i}))

        expect(screen.getByTestId('submit')).toBeTruthy()

    })

})