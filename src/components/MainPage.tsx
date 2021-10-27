import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Music } from "../typings/Music";
import SingleMusic from "./SingleMusic";

export default function MainPage() {
  const [query, setQuery] = useState<string>("");
  const [fetchedMusic, setFetchedMusic] = useState<Music[]>([]);
  const getMusic = async (searchQuery: string = "eminem") => {
    try {
      const req = await axios.get(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
      );
      const music = req.data.data;
      setFetchedMusic(music);
    } catch (error) {}
  };

  useEffect(() => {
    getMusic();
  }, []);

  useEffect(() => {
    getMusic(query);
  }, [query]);
  return (
    <Row>
      {fetchedMusic
        ? fetchedMusic.map((m) => (
            <Col>
              <SingleMusic key={m.id} music={m} />
            </Col>
          ))
        : "Loading"}
    </Row>
  );
}
