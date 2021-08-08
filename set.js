Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.accounts;
console.log('10 Ether Accounts\n');
for(let i = 0; i < 10; ++i) {
	console.log(web3.eth.accounts[i]);
}
fs = require('fs')
code = fs.readFileSync('Voting.sol').toString();
solc = require('solc');
compiledCode = solc.compile(code);
abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface);
console.log('\nabiDefinition for the Smart Contract\n');
console.log(abiDefinition);
VotingContract = web3.eth.contract(abiDefinition);
byteCode = compiledCode.contracts[':Voting'].bytecode;
console.log('\nbytecode for the Smart Contract\n');
console.log(byteCode);
deployedContract = VotingContract.new(['Candidate_1','Candidate_2','Candidate_3','Candidate_4'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000},
	function(err, deployedContract) {
		if(deployedContract.address) {
        	console.log(`\nAddress: ${deployedContract.address}`);
    	}
	}
);