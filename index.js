const root = {
  type: "folder",
  name: "Files",
  modified: new Date(),
  size: 1280,
  children: [
    {
      type: "folder",
      name: "Documents",
      modified: new Date(),
      size: 1280,
      children: [
        {
          type: "folder",
          name: "Images",
          modified: new Date(),
          size: 1280,
          children: [],
        },
        {
          type: "file",
          name: "Taxes.rtf",
          modified: new Date(),
          size: 1280,
          children: [],
        },
        {
          type: "file",
          name: "Taxes.txt",
          modified: new Date(),
          size: 1280,
          children: [],
        },
      ],
    },
    {
      type: "folder",
      name: "Images",
      modified: new Date(),
      size: 1280,
      children: [],
    },
    {
      type: "folder",
      name: "System",
      modified: new Date(),
      size: 1280,
      children: [],
    },
    {
      type: "file",
      name: "Description.rtf",
      modified: new Date(),
      size: 1280,
      children: [],
    },
    {
      type: "file",
      name: "Description.txt",
      modified: new Date(),
      size: 1280,
      children: [],
    },
  ],
};

const $folderTree = document.getElementById("folder-tree");

function selectFolder(folder) {
  console.log(folder);
}

function createFolderTreeItem(item) {
  let $el = document.createElement("div");

  $el.className = "folder-tree__folder";
  $el.innerHTML = `
    <div class="folder-tree__label">
      <span>▾</span>
      <button class="folder-button">
        <span>📂</span>
        <span>${item.name}</span>
      </button>
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

appendFolderTreeItems($folderTree, root);
