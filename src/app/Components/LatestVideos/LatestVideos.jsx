'use client';
import React, { useState } from 'react';
import './YoutubeSection.css';
import pic1 from '@/app/Images/youtube1.png'
import pic2 from '@/app/Images/youtube2.png'
import Image from 'next/image';

const videos = [
  {
    id: 'video1',
    thumbnail: pic1,
    videoUrl: 'https://www.youtube.com/embed/CZo_M0fCM7c',
    alt: 'Start Your Clothing Brand',
  },
  {
    id: 'video2',
    thumbnail: pic2,
    videoUrl: 'https://www.youtube.com/embed/EoT0sm7FHkA',
    alt: 'Ajay Ajmera Biography',
  },
  {
    id: 'video3',
    thumbnail: pic1,
    videoUrl: 'https://www.youtube.com/embed/EoT0sm7FHkA',
    alt: 'Story of Ajay Ajmera',
  },
];

export default function YoutubeSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="youtube-section container text-center my-5">
      <h2 className="main-title text-danger fw-bold">
        Most Popular Latest Videos From Our Youtube Channel
      </h2>
      <p className="subtitle">
        Stay Ahead Of The Fashion Curve With Our YouTube Channel, Featuring Our Most Popular Videos.
        Explore Trendsetting Style Guides And Exclusive Behind-The-Scenes Content.
      </p>

      <div className="row justify-content-center">
        {videos.map((video) => (
          <div key={video.id} className="col-md-4 col-sm-6 mb-4">
            <div className="video-card position-relative">
              <Image
                src={video.thumbnail}
                alt={video.alt}
                className="img-fluid rounded shadow"
              />
              <button
                className="play-button"
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                ▶
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-outline-danger mt-4 px-4 py-2 fw-bold rounded-pill">
        VIEW MORE VIDEOS
      </button>

      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`${selectedVideo}?autoplay=1`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
