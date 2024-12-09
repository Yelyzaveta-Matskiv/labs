function toggleFolder(file) {
    let folderContent = file.querySelector('ul');
    if (folderContent) {
        folderContent.classList.toggle('hidden');
    }
    event.stopPropagation();
}

function openFile(event, fileName) {
    alert(fileName);
    event.stopPropagation();
}