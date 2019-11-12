const http = new EasyHTTP();

// GET posts
// http.get('https://jsonplaceholder.typicode.com/posts-', function(error, posts){
//     if(error){
//         console.log(error);
//     }else{
//     console.log(posts);
//     }
// });

const data = {
    title: 'Jackz Post',
    body: 'Jack posed to test'
}

//POST
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
//     if(error){
//         console.log(error);
//     }else{
//     console.log(post);
//     }
// });



//PUT
// http.post('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
//     if(error){
//         console.log(error);
//     }else{
//     console.log(post);
//     }
// });

//DELTE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if(error){
        console.log(error, response);
    }else{
    console.log(response);
    }
});