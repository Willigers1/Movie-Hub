function SingleMovie({ details, getVideo }) {
  function handleVideo(id) {
    getVideo(id);
  }
  return (
    <img
      onClick={() => handleVideo(details.id)}
      className="poster"
      src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
    />
  );
}

export default SingleMovie;
