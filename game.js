function checkanswer(jawabanBenar) {
  const inputUser = document.getElementById("answerinput").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (inputUser === jawabanBenar.toLowerCase()) {
    feedback.innerText = "Jawaban Benar!";
    feedback.style.color = "green";
    feedback.style.background = "white";
    feedback.style.width = "300px";
    feedback.style.maxWidth = "90%"
    feedback.style.padding = "10px"
    feedback.style.margin = "20px auto"

    // Redirect ke index3.html setelah 1 detik
    setTimeout(() => {
      window.location.href = "index3.html";
    }, 1000);
  } else {
    feedback.innerText = "Jawaban Salah. Coba lagi!";
    feedback.style.color = "red";
    feedback.style.background = "white";
    feedback.style.background = "white";
    feedback.style.width = "300px";
    feedback.style.maxWidth = "90%"
    feedback.style.padding = "10px"
    feedback.style.margin = "20px auto"
  }
}