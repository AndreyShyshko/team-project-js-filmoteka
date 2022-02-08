import { renderMarkup } from "./main-trending-markup";
import { goWatched } from "./header-links"

const watchedContainerRef = document.querySelector('.watched')
const watchedBtn = document.querySelector('#btn__header-watched')

// const testLocalStorageWatched = [{adult:false, backdrop_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xHRabofjmMGoIV3mb6xgy4nwOcS.jpg", genre_ids:["Horror"], id:801071, original_language:"en", original_title:"The Jack in the Box: Awakening", overview :"When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.", popularity:1814.294, poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg", release_date:"2022-01-03", title:"The Jack in the Box: Awakening", video:false, vote_average:5.8, vote_count:12},{ adult:false, backdrop_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/srJ7haOhfykoPOYPQrstOaFem08.jpg", genre_ids:["Action"], id:811592, original_language:"en", original_title:"One Shot", overview:"An elite squad of Navy SEALs, on a covert mission to transport a prisoner off a CIA black site island prison, are trapped when insurgents attack while trying to rescue the same prisoner.", popularity:1895.769, poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3OXiTjU30gWtqxmx4BU9RVp2OTv.jpg", release_date:"2021-11-05", title:"One Shot", video:false, vote_average:6.8, vote_count:182},{ adult:false, backdrop_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg", genre_ids:["Science Fiction","Action","Adventure"], id:580489, original_language:"en", original_title:"Venom: Let There Be Carnage", overview:"After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.", popularity:1779.495, poster_path:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg", release_date:"2021-09-30", title:"Venom: Let There Be Carnage", video:false, vote_average:7.1, vote_count:6148}]
// localStorage.setItem('watched', JSON.stringify(testLocalStorageWatched));

function renderWatchedList() {
    try {
        const data = JSON.parse(localStorage.getItem('watched'));

        renderMarkup(data, watchedContainerRef);
        
        goWatched();

    } catch {
        console.log("Empty")
    }
    
}

watchedBtn.addEventListener('click', renderWatchedList);