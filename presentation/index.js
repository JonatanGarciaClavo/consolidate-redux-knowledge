// Import React
import React from "react";

// Import Spectacle Core tags
import {
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";


// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  reduxLogo: require("../assets/redux-logo.png"),
  list: require("../assets/list.png"),
  add: require("../assets/add.png"),
  edit: require("../assets/edit.png"),
  cardList: require("../assets/card-list.png")
};

preloader(images);

const bgColor = "#222222";

const theme = createTheme({
  primary: "#F49E00",
  secundary: "white"
}, {
  primary: "labmedium",
  secundary: "montserratbold",
  tertiary: "montserratregular"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor={bgColor}>
            <Image width="35%" src={images.reduxLogo.replace("/", "")}/>
            <Heading fit caps textColor="primary">
              Consolidate Redux Knowledge
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Summary
            </Heading>
            <List>
              <ListItem textFont="secundary" textColor="primary">Create first redux app</ListItem>
              <ListItem textFont="secundary" textColor="primary">Work with Material design components</ListItem>
              <ListItem textFont="secundary" textColor="primary">Play with actions</ListItem>
              <ListItem textFont="secundary" textColor="primary">Play with reducers</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Wireframes
            </Heading>
            <Image width="100%" src={images.list.replace("/", "")}/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Wireframes
            </Heading>
            <Image width="100%" src={images.cardList.replace("/", "")}/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Wireframes
            </Heading>
            <Image width="100%" src={images.add.replace("/", "")}/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Wireframes
            </Heading>
            <Image width="100%" src={images.edit.replace("/", "")}/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Initialize project
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/initialize.sh")}
              margin="20px auto"
              textSize="0.65em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Exercise
            </Heading>
            <Text textSize="1.2em" caps={false} textColor="secundary" textFont="tertiary" textAlign="left">Finish contact app. At the moment, you have only list of your contacts and card info of contact, but there are missing features like: add new contact and edit exist contact. Your task is finish this features. Firstable check all project and after that try fill the gaps.</Text>
            <Text style={{margin: "1em 0 0 0"}} textSize="1.2em" caps={false} textColor="red" textFont="tertiary" textAlign="left">{`FIREBASE FATAL ERROR: Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com`}</Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading caps textColor="primary">
              Demo
            </Heading>
            <CodePane
              lang="bash"
              source={require("raw!../assets/demo.sh")}
              margin="20px auto"
              textSize="0.7em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={1} caps textColor="primary">
              Thanks
            </Heading>
            <Link href="https://github.com/JonatanGarciaClavo/consolidate-redux-knowledge">
              <Text padding="100px 0 0 0" italic textSize="x-large" textFont="tertiary" textColor="white">Docs and examples: https://github.com/JonatanGarciaClavo/consolidate-redux-knowledge</Text>
            </Link>
            <Link href="https://github.com/JonatanGarciaClavo/ContactsApp">
              <Text padding="50px 0 0 0" italic textSize="x-large" textFont="tertiary" textColor="white">Exercise resolved: https://github.com/JonatanGarciaClavo/ContactsApp</Text>
            </Link>
            <Link href="mailto:jonatan.garcia@mobgen.com">
              <Text padding="50px 0 0 0" italic textFont="tertiary" textColor="white">Email: jonatan.garcia@mobgen.com</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
