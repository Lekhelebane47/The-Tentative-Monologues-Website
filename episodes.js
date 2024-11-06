document.addEventListener('DOMContentLoaded', function() {
    // Fetch and parse RSS feed
    fetch('https://anchor.fm/s/d92bd14c/podcasts/rss')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const items = data.querySelectorAll('item');
        let episodeGrid = '';
        
        // Loop through each episode and create a grid item
        items.forEach((episode, index) => {
            if (index < 12) { // Only show the first 12 episodes
                const title = episode.querySelector('title').textContent;
                const description = episode.querySelector('description').textContent;
                const episodeLink = episode.querySelector('link').textContent;
                const audioUrl = episode.querySelector('enclosure').getAttribute('url');
                const imageUrl = episode.querySelector('itunes:image') ? episode.querySelector('itunes:image').getAttribute('href') : 'default-image.jpg';

                episodeGrid += `
                    <div class="episode-card" onclick="window.location.href='${episodeLink}'">
                        <img src="${imageUrl}" alt="Episode Image">
                        <h3>${title}</h3>
                        <p>${description.substring(0, 100)}...</p>
                        <a href="${audioUrl}" target="_blank">Listen Now</a>
                    </div>
                `;
            }
        });

        // Insert the grid items into the container
        document.getElementById('episodes-container').innerHTML = episodeGrid;
    })
    .catch(error => console.error('Error fetching RSS feed:', error));
});
