// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('Pagination functionality', () => {
  test('should navigate to the previous page after moving to the next page', async () => {
    // Render the component
    render(<App />);

    // Mock the initial state
    const nextButton = screen.getByText('Next');
    const prevButton = screen.getByText('Previous');
    const pageNumber = screen.getByText('1'); // Assuming current page is 1

    // Ensure that 'Previous' button is disabled on first page
    expect(prevButton).toBeDisabled();

    // Click the 'Next' button to move to page 2
    fireEvent.click(nextButton);
    
    // Wait for the component to re-render
    expect(await screen.findByText('2')).toBeInTheDocument(); // Ensure the page has changed to 2
    expect(prevButton).not.toBeDisabled(); // 'Previous' button should now be enabled
    
    // Click the 'Previous' button to move back to page 1
    fireEvent.click(prevButton);

    // Ensure that the page is now 1 again
    expect(await screen.findByText('1')).toBeInTheDocument(); // Back to page 1
    expect(prevButton).toBeDisabled(); // 'Previous' button should be disabled again on first page
  });
});
