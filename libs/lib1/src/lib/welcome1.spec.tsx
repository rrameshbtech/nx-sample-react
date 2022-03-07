import { render } from '@testing-library/react';

import Welcome1 from './welcome1';

describe('Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Welcome1 />);
    expect(baseElement).toBeTruthy();
  });
});
