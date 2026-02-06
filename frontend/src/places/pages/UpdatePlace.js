import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

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

const UpdatePlace = () => {
  const placeId = useParams.placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH()]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
