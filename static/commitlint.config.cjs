const { getIssue, getCurrentBranchName } = require("./scripts/utils.cjs");
const { NotMyJob, Failure } = require("@dwmt/commitlint-plugin-jira-type/src/rule/common");

module.exports = {
  extends: ['@dwmt/commitlint-config-jira-type'],
  rules: {
    'jira-type-message-empty': [2, 'always'],
    'jira-type-task-id-empty': [2, 'always'],
    'jira-type-type-empty': [0, 'always'],
    'jira-type-type-separator': [0, 'always']
  },
  plugins: [
    '@dwmt/commitlint-plugin-jira-type',
    {
      rules: {
        'jira-type-task-id-empty': function(parsed, _when) {
          const currentTask = getIssue();
          const commitTask = getIssue(parsed.header);

          if (currentTask !== commitTask) {
            const currentBranch = getCurrentBranchName();
            return Failure(`Номер задачи в заголовке коммита "${commitTask}" не совпадает с названием текущей ветки "${currentBranch}"!`)
          }

          return NotMyJob()
        }
      }
    }
  ]
}
