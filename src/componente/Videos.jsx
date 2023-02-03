import { Stack, Box } from "@mui/material";
import VideoCards from "./VideoCards";
import ChannelCards from "./ChannelCards";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading......";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((video, idx) => {
        return (
          <Box key={idx}>
            {video.id.videoId && <VideoCards video={video} />}
            {video.id.channelId && <ChannelCards channelDetails={video} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
