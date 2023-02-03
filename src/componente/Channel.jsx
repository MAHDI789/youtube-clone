import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCards from "./ChannelCards";

const Channel = () => {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState(null);
  const [videoslists, setvideoslist] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetail(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}& part=snippet&order-data`).then(
      (data) => {
        setvideoslist(data?.items);
      }
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(226,39,39,1) 0%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCards channelDetails={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videoslists} />
      </Box>
    </Box>
  );
};

export default Channel;
