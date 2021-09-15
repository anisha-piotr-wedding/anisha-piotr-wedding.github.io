import styled from "styled-components/macro";
import {
  BREAKPOINT_DESKTOP,
  BREAKPOINT_TABLET,
  BREAKPOINT_TABTOP,
  lighterPink,
  lightPink,
  red,
} from "./constants";

const LOGO_WIDTH = 32;
const WINDOWS_LOGO_WIDTH = 25;
const LEFT_PERCENT = 60;
const LEFT_PERCENT_SMALL = 100;

export type StyleType = {
  isWindows: boolean;
  isGujarati: boolean;
  isPolish: boolean;
};

export const HomepageStyles = styled.div<StyleType>`
  #left {
    position: fixed;
    width: ${LEFT_PERCENT}%;
    height: 100%;
    left: 0px;
    top: 0px;

    .container {
      position: relative;
      text-align: center;
    }
  }

  #right {
    width: ${100 - LEFT_PERCENT}%;
    padding-left: ${LEFT_PERCENT}%;

    button {
      color: black;
    }

    .logo {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 100vh;

      #logo {
        margin: ${(props) => (props.isWindows ? 0 : 3)}em 0 0;
        width: ${(props) =>
          props.isWindows ? WINDOWS_LOGO_WIDTH : LOGO_WIDTH}rem;
      }

      #logo-words {
        margin: 0;
        width: ${(props) =>
          props.isWindows ? WINDOWS_LOGO_WIDTH / 2 : LOGO_WIDTH / 2}rem;
        padding-top: 1em;
      }

      .logo-text {
        text-transform: uppercase;
        padding: 1em 0 2em;
        font-size: ${(props) => (props.isWindows ? 16 : 18)}px;
      }
    }

    #Ganesh {
      width: 85px;
      justify-self: center;
    }

    .welcome-container {
      padding: 2em;
      background-color: ${lighterPink};
      border-radius: 20px;
      width: 25em;

      a {
        color: ${red};
        text-decoration: none;
      }

      a:hover {
        opacity: 0.6;
      }
    }

    .welcome {
      font-family: ${(props) =>
        props.isGujarati
          ? "GujaratiFont"
          : props.isPolish
          ? "PolishFont"
          : "GlacialIndifference"};
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-row-gap: ${(props) => (props.isGujarati ? "10px" : "2em")};
      text-align: center;
      font-size: ${(props) =>
        props.isWindows ? 16 : props.isGujarati ? 28 : 18}px;
      font-weight: ${(props) => (props.isGujarati ? 200 : 400)}px;
    }

    .inPersonButton {
      padding-top: 4em;
      font-family: ${(props) =>
        props.isPolish ? "PolishFont" : "GlacialIndifference"};

      .pushable {
        background: ${lighterPink};
        border-radius: 12px;
        border: none;
        padding: 0;
        cursor: pointer;
        outline-offset: 4px;
      }
      .front {
        display: block;
        padding: 12px 42px;
        border-radius: 12px;
        font-size: ${(props) => (props.isWindows ? 16 : 18)}px;
        background: ${lightPink};
        transform: translateY(-6px);
      }

      .pushable:active .front {
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: ${BREAKPOINT_TABLET}px) {
    display: flex;
    flex-direction: column;

    #left {
      width: ${LEFT_PERCENT_SMALL}%;
      height: auto;
      position: relative;
    }

    #right {
      width: ${LEFT_PERCENT_SMALL}%;
      padding-left: 0%;
      margin-top: 40px;

      .logo {
        padding: 0em 0;

        #logo {
          margin: 1.5em 0 0;
          width: 90%;
        }

        #logo-words {
          width: 55%;
        }

        .logo-text {
          padding: 2em;
          text-align: center;
        }
      }

      .welcome-container {
        padding: 1em;
        width: 80%;

        .welcome {
          font-size: ${(props) => (props.isGujarati ? 20 : 18)}px;
        }
      }
    }
  }

  @media (min-width: ${BREAKPOINT_TABTOP}px) {
    #left {
      position: fixed;
      width: 50%;
      height: 100%;
      left: 0px;
      top: 0px;

      .container {
        position: relative;
        text-align: center;
      }
    }

    #right {
      width: 50%;
      padding-left: 50%;

      .logo {
        padding: 0em 0;

        #logo {
          margin: 1.5em 0 0;
          width: 90%;
        }

        #logo-words {
          width: 55%;
        }

        .logo-text {
          padding: 2em;
          text-align: center;
        }
      }

      .welcome-container {
        padding: 1em;
        width: 80%;

        .welcome {
          font-size: ${(props) => (props.isGujarati ? 20 : 18)}px;
        }
      }
    }
  }

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    #left {
      position: fixed;
      width: ${LEFT_PERCENT}%;
      height: 100%;
      left: 0px;
      top: 0px;

      .container {
        position: relative;
        text-align: center;
      }
    }

    #right {
      width: ${100 - LEFT_PERCENT}%;
      padding-left: ${LEFT_PERCENT}%;

      button {
        color: black;
      }

      .logo {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 100vh;

        #logo {
          margin: ${(props) => (props.isWindows ? 0 : 3)}em 0 0;
          width: ${(props) =>
            props.isWindows ? WINDOWS_LOGO_WIDTH : LOGO_WIDTH}rem;
        }

        #logo-words {
          margin: 0;
          width: ${(props) =>
            props.isWindows ? WINDOWS_LOGO_WIDTH / 2 : LOGO_WIDTH / 2}rem;
          padding-top: 1em;
        }

        .logo-text {
          text-transform: uppercase;
          padding: 1em 0 2em;
          font-size: ${(props) => (props.isWindows ? 16 : 18)}px;
        }
      }

      #Ganesh {
        width: 85px;
        justify-self: center;
      }

      .welcome-container {
        padding: 2em;
        background-color: ${lighterPink};
        border-radius: 20px;
        width: 25em;
      }

      .welcome {
        font-family: ${(props) =>
          props.isGujarati
            ? "GujaratiFont"
            : props.isPolish
            ? "PolishFont"
            : "GlacialIndifference"};
        display: grid;
        grid-template-rows: repeat(2, auto);
        grid-row-gap: ${(props) => (props.isGujarati ? "10px" : "2em")};
        text-align: center;
        font-size: ${(props) =>
          props.isWindows ? 16 : props.isGujarati ? 28 : 18}px;
        font-weight: ${(props) => (props.isGujarati ? 200 : 400)}px;
      }
    }
  }
`;
