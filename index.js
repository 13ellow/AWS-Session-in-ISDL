// 講習会参加者のエンドポイント
const endpoints = [
  { name: "", value: "Choose User" },
  { name: "ktsuji", value: "https://nf0p1i9yzf.execute-api.ap-southeast-1.amazonaws.com/dev/" },
  {
    name: "yyamaguchi",
    value:
      "https://aas4nojujl.execute-api.ap-southeast-1.amazonaws.com/development",
  },
  { name: "ksakabe", value: "endpoint" },
  { name: "nmasuda", value: "endpoint" },
  { name: "hoka", value: "endpoint" },
  { name: "skawata", value: "endpoint" },
  { name: "afujimoto", value: "endpoint" },
  { name: "user", value: "endpoint" },
];

const sendButton = document.getElementById("sendButton");
const getButton = document.getElementById("getButton");
const inputUser = document.getElementById("inputUser");
const inputMessage = document.getElementById("inputMessage");
const response = document.getElementById("response");
const dropdown = document.getElementById("dropdown");


/**
 * ドロップダウンアイテムの定義
 */
endpoints.forEach((item) => {
  const option = document.createElement("option");

  option.value = item["name"];
  option.textContent = item["name"];

  dropdown.appendChild(option);
});

// dropdown.addEventListener("change", () => {
//   const selectValue = document.getElementById("ppp");
//   selectValue.textContent = endpoints[dropdown.selectedIndex]["name"];
// });

/**
 * API実行
 */
sendButton.addEventListener("click", () => {
  const url = endpoints[dropdown.selectedIndex]["value"]; // 選択中ユーザに応じたエンドポイントの設定
  const data = { key1: inputUser.value , key2: inputMessage.value};

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      response.textContent = JSON.stringify(data, null, 2);
      //   alert("Success!");
    })
    .catch((error) => {
      response.textContent = JSON.stringify(error, null, 2);
      alert("Error!");
    });
});

getButton.addEventListener("click", () => {
  const url = endpoints[dropdown.selectedIndex]["value"]; // 選択中ユーザに応じたエンドポイントの設定

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      response.textContent = JSON.stringify(data, null, 2);
      //   alert("Success!");
    })
    .catch((error) => {
      response.textContent = JSON.stringify(error, null, 2);
      alert("Error!");
    });
});