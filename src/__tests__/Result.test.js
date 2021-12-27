import { expect, test, describe } from '@jest/globals';
import { create } from 'react-test-renderer'
import { StaticRouter } from "react-router-dom";

import Results from '../Results'
const pets = [{
    id: 1,
    name: "Luna",
    animal: "dog",
    city: "Seattle",
    state: "WA",
    description:
        "Luna is actually the most adorable dog in the world. Her hobbies include yelling at squirrels, aggressively napping on her owners' laps, and asking to be fed two hours before IT'S DAMN WELL TIME LUNA. Luna is beloved by her puppy parents and lazily resides currently in Seattle, Washington.",
    breed: "Havanese",
    images: [
        "http://pets-images.dev-apis.com/pets/dog25.jpg",
        "http://pets-images.dev-apis.com/pets/dog26.jpg",
        "http://pets-images.dev-apis.com/pets/dog27.jpg",
        "http://pets-images.dev-apis.com/pets/dog28.jpg",
        "http://pets-images.dev-apis.com/pets/dog29.jpg",
    ],
},]
describe('Results', () => {
    test('should render with no pets', () => {
        const tree = create(<Results pets={[]} />).toJSON();
        expect(tree).toMatchSnapshot()
    })
    test('should render with no pets', () => {
        const tree = create(<StaticRouter><Results pets={pets} /></StaticRouter>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})
