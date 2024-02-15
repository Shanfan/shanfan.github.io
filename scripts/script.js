import projectData from "./projectMeta.json" assert {type: 'json'}

const wrapper = document.querySelector(".projects-wrapper")
const tagCounts = {}

projectData.forEach(d => {
    const card = document.createElement('a')
    const image = document.createElement('img')
    const header = document.createElement('h2')
    const blurb = document.createElement('p')
    const tags = document.createElement('div')

    image.src = "/images" + d.imageUrl
    header.innerHTML = d.title
    blurb.innerHTML = d.description
    card.href = d.link
    card.classList = ["project-card"]
    card.appendChild(image)
    card.appendChild(header)
    card.appendChild(blurb)

    tags.classList = ["tags"]

    d.tags.forEach(tag => {
        const span = document.createElement('span')
        span.innerHTML = tag
        tags.appendChild(span)

        tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })

    card.appendChild(tags)
    wrapper.appendChild(card)
})

const tagsAll = Object.keys(tagCounts).map(tag => {
    return { tag: tag, count: tagCounts[tag] }
})

const tagCloud = document.querySelector(".tag-cloud")

tagsAll.forEach(t => {
    const tagBtn = document.createElement("button")
    tagBtn.innerHTML = t.tag + "(" + t.count + ")"
    tagBtn.style.fontSize = 1 + Math.log10(t.count) + "em"
    tagBtn.onclick = () => filterProject(t.tag)

    tagCloud.appendChild(tagBtn)
})

const filterProject = (tag) => {
    console.log(tag + " is clicked!")
}

