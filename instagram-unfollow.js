let counter = 0;
const number_of_followers = 100; // Total number of followers for account
const wait = 14; // Number of unfollows to perform before pause
const unfollowGuys = ()=> {
    let unfollow = document.querySelector("._acan._acap._acat");
    unfollow.click();
    setTimeout(function() {
        try {
            let confirmation = document.querySelector("._a9--._a9-_");
            confirmation.click();
            let random_range = Math.floor(Math.random() * 120001 + 60000); // Delay between 1-3 minutes for each unfollow click
            counter++;
            if (counter % wait == 0) {
                random_range = 300000; // Wait for 5 minutes after {wait} number of follows
            }
            if (counter <= number_of_followers) {
                setTimeout(function() {
                    unfollowGuys(); // Unfollow continues if followed up to {number_of_followers}
                }, random_range);
            }
        }
        catch (error) {}
    }, 1000);
}
unfollowGuys();