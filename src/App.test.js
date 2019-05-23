import React from 'react'
import App from './App'
import { mount } from 'enzyme'
import toJson from "enzyme-to-json"

it("should render the homepage for the non logged in user", () => {
  const props = {
    isLoggedIn: false,
    username: null
  }
  const app = mount(<App {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})

it("should render the Artists for the logged in user", () => {
  const props = {
    isLoggedIn: true
  }
  const app = mount(<App {...props} />)
  expect(toJson(app)).toMatchSnapshot()
})
