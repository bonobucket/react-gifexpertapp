import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el gifGrid ', () => {

    test('Debe hacer match con el snapshot ', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={'Goku'} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'sdfdsf97fs7f',
            title: 'Goku',
            url: 'https://localhost/cualquiera.jpg'
        },
        {
            id: 'ABC',
            title: 'Goku',
            url: 'https://localhost/cualquiera.jpg'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={'Goku'} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })




})
