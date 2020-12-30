export const environment = {
  production: true,
  apiUrl : `http://${window.location.hostname}`,
  propMgmtPort : "7776",
  dataCollectPort : "7774",
  workflowPort : "8082",
  ossServicePort: "8088",
  delayInterval : 5000,
  debug: false,
  log: {
    auth: false,
    store: false,
  }
};