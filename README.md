# Cypress Technical Assessment

Welcome to the Cypress technical assessment repository. This repository contains my submission for the assessment. Below, you'll find instructions on how to set up and run the Cypress tests.

## Prerequisites

Before you begin, ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/) installed on your computer.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.
- A modern web browser like Chrome.

## Getting Started

Follow these steps to get started with the assessment:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cypress-technical-assessment.git
   ```
2. Change to the project directory
    ``` bash
    cd cypress-technical-assessment
    ```

3. Install project dependencies
    ```bash
    npm install
    ```
## Running the Tests
To execute the Cypress tests, follow these steps:

-  Open the Cypress Test Runner with the following command:
    ```bash
     npm run cy:open
    ```
- In the Cypress Test Runner window, select the "e2e" test suite.

- A new window will open, displaying a list of browsers available on your machine. Click on the browser you want to use for the tests.

- Choose the specific spec file you want to run.

- A new browser window will open, and Cypress will automatically run the selected test(s) in real-time.

- You can watch the test execution and results in the Cypress Test Runner interface.

This interactive mode allows you to select and run tests, view their progress, and see the results in real-time. It's a powerful way to develop and debug your Cypress tests.

----

If you prefer to run the tests headless (i.e., without the GUI), you can use the following command instead:

```bash
npm run cy:run
```
**Note**: To use headless on non-Windows OS with browsers other than Chrome, customize the user agent in the `cypress.config.js` configuration using your specific user agent string obtained from a website like [useragents.me](https://www.useragents.me/).


## Generate HTML Report
To execute the Cypress tests and generate an HTML report, follow these steps:

1. Before generating the HTML report, ensure that you've executed at least one Cypress test to collect test results.


2.  Run the following command to generate the HTML report:
    ```bash
    npm run cy:generate-html-report
    ```


3. After the report generation is complete, you can find the report in the reports/cucumber-htmlreport.html. [here](./reports/cucumber-htmlreport.html)
4. Open the generated HTML report in a web browser.

## Continuous Integration with GitHub Actions

We have set up Continuous Integration (CI) using GitHub Actions to ensure that our Cypress tests are automatically executed for every push to this repository. Here's how it works:

1. **Test Execution**: Whenever you push changes to this repository, GitHub Actions will automatically trigger our Cypress tests. These tests will run in a controlled environment to validate our application's functionality.

2. **HTML Report Generation**: After the tests are completed, a detailed HTML report is generated, summarizing the test results, including passed and failed scenarios.

3. **Artifact Storage**: The HTML report is then uploaded to our artifact storage on GitHub, making it accessible for review.

### Accessing the Test Report

To access the Cypress test report:

1. After pushing your changes, wait for the GitHub Actions workflow to complete. You can monitor the progress in the "Actions" tab of this repository.

2. Once the workflow is finished, you can find the HTML report as an artifact.

3. Click on the "Artifacts" tab in the workflow run details.

4. Download the HTML report file to your local machine.

5. Open the downloaded HTML file in your browser to view the test results

## Additional Notes

- **[Test Summery Reports](./Test-Summery-Report.md)**
- Eslint has been configured for the repository ✔️
- ⚠️**Important**⚠️: During the assessment, it was identified that one of the provided scenarios had been written for [emirati website](https://www.propertyfinder.ae/), while the associated link was intended for bahrain. To ensure alignment with the assessment requirements, the scenario's requirement was modified to match the [bahraini version](https://www.propertyfinder.bh/).

