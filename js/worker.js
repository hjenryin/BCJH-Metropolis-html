self.addEventListener('message', e => {
  group = JSON.parse(e.data.rule).group;
  importScripts(`./bcjh_${group.length}.js`);
  const progressCall = (progress) => {
      postMessage(progress);
  }
  Module.onRuntimeInitialized = function () {
    let result = '';
    try {
      result = Module.run(e.data.data, e.data.rule, e.data.passline, e.data.iterChef, e.data.iterRep, e.data.allowTool, progressCall);
    } catch (err) {
      result = `Error: ${err}`;
    }
    postMessage(result);
    self.close();
  }
});
