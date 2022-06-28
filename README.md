# ror-app

![Deploy Master](https://github.com/ror-community/ror-app/workflows/Deploy%20Master/badge.svg)

Frontend application the provides the search UI on top of the [ROR API](https://github.com/ror-community/ror-api) used in https://ror.org/search .

# Dev setup

## Prerequisites

You will need the following item properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd ror-app`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

# Deployment

Deployment is handled by [Github actions](https://github.com/ror-community/ror-app/actions)

- **Deploy Dev** action deploys to dev.ror.org on push/merge to dev branch
- **Deploy Master** action deploys to ror.org on push/merge to master branch

## Note

Styling for the app is handled externally, in the primary site at https://ror.org. The `<head>` tag in `app/index.html` contains the link to the relevant CSS. Note that the dev branch is pointed at https://_dev_.ror.org instead.

# Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
