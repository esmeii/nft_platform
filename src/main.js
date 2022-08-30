const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const ipfs = window.IpfsHttpsClient.create("http://localhost:5001");
const CA = "0x1e5faEBCF2e92Bc4E11Fa018403Cf54cEAD3fC6c";

const ABI = [];

const contract = new web3.eth.Contract(ABI, CA);
let PK = "";

function click(props) {
  PK = props.value;
  const account = web3.eth.accounts.privateKeyToAccount(PK);
  let balance = web3.eth.getBalance(account.address);
  let nftBalance = contract.methods.balanceOf(account.address).call();
}
