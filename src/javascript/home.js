const likeImage_user001 = document.getElementById("likeImage_user001");
const likeCount_user001Element = document.getElementById("likeCount_user001");

let isLiked = false;
let likeCount_user001 = 100;

likeImage_user001.addEventListener("click", toggleLike);

function toggleLike() {
  isLiked = !isLiked;
  likeImage_user001.style.transform = "scale(0.7)";

  if (isLiked) {
    likeImage_user001.src = "../images/like.png";
    likeCount_user001++;
  } else {
    likeImage_user001.src = "../images/unlike.png";
    likeCount_user001--;
  }

  likeCount_user001Element.textContent = likeCount_user001;

  setTimeout(() => {
    likeImage_user001.style.transform = "scale(1)";
  }, 200);
}
