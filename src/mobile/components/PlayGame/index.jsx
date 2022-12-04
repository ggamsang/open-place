import React, { useEffect, useState } from "react";

function PlayGame(props) {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    try {
      setUrl(
        JSON.parse(JSON.parse(props.detail.type_detail).game_files)[0].path
      );
    } catch (e) {
      alert(e);
    }
  }, [props, url]);

  return (
    <>
      {/* {url} */}
      {url ? (
        <iframe id="play-game-iframe" width="100%" src={url} />
      ) : (
        <div>{url}</div>
      )}
    </>
  );
}

export default PlayGame;
