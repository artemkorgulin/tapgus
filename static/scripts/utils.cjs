const path = require("path");
const fs = require("fs");

/**
 * Получаем идентификатор проекта и номер задачи из названия ветки
 * @param {string} branchName
 * @returns {null | [string, string]}
 */
function getTask(branchName = getCurrentBranchName()) {
  const regex = /(\w+)-(\d+)-?/;
  const match = branchName.match(regex);

  if (match) {
    return [match[1], match[2]];
  } else {
    return null;
  }
}
function getCurrentBranchName() {
  const headPath = path.resolve('.git', 'HEAD');
  const headContent = fs.readFileSync(headPath, 'utf-8').trim();

  const branchMatch = headContent.match(/^ref: refs\/heads\/(.+)$/);

  if (branchMatch && branchMatch[1]) {
    return branchMatch[1];
  } else {
    console.error('Error: Unable to determine the current branch.');
    process.exit(1);
  }
}

function getIssue(branchName = getCurrentBranchName()){
  const regex = /(\w+-\d+)-?/;
  const match = branchName.match(regex);

  if (match) {
    return match[1];
  } else {
    return null;
  }
}

module.exports = {
  getTask,
  getCurrentBranchName,
  getIssue
}
