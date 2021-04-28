// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

//     Create a class named Video. The class should be constructed with the following parameters:
//         title (a string)
//         uploader (a string, the person who uploaded it)
//         time (a number, the duration of the video - in seconds)
//     Create a method called watch() which displays a string as follows:
//     “uploader parameter watched all time parameter of title parameter!”
//     Instantiate a new Video instance and call the watch() method.
//     Instantiate a second Video instance with different values.
//     Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//     Think of the best data structure to save this information within the array.
//     Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
         console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

let catVideo = new Video("Funny Cat Noises","John","240");
catVideo.watch();

let dogVideo = new Video("Dog Training","Sarah","1030");
dogVideo.watch();


let videoDB = [{
        title: "Funny cat noises",
        uploader: "John",
        time: 240
    }, {
        title: "Dog training",
        uploader: "Sarah",
        time: 1030
    }, {
        title: "Polar bears",
        uploader: "Mahmoud",
        time: 7021
    }, {
        title: "Parrots",
        uploader: "Yossi",
        time: 290
    }, {
        title: "Rabbits",
        uploader: "Claude",
        time: 627
    }];



let newVideos=[]

const instantiateVideos = (database) => {
    for (video of database) {
        let newVideo = new Video(video["title"],video["uploader"],video["time"]);
        newVideos.push(newVideo);
    }
}

instantiateVideos(videoDB);
console.log(newVideos);











