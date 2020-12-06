// function to generate markdown for README
function generateMarkdown(data) {
  let content = "";
  for(let i=0; i<Object.keys(data).length; i++) {
    content += 
`# ${Object.keys(data)[i]}      
    ${Object.values(data)[i]}

`;
  }
  return content;
}

module.exports = {generateMarkdown};