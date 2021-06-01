# React Multi Step Hook

An easy-to-use Custom React Hook originally meant to Power **Multi-Step Forms** for a company that I worked for.

I figured that the piece of code could be useful as I proceed with development work and converted it to a [Custom React Hook](https://reactjs.org/docs/hooks-custom.html).

# Glossary

Save the [Raw Version](https://raw.githubusercontent.com/SNikhill/react-mutli-step-hook/main/multiStepFormHook.js) of `multiStepFormHook.js` to your project.

## useMultiStepForm

```jsx
/**
 * A Custom hook for creating React Multi Step Forms.
 *
 * @param {Array.<React.Component> | Array.<JSX.Element>} allFormSections - An Array containing all Sections of the Multi Step Form
 * @return {{changeActiveSectionNumber: function, activeSectionNumber: number, maxSectionReached: number, resetMultiStepProgress: function, activeSection: React.Component}}
 */
```

| Parameters          | Type                                             | Purpose                            |
| ------------------- | ------------------------------------------------ | ---------------------------------- |
| **allFormSections** | `Array.<React.Component> \| Array.<JSX.Element>` | An Array of all the Form Sections. |

```
@returns {
  activeSection: React.Component | JSX.Element,
  activeSectionNumber: Number,
  maxSectionReached: Number,
  changeActiveSectionNumber: Function,
  resetMultiStepProgress: Funtion,
};
```

### activeSection

`@type React.Component | JSX.Element`

This Represents the Currently Active React Component (From the Array that was passed in).

### activeSectionNumber

`@type Number`

`@default 1`

This Represents the Currently Active Form Section Number.

### maxSectionReached

`@type Number`

`@default 1`

This Represents the Max Section Number that the user has navigated to.

### changeActiveSectionNumber

`@type Function`

**This is a State Modifier.**

This is Responsible for changing the Currently Active Section Number.

| Parameters           | Type     | Purpose                                    |
| -------------------- | -------- | ------------------------------------------ |
| **newSectionNumber** | `Number` | The New Active Section Number to shift to. |

### resetMultiStepProgress

`@type Function`

**This is a State Modifier.**

This is Responsible for Resetting the Progress of the User along the Multi Step Form.

# Contribution

I am not sure whether other developers will have use for this hook but, in an event that happens,
I guess that you could help in sprucing up this READ ME file using Examples and Use Cases.

# License

Licensed under MIT. Read it [here](https://github.com/SNikhill/react-mutli-step-hook/blob/main/LICENSE).
