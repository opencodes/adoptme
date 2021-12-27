import { expect, test, describe } from '@jest/globals';
import { render } from '@testing-library/react'

import Carousel from '../Carousel'

describe('Carousel Tests', () => {
    const images = ['1.jpg', '2.jpg', '3.jpg'];

    test('should render first image as hero', async () => {
        const container = render(<Carousel images={images} />);
        const thumb = await container.findByTestId('hero');
        expect(thumb.src).toContain(images[0])
    })

    test('should render 2nd image after click on 2nd thumbnail', async () => {
        const container = render(<Carousel images={images} />);
        const hero = await container.findByTestId('hero');

        for (let i = 0; i < images.length; i++) {
            const thumb = await container.findByTestId('thumbnail' + i);
            thumb.click()
            expect(hero.src).toContain(images[i])
        }
    })

})
