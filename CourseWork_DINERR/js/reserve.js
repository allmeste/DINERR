function openmodal() {
  var x = document.querySelector(".fio");
  var x1 = document.querySelector(".telefon");

  if (x1.value.length < 13) {
    alert("Номер телефона должен содержать 13 символов\n +375(--) -- -- ---");

    if (x1.value.length > 13) {
      alert("Неправильный номер телефона");
    }
  } else {
    return true;
  }

}
