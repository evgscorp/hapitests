describe("Mytest", function() {
  var testUtils = require('../../lib/mytest/Test');
  var tttt;
  var futureUtil = null;

  beforeEach(function() {
    tttt = new testUtils();
    futureUtil = {
      sendPostRequest(payload){
        console.log(payload);
        return {status:'200'};
      }
    }
    spyOn(futureUtil,'sendPostRequest').and.returnValue({status:'200'});
    futureUtil.sendPostRequest({port:7999, 'client-emcoding':'UTF-8'});

  });

  it("the futureUtil was called", function() {
    expect(futureUtil.sendPostRequest).toHaveBeenCalled();
    });
  
    it("should be possible to capitalize the name", function() {
      expect(tttt.captitalizeWord('testWord')).toEqual('TESTWORD');
      expect(tttt.captitalizeWord(123123)).not.toEqual('123123');
      expect(tttt.captitalizeWord(123123)).toEqual(false);
      
    });
  });

  
  