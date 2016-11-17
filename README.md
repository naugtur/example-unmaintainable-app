# example-unmaintainable-app

An app for teaching maintainability. Badly written on purpose.

I even went in and broke code formatting and conventions to trigger lint...

## Backend TODO
in no particular order

### Configurations
- install eslint and add linting to test
- check code coverage

### Fixing, refactoring
- cover with tests for safe refactoring
- add error handling
- make app more testable

### Maintenance tasks
- remove code duplication
- split code into more modules
- add logging to understand app state better

## Frontend TODO
in no particular order

### Configurations
- set up eslint for frontend separately (will require separate config)
- check code coverage

### Fixing, refactoring
- add redux to organize the app (use redux-promise-middleware to easily create async actions with fetch)
- keep components simple or consistent - either use `React.Component` base class everywhere OR go with functional style and only create components when you need to handle `mount` etc.
- cover components and reducers with tests
- use BEM for styling
- and now fix folder structure to be divided by features, not types of files (no, actions,reducers,components is not a good project structure)
- and now fix component tests to really check if components work, not if they didn't change a single character (tests should still pass when classes or tooltips or paragraphs with instructions are added)
- add error handling

### Maintenance tasks
- add css preprocessor and build css with webpack from separate files imported in their modules OR use some other configuration for per-module css
- make it work in older browsers (IE10+, IE9 if you're overly ambicious and want to work for a bank or a corporation in near future)
- (if you have more time) add router
