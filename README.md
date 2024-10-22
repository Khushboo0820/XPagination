# XPagination
Employee Data Table - React Application with Pagination
This React application displays employee data in a table and includes pagination functionality to navigate through the dataset.

Features:
1.Data Fetching:
    • Employee data is fetched from a remote API and displayed in a paginated table.
    • If data fetching fails, an alert is shown with an error message.
    
2.Pagination:
    •The table is paginated with 10 rows displayed per page.
    •Users can navigate between pages using "Previous" and "Next" buttons.
    •The current page number is displayed between the pagination buttons.

3.Dynamic Row Numbering:
   •Row numbers are displayed dynamically based on the current page, so the 
numbering continues across pages.

Code Overview:

1.State Management:
   •data: Stores the fetched employee data.
   •currentPage: Tracks the current page number.
   •rowsPerPage: Defines the number of rows to show per page (10 in this case).
   •error: Stores any errors that occur during the API request.

2.API Data Fetching:
   •Uses the fetch function inside a useEffect to load employee data from a remote URL.
   •An error handling mechanism is in place that alerts the user if the data fails to load.

3.Pagination Logic:
   •currentData calculates which employees to display on the current page.
   •The total number of pages is calculated by dividing the total data length by rows per page.
   •The "Next" and "Previous" buttons adjust the current page while ensuring it stays within valid limits.

4. Dynamic Table Row Numbering:
   •The first column displays the row number, which dynamically adjusts based on the current page.

Usage:
1.Click "Next" to move to the next page of the employee list.
2.Click "Previous" to move back to the previous page.
3.The page number is displayed between the pagination buttons.

Installation:
1.Clone the repository.
2.Install dependencies using npm install.
3.Start the application with npm start.
4.The app will be served at http://localhost:3000.
