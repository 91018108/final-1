let textAdjusted = false;
let picAdjusted = false;

function adjustText() {
  const studentId = document.getElementById('student-id');
  const name = document.getElementById('name');

  if (textAdjusted) {
    studentId.style.color = '';
    name.style.color = '';
    studentId.style.fontSize = '';
    name.style.fontSize = '';
  } else {
    studentId.style.color = 'blue';
    name.style.color = 'green';
    studentId.style.fontSize = '20px';
    name.style.fontSize = '20px';
  }

  textAdjusted = !textAdjusted;
}

function adjustProfilePic() {
  const profilePic = document.getElementById('profile-pic');

  if (picAdjusted) {
    profilePic.style.border = '';
    profilePic.style.borderRadius = '';
  } else {
    profilePic.style.border = '4px solid red';
    profilePic.style.borderRadius = '10%';
  }

  picAdjusted = !picAdjusted;
}

function changeImage() {
  const profilePic = document.getElementById('profile-pic');

  if (profilePic.src.includes('IMG_7312.jpg')) {
    profilePic.src = 'IMG_9960.jpeg';
  } else {
    profilePic.src = 'IMG_7312.jpg';
  }
}
