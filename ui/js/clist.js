$(document).ready(function() {
$('.modal').modal();

	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
	VotingContract = web3.eth.contract(abi);
	contractInstance = VotingContract.at('0x0fe7da5b612f8df7b63822d61bcbdf3c12333995');

	function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
	}

	var aadhaar_list = {
		"300000000000" : "Name_1",
		"738253790005" : "Name_2"
	}

	var aadhaar = readCookie('aadhaar');

	console.log(aadhaar);
	var address = aadhaar_list[aadhaar];
	console.log(address);
	$('#loc_info').text('Location based on Aadhaar : '+ address)

	function disable() {
			$('#vote1').addClass( "disabled" );
		    $('#vote2').addClass( "disabled" );
		    $('#vote3').addClass( "disabled" );
		    $('#vote4').addClass( "disabled" );
		    
		    document.cookie = "show=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
		    document.cookie = "aadhaar=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
		    window.location = '/app';
	}

	$('#vote1').click(function(){
		contractInstance.voteForCandidate('Candidate_1', {from: web3.eth.accounts[0]}, function() {
			console.log(contractInstance.totalVotesFor.call('Candidate_1').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_2').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_3').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_4').toString());
		    alert('Vote submited to Candidate_1');
		    disable();
		    $('#loc_info').text('Vote submited successfully to Candidate_1')

		});
	})
	$('#vote2').click(function(){
		contractInstance.voteForCandidate('Candidate_2', {from: web3.eth.accounts[0]}, function() {
			console.log(contractInstance.totalVotesFor.call('Candidate_1').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_2').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_3').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_4').toString());
		    alert('Vote submited to Candidate_2');
		     disable();
		     $('#loc_info').text('Vote submited successfully to Candidate_2')
		});
	})
	$('#vote3').click(function(){
		contractInstance.voteForCandidate('Candidate_3', {from: web3.eth.accounts[0]}, function() {
			console.log(contractInstance.totalVotesFor.call('Candidate_1').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_2').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_3').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_4').toString());
		    alert('Vote submited to Candidate_3');
		     disable();
		      
		      $('#loc_info').text('Vote submited successfully to Candidate_3')
		});
	})
	$('#vote4').click(function(){
		contractInstance.voteForCandidate('Candidate_4', {from: web3.eth.accounts[0]}, function() {
			console.log(contractInstance.totalVotesFor.call('Candidate_1').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_2').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_3').toString());
		    console.log(contractInstance.totalVotesFor.call('Candidate_4').toString());
		    alert('Vote submited to Candidate_4');
		     disable();
		     $('#loc_info').text('Vote submited successfully to Candidate_4')
		});
	})

});
