import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Pruebas sobre el custom hook', () => {
    test('Debe retornar el estado inicial',async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch'))
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([])
        expect(loading).toBe(true)
        //const { data, loading } = useFetchGifs('One punch');
    })

    test('Debe de retornar un arreglo de img y el loading en false',async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch'))
        await waitForNextUpdate();
        const { data, loading } = result.current;
      

        expect(data.length).toEqual(10)
        expect(loading).toBe(false)
    })
    

})
