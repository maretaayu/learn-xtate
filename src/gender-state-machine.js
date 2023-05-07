import { createMachine } from "xstate";
export const genderMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QwHYTAJwLSwC4ENcwsBbfAYwAsBLFMAOgFcUBrFAewHcUBiAWQCCAGQCiAfQDyABQAqASQkA5ANoAGALqJQAB3axquauxRaQAD0QBGAGyX6qgMyWATAFZXATkseALD48AHAA0IACeiG7O9ADsrqqqfs7RHtFurtYAvhkhqOjYeITEZFS0DMxsXLwAYiKCopKyCioaprr6hsamFgg2do4u7l6+-sFhVs4O9F7W0QnW1gEe85ZZOWBomDgERKQUNHT0ZAA2YDw1deLS8kpqmkggbQZGJvfdPun0A-EOntb+-iFwggAnY4vFnKpZq4QdEfKsQLlNgUdsV9gwAGZgY6nC4Na7NO46PRPTqvRDvayfNzfX7-DyAqwOKLxb5-ZyWWK2TLwjjoeD3RH5bZFPalVrEjovUDdLDWBkILCuKYeFWqtUqgLctYbIWFXYlA7lDjccXtZ5dcnOeXOHyUgIOB1eZJM1SWBxw7II9Z5LZ61GlQ74E6mklS8yIayuSaxaIBSEBKOqBbRa0+SbWamealupZar0630o0UHTHYkOSi0Id0BejzHxJ13RayqCYzeUuHz0Hw2aIc5wLdJRlZZDJAA */
  id: "gender-state-machine",
  initial: "unknown",
  states: {
    unknown: {
      on: {
        MALE_OPTION: {
          target: "male",
        },
        FEMALE_OPTION: {
          target: "female",
        },
      },
    },
    male: {
      on: {
        FEMALE_OPTION: {
          target: "female",
        },
      },
    },
    female: {
      on: {
        MALE_OPTION: {
          target: "male",
        },
      },
    },
  },
  predictableActionArguments: true,
  preserveActionOrder: true,
});
