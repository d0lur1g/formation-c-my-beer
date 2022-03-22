import Countdown from "./";
import { sbDsOrganism } from "../testUtils";

export default {
  title: sbDsOrganism("Countdown"),
  component: Countdown,
};

const Template = (args) => <Countdown {...args} />;

export const Default = Template.bind({});

export const WithABigStep = Template.bind({});
WithABigStep.args = {
  step: 50,
};

export const StartAt10 = Template.bind({});
StartAt10.args = {
  initialCount: 10,
};

/**
 * The real interest about Template and args
 */
export const ForTheWin = Template.bind({});
ForTheWin.args = {
  ...WithABigStep.args,
  ...StartAt10.args,
};
