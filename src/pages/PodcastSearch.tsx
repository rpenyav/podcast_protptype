import Layout from "layouts/Layout";
import React from "react";
import thumbnailPodcast from "../assets/images/thubmnail_podcast.png";
import VerifyIcon from "../assets/svg/verify1.svg";
import OrderBy from "components/OrderBy";
import ButtonPlayer from "components/ButtonPlayer";
import PodcastTable from "components/PodcastTable";

const PodcastSearch: React.FC = () => (
  <Layout page="PodcastSearch">
    <div className="podcast-container mt-5">
      <div className="flex flex-col ">
        <div className="flex justify-between player-container ">
          <_TopPlayerPodcastSearch />
        </div>
        <div className="flex mt-1">
          <_PodCastListTable />
        </div>
      </div>
    </div>
  </Layout>
);

const _TopPlayerPodcastSearch: React.FC = () => (
  <>
    <div className="flex items-center w-full justify-end mb-4">
      <OrderBy />
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

export default PodcastSearch;
