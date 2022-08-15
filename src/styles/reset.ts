import { createGlobalStyle } from 'styled-components';

export const ResetStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
div,
span,
object,
iframe,
figure,
figcaption,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
code,
em,
img,
small,
strike,
strong,
sub,
sup,
tt,
b,
u,
i,
ol,
ul,
li,
fieldset,
form,
label,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
main,
canvas,
embed,
footer,
header,
nav,
section,
video {
  margin: 0;
}

ul[class] {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

ol,
ul {
  list-style: none;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  color: #000000;
  text-decoration: none;
}
`;
