

// url = http://www.omdbapi.com/?i=tt3896198&apikey=cc2c263a
// ? = query search parameter
// apikey = identifier
// = assignment operator
// [yourkey] = the value
// & = what separates our variables in our search
// t = identifier (type of variable looking for)

// console.log('http://www.omdbapi.com/?i=tt3896198&apikey=cc2c263a&t=titan')

// // // // // // // // // // // // // // //
// WAYS TO REQUEST DATA VIA OUR API AND JS
// // // // // // // // // // // // // // //
// 1. jquery's $.ajax()
// 2. the browser fetch
// 3. JS HTTP client called axios - installed

// console.log($.ajax('http://www.omdbapi.com/?i=tt3896198&apikey=cc2c263a&t=titan'))

const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=cc2c263a&t=frozen';


///////////////////////////////////
// ALSO COULD TYPE THIS WAY
///////////////////////////////////
// const promise = $.ajax({
//     url:'http://www.omdbapi.com/?i=tt3896198&apikey=cc2c263a&'
// });

// promise.then(
//     (data) => {
//         console.log(data);
//     },
//     (error) => {
//         console.log('bad request: ', error);
//     }
// );

///////////////////////////////////
// VARIABLES
///////////////////////////////////


///////////////////////////////////
// CACHED ELEMENTS
///////////////////////////////////
const $title = $('#title')
const $year = $('#year')
const $rated = $('#rated')

///////////////////////////////////
// EVENT LISTENERS
///////////////////////////////////


///////////////////////////////////
// FUNCTIONS
///////////////////////////////////
function handleGetData() {


    $.ajax(URL).then(function (data) {
        console.log('movie is ready');
        console.log(data);
        $title.text(data.Title);
        $year.text(data.Year)
        $rated.text(data.Rated)
        $('main').append(`<img src = '${data.Poster}' alt = ''`)
    },
        function (error) {
            console.log('we broke it');
            console.log(error);
        }
    );
};