This is a very basic single-page, static site generator for SharePoint landing page.

# Architecture

- Server/Host/CDN: [Netlify](https://netlify.com)
- CMS: [Contentful](https://contentful.com)
- Generator (this repo): [Gulp](https://gulpjs.com) + [Mustache](https://mustache.github.io/)

# Running Locally

1. Make sure you have the prerequisites: [Node](https://nodejs.org), [Gulp](https://gulpjs.com), [Git](https://git-scm.com/)

2. Clone this repo.

```
$ git clone https://github.com/WycliffeAssociates/sharepoint-landing.git
-- or --
$ git clone git@github.com:WycliffeAssociates/sharepoint-landing.git
```

3. Install the dependencies.

```
$ npm i
```

4. Make changes to the files in `src` directory.
5. Build locally.

```
$ gulp
```

# Deployment

These following will automatically trigger a deployment:

- Pushing changes to `master` branch on Github
- Publish and unpublishing content on Contentful
- Starting a manual deployment from Netlify
