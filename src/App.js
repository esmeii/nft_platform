import React, { Component } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <label>보유 eth: </label>
          <span id="eth_balance"></span>
        </div>
        <div>
          <label>보유 eth: </label>
          <span id="nft_balance"></span>
        </div>

        <div>
          <input id="pk" type="text" placeholder="PRIVATE KEY" />
          <button id="wallet-import-btn">지갑 가져오기</button>
        </div>
      </div>
      <hr></hr>
      <div>
        <div>
          <label>Name </label>
          <input type="text" id="nft-name" />
        </div>
        <div>
          <label>File</label>
          <input type="file" id="nft-file" />
          <button id="nft-gen-btn">NFT 생성하기</button>
        </div>
      </div>
      <hr></hr>
      <div>
        <div>
          <label>토큰 ID</label>
          <input
            type="number"
            id="nft-tokenId"
            placeholder="토큰 ID를 입력해 주세요"
          />
        </div>
        <div>
          <label>Owner address </label>
          <span id="nft-owner-address-search"></span>
        </div>
        <div>
          <label>Name</label>
          <span id="nft-name-search"></span>
        </div>
        <div>
          <label>File path</label>
          <span id="ipfs-path-search"></span>
        </div>
      </div>
      <button id="nft-search-btn">NFT 조회하기</button>
    </div>
  );
}

export default App;
