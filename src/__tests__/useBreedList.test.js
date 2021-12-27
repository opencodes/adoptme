import { expect, test, describe } from '@jest/globals';
import { renderHook } from '@testing-library/react-hooks'

import useBreedList from '../useBreedList'


// function getBreedList (animal) {
//     let list;
//     function TestComponent (params) {
//         list = useBreedList(animal)
//         return null
//     }
//     render(<TestComponent />)
//     return list;
// }

describe('useBreedList', () => {
    test('should ', () => {
        const { result } = renderHook(() => useBreedList(""))
        const [breedList, status] = result.current
        expect(breedList).toHaveLength(0)
        expect(status).toBe('unloaded')
    })
    test('should ', async () => {

        const breeds = [
            "Havanese",
            "Bichon Frise",
            "Poodle",
            "Maltese",
            "Golden Retriever",
            "Labrador",
            "Husky",
        ];
        fetch.mockResponseOnce(
            JSON.stringify({
                animal: "dog",
                breeds,
            })
        );
        const { result, waitForNextUpdate } = renderHook(() => useBreedList("dog"))

        await waitForNextUpdate()

        const [breedList, status] = result.current

        expect(breedList).toEqual(breeds)
        expect(status).toBe('loaded')
    })
    test('should ', () => {
        const localCache = [
            "Havanese",
            "Bichon Frise",
            "Poodle",
            "Maltese",
            "Golden Retriever",
            "Labrador",
            "Husky",
        ]
        const { result } = renderHook(() => useBreedList("dog"))
        const [breedList, status] = result.current
        expect(breedList).toHaveLength(localCache.length)
        expect(status).toBe('unloaded')
    })
})
