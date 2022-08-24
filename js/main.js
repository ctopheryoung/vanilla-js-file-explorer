import data from "./mockData.js";
import { formatDate, formatSize } from "./helpers.js";

// DOM Node References
const $folderTree = document.getElementById("folder-tree");
const $folderContents = document.getElementById("folder-contents");

// DOM Update Functions
function createFolderTreeElement(item) {
  let $el = document.createElement("div");
  $el.className = "folder-tree__folder collapsed";
  $el.innerHTML = `
    <div class="folder-tree__label">
      <button class="folder-tree__button--expand-collapse">
        <span class="folder-tree__icon--expanded">▾</span>
        <span class="folder-tree__icon--collapsed">▸</span>
      </button>
      <button class="folder-tree__button--folder">
        <span>📂</span>
        <span>${item.name}</span>
      </button>
    </div>
  `;

  $el.querySelector(".folder-tree__button--expand-collapse").onclick = () =>
    toggleFolderExpanded($el, item.children);

  $el.querySelector(".folder-tree__button--folder").onclick = () =>
    selectFolder(item);

  return $el;
}

function createFolderContentsElement(item) {
  const isFolder = item.type === "folder";
  const $el = document.createElement(isFolder ? "button" : "div");

  $el.className = "folder-contents__row";
  $el.innerHTML = `
    <div class="folder-contents__cell folder-contents__cell--icon">
      ${item.type === "file" ? "📄" : "📁"}
    </div>
    <div class="folder-contents__cell folder-contents__cell--name">
      ${item.name}
    </div>
    <div class="folder-contents__cell folder-contents__cell--date">
      ${formatDate(item.modified)}
    </div>
    <div class="folder-contents__cell folder-contents__cell--size">
      ${formatSize(item.size)}
    </div>
  `;

  if (isFolder) $el.onclick = () => selectFolder(item);

  return $el;
}

function clearFolderContentsElements($folderContentsElement) {
  const $elementsToRemove = $folderContentsElement.querySelectorAll(
    ".folder-contents__row:not(.folder-contents__row--header"
  );
  $elementsToRemove.forEach(($element) => $element.remove());
}

function appendFolderTreeElements($folderDomTreeNode, item) {
  if (item.type === "file") return;

  const $el = createFolderTreeElement(item);
  $folderDomTreeNode.append($el);
  item.children.forEach((child) => appendFolderTreeElements($el, child));
}

function appendFolderContentsElements($folderContentsElement, folder) {
  $folderContentsElement.append(
    ...folder.children.map(createFolderContentsElement)
  );
}

// Event handlers
function selectFolder(folder) {
  clearFolderContentsElements($folderContents);
  appendFolderContentsElements($folderContents, folder);
}

function toggleFolderExpanded($folderTreeItem) {
  $folderTreeItem.classList.toggle("collapsed");
}

// Initial Setup
appendFolderTreeElements($folderTree, data);
toggleFolderExpanded($folderTree.querySelector(".folder-tree__folder")); // Expand the root folder
selectFolder(data); // Select the root folder
