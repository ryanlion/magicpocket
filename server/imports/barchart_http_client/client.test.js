import {Client} from "./client"

describe("Test bar chart client", function() {
  describe("Test retrieve stock history", function() {
    it('should save without error', function(done) {
      var client = new Client();
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });

  describe("Test get quote", function() {
  });
});
