const posts = [];

function createPost(title) {
    const post = { title };
    posts.push(post);
    return Promise.resolve(post);
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

function displayPostsAndActivityTime() {
    console.log("Posts:", posts);
    updateLastUserActivityTime().then(lastActivityTime => {
        console.log("Last Activity Time:", lastActivityTime);
    });
}

// Simulating user activity using Promise.all
function simulateUserActivity() {
    Promise.all([createPost("Post 1"), updateLastUserActivityTime()])
        .then(([createdPost, lastActivityTime]) => {
            console.log("Post created:", createdPost);
            console.log("Last Activity Time updated:", lastActivityTime);
            return deletePost();
        })
        .then(deletedPost => {
            console.log("Deleted Post:", deletedPost);
            console.log("Remaining Posts:", posts);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Simulate user creating a post and updating last activity time
simulateUserActivity();