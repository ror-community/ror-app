# ror-app

![Deploy Master](https://github.com/ror-community/ror-app/workflows/Deploy%20Master/badge.svg)

Frontend application the provides the search UI on top of the [ROR API](https://github.com/ror-community/ror-api) used in https://ror.org/search .

# Local setup

## Prerequisites

You will need the following item properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)
- [ror-site](https://github.com/ror-community/ror-site) information site

## Installation

- `git clone <repository-url>` this repository
- `cd ror-app`
- `yarn install`

## Running / Development

- Start ror-site per instructions in https://github.com/ror-community/ror-site . ror-app shares core CSS with ror-site
- Create a file ```.env``` and add the following environment variables to it. Optionally, you can include LAUNCH_DARKLY_CLIENT_SIDE_ID if you are using Launch Darkly feature flags.
        API_URL=https://api.ror.org (optionally, use localhost:9292 to develop against ror-api running locally in Docker)
        BASE_URL=http://localhost:1313

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

# Development

- All development should be done locally in feature branches.
- When you have changes ready to push to dev, open a pull request against the dev branch.
- Do not push changes directly to dev or master.

# Deployment

Deployment is handled by [Github actions](https://github.com/ror-community/ror-app/actions)

- **Deploy Dev** action deploys to dev.ror.org on push/merge to dev branch
- **Deploy Master** action deploys to ror.org on push/merge to master branch

## Note

Core CSS hugo-ror.css is shared between ror-app and [ror-site](https://github.com/ror-community/ror-site) and is hosted on ror-site, https://ror.org. SCSS file is located at https://github.com/ror-community/ror-site/blob/master/themes/hugo-ror/assets/sass/partials/_hugo-ror.scss.

The BaseUrl environment variable is used to point to hugo-ror.css for the corresponding environment (dev, staging, prod) in the [head of index.html](https://github.com/ror-community/ror-app/blob/master/app/index.html#L21). See above for local dev instructions.

# Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
