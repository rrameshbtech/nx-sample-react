import { render } from '@testing-library/react';

import Welcome2 from './welcome2';

describe('Welcome2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Welcome2 />);
    expect(baseElement).toBeTruthy();
  });
});
