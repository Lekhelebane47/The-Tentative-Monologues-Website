document.addEventListener('DOMContentLoaded', function() {
    // Fetch and parse RSS feed
    fetch('https://anchor.fm/s/d92bd14c/podcasts/rss')
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const items = data.querySelectorAll('item');
        let episodeGrid = '';
        items.forEach(episode => {
            const title = episode.querySelector('title').textContent;
            const description = episode.querySelector('description').textContent;
            const audioUrl = episode.querySelector('enclosure').getAttribute('url');
            const episodeLink = episode.querySelector('link').textContent;
            const imageUrl = episode.querySelector('image') ? episode.querySelector('image').textContent : 'default-image.jpg';

            episodeGrid += `
                <div class="episode-card" onclick="window.location.href='${episodeLink}'">
                    <img src="${imageUrl}" alt="Episode Image">
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <a href="${audioUrl}" target="_blank">Listen Now</a>
                </div>
            `;
        });

        // Add the episode grid to the page
        document.getElementById('episodes-container').innerHTML = episodeGrid;
    })
    .catch(error => console.error('Error fetching RSS feed:', error));
}); 


