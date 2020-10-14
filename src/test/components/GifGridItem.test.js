import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en gif grid item', () => {

    const title = "test prueba gif grid item";
    const url = "https://localchost:4200";
    const wrapper = shallow(<GifGridItem {...{ title: title, url: url }} />);

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img= wrapper.find('img');
       // console.log(img.props())
       expect(img.prop('src')).toBe(url)
       expect(img.prop('alt')).toBe(title);
    })

    test('Debe tener la clase animate__fadeIn', () => {
        const cssClass= 'animate__fadeIn'
        const div= wrapper.find('div');
        const className= div.prop('className');
        expect(className.includes(cssClass)).toBe(true)
       // expect(div.hasClass('animate__fadeIn')).toBe(cssClass)
    })
    
    

})
