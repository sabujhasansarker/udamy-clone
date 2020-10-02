import React, { useState } from "react";

const Education = ({ container }) => {
  const [video, setVideo] = useState(false);
  return (
    <section className={`instructor ${container ? "container" : ""} education`}>
      <div className="instructor-container education-container">
        <div className="education-left">
          {video ? (
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/QFIhEmOd6No?autoplay=1"
                frameBorder="0"
                allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ) : (
            <div className="play" onClick={() => setVideo(true)}>
              <img
                src="https://s.udemycdn.com/home/user-stories/mohamad-story.jpg"
                alt=""
                className="play-img"
              />
              <div className="play-button">
                <img
                  src="https://www.freepnglogos.com/uploads/play-button-png/play-button-icon-icons-download-17.png"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        <div className="education-right">
          <h2>
            Transform your life through <br /> education
          </h2>
          <p>
            Mohamad Alaloush launched a new career in <br /> software
            development by taking courses on <br /> Udemy. What will you be able
            to do?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
