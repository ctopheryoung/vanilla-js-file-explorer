// Mock Data
const root = {
  type: "folder",
  name: "Files",
  modified: new Date(),
  size: 0,
  children: [
    {
      type: "folder",
      name: "Documents",
      modified: new Date(),
      size: 0,
      children: [
        {
          type: "folder",
          name: "Downloads",
          modified: new Date(),
          size: 0,
          children: [],
        },
        {
          type: "file",
          name: "Taxes.rtf",
          modified: new Date(),
          size: 1024,
          children: [],
        },
        {
          type: "file",
          name: "Taxes.txt",
          modified: new Date(),
          size: 1024,
          children: [],
        },
      ],
    },
    {
      type: "folder",
      name: "Images",
      modified: new Date(),
      size: 0,
      children: [],
    },
    {
      type: "folder",
      name: "System",
      modified: new Date(),
      size: 0,
      children: [],
    },
    {
      type: "file",
      name: "Description.rtf",
      modified: new Date(),
      size: 1024,
      children: [],
    },
    {
      type: "file",
      name: "Description.txt",
      modified: new Date(),
      size: 1024,
      children: [],
    },
  ],
};

// Helper Functions
function formatDate(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function formatSize(bytes) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// DOM Node References
const $folderTree = document.getElementById("folder-tree");
const $folderContents = document.getElementById("folder-contents");

// DOM Update Functions
function createFolderTreeItem(item) {
  let $el = document.createElement("div");
  $el.className = "folder-tree__folder";
  $el.innerHTML = `
    <div class="folder-tree__label">
      <button class="folder-tree__button--expand-collapse">
        <span>▾</span>
      </button>
      <button class="folder-tree__button--folder">
        <span>📂</span>
        <span>${item.name}</span>
      </button>
    </div>
  `;

  return $el;
}

function createFolderContentsItem(item) {
  const $el = document.createElement(item.type === "folder" ? "button" : "div");
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
      ${item.size > 0 ? formatSize(item.size) : ""}
    </div>
  `;

  $el.onclick = () => selectFolder(item);

  return $el;
}

function appendFolderTreeItems($folderTreeNode, item) {
  if (item.type === "folder") {
    const $el = createFolderTreeItem(item);

    $el.querySelector(".folder-tree__button--expand-collapse").onclick = () =>
      toggleFolderExpanded($el);

    $el.querySelector(".folder-tree__button--folder").onclick = () =>
      selectFolder(item);

    $folderTreeNode.append($el);

    item.children.forEach((child) => appendFolderTreeItems($el, child));
  }
}

function appendFolderContentsItems(folder) {
  $folderContents.append(...folder.children.map(createFolderContentsItem));
}

// Event handlers
function selectFolder(folder) {
  const $elementsToRemove = $folderContents.querySelectorAll(
    ".folder-contents__row:not(.folder-contents__row--header"
  );
  $elementsToRemove.forEach((child) => child.remove());
  appendFolderContentsItems(folder);
}

function toggleFolderExpanded($folderTreeItem) {
  const $elementsToToggle = $folderTreeItem.querySelectorAll(
    ".folder-tree__folder"
  );
  $elementsToToggle.forEach((child) => child.classList.toggle("hidden"));
}

// Initial Setup
appendFolderTreeItems($folderTree, root);
