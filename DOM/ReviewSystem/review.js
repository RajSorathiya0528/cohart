const submitBtn = document.getElementById('submitbtn')
submitBtn.addEventListener('click',() => {
    const userName = document.getElementById('userName').value
    console.log(userName)
    const review = document.getElementById('reviewText').value
    console.log(review)
    const reviewShow = document.getElementById('reviewShow')
    const reviewBox = document.createElement('div')
    reviewBox.classList.add('reviewBox')
    const userPargraph = document.createElement('p')
    const reviewPargraph = document.createElement('p')
    userPargraph.innerText = userName;
    reviewPargraph.innerText = review;
    reviewBox.appendChild(userPargraph);
    reviewBox.appendChild(reviewPargraph);
    reviewShow.appendChild(reviewBox);
})

