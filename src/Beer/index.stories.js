import Beer from ".";
import { sbDomain } from "../testUtils";

export default {
  title: sbDomain("Beer"),
  component: Beer,
};

const defaultBeer = {
  id: "123",
  name: "Bière de test",
  description: "Lorem ipsum",
  price: 1.34,
};

const Template = (args) => <Beer {...args} />;

export const WithoutData = Template.bind({});

export const WithData = Template.bind({});
WithData.args = {
  beer: defaultBeer,
};
