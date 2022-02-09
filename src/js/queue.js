import { goQueue } from "./header-links";
import { renderMarkup } from "./main-trending-markup";

export const queueContainerRef = document.querySelector('.queue')
const queueBtn = document.querySelector('#btn__header-queue')

// const testLocalStorageQueue = [{adult:false, backdrop_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eG0oOQVsniPAuecPzDD1B1gnYWy.jpg", genre_ids:["Animation","Comedy","Other"], id:774825, original_language:"en", original_title:"The Ice Age Adventures of Buck Wild", overview:"The fearless one-eyed weasel Buck teams up with mischievous possum brothers Crash & Eddie as they head off on a new adventure into Buck's home: The Dinosaur World.", popularity:2944.598, poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg", release_date:"2022-01-28", title:"The Ice Age Adventures of Buck Wild", video:false, vote_average:7.6, vote_count:264},{ adult:false, backdrop_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t4To8feUSysyBs4tlBAbXIrKlCv.jpg", genre_ids:["Action","Thriller"], id:860623, original_language:"en", original_title:"Last Man Down", overview:"After civilization succumbs to a deadly pandemic and his wife is murdered, a special forces soldier abandons his duty and becomes a hermit in the Nordic wilderness. Years later, a wounded woman appears on his doorstep. She's escaped from a lab and her pursuers believe her blood is the key to a worldwide cure. He's hesitant to get involved, but all doubts are cast aside when he discovers her pursuer is none other than Commander Stone, the man that murdered his wife some years ago.", popularity:2059.045, poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4B7liCxNCZIZGONmAMkCnxVlZQV.jpg", release_date:"2021-10-19", title:"Last Man Down", video:false, vote_average:6.6, vote_count:177},{ adult:false, backdrop_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cinER0ESG0eJ49kXlExM0MEWGxW.jpg", genre_ids:["Action","Adventure","Fantasy"], id:566525, original_language:"en", original_title:"Shang-Chi and the Legend of the Ten Rings", overview:"Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.", popularity:1237.286, poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg", release_date:"2021-09-01", title:"Shang-Chi and the Legend of the Ten Rings", video:false, vote_average:7.8, vote_count:5468}]
// localStorage.setItem('queue', JSON.stringify(testLocalStorageQueue));

export function renderQueueList() {
    try {
        const data = JSON.parse(localStorage.getItem('queue'));

        renderMarkup(data, queueContainerRef)

        goQueue();

    } catch {
        console.log("Empty")
    }
    
}

queueBtn.addEventListener('click', renderQueueList);
