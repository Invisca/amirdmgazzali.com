const navItems = [
  { label: "Home", href: "/" },
  { label: "Scripts", href: "/scripts/" },
  { label: "Links", href: "/links/" },
  {
    label: "Minecraft",
    href: "https://herd.amirdmgazzali.com/",
    external: true
  },
  { label: "Admin", href: "/admin/" }
];

function renderNav(activePage) {
  const nav = document.getElementById("mainNav");

  nav.innerHTML = navItems.map(item => {
    const active =
      item.label.toLowerCase() === activePage.toLowerCase()
        ? ' class="active"'
        : "";

    const external =
      item.external
        ? ' target="_blank" rel="noopener"'
        : "";

    return `
      <a href="${item.href}"${active}${external}>
        ${item.label}
      </a>
    `;
  }).join("");
}
