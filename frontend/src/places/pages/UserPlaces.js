import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Zytglogge",
    description: "A historic Tower in the Old City of Bern",
    imageUrl:
      "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_3200,h_1800/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2024/03/28/13/12/14/bern-kramgasse.jpg",
    address: "Bim Zytglogge 1, 3011 Bern",
    location: {
      lat: 46.9480298,
      lng: 7.4452228,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Zytglogge",
    description: "A historic Tower in the Old City of Bern",
    imageUrl:
      "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_3200,h_1800/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2024/03/28/13/12/14/bern-kramgasse.jpg",
    address: "Bim Zytglogge 1, 3011 Bern",
    location: {
      lat: 46.9480298,
      lng: 7.4452228,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
