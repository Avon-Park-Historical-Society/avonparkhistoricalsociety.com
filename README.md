# Avon Park Historical Society Website

This repository contains the source code for the Avon Park Historical Society website.

## Tech Stack Overview

- **Static Site Generator:** [Jekyll](https://jekyllrb.com/)
- **Content Management System (CMS):** [Sveltia CMS](https://sveltiacms.dev/) (a drop-in replacement for Decap/Netlify CMS)
- **Hosting / Deployment:** [GitHub Pages](https://pages.github.com/)
- **Authentication:** [Cloudflare Workers](https://workers.cloudflare.com/) (running the Sveltia CMS Authenticator for secure GitHub OAuth)

## Project Structure

- `_config.yml` - Main Jekyll configuration file. Defines site settings and data collections.
- `admin/` - Contains the CMS application (`index.html`) and configuration (`config.yml`).
- `_articles`, `_events`, `_photos`, `_podcasts`, `_quizzes` - Markdown collections for the CMS content.
- `assets/photos/` - The Media Library folder where CMS uploads images.

## Managing the CMS

### Adding New Users to the CMS

Because Sveltia CMS uses the GitHub repository as its backend, there is no separate "CMS User Database".
To grant someone access to the CMS so they can edit the website:

1. Ensure the new user has a free [GitHub account](https://github.com/).
2. Go to this repository on GitHub (`Avon-Park-Historical-Society/avonparkhistoricalsociety.com`).
3. Navigate to **Settings -> Collaborators**.
4. Click **Add People** and invite their GitHub username. Give them **Write** access.
5. Once they accept the email invitation, they can go to `https://avonparkhistoricalsociety.com/admin/` and log in via GitHub.

### Making Changes to CMS Configuration

The CMS fields and collections are defined in `admin/config.yml`. If you want to add new fields to a collection (e.g., adding an 'Author' field to Articles) or create a brand new collection, you edit this file according to the [Sveltia CMS Configuration documentation](https://decapcms.org/docs/configuration-options/) (which shares the same schema as Decap CMS).

## Local Development

If a developer needs to run the website and CMS locally to make code changes:

1. **Prerequisites:** Ensure you have Ruby and Bundler installed.
2. **Install Dependencies:** Run `bundle install` in the terminal.
3. **Run the Site:** Run `bundle exec jekyll serve` or `jekyll serve`.
4. **Local CMS Testing:** In `admin/config.yml`, uncomment `local_backend: true`. In a separate terminal run `npx decap-server`. You can then access the CMS locally at `http://localhost:4000/admin/`. Remember to re-comment `local_backend: true` before pushing to GitHub!

## Deployment (GitHub Pages)

The site is entirely hosted on GitHub Pages. Any changes pushed or committed to the `main` branch (either directly or via the CMS) will automatically trigger a GitHub Action to rebuild and redeploy the site. You do not need to manually trigger deployments.

## Authentication Stack (Cloudflare Worker)

To securely allow the CMS to talk to GitHub from a static site, a small OAuth proxy server is required. This is hosted on Cloudflare Workers.

- **Worker URL:** `https://sveltia-cms-auth.michael-joseph-miller.workers.dev`
- **GitHub OAuth App:** Configured in Michael Joseph Miller's GitHub Developer Settings.
- **Handover Instructions:** If the authentication proxy ever needs to be transferred to a new owner, the new owner must deploy the [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) to their own Cloudflare account. They then must create a new GitHub OAuth App, add the resulting Client ID and Secret to their Cloudflare Worker, and finally update `admin/config.yml` with their new Worker URL.
