import React from "react";
import { Card, Button } from "react-bootstrap";
import { Music } from "../typings/Music";

interface SingleMusicProps {
  music: Music;
}

export default function SingleMusic({ music }: SingleMusicProps) {
  return (
    <div className="m-3">
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={music.album.cover} />
        <Card.Body>
          <Card.Title>{music.title}</Card.Title>
          <Card.Text>
            <div>{music.artist.name}</div>
            <div>
              {Math.floor(music.duration / 60) +
                ":" +
                ("0" + (music.duration % 60))}
            </div>
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
