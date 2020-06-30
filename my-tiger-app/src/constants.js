// module.exports is important for setupProxy.js
module.exports = {
    appName: "my-tiger-app",
    backend: "https://staging.anywhere.gooddata.com",
    workspace: "workspace",
    workspaceFilter: null, // regexp to filter workspaces in WorkspacePicker. Example: /test/ or /^GoodData/,
};
