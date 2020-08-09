var videoshow = require("videoshow");
var images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];
var videoOptions = {
  fps: 25,
  loop: 5,
  transition: true,
  transitionDuration: 1,
  videoBitrate: 1024,
  videoCodec: "libx264",
  size: "640x?",
  audioBitrate: "128k",
  audioChannels: 2,
  format: "mp4",
  pixelFormat: "yuv420p",
};

videoshow(images, videoOptions)
  .save("video.mp4")
  .on("start", (command) => console.log("ffmpeg process started:", command))
  .on("error", (err, stdout, stderr) => {
    console.error("Error:", err);
    console.error("ffmpeg stderr:", stderr);
  })
  .on("end", (output) => console.error("Video created in:", output));
