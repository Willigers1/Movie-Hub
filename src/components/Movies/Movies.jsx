import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import SingleMovie from "./SingleMovie";

function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [videos, setVideos] = useState([]);

  const getMovie = async () => {
    try {
      await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=bad7d2c08d9ddd3aa659027a7f6204a4"
      )
        .then((res) => res.json())
        .then((json) => setMovieList(json.results));
    } catch (err) {
      console.error(err);
    }
  };

  const getVideo = async (id) => {
    console.log(id);
    // try {
    //   await fetch(
    //     `https://api.themoviedb.org/3/movie/{${id}}/videos?api_key=bad7d2c08d9ddd3aa659027a7f6204a4`
    //   )
    //     .then((res) => {
    //       console.log(res.url);
    //       res.json();
    //     })
    //     .then((json) => console.log(json));
    // } catch (err) {
    //   console.error(err);
    // }
  };

  useEffect(() => {
    getMovie();
    getVideo();
  }, []);

  console.log(movieList);
  // console.log(videos);

  return (
    <>
      (
      <div onClick={() => getVideo()} className="movies">
        {movieList.map((Movies) => (
          <SingleMovie details={Movies} getVideo={getVideo} />
          // < YouTube videoId={videos[0]?.key}/>
        ))}
      </div>
      )
    </>
  );
}

export default Movies;
