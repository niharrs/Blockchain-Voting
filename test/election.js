var Election = artifacts.require ("./contracts/Election.sol");

contract ("Election", function(accounts){
	it("initializes with three candidates", function () {
		return Election.deployed().then(function(instance){
			return instance.candidatesCount();
		}).then(function (count){
			assert.equal(count, 3);
		});
	});
});