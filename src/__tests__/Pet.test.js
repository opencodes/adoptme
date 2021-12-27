import { expect, test, describe } from '@jest/globals';
import { render } from '@testing-library/react'
import { StaticRouter } from "react-router-dom";

import Pet from '../Pet';


describe('Pet Component Test Case', () => {
    test('display a default thumbnail', async () => {
        const pet = render(<StaticRouter><Pet /></StaticRouter>);
        const petThumbnail = await pet.findByTestId('thumbnail');
        expect(petThumbnail.src).toContain('none.jpg')
    })

    test('display a default thumbnail', async () => {
        const pet = render(<StaticRouter><Pet images={['1.jpg', '2.jpg']} /></StaticRouter>);
        const petThumbnail = await pet.findByTestId('thumbnail');
        expect(petThumbnail.src).toContain('1.jpg')
    })
})


