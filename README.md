# Tools Hub

A small static website designed for GitHub Pages.

## Pages

- `/` — Home page
- `/scripts/` — Scripts and utilities
- `/scripts/discord-timestamp/` — Discord timestamp generator

## Before publishing

Search the project for:

`https://YOUR-MINECRAFT-SITE-HERE.example`

and replace it with the URL of your existing Minecraft website.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/ (root)`.
6. Add your custom domain in the GitHub Pages settings if desired.

## Custom domain

If this new site will use the root domain, create a `CNAME` file in the repository root containing only the domain name, for example:

`example.com`

Then configure the DNS records required by GitHub Pages at your DNS provider.

## Adding more scripts

deploy refresh

Create another folder under `/scripts/`, for example:

`/scripts/my-new-tool/index.html`

Then add another card to `/scripts/index.html`.
