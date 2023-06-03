import { render, screen } from '@testing-library/react';
import PreviewPoster from './PreviewPoster';
import { moviesTest } from '../../../testAsserts/testItems';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            pathname: '',
        };
    },
}));

describe('PREVIEWPOSTER SNAPSHOTS TESTS', () => {
    test('PreviewPoster should not be changed', () => {
        render(<PreviewPoster movie={moviesTest[0]} className="previewItem" />);

        const link = screen.getByRole('link');
        expect(link).toMatchSnapshot();
    });
});
