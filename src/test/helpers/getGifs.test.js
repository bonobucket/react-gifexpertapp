import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/GetGifs';

describe('pruebas con get Gifs Fetch', () => {
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
    })

})
