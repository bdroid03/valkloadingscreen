//  ____  _           _    _                    _
// / ___|| | ___  ___| | _| |    ___   __ _  __| |
// \___ \| |/ _ \/ _ \ |/ / |   / _ \ / _` |/ _` |
//  ___) | |  __/  __/   <| |__| (_) | (_| | (_| |
// |____/|_|\___|\___|_|\_\_____\___/ \__,_|\__,_|
// version 2.17.2

// Loading screen language
//
// You can create or edit languages by
// editing/creating files in the languages folder
//
// Default available languages:
// "brazilian_portuguese"
// "english"
// "polish"
config.language = "english"

// Use an image for the logo instead of text
config.logo_use_image = true

// Image filename for the server logo
// (Place the image file in the images folder)
config.logo_image = "logo.png"

// Text to be shown on logo
config.logo_text = "VALKYRIE JVS"

// Use the server's name for the logo
config.logo_servername = false

// Center logo?
// "true" or "false"
config.logo_center = false

// Display current map and gamemode?
// "true" or "false"
config.logo_show_info = true

// Use a video for the background?
// Otherwise it will use images
// "true" or "false"
config.background_use_video = false

// Default available videos:
// "blue_rays.webm"
// "purple_blue_rays.webm"
// "green_rays.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the video file in the backgrounds/videos folder)
config.background_video = 
"loadscreen480.webm"


// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// "true" or "false"
config.background_map_based = false

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the image files in the backgrounds/images folder)
config.background_images = [
	"spooky.jpg",
]

// (Image-background only)
// Random background images order?
// "true" or "false"
config.background_images_random_order = true

// (Image-background only)
// Delay between background images changes
// in milliseconds
config.background_images_duration = 5000

// (Image-background only)
// Image background fade duration
// in milliseconds
config.background_images_fade_duration = 2000

// Enable background overlay?
// "true" or "false"
config.background_overlay = false

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
config.background_darkening = 30

// Play music during the loading screen?
// "true" or "false"
config.music_enable = true

// Display current music name?
// "true" or "false"
config.music_show = false

// Music playlist
// Add as many youtube ids/urls or audio files you want
// (YouTube only works on Chromium beta)
// (Use ogg files for compatibility with default Gmod)
// (Place the audio files in the music folder)
config.music_playlist = [
	{
		name: "Valkyrie",
		file: "valkyrie.ogg",
	},
]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 15

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = true

// Enable custom messages?
// "true" or "false"
config.messages_enable = true

// Enter your custom messages below
config.messages_list = [
	"Welcome to the most rewarding Jedi vs Sith experience ever. Thank You for joining us Today!",
	"You can't stop change any more than you can stop the suns from setting.",
	"Mom, you said that the biggest problem in the universe is no one helps each other.",
    "An angel. I've heard the deep space pilots talk about them. They live on the moons of Iego, I think. They're the most beautiful creatures in the universe.",
    "I listen to all the traders and star pilots who come through here. I'm a pilot, you know, and someday I'm going to fly away from this place.",
    "You're asking me to be rational. I know that is something I cannot do.",
    "I've got a bad feeling about this.",
    "Attachment is forbidden. Possession is forbidden. Compassion, which I would define as unconditional love, is essential to a Jedi's life. So you might say that we are encouraged to love.",
    "I don't like sand. It's coarse and rough and irritating and it gets everywhere.",
    "This is where the fun begins.",
    "SI VIS PACEM PARA BELLUM!",
    "Sometimes we must let go of our pride and do what is requested of us.",
    "We're not gonna worry about anything right now. All right? This is a happy moment. The happiest moment of my life.",
    "From the moment I met you... all those years ago... not a day has gone by when I haven't thought of you.",
    "One day, I will become the greatest Jedi EVER. I will even learn how to stop people from dying.",
    "Something's happening. I'm not the Jedi I should be. I want more. And I know I shouldn't.",
    "You underestimate the power of the Dark Side. If you will not fight, then you will meet your destiny.",
    "From my point of view, the Jedi are evil!",
    "I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, freedom, justice, and security to my new empire.",
    "When I got to them, we got into aggressive negotiations.",
    "I will do anything that you ask. If you are suffering as much as I am, please, tell me.",
]

// Random message order?
// "true" or "false"
config.messages_random_order = false

// Delay between message changes
// in milliseconds
config.messages_delay = 5000

// Messages fade duration
// in milliseconds
config.messages_fade_duration = 1000

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// "true" or "false"
config.errors_show_ingame = true
