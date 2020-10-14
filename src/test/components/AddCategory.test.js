import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Prueba en el componente add Category', () => {
    const setCategories=jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('Debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar la caja de text', () => {
        const input= wrapper.find('input');
        const value='Hola mundo'
        //input.simulate('change', {target:{value:value}});
       //expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('No debe de postear la informacion con submite', () => {
       // wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar al set category y limpiar a caja de texto', () => {
            // simular el input change
            // simular el submit
            // se debe haber llamado el set categories
            // el valor del input debe ser vacio ''
            const input= wrapper.find('input')
            input.simulate('change', {target:{value:'Esta cambiando el input'}});

            const form= wrapper.find('form');
            form.simulate('submit', {preventDefault(){}})
            expect(setCategories).toHaveBeenCalled();
            expect(setCategories).toHaveBeenCalledTimes(1);
            expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
            expect(input.prop('value')).toBe('')
    })
    
    
    

})
