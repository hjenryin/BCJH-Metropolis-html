self.addEventListener('message', e => {
  group = JSON.parse(e.data.rule).group;
  importScripts(`./bcjh_${group.length}.js`);
  const progressCall = (progress) => {
      postMessage(progress);
  }
  Module.onRuntimeInitialized = function () {
    let result = '';
    try {
         let result = Module.run(e.data.data, e.data.rule, e.data.passline, e.data.iterChef, e.data.iterRep, e.data.allowTool, "", progressCall)
    // 测试字符串：N2tTdKAxg9OMsiiw03pQUQEB_wAJEAAAFwMOCA4AAgn_AwUICwMIDgQIDgUIDgYIDgcIDggIDgkEEhQDDQgODAMNCA4OAw4IDhAHCAASGP8HEAATGP8GCBMSGP8JExQg_wYAFRQY_wASaIf_WHJFr9-PQa__5xovCl8ARpcUhQFwPwNfADRfAEpGGTtwXwI0XwM0XwNKRhk7CXAZOwlwGTsJcBk7CXAZOwlwGTsJcBk7CTtwXwtGlxiFAXBfDDRCrwE8SglEPF8MSkYZO3BfDjRCpwM8SgkJRDxfDkpGGTtwXxA0Qq8DPEoJCQlEPF8QSkYZO3BfEzRKBM8IhM8IcF8VNEoEzwiECc8IhNcFzwhwOAABADUyNzcAAP_vYm6mU_mBWmsj8NtQz7ejNXilXCddhXwKCktcCh_yoWd0cacNZKYg1jHBQsfoksPN5yqeB5FlEkSvjg-buFgm95OBc6kV5KmNygXO0BPr-lQwCuRQ2ignDMFnEQj_V0Yux-Z-D4lDAQySe6wihGo98aXv-0RTyhpFlQuoIANyonsWCzK0n67d7y_FASLwywvgHZrbsz4S2KBWegPLiDDj-dD5S72_uvJu87h1BA9nVU-iis-jW9o_1gMCuLZVYtq5Gvg9DV-N2F1u1ii_4Ky8wEw-etlkps_ZK9EzwyDYSSWCEiJhb9cIGOMhUyv_yFvjmAY02JzN3QM_HFTqbcGd8ofFvsCTC8lHsqsPM_yL8LU1rR4o46oJqulOmSqI5H_CU_0VvLq3e1sAAAAA_Rejilmz9PX0-kUi0yer6LghODwf_w..
    } catch (err) {
      result = `Error: ${err}`;
    }
    postMessage(result);
    self.close();
  }
});
