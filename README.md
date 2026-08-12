# Tools Hub

A personal static website hosted on GitHub Pages for scripts, utilities, saved links, and project shortcuts.

## Pages

- `/` — Home page
- `/scripts/` — Scripts and utilities
- `/scripts/discord-timestamp/` — Discord timestamp generator
- `/links/` — Public saved links page
- `/admin/` — Admin login
- `/admin/dashboard/` — Admin dashboard for managing links
- `https://herd.amirdmgazzali.com/` — Minecraft server website

## Shared navigation

The top navigation is controlled from:

`/assets/nav.js`

Pages load the shared navigation and specify which page should be highlighted.

For example:

```html
<nav id="mainNav"></nav>

<script src="/assets/nav.js"></script>

<script>
  renderNav("Home");
</script>
