import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import ReactPlayer from "react-player/youtube";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Video from "./Video";
import apiClient from "../utils/apiClient";

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos,setVideos]=useState(null)

  const { videoId } = useParams();
  console.log("viode", videoId);

  useEffect(() => {
    apiClient.get(`videos?part=snippet,statistic&id=${videoId}`).then((res) => {
      setVideoDetails(res.data.items[0]);
      console.log(res.data);
    });

    apiClient.get(`search?part=snippet&relatedToVideoId=${videoId}&type=video`).then((res)=>setVideos(res.data.items))
  }, [videoId]);
  // useEffect(() => {
  //   apiClient.get(`videos?part=snippet,statistic&id=${videoId}`).then((res) => {
  //     const videoData = res.data.items[0];
  //     if (videoData) {
  //       setVideoDetails(videoData);
  //       console.log("Video Details:", videoData);
  //     } else {
  //       console.error("No video data in the response");
  //     }
  //   });
  // }, [videoId]);
  // const { snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount} }=videoDetails;
  if (!videoDetails?.snippet) return <p color="#fff">Loading</p>;

  return (
    <Box minHeight="90vh" >
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "70px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              className="react-player"
              controls
            />

            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetails.snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              px={2}
              py={1}
            >
              <Link to={`/channel/${videoDetails.snippet.channelId}`}>
                <Typography variant={{ sm: "subtitle", md: "h6" }} color="#fff">
                  {videoDetails.snippet.channelTitle}
                
                <CheckCircle
                  sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                />
                </Typography>
              </Link>
             <Stack direction='row' gap='20px' alignItems='center' pb={15}>
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(videoDetails.statistics.viewCount).toLocaleString()}views

              </Typography>
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(videoDetails.statistics.likeCount).toLocaleString()}Likes

              </Typography>
             </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent='center' alignItems='center'>
        <Video videos={videos} direction='column'/>

      </Box>
      </Stack>
      

    </Box>
  );
};

export default VideoDetail;
