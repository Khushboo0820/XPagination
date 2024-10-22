# XPagination <br> 
Employee Data Table - React Application with Pagination<br />
This React application displays employee data in a table and includes pagination functionality to navigate through the dataset.

<b>Features:</b><br />

1.Data Fetching:<br />
&nbsp;&nbsp;• Employee data is fetched from a remote API and displayed in a paginated table.<br />
&nbsp;&nbsp;• If data fetching fails, an alert is shown with an error message.<br />
    
2.Pagination:<br />
&nbsp;&nbsp;•The table is paginated with 10 rows displayed per page.<br />
&nbsp;&nbsp;•Users can navigate between pages using "Previous" and "Next" buttons.<br />
&nbsp;&nbsp;•The current page number is displayed between the pagination buttons.<br />

3.Dynamic Row Numbering:<br />
&nbsp;•Row numbers are displayed dynamically based on the current page, so the 
numbering continues across pages.<br />

<b>Code Overview:</b><br />

1.State Management:<br />
&nbsp;&nbsp;•data: Stores the fetched employee data.<br />
&nbsp;&nbsp;•currentPage: Tracks the current page number.<br />
&nbsp;&nbsp;•rowsPerPage: Defines the number of rows to show per page (10 in this case).<br />
&nbsp;&nbsp;•error: Stores any errors that occur during the API request.<br />

2.API Data Fetching:<br />
&nbsp;&nbsp;•Uses the fetch function inside a useEffect to load employee data from a remote URL.<br />
&nbsp;&nbsp;•An error handling mechanism is in place that alerts the user if the data fails to load.<br />

3.Pagination Logic:<br />
&nbsp;&nbsp;•currentData calculates which employees to display on the current page.<br />
&nbsp;&nbsp;•The total number of pages is calculated by dividing the total data length by rows per page.<br />
&nbsp;&nbsp;•The "Next" and "Previous" buttons adjust the current page while ensuring it stays within valid limits.<br />

4. Dynamic Table Row Numbering:<br />
&nbsp;•The first column displays the row number, which dynamically adjusts based on the current page.<br />

<b>Usage:</b><br />

1.Click "Next" to move to the next page of the employee list.<br />
2.Click "Previous" to move back to the previous page.<br />
3.The page number is displayed between the pagination buttons.<br />

<b>Installation:</b><br />
1.Clone the repository.<br />
2.Install dependencies using npm install.<br />
3.Start the application with npm start.<br />
4.The app will be served at http://localhost:3000.<br />
