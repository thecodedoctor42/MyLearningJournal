const blogs = document.getElementById('blogs')
const hiddenBlogs = Array.from(blogs.getElementsByClassName('hidden'))

document.addEventListener('click', function(e){
    if (e.target.closest('#view-more')){
        viewMoreBlogs()
    }
})

function viewMoreBlogs(){
    hiddenBlogs.forEach(function(blog){
        blog.classList.toggle('hidden')
    })
    if (document.getElementById('view-more').innerText.includes('more')){
        document.getElementById('view-more').innerText = 'View less'
    }
    else{
        document.getElementById('view-more').innerText = 'View more'
    }
}