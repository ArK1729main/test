function addNewTask() {
  // 入力したテキストを取得
  var inputElement = document.getElementById("inputText");
  var inputValue = inputElement.value;

  if (inputValue.trim() !== "") {
    // 新しいリストアイテムを作成
    var listItem = document.createElement("li");

    // チェックボックスを作成
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var checkboxId = "checkboxID_" + Date.now(); // タイムスタンプを使用して一意なIDを生成
    checkbox.id = checkboxId;

    //削除ボタンを作成
    var delButton = document.createElement("input");
    delButton.type = "button";
    var delButtonID = "deButtonID_" + Date.now();
    delButton.id = delButtonID;
    delButton.value = "削除";
    delButton.addEventListener("click", delTask);

    // ラベルを作成
    var label = document.createElement("label");
    label.textContent = inputValue;
    label.htmlFor = checkboxId;

    // リストアイテムにチェックボックスとラベルを追加
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(delButton);

    // リストに新しいリストアイテムを追加
    var list = document.getElementById("myTask");
    list.appendChild(listItem);

    inputElement.value = "";
  }
}

function delTask() {
  var listItem = this.parentNode;

  var list = listItem.parentNode;
  list.removeChild(listItem);

  console.log(listItem);
}
