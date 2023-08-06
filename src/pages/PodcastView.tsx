import Layout from "layouts/Layout";
import React from "react";
import thumbnailPodcast from "../assets/images/thubmnail_podcast.png";
import VerifyIcon from "../assets/svg/verify1.svg";
import OrderBy from "components/OrderBy";
import ButtonPlayer from "components/ButtonPlayer";
import PodcastTable from "components/PodcastTable";

const PodcastView: React.FC = () => (
  <Layout page="PodcastView">
    <div className="podcast-container mt-5">
      <div className="flex flex-col ">
        <div className="flex">
          <_ThumbnailPodcast />
        </div>
        <div className="flex justify-between player-container ">
          <_TopPlayerPodcast />
        </div>
        <div className="flex mt-1">
          <_PodCastListTable />
        </div>
      </div>
    </div>
  </Layout>
);

const _ThumbnailPodcast: React.FC = () => (
  <>
    <img
      className="w-full h-auto"
      src={thumbnailPodcast}
      alt="Thumbnail del podcast"
    />
  </>
);

const _TopPlayerPodcast: React.FC = () => (
  <>
    <div className="flex-1 flex items-center">
      <ButtonPlayer />
    </div>
    <div className="text-center ml-4 mr-4">
      <h3>
        How to start a podcast
        <img src={VerifyIcon} alt="Verified" className="ml-2 verify-icon" />
      </h3>
    </div>
    <div className="flex-1 flex items-center  justify-end">
      <div className="minim-ample">
        <OrderBy />
      </div>
    </div>
  </>
);

const _PodCastListTable: React.FC = () => {
  return (
    <div className="w-full">
      <PodcastTable />
    </div>
  );
};

export default PodcastView;
