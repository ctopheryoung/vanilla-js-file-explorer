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
          name: "Images",
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

function formatDate(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

const $folderTree = document.getElementById("folder-tree");
const $folderContents = document.getElementById("folder-contents");

function createFolderTreeItem(item) {
  let $el = document.createElement("div");
  $el.className = "folder-tree__folder";
  $el.innerHTML = `
    <div class='folder-tree__label'>
      <span>▾</span>
      <button class='folder-button'>
        <span>📂</span>
        <span>${item.name}</span>
      </button>
    </div>
  `;

  return $el;
}

function createFolderContentsItem(item) {
  const $el = document.createElement("div");
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
      ${item.size > 0 ? formatBytes(item.size) : ""}
    </div>
  `;

  return $el;
}

function appendFolderTreeItems(element, folder) {
  if (folder.type === "folder") {
    const $el = createFolderTreeItem(folder);
    $el.querySelector(".folder-button").onclick = () => selectFolder(folder);

    element.append($el);

    folder.children.forEach((child) => appendFolderTreeItems($el, child));
  }
}

function appendFolderContentsItems(folder) {
  $folderContents.append(...folder.children.map(createFolderContentsItem));
}

function selectFolder(folder) {
  appendFolderContentsItems(folder);
}

appendFolderTreeItems($folderTree, root);
