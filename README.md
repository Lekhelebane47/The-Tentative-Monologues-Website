<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Tentative Monologues</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #000;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
        }
        header {
            background-color: #fff;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        header h1, header h2 {
            margin: 0;
            color: #333;
        }
        .bar-container {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 1em;
        }
        .bar {
            background-color: #000;
            width: 30px;
            height: 100px;
            position: relative;
        }
        .bar::after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 20px;
            background-color: #ddd;
        }
        .links {
            margin-top: 1em;
        }
        .links a {
            text-decoration: none;
            color: #007bff;
            font-size: 1em;
            margin: 0 10px;
        }
        .links a:hover {
            text-decoration: underline;
        }
        .episode-section {
            background-color: #ffffff;
            margin-top: 20px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            text-align: left;
        }
        .episode-section h3 {
            margin-top: 0;
            color: #333;
        }
        .episode-summary {
            margin-top: 10px;
            font-size: 0.95em;
            color: #666;
        }
        .theme-container {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
        }
        /* Gallery Styling */
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 10px;
            margin-top: 15px;
        }
        .gallery img, .gallery video {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h2>LEKHELEBANE MOTAUNG PRESENTS</h2>
            <h1>The Tentative Monologues</h1>
            
            <div class="bar-container">
                <div class="bar" style="height: 150px;"></div>
                <div class="bar" style="height: 100px;"></div>
                <div class="bar" style="height: 120px;"></div>
                <div class="bar" style="height: 80px;"></div>
                <div class="bar" style="height: 100px;"></div>
            </div>
            
            <div class="links">
                <a href="https://open.spotify.com/show/YOUR_SPOTIFY_LINK" target="_blank">Listen on Spotify</a>
                <a href="https://www.instagram.com/YOUR_INSTAGRAM_LINK" target="_blank">Follow on Instagram</a>
            </div>
        </header>

        <!-- Theme-based Episode Sections -->
        <div class="theme-container">
            <!-- Example Theme Section -->
            <div class="episode-section">
                <h3>Theme 1: Self-Reflection</h3>
                <p class="episode-summary">A journey into understanding ourselves better through thought-provoking questions and personal stories.</p>

                <!-- Episode 1 -->
                <h4>Episode 1: The Mirror Talks</h4>
                <p><strong>Description:</strong> Exploring the idea of self-image and how our perception shapes our identity.</p>
                <p><strong>Listen:</strong> <a href="https://open.spotify.com/episode/YOUR_EPISODE_LINK" target="_blank">Spotify</a></p>
                <p><strong>Summary:</strong> This episode delves into the psychological layers of self-image and how personal reflection influences behavior.</p>
                <p><strong>Essay:</strong> <a href="#essay1">Read Full Essay</a></p>
                
                <!-- Gallery for Episode -->
                <h4>Gallery</h4>
                <div class="gallery">
                    <!-- Replace with actual image and video URLs -->
                    <img src="path-to-image1.jpg" alt="Related image 1">
                    <img src="path-to-image2.jpg" alt="Related image 2">
                    <video src="path-to-video1.mp4" controls></video>
                    <video src="path-to-video2.mp4" controls></video>
                </div>
                
                <!-- Essay Content (Hidden, expand as needed) -->
                <div id="essay1" style="display: none;">
                    <h4>Essay: The Mirror Talks</h4>
                    <p>This is the full essay content that delves deeper into the themes of self-image and introspection...</p>
                </div>
            </div>

            <!-- Additional Theme Section Example -->
            <div class="episode-section">
                <h3>Theme 2: Relationships</h3>
                <p class="episode-summary">Episodes that tackle different aspects of human relationships, from friendships to family ties.</p>

                <!-- Episode 2 -->
                <h4>Episode 2: Bonds That Last</h4>
                <p><strong>Description:</strong> Examining what makes relationships endure over time.</p>
                <p><strong>Listen:</strong> <a href="https://open.spotify.com/episode/YOUR_EPISODE_LINK" target="_blank">Spotify</a></p>
                <p><strong>Summary:</strong> Discover the secrets of long-lasting relationships and the dynamics that foster deep connections.</p>
                <p><strong>Essay:</strong> <a href="#essay2">Read Full Essay</a></p>
                
                <!-- Gallery for Episode -->
                <h4>Gallery</h4>
                <div class="gallery">
                    <!-- Replace with actual image and video URLs -->
                    <img src="path-to-image3.jpg" alt="Related image 3">
                    <img src="path-to-image4.jpg" alt="Related image 4">
                    <video src="path-to-video3.mp4" controls></video>
                    <video src="path-to-video4.mp4" controls></video>
                </div>

                <!-- Essay Content (Hidden, expand as needed) -->
                <div id="essay2" style="display: none;">
                    <h4>Essay: Bonds That Last</h4>
                    <p>This is the full essay content exploring the depth of meaningful relationships and the commitment they require...</p>
                </div>
            </div>

            <!-- Additional themes can be added here -->
        </div>
    </div>

    <script>
        // JavaScript to toggle essay visibility
        document.querySelectorAll("a[href^='#essay']").forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const essay = document.querySelector(link.getAttribute('href'));
                essay.style.display = essay.style.display === 'none' ? 'block' : 'none';
            });
        });
    </script>
</body>
</html>

