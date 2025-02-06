self.addEventListener('message', async e => {
  const response = await fetch('./js_rule_template.json')
  const ruleTemplate = await response.text()

  const usrd = await fetch('./directUserData.json')
  const directUserData = await usrd.text()

  group = JSON.parse(ruleTemplate).group;
  importScripts(`./bcjh.js`);
  const progressCall = (progress) => {
      postMessage(progress);
  }
  Module.onRuntimeInitialized = function () {
    let result = Module.run(directUserData, ruleTemplate, e.data.passline, e.data.iterChef, e.data.iterRep, e.data.allowTool, e.data.recoverStr, progressCall);
    postMessage(result);
    self.close();
  }
});
