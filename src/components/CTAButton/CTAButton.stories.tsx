import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import CTAButton from "./CTAButton"

export default {
  title: "CTAButton",
  component: CTAButton,
} as ComponentMeta<typeof CTAButton>

const Template: ComponentStory<typeof CTAButton> = (args) => <CTAButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "DISCOVER OUR NEW GAME",
}