import Section from "./Section";
import Box from "./Box";
import H2 from "./H2";
import Sauce from "./Sauce";
import Cheese from "./Cheese";
import Pinneaple from "./Pinneaple";
import Onion from "./Onion";
import Corn from "./Corn";
import Basil from "./Basil";

const PizzaSection = (props) => (
  <Section>
    <H2>{props.name}</H2>
    <Box small>
      {props.sauce ? <Sauce></Sauce> : ""}
      {props.cheese ? <Cheese></Cheese> : ""}
      {props.pinneaple ? <Pinneaple></Pinneaple> : ""}
      {props.onion ? <Onion></Onion> : ""}
      {props.corn ? <Corn></Corn> : ""}
      {props.basil ? <Basil></Basil> : ""}
    </Box>
  </Section>
);

export default PizzaSection;
