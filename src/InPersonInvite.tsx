import React from "react";
import { Redirect, useLocation } from "react-router";
import { getIsAuthenticated, getIsWindows } from "./utils";
import styled from "styled-components/macro";
import GenericSchedule from "./components/GenericSchedule";
import { BREAKPOINT_MOBILE, lighterPink } from "./constants";
import { StyleType } from "./styles";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useMediaQuery } from "@material-ui/core";

const InPersonInviteStyles = styled.div<StyleType>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75%;

  .photos {
    background-color: ${lighterPink};
    padding: 2em 2em 1em;
    border-radius: 25px;
    margin: 2em auto;
    box-shadow: 15px 15px lightpink;
    width: 90%;

    p {
      font-size: ${(props) => (props.isWindows ? 20 : 22)}px;
      font-family: ${(props) =>
        props.isPolish ? "PolishFont" : "GlacialIndifference"};
      padding: 0 2em;
    }
  }

  .mainTitle {
    padding-top: 1.5em;
    font-size: ${(props) => (props.isWindows ? 50 : 56)}px;
    text-align: center;
    font-family: "BrightSunshine";
  }

  .title {
    font-size: ${(props) => (props.isWindows ? 22 : 24)}px;
    font-family: "GlacialIndifference";
    text-align: left;
    padding-bottom: 1em;
  }

  .scheduleMap,
  .receptionScheduleMap {
    display: grid;
    grid-template-columns: 40% 60%;
  }

  .reception {
    padding-bottom: 5em;
  }

  #schedule {
    height: 300px;
  }

  .content {
    padding-top: 1em;
  }

  iframe {
    border: 0;
    padding: 2em;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    width: 90%;

    .photos {
      padding: 12px;
      margin: 2em auto;
      width: 85%;

      p {
        font-size: ${(props) => (props.isWindows ? 15 : 18)}px;
        padding: 1em;
      }
    }

    .scheduleMap,
    .receptionScheduleMap {
      grid-template-columns: auto;
    }

    .reception {
      padding-bottom: 5em;
    }

    #schedule {
      height: 200px;
    }

    .content {
      padding-top: 1em;
    }

    iframe {
      border: 0;
      padding: 2em;
    }
  }
`;

export default function InPersonInvite({ language }: { language: string }) {
  const isAuthenticated = getIsAuthenticated();
  const location = useLocation();
  const isWindows = getIsWindows();
  const isPolish = location.pathname === "/pl" || language === "pl";

  const isMobileOrSmaller = useMediaQuery(
    `(max-width: ${BREAKPOINT_MOBILE}px)`
  );

  if (!isAuthenticated) {
    const pathString = isPolish ? "/pl/invite" : "/invite";
    return <Redirect to={pathString} />;
  }

  return (
    <InPersonInviteStyles
      isWindows={isWindows}
      isPolish={false}
      isGujarati={false}
    >
      <div style={{ paddingBottom: "2em" }}>
        <div className="mainTitle">Ceremony Details</div>
        <div className="scheduleMap">
          <GenericSchedule
            language={language}
            items={[
              { header: "date", icon: <EventIcon /> },
              { header: "time", icon: <ScheduleIcon /> },
              { header: "loc", icon: <LocationOnIcon /> },
            ]}
          />
          <iframe
            title="church"
            width={isMobileOrSmaller ? "300" : "800"}
            height="300"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?zoom=17&center=45.4165%2C-75.7009&key=AIzaSyDave8EV_QQTOU1JkEWltEHjkXuyDyySCY&q=Saint+Patrick+Basilica,Ottawa+Canada"
          ></iframe>
        </div>
        <div className="photos">
          <p>
            We look forward to having you join us in person for our wedding
            ceremony! Street parking can be found around 220 Kent, there is free
            parking at Gloucester Garage (Lot 3) 212 Gloucester Street and there
            is limited parking in the church parking lot. We do ask that you
            turn off your phones and resist from taking pictures during the
            ceremony. We have hired a professional photographer and videographer
            to help capture the day to allow our guests to remain in the moment.
          </p>
          <p>
            After the ceremony, we ask that everyone promptly exits so that we
            can have a group photo on the front steps of St. Patrick’s Basilica.{" "}
          </p>
          <p>
            Following the photos, please make your way to Restaurant E18hteen.{" "}
          </p>
        </div>
      </div>
      <div className="reception">
        <div className="mainTitle">Reception Details</div>
        <div className="receptionScheduleMap">
          <GenericSchedule
            language={language}
            items={[
              { header: "date", icon: <EventIcon /> },
              {
                header: "time",
                text: "4:00PM onwards",
                icon: <ScheduleIcon />,
              },
              {
                header: "loc",
                text: "Restaurant E18hteen, 18 York St, Ottawa",
                icon: <LocationOnIcon />,
              },
            ]}
          />
          <iframe
            title="reception"
            width={isMobileOrSmaller ? "300" : "800"}
            height="300"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?zoom=17&center=45.4274%2C-75.6943&key=AIzaSyDave8EV_QQTOU1JkEWltEHjkXuyDyySCY&q=/Restaurant+e18hteen,Ottawa+Canada"
          ></iframe>
        </div>
        <div className="photos">
          <p>
            Our Reception is in Byward Market. There are multiple parking
            options close by, including parking in front of the restaurant,
            Indigo parking garage next to the restaurant and a city parking
            garage a little further. Prices for these may vary. For another
            option, it is a $2 max at City Hall, 110 Laurier.
          </p>
          <p>
            When you arrive at the restaurant, you will need to show proof of
            vaccination, or an exemption and government issued ID. The evening
            will begin with cocktails and canapés. Dinner will commence after
            the bride and groom’s entrance.
          </p>
        </div>
      </div>
    </InPersonInviteStyles>
  );
}
