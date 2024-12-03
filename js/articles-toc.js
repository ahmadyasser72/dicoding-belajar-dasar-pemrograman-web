import { articles, headingToId } from "./articles.js";

/** @type {HTMLElement} */
const tocContainer = document.querySelector("nav#toc");

const tocHeading = document.createElement("h2");
tocHeading.id = "daftar-isi";
tocHeading.innerText = "Daftar isi";
tocContainer.appendChild(tocHeading);
const tocListContainer = document.createElement("ol");

for (const { heading } of articles) {
  const tocListItem = document.createElement("li");
  const tocListItemAnchor = document.createElement("a");
  tocListItemAnchor.href = `#${headingToId(heading)}`;
  tocListItemAnchor.innerText = heading;
  tocListItem.appendChild(tocListItemAnchor);
  tocListContainer.appendChild(tocListItem);
}

tocContainer.appendChild(tocListContainer);
