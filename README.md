# AltSchool Semester 1 Holiday Challenge

## Description

This project is part of a hackathan organized by Altschool Africa to solidify what I’ve learnt so far by building cool simple projects I can showcase

## 🚀 Projects

### Phonie App: Identify the telecoms carrier from a phone number

#### Scenario

A user is filling a form in your web application and they are required to enter their phone number into a form field.

#### Outcome

After typing the phone number into the form field, the UI indicates that it is an MTN or GLO or Airtel or Etisalat number e.t.c (e.g if its an MTN line, display the MTN icon/logo somewhere beside the form field)

#### ⚡️ Advanced features

- Validation - Use the `pattern` attribute of the HTML form field to restrict phone numbers to a certain carrier, e.g restrict to only Airtel such that entering an MTN/GLO number would be invalid
- Support +XYZ country codes (e.g +234 for Nigeria) - Still detect the carrier even if the user prefixed the number with their +XYZ country code
- Show auto-completion - Show suggestions as the user starts typing the phone number. E.g once they type 080, show them that 080*3* and 080*6* and other possible _matching_ variants of the carrier

### Built With

- HTML
- CSS
- Vanilla JavaScript

### Demo

Here's a live page demo to the [Phonie App](https://trillionclues.github.io/phonie-app/)
