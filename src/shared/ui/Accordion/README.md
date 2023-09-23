# Accordion

## Properties

| Properties  | Types                                             | Default   |
|-------------|:--------------------------------------------------|:----------|
| placeholder | React.ReactElement \| undefined                   | undefined |
| isOff       | boolean                                           | false     |
| onOpen      | () => void \| undefined                           | N/A       |
| onClose     | () => void \| undefined                           | N/A       |
| onMutation  | ( mutation: MutationRecord ) => void \| undefined | N/A       |

And all other properties related to the div tag.

---

### placeholder

Serves as a stub content when the accordion is closed.

---

### isOff

Disables the ability to open the accordion.

---

### onOpen

Called when opening the accordion.

---

### onClose

Called when closing the accordion.

---

### onMutation

Called when the content inside the accordion mutating.

---
